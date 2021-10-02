import Link from 'next/link';
import type Post from 'shared/models/post';

type PropType = {
	post: Post;
};

const PostCard = ({ post }: PropType) => {
	return (
		<div className="card h-100 shadow border-0">
			<img
				src={post.data.image}
				className="card-img-top"
				alt={post.data.title}
			/>

			<div className="card-body p-4">
				<Link href={`/blog/${post.slug}`} passHref>
					<a className="text-decoration-none link-dark stretched-link">
						<div className="h5 card-title mb-3">{post.data.title}</div>
					</a>
				</Link>
				<p className="card-text mb-0">{post.data.description}</p>
			</div>

			<div className="card-footer p-4 pt-0 bg-transparent border-top-0">
				<div className="d-flex align-items-end justify-content-between">
					<div className="d-flex align-items-center">
						<img
							src={post.data.authorImg}
							className="rounded-circle me-3"
							alt={post.data.author}
						/>
						<div className="small">
							<div className="fw-bold">{post.data.author}</div>
							<div className="text-muted">{post.data.date}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
