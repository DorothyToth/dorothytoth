import ProjectCard from "./project-card"

export default function CaseStudies({ projects }) {

	return (
		<>
			<div className="sectionStart" id="case">
				<h3>UX/UI case studies</h3>
			</div>

			<section id="categoryGrid">
				{
					projects.map( p => <ProjectCard key={ p.slugPartial } { ...p } />)
				}
				<div id="garden" className="categoryGridArea">
					<a href="files/CS-Horticare-Garden-Care-Mobile-App.pdf" target="_blank"><img src="images/hero-garden.jpg" /></a>
					<h5>Horticare</h5>
					<h6>Garden Care App / 3 weeks</h6>
					<p>Group collaboration of a garden care app that provides personalized garden creation with plant care instruction</p>
					<div className="buttons">
						<a href="files/CS-Horticare-Garden-Care-Mobile-App.pdf" target="_blank"><button className="blue"><h6>case study</h6></button></a>
						<a href="https://xd.adobe.com/view/9a5946f8-d81c-4768-9b76-5d3b316d4d7f-cf0a/" target="_blank"><button><h6>prototype</h6></button></a>
					</div>
				</div>
				<div id="travel" className="categoryGridArea">
					<a href="files/CS-GoTogether-Mobile-App.pdf" target="_blank"><img src="images/hero-travel.jpg" /></a>
					<h5>GoTogether</h5>
					<h6>Group Travel App / 4 weeks</h6>
					<p>Creation of a group travel app with shareable travel plan and management features</p>
					<div className="buttons">
						<a href="files/CS-GoTogether-Mobile-App.pdf" target="_blank"><button className="blue"><h6>case study</h6></button></a>
						<a href="https://www.figma.com/proto/K7XH1Hqbj9UGQ6GRNT1G3H/HW4-Digital%2FSelectable-Wireframes-v3-iOS?page-id=0%3A1&node-id=3%3A2&viewport=257%2C48%2C0.31&scaling=scale-down&starting-point-node-id=2%3A2" target="_blank"><button><h6>prototype</h6></button></a>
					</div>
				</div>
				<div id="health" className="categoryGridArea">
					<a href="files/CS-SCFMN-Website-Redesign.pdf" target="_blank"><img src="images/hero-health.jpg" /></a>
					<h5>Sickle Cell Foundation</h5>
					<h6>Responsive Website Redesign / 3 weeks</h6>
					<p>Team effort on website redesign for streamlined user flow, responsivity, and improved UI</p>
					<div className="buttons">
						<a href="files/CS-SCFMN-Website-Redesign.pdf" target="_blank"><button className="blue"><h6>case study</h6></button></a>
						<a href="https://www.figma.com/proto/640XS3zj5zw0h0fYoycmtj/SCD-redesign-3-desktop-final?sca%5B…%5D-id=0%3A1&starting-point-node-id=277%3A2119&node-id=277%3A2119" target="_blank"><button><h6>desktop prototype</h6></button></a>
						<a href="https://www.figma.com/proto/lRl5JisMerPXctDkOTGr32/SCD-redesign-3-mobile-final?node%5B…%5Ding=scale-down&page-id=0%3A1&starting-point-node-id=636%3A6530&node-id=636%3A6530" target="_blank"><button><h6>mobile prototype</h6></button></a>
					</div>
				</div>
			</section>


		</>
	)
}

