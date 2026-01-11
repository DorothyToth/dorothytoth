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

                <h1>projects</h1>
            
                <div className='proj-card-grid'>

                    {
                        filteredProjects.map( p => {
                            return (
                                <div key={ p.slug }>
                                <a href={ p.slug } className="proj-card">
                                    <div className='img-container'>
                                        <img src={ `${ p.slug }/${ p.heroImg }` } alt={ p.cardImgAltText}/>
                                    </div>
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