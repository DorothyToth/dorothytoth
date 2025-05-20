import Head from "next/head";
import Link from "next/link";
import scrollToElement from "@/utils/scroll-to-element";

export default function Layout({ children }) {

	return (
		<>
			<Head>
				<title>Dorothy&apos;s UX/UI Portfolio</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" /> 
  				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
  				<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Kanit:wght@400;500;700;800&display=swap" rel="stylesheet" />
			</Head>
			<header>
				<nav id="navBar">
    
					<div id="navigation">
						<Link className="navLink" href="#home" onClick={ e => scrollToElement( e ) }><p>home</p></Link>
						<Link className="navLink" href="#case" onClick={ e => scrollToElement( e ) }><p>case studies</p></Link>
						<Link className="navLink" href="#about" onClick={ e => scrollToElement( e ) }><p>about</p></Link>
						<Link className="navLink" href="#connect" onClick={ e => scrollToElement( e ) }><p>connect</p></Link>
					</div>

					<div className="icons">
						<a href="https://reasonandrhyme.co" target="_blank"><img src="images/DT-comm-web-gray.svg" /></a>
						<a href="mailto:dorothytoth@me.com"><img src="images/DT-comm-email-gray.svg" /></a>
						<a href="https://www.linkedin.com/in/dorothy-toth/" target="_blank"><img src="images/DT-comm-linkedin-gray.svg" /></a>
					</div>
					
				</nav>

				<Link className="navLink" href="#home" onClick={ e => scrollToElement( e ) }><img id="upToTop" src="images/DT-carrot-grayUp.svg" /></Link>

			</header>
			{ children }
			<div className="footer"></div>
		</>
	)
}