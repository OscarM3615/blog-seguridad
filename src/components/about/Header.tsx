import Link from 'next/link';

const Header = () => {
	return (
		<header className="py-5">
			<div className="container px-5">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-xxl-6">
						<div className="text-center my-5">
							<h1 className="fw-bolder mb-3">Acerca de este blog</h1>
							<p className="lead fw-normal text-muted mb-4">
								Este blog está hecho para dar a conocer la seguridad de la
								información de una manera sencilla y concientizar a los
								usuarios.
							</p>

							<Link href="/" passHref>
								<a className="btn btn-primary btn-lg">Leer artículos</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
