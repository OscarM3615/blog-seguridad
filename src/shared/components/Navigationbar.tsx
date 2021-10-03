import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import config from 'shared/config';

const NavigationBar = () => {
	return (
		<Navbar bg="primary" variant="dark" expand="lg">
			<Container>
				<Link href="/" passHref>
					<Navbar.Brand>{config.appName}</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav">
					<Nav className="ms-auto">
						<Link href="/" passHref>
							<Nav.Link>Blog</Nav.Link>
						</Link>
						<Link href="/about" passHref>
							<Nav.Link>Acerca de</Nav.Link>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
