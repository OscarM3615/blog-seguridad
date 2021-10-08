import Head from 'next/head';
import Header from 'components/about/Header';
import Contact from 'components/about/Contact';
import config from 'shared/config';

const About = () => {
	return (
		<>
			<Head>
				<title>Acerca de | {config.appName}</title>
			</Head>

			<Header />

			<section className="py-5 bg-light">
				<div className="container px-5 my-5">
					<div className="row gx-5 align-items-center">
						<div className="col-lg-6">
							<img
								src="/images/password.jpg"
								className="img-fluid rounded mb-5mb-lg-0"
								alt="Password"
							/>
						</div>
						<div className="col-lg-6">
							<h2 className="fw-bolder">Información general</h2>
							<p className="lead fw-normal text-muted mb-0">
								Las publicaciones de este blog tienen como finalidad informar y
								dar a conocer lo que es la seguridad de la información y por qué
								es importante en la actualidad.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-5 bg-light">
				<div className="container px-5 my-5">
					<div className="row gx-5 align-items-center">
						<div className="col-lg-6 order-first order-lg-last">
							<img
								src="/images/tips-y-consejos.jpg"
								className="img-fluid rounded mb-5mb-lg-0"
								alt="Tips y consejos"
							/>
						</div>
						<div className="col-lg-6">
							<h2 className="fw-bolder">Tips y consejos</h2>
							<p className="lead fw-normal text-muted mb-0">
								También podrás encontrar posts dedicados a dar consejos básicos
								de seguridad informática y cómo utilizar algunas herramientas.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Contact />
		</>
	);
};

export default About;
