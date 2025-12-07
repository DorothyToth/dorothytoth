import ProjectCard from '@/components/project-card';

export default function ProjectListing( { projects, filters } ) {

    let filteredProjects = projects;
    if( filters ) {
        Object.keys( filters ).forEach( prop => {
            filteredProjects = filteredProjects.filter( p => filters[ prop ].some( filterVal => p[ prop ].includes( filterVal ) ) )
        })
    }

    return (

        <div id="project-Listing">

            <div className='proj-list-content'>

                <h1>Project Listing Page</h1>

                <p>This is where the list of projects will go.</p>

                <a href="/project-page"><p>Link to project page</p></a>

            </div>
            
        {/* <div className="case-studies-homepage">
            {
                filteredProjects.map( p => <ProjectCard key={ p.slugPartial } { ...p } /> ) 
            }
        </div> */}

        </div>
    )
}