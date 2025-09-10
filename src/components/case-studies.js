import ProjectCard from "./project-card"

export default function CaseStudies({ projects }) {

	const featuredProjects = projects.filter( p => p.homepageLocation );

	return (
		<>
			<div className="section-start" id="case">
				<h6>More Content Coming Soon!</h6>
			</div>

			<section className="case-studies-homepage">
				{
					featuredProjects.map( p => <ProjectCard key={ p.slugPartial } { ...p } />)
				}
			</section>
		</>
	)
}

