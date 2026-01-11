import Link from "next/link";
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

import scrollToElement from "@/utils/scroll-to-element";
import Footer from "@/components/footer";

import "@/styles/about.scss"
import "@/styles/featured-projects.scss"
import "@/styles/footer.scss"
import "@/styles/home.scss"
import "@/styles/layout.scss"
import "@/styles/nav.scss"
import "@/styles/project-listing.scss"
import "@/styles/project-page.scss"
import "@/styles/typography.scss"
import "@/styles/buttons.scss"

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Dorothy Toth</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<header>
				<nav id="navBar">
    
					<div id="navigation">
						<Link className="navLink" href="/">dorothy toth</Link>
						<Link className="navLink" href="/projects">projects</Link>
						<Link className="navLink" href="/about">about</Link>
					</div>

					<div className="icons">
						<a href="mailto:dorothytoth@me.com"><img src="/images/DT-comm-email-gray.svg" /></a>
						<a href="https://www.linkedin.com/in/dorothy-toth/" target="_blank"><img src="/images/DT-comm-linkedin-gray.svg" /></a>
					</div>
					
				</nav>

				<Link className="navLink" href="#navBar" onClick={ e => scrollToElement( e ) }><img id="upToTop" src="/images/DT-carrot-grayUp.svg" /></Link>

			</header>
			<Component {...pageProps} />
			<GoogleAnalytics gaId="G-L17NZHP11J" />
			<Footer />
		</>
	)
}