import HomeSection from "@/components/home-section";
import FeaturedProjects from "@/components/featured-projects";

import getAllProjects from "@/utils/get-all-projects"

export default function Home({ projects }) {
	return (
		<>
			<HomeSection />
			<FeaturedProjects projects={ projects } />
		</>
	);
}

export async function getStaticProps() {

	const projects = await getAllProjects();

	return {
		props: {
			projects
		},
	}

}