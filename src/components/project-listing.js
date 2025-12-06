import ProjectCard from '@/components/project-card';

export default function ProjectListing( { projects, filters } ) {

    let filteredProjects = projects;
    if( filters ) {
        Object.keys( filters ).forEach( prop => {
            filteredProjects = filteredProjects.filter( p => filters[ prop ].some( filterVal => p[ prop ].includes( filterVal ) ) )
        })
    }

    return (

        <div id="projectSection">

        {/* <div className="case-studies-homepage">
            {
                filteredProjects.map( p => <ProjectCard key={ p.slugPartial } { ...p } /> ) 
            }
        </div> */}
						<a href="/about"><p>Link to project page</p></a>
        </div>
    )
}