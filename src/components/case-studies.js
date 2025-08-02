import ProjectCard from "./project-card"

export default function CaseStudies({ projects }) {

	return (
		<>
			<div className="section-start" id="case">
				<h3>UX/UI case studies</h3>
			</div>

			<section className="case-studies-homepage">
				{
					projects.map( ( p, cardIdx ) => <ProjectCard key={ p.slugPartial } cardIdx={ cardIdx } { ...p } />)
				}
			</section>


		</>
	)
}

