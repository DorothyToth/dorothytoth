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

            <div className="proj-list-content">

                <h1>Projects</h1>
            
                <div className='proj-card-row'>
                    
                    <div className="proj-card-column">
                    <a href="/project-page" className="proj-card">
                        <img src='/images/hero-doe.jpg' alt='alt text'/>
                        <h5>Project Name 1</h5>
                    </a>
                    </div>

                    <div className="proj-card-column">
                    <a href="/project-page" className="proj-card">
                        <img src='/images/hero-doe.jpg' alt='alt text'/>
                        <h5>Project Name 2</h5>
                    </a>
                    </div>
                    
                    <div className="proj-card-column">
                    <a href="/project-page" className="proj-card">
                        <img src='/images/hero-doe.jpg' alt='alt text'/>
                        <h5>Project Name 3</h5>
                    </a>
                    </div>
                    
                    <div className="proj-card-column">
                    <a href="/project-page" className="proj-card">
                        <img src='/images/hero-doe.jpg' alt='alt text'/>
                        <h5>Project Name 4</h5>
                    </a>
                    </div>
                    
                    <div className="proj-card-column">
                    <a href="/project-page" className="proj-card">
                        <img src='/images/hero-doe.jpg' alt='alt text'/>
                        <h5>Project Name 5</h5>
                    </a>
                    </div>

                </div>

            </div>

        {/* <div className="case-studies-homepage">
            {
                filteredProjects.map( p => <ProjectCard key={ p.slugPartial } { ...p } /> ) 
            }
        </div> */}

        </div>
    )
}