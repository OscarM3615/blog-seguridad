import Link from 'next/link';

const NotFound = () => {
	return (
		<header className="py-5">
			<div className="container px-5">
				<div className="row justify-content-center">
					<div className="text-center my-5">
						<p className="h1 text-danger">
							<i className="bi bi-exclamation-diamond-fill"></i>
						</p>
						<h1 className="fw-bolder mb-3">Página no encontrada</h1>
						<p className="lead fw-normal text-muted mb-4">
							Es posible que la página que buscas haya sido eliminada, movida de
							lugar o que la dirección no exista.
						</p>
						<Link href="/" passHref>
							<a className="btn btn-primary btn-lg">Ir a la página principal</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default NotFound;
