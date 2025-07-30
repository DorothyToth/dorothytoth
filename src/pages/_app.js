import Head from 'next/head'

import "@/styles/style.css";

import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Dorothy Toth&apos;s Website</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}