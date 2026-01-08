import Link from "next/link";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";

import parseProject from '@/utils/parse-project';
import getAllProjects from '@/utils/get-all-projects';
import projectContentVariableReplacement from "@/utils/project-content-variable-replacement";

export default function Project({ title, description, cardImgAltText, heroImg, content, prevProject, nextProject }) {
	const replacedContent = projectContentVariableReplacement(content, { title, description, cardImgAltText, heroImg });
	return (
		<>
			<div id="project-page">

                <div className="proj-heading">

					<div className="buttons">
						<Link href="/projects" className="btn-tert"><FaAngleLeft />all projects</Link>
					</div>

                    <h1>{ title }</h1>

                    <h5>{ description }</h5>

                </div>

				<article dangerouslySetInnerHTML={{ __html: replacedContent }} />

				<div className="proj-nav">
                    
					{
						prevProject &&
						prevProject.slug &&
						<div className="proj-nav-left">
							<FaAngleLeft />
							<Link href={ prevProject.slug }>{ prevProject.title }</Link>
						</div>
					}
					{
						nextProject &&
						nextProject.slug &&
						<div className="proj-nav-right">
							<Link href={ nextProject.slug }>{ nextProject.title }</Link>
							<FaAngleRight />
						</div>
					}

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