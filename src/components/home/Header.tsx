import Link from 'next/link';

const Header = () => {
	return (
		<header className="bg-dark py-5">
			<div className="container px-5">
				<div className="row gx-5 align-items-center justify-content-center">
					<div className="col-lg-8 col-xl-7 col-xxl-6">
						<div className="my-5 text-center text-xl-start">
							<h1 className="display-5 fw-bolder text-white mb-2">
								Blog de seguridad de la información
							</h1>
							<p className="lead fw-normal text-white-50 mb-4">
								En este sitio encontrarás información general sobre la seguridad
								de la información en el software, así como buenas prácticas para
								mantener tu equipo seguro.
							</p>
							<div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
								<a
									href="#posts"
									className="btn btn-primary btn-lg px-4 me-sm-3"
								>
									Comenzar a leer
								</a>
								<Link href="/about" passHref>
									<a className="btn btn-outline-light btn-lg px-4">
										Más información
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
						<img
							className="img-fluid rounded-3 my-5"
							src="/images/seguridad-informacion.jpg"
							alt="..."
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
