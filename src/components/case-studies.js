import ProjectCard from "./project-card"

export default function CaseStudies({ projects }) {

	return (
		<>
			<div className="section-start" id="case">
				<h6>More Content Coming Soon!</h6>
			</div>

			<section className="case-studies-homepage">
				{
					projects.map( ( p, cardIdx ) => <ProjectCard key={ p.slugPartial } cardIdx={ cardIdx } { ...p } />)
				}
			</section>
		</>
	)
}

