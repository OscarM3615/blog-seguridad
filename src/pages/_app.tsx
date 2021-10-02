import Head from 'next/head';
import NavigationBar from 'shared/components/Navigationbar';
import config from 'shared/config';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>{config.appName}</title>
			</Head>

			<NavigationBar />
			<Component {...pageProps} />
		</>
	);
};

export default App;
