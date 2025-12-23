import { AiOutlineLeft } from "react-icons/ai";

import parseProject from '@/utils/parse-project';
import getAllProjects from '@/utils/get-all-projects';

export default function Project({ title, subtitle, content }) {
	return (
		<>
			<div id="project-page">

                <div className="proj-heading">

					<a href="/projects"><p><AiOutlineLeft /> all projects</p></a>

                    <h1>{ title }</h1>

                    <h5>{ subtitle }</h5>

                </div>

				<article dangerouslySetInnerHTML={{ __html: content }} />

				 <div className="proj-nav">
                    
                    <h3>[- prev project]</h3><h3>[next project -]</h3>

                </div>


            </div>
			
		</>
	)
}

export async function getStaticPaths() {
	const projects = await getAllProjects();
	return {
		paths: projects.map(p => p.slug),
		fallback: false, // false or "blocking"
	}
}

export async function getStaticProps({ params }) {

	const project = await parseProject(params.slug)

	return {
		props: {
			...project
		},
	}
}