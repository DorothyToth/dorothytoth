import Link from "next/link";
import scrollToElement from "@/utils/scroll-to-element";

export default function Layout({ children }) {

	return (
		<>
			<header>
				<nav id="navBar">
    
					<div id="navigation">
						<Link className="navLink" href="#home" onClick={ e => scrollToElement( e ) }><p>home2</p></Link>
						<Link className="navLink" href="#case" onClick={ e => scrollToElement( e ) }><p>projects</p></Link>
						<Link className="navLink" href="#about" onClick={ e => scrollToElement( e ) }><p>about</p></Link>
						<Link className="navLink" href="#connect" onClick={ e => scrollToElement( e ) }><p>connect</p></Link>
					</div>

					<div className="icons">
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