import HomeFeaturedCard from "./home-featured-card"

export default function HomeFeatured({ projects }) {

	const featuredProjects = projects.filter( p => p.homepageLocation );

	return (
		<>
			<section id="case" className="case-studies-homepage">
				{
					featuredProjects.map( p => <HomeFeaturedCard key={ p.slugPartial } { ...p } />)
				}
			</section>
		</>
	)
}

