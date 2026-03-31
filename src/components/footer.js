import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <section id="footerSection">

                <div id="footerCopy">
                    <h3>Dorothy Toth</h3>
                    <p>forward-thinking, purpose-driven ux/ui design</p>
                    <div className="footer-external-links">
                        <a href="mailto:dorothytoth@me.com" className="footer-external-link" >
                                                <FaRegEnvelope title="An envelope icon indicating this link is to open a mail application to send Dorothy an email" />
                                            </a>
                        <a href="https://www.linkedin.com/in/dorothy-toth/" className="footer-external-link" target="_blank">
                                                <FaLinkedinIn title="A LinkedIn icon indicating this link is to open Dorothy's LinkedIn profile" />
                                            </a>						
                        <a href="https://github.com/DorothyToth" className="footer-external-link" target="_blank">
                                                <FaGithub title="A GitHub icon indicating this link is to open Dorothy's GitHub profile" />
                                            </a>
                    </div>
                    <p className="legal">© Dorothy Toth {new Date().getFullYear()}. Built in Partnership with <a href="https://arsdehnel.com" target="_blank">Adam Dehnel</a>.</p>

                </div>
                <div id="links">
                    <a href="mailto:dorothytoth@me.com"><h5>Email</h5></a>
                    <a href="https://www.linkedin.com/in/dorothy-toth/" target="_blank"><h5>LinkedIn</h5></a>
                    <a href="/DorothyToth-Resume.pdf" target="_blank"><h5>Resume</h5></a>
                </div>

            </section>
        </>
    )
}