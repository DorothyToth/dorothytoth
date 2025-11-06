import HomeSection from "@/components/home-section";
import CaseStudies from "@/components/case-studies";
import AboutPage from "@/components/about-page";
import Connect from "@/components/connect";

import getAllProjects from "@/utils/get-all-projects"

export default function Home({ projects }) {
	return (
		<>
			<HomeSection />
			<CaseStudies projects={ projects } />
			<AboutPage />
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