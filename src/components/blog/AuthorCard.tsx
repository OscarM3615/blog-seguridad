import type Author from 'shared/models/author';

type PropType = {
	author: Author;
};

const AuthorCard = ({ author: { name, image } }: PropType) => {
	return (
		<div className="d-flex align-items-center mt-lg-5 mb-4">
			<img src={image} className="img-fluid rounded-circle" alt={name} />
			<div className="ms-3">
				<div className="fw-bold">{name}</div>
			</div>
		</div>
	);
};

export default AuthorCard;
