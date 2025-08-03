import HomeSection from "@/components/hero-section";
import CaseStudies from "@/components/case-studies";
import About from "@/components/about";
import Connect from "@/components/connect";

import getAllProjects from "@/utils/get-all-projects"

export default function Home({ projects }) {
	return (
		<>
			<HomeSection />
			<CaseStudies projects={ projects } />
			<About />
			<Connect />
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