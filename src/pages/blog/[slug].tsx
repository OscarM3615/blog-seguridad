import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import config from 'shared/config';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type Post from 'shared/models/post';

type ParamType = {
	slug: string;
};

type PropType = {
	post: Required<Post>;
};

const BlogPost = ({ post }: PropType) => {
	return (
		<section className="py-5">
			<div className="container px-5">
				<div className="row gx-5">
					<div className="col-lg-3">
						<div className="d-flex align-items-center mt-lg-5 mb-4">
							<img
								src={post.data.authorImg}
								className="img-fluid rounded-circle"
								alt={post.data.author}
							/>
							<div className="ms-3">
								<div className="fw-bold">{post.data.author}</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<article>
							<header className="mb-4">
								<h1 className="fw-bolder mb-1">{post.data.title}</h1>
								<div className="text-muted fst-italic mb-2">
									{post.data.date}
								</div>
								{post.data.tags.map((tag: string, index: number) => (
									<span key={index} className="badge bg-secondary me-1">
										{tag}
									</span>
								))}
							</header>

							<figure className="mb-4">
								<img
									src={post.data.image}
									className="img-fluid rounded"
									alt={post.data.title}
								/>
							</figure>

							<section
								className="fs-5"
								dangerouslySetInnerHTML={{ __html: marked(post.content) }}
							/>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export const getStaticPaths: GetStaticPaths<ParamType> = async () => {
	const files = fs.readdirSync(path.join(config.postsDir));

	const paths = files.map((filename) => {
		return {
			params: { slug: filename.replace(/\.md$/, '') }
		};
	});

	return {
		paths: paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<PropType> = async (context) => {
	const { slug } = context.params as ParamType;

	const markdown = fs.readFileSync(
		path.join(config.postsDir, `${slug}.md`),
		'utf-8'
	);

	const { data, content } = matter(markdown);

	return {
		props: {
			post: { slug, data, content }
		}
	};
};

export default BlogPost;
