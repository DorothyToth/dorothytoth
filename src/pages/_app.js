import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

import "@/styles/style.css";

import "@/styles/case-studies.scss"
import "@/styles/hero.scss"
import "@/styles/nav.scss"

import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Dorothy Toth</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Component {...pageProps} />
				<GoogleAnalytics gaId="G-L17NZHP11J" />
			</Layout>
		</>
	)
}