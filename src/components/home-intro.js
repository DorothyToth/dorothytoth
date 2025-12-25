import scrollToElement from "@/utils/scroll-to-element";

export default function HomeIntro() {
    return (
        <div id="home">
            <section id="heroGrid">

                <div id="featuredProduct" className="hero-grid-area">

                    <video playsInline autoPlay muted loop poster="images/video-still.jpg">
                        <source src="videos/wireframe-video.mp4" />
                    </video>

                    <div id="headline">
                        <h1>Dorothy Toth</h1>
                        <p>UX/UI + Strategy + Creative</p>
                    </div>

                </div>

                <div id="secondaryProduct" className="hero-grid-area"></div>

                <div id="CTA" className="hero-grid-area">

                    <a className="navLink" href="#case" onClick={ e => scrollToElement( e ) }>
                        <span className="CTAlink">
                            <h4>featured projects</h4>
                        </span>
                    </a>
                    
                </div>

            </section>
        </div>
    );
}
