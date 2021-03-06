import Head from 'next/head';
import NavigationBar from 'shared/components/Navigationbar';
import Footer from 'shared/components/Footer';
import config from 'shared/config';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>{config.appName}</title>

				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<NavigationBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
};

export default App;
