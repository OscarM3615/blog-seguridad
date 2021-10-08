import Link from 'next/link';
import type Post from 'shared/models/post';

type PropType = {
	post: Post;
};

const PostCard = ({ post }: PropType) => {
	const { author } = post.data;

	return (
		<div className="card h-100 shadow border-0">
			<div className="ratio ratio-4x3">
				<img
					src={post.data.image}
					className="card-img-top object-fit-cover"
					alt={post.data.title}
				/>
			</div>

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
							src={author.image}
							className="rounded-circle me-3"
							alt={author.name}
						/>
						<div className="small">
							<div className="fw-bold">{author.name}</div>
							<div className="text-muted">{post.data.date}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
