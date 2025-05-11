import Image from 'next/image'
import scrollToElement from "@/utils/scroll-to-element";

export default function HomeSection() {
    return (
        <div id="home">
            <section id="heroGrid">

                <div id="featuredProduct" className="heroGridArea">
                    <video playsInline autoPlay muted loop poster="/images/video-still.jpg">
                        <source src="/videos/wireframe-video.mp4" />
                    </video>
                    <div id="headline">
                        <h3>UX/UI Portfolio</h3>
                        <h2>Dorothy Toth</h2>
                        <p>UX/UI + Creative Direction + Visual Design</p>
                    </div>
                </div>

                <div id="secondaryProduct" className="heroGridArea"></div>

                <div id="CTA" className="heroGridArea">
                    <a className="navLink" href="#case" onClick={ e => scrollToElement( e ) }>
                        <span className="CTAlink">
                            <h4>see work</h4>
                            <Image src="images/DT-carrot-white.svg" width={ 30 } height={ 90 } />
                        </span>
                    </a>
                </div>

            </section>
        </div>
    );

}
