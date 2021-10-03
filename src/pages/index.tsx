import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortPosts } from 'utils';
import config from 'shared/config';
import PostCard from 'components/home/PostCard';
import type { GetStaticProps } from 'next';
import type Post from 'shared/models/post';

type PropType = {
	posts: Post[];
};

const Home = ({ posts }: PropType) => {
	return (
		<section className="py-5">
			<div className="container px-5">
				<h1 className="fw-bolder fs-3 mb-4">Publicaciones</h1>
				<div className="row gx-5">
					{posts.map((post) => (
						<div key={post.slug} className="col-lg-4 col-md-6 mb-5">
							<PostCard post={post} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export const getStaticProps: GetStaticProps<PropType> = async () => {
	// Get files list from posts folder.
	const files = fs.readdirSync(path.join(config.postsDir));

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

		return {
			slug,
			data
		};
	});

	return {
		props: { posts: posts.sort(sortPosts) }
	};
};

export default Home;
