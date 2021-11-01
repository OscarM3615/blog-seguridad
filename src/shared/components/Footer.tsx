import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-dark py-4 mt-auto">
			<div className="container px-5">
				<div className="row align-items-center justify-content-between flex-column flex-sm-row">
					<div className="col-auto">
						<div className="small m-0 text-white">
							Óscar Antonio Miranda González
						</div>
						<div className="small m-0 text-white">Matrícula UACJ: 180165</div>
					</div>
					<div className="col-auto">
						<a
							href="https://github.com/OscarM3615/blog-seguridad"
							className="link-light small"
							target="_blank"
							rel="noreferrer"
						>
							Código fuente
						</a>
						<span className="text-white mx-1">·</span>

						<Link href="/about#contact" passHref>
							<a className="link-light small">Contacto</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
