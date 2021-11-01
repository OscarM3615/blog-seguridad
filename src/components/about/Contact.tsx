const Contact = () => {
	return (
		<section id="contact" className="py-5 bg-light">
			<div className="container px-5">
				<div className="text-center">
					<h2 className="fw-bolder">Contacto</h2>
					<p className="lead fw-normal text-muted mb-5">
						Blog creado por Óscar Miranda
					</p>
				</div>

				<div className="row gx-5 row-cols-1 row-cols-md-4 row-cols-lg-6 justify-content-center">
					<div className="col mb-5 mb-lg-0">
						<a
							href="mailto:al180165@alumnos.uacj.mx"
							className="text-decoration-none link-dark"
							target="_blank"
							rel="noreferrer"
						>
							<div className="text-center">
								<i className="bi bi-envelope fs-5"></i>
								<p className="h5 fw-bolder">Email</p>
							</div>
						</a>
					</div>
					<div className="col mb-5 mb-lg-0">
						<a
							href="https://github.com/OscarM3615"
							className="text-decoration-none link-dark"
							target="_blank"
							rel="noreferrer"
						>
							<div className="text-center">
								<i className="bi bi-github fs-5"></i>
								<p className="h5 fw-bolder">Github</p>
							</div>
						</a>
					</div>
					<div className="col mb-5 mb-lg-0">
						<a
							href="https://oscarm3615.web.app/"
							className="text-decoration-none link-dark"
							target="_blank"
							rel="noreferrer"
						>
							<div className="text-center">
								<i className="bi bi-globe fs-5"></i>
								<p className="h5 fw-bolder">Sitio web</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
