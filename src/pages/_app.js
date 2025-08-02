import Head from 'next/head'

import "@/styles/style.css";

import "@/styles/case-studies.scss"

import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Dorothy&apos;s UX/UI Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}