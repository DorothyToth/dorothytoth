export default function ProjectListing( { projects, filters } ) {

    let filteredProjects = projects;
    if( filters ) {
        Object.keys( filters ).forEach( prop => {
            filteredProjects = filteredProjects.filter( p => filters[ prop ].some( filterVal => p[ prop ].includes( filterVal ) ) )
        })
    }

    return (

        <div id="project-Listing">

            <div className="proj-list-content">

                <h1>Projects</h1>
            
                <div className='proj-card-row'>

                    {
                        filteredProjects.map( p => {
                            return (
                                <div className="proj-card-column">
                                    <a href={ p.slug } className="proj-card">
                                        <div className='img-container'><img src={ p.heroImg } alt='alt text'/></div>
                                        <h5>{ p.title }</h5>
                                    </a>
                                </div>
                            )
                        } ) 
                    }

                </div>

            </div>

        </div>
    )
}