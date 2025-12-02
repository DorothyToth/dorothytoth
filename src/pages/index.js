import IntroSection from "@/components/intro-section";
import FeaturedProjects from "@/components/featured-projects";

import getAllProjects from "@/utils/get-all-projects"

export default function Home({ projects }) {
	return (
		<>
			<IntroSection />
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