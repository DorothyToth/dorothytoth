import ProjectCard from "./project-card"

export default function CaseStudies({ projects }) {

	const featuredProjects = projects.filter( p => p.homepageLocation );

	return (
		<>
			<div className="section-start">
			</div>

			<section className="case-studies-homepage" id="case">
				{
					featuredProjects.map( p => <ProjectCard key={ p.slugPartial } { ...p } />)
				}
			</section>
		</>
	)
}

