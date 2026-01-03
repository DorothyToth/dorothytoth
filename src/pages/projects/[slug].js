import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";

import parseProject from '@/utils/parse-project';
import getAllProjects from '@/utils/get-all-projects';
import Link from "next/link";

export default function Project({ title, description, content, prevProject, nextProject }) {
	return (
		<>
			<div id="project-page">

                <div className="proj-heading">

					<Link href="/projects"><button className="tert"><FaAngleLeft /><h6>all projects</h6></button></Link>

                    <h1>{ title }</h1>

                    <h5>{ description }</h5>

                </div>

				<article dangerouslySetInnerHTML={{ __html: content }} />

				<div className="proj-nav">
                    
					<div className="proj-nav-right">
					<FaAngleLeft />
                    <h3>
						{
							prevProject &&
							prevProject.slug &&
							<a href={ prevProject.slug }>{ prevProject.title }</a>
						}
					</h3>
					</div>

					<div className="proj-nav-left">
					<h3>
						{
							nextProject &&
							nextProject.slug &&
							<a href={ nextProject.slug }>{ nextProject.title }</a>
						}
					</h3>
					<FaAngleRight />
					</div>

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

	const crntProjOrder = project.projectListingOrder;

	const projects = await getAllProjects();

	const prevProject = projects.find( p => p.projectListingOrder === (crntProjOrder - 1) ) || {};
	const nextProject = projects.find( p => p.projectListingOrder === (crntProjOrder + 1) ) || {};

	return {
		props: {
			...project,
			prevProject,
			nextProject
		},
	}
}