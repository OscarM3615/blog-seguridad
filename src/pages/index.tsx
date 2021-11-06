import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortPosts } from 'utils';
import config from 'shared/config';
import { useState } from 'react';
import Header from 'components/home/Header';
import PostCard from 'components/home/PostCard';
import type { GetStaticProps } from 'next';
import type Post from 'shared/models/post';
import type Frontmatter from 'shared/models/frontmatter';

type PropType = {
	posts: Post[];
	tags: string[];
};

const Home = ({ posts, tags }: PropType) => {
	const [tagFilter, setTagFilter] = useState<string>('');

	const postFilter = (post: Post) => {
		return !tagFilter || post.data.tags.includes(tagFilter);
	};

	return (
		<>
			<Header />
			<section id="posts" className="py-5">
				<div className="container">
					<h2 className="fw-bolder fs-3 mb-2">Publicaciones</h2>

					<div className="col col-lg-3 col-md-6 mb-4">
						<label htmlFor="filter" className="form-label small">
							Filtrar por categoría
						</label>
						<select
							id="filter"
							className="form-control form-control-sm"
							value={tagFilter}
							onChange={(e) => setTagFilter(e.target.value)}
						>
							<option value="">-- Seleccione una opción --</option>
							{tags.map((tag, index) => (
								<option key={index} value={tag}>
									{tag}
								</option>
							))}
						</select>
					</div>

					<div className="row gx-5">
						{posts.filter(postFilter).map((post) => (
							<div key={post.slug} className="col-lg-4 col-md-6 mb-5">
								<PostCard post={post} />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	// Get files list from posts folder.
	const files = fs.readdirSync(path.join(config.postsDir));

	const tags: Set<string> = new Set();

	// Get the slug and frontmatter from the files.
	const posts = files.map((filename) => {
		// Post slug.
		const slug = filename.replace(/\.md$/, '');

		// Post metadata.
		const markdown = fs.readFileSync(
			path.join(config.postsDir, filename),
			'utf-8'
		);

		const { data } = matter(markdown);

		(data as Frontmatter).tags.map((tag) => tags.add(tag));

		return {
			slug,
			data: data as Frontmatter
		};
	});

	return {
		props: { posts: posts.sort(sortPosts), tags: Array.from(tags) }
	};
};

export default Home;
