import HomeIntro from "@/components/home-intro";
import HomeFeatured from "@/components/home-featured";

import getAllProjects from "@/utils/get-all-projects"

export default function Home({ projects }) {
	return (
		<>
			<HomeIntro />
			<HomeFeatured projects={ projects } />
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