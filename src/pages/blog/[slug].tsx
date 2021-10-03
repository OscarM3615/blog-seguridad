import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import AuthorCard from 'components/blog/AuthorCard';
import ArticleHeader from 'components/blog/ArticleHeader';
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
						<AuthorCard name={post.data.author} image={post.data.authorImg} />
					</div>

					<div className="col-lg-9">
						<article>
							<ArticleHeader
								title={post.data.title}
								date={post.data.date}
								tags={post.data.tags}
							/>

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