import HomeSection from "@/components/home-section";
import CaseStudies from "@/components/case-studies";

import getAllProjects from "@/utils/get-all-projects"

export default function Home({ projects }) {
	return (
		<>
			<HomeSection />
			<CaseStudies projects={ projects } />
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