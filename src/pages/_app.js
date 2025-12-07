import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

import "@/styles/about.scss"
import "@/styles/featured-projects.scss"
import "@/styles/footer.scss"
import "@/styles/home.scss"
import "@/styles/layout.scss"
import "@/styles/nav.scss"
import "@/styles/project-listing.scss"
import "@/styles/project-page.scss"
import "@/styles/typography.scss"

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