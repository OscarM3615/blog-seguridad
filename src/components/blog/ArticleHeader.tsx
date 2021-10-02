type PropType = {
	title: string;
	date: string;
	tags: string[];
};

const ArticleHeader = ({ title, date, tags }: PropType) => {
	return (
		<header className="mb-4">
			<h1 className="fw-bolder mb-1">{title}</h1>
			<div className="text-muted fst-italic mb-2">{date}</div>

			{tags.map((tag, index) => (
				<span key={index} className="badge bg-secondary me-1">
					{tag}
				</span>
			))}
		</header>
	);
};

export default ArticleHeader;
