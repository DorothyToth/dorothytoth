import HomeFeaturedCard from "./home-featured-card"

export default function HomeFeatured({ projects }) {

	const featuredProjects = projects.filter( p => p.homepageLocation );

	return (
		<>
			<div className="section-start">
			</div>

			<section className="case-studies-homepage" id="case">
				{
					featuredProjects.map( p => <HomeFeaturedCard key={ p.slugPartial } { ...p } />)
				}
			</section>
		</>
	)
}

