import scrollToElement from "@/utils/scroll-to-element";
import IconCaret from '@/svg/caret';

export default function HomeSection() {
    return (
        <section id="hero" className="section-hero">

            <div className="hero-content">
                <h2>Dorothy Toth</h2>
                <p>UX/UI + Strategy + Creative</p>
            </div>

            <div className="hero-video-bg">
                <video playsInline autoPlay muted loop poster="images/video-still.jpg">
                    <source src="videos/wireframe-video.mp4" />
                </video>
            </div>


            <div className="hero-cta-wrapper">
                <div className="cta-image"></div>
                <a className="cta-link" href="#case" onClick={ e => scrollToElement( e ) }>
                    <span>see work</span>
                    <IconCaret />
                </a>
            </div>

        </section>
    );

}
