import Link from "next/link";
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
import { FaChevronUp, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

import scrollToElement from "@/utils/scroll-to-element";
import Footer from "@/components/footer";

import "@/styles/about.scss"
import "@/styles/featured-projects.scss"
import "@/styles/footer.scss"
import "@/styles/header.scss"
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

					<div className="header-external-links">
						<a href="mailto:dorothytoth@me.com" className="header-external-link" >
							<FaRegEnvelope title="An envelope icon indicating this link is to open a mail application to send Dorothy an email" />
						</a>
						<a href="https://www.linkedin.com/in/dorothy-toth/" className="header-external-link" target="_blank">
							<FaLinkedinIn title="A LinkedIn icon indicating this link is to open Dorothy's LinkedIn profile" />
						</a>
					</div>
					
				</nav>

				<Link id="upToTop" href="#navBar" onClick={ e => scrollToElement( e ) }>
					<FaChevronUp title="A chevron pointing up indicating this link scrolls the user to the top of the page" />
				</Link>

			</header>
			<Component {...pageProps} />
			<GoogleAnalytics gaId="G-L17NZHP11J" />
			<Footer />
		</>
	)
}