
export default function projectPage({ projects }) {
	return (
		<>
			<div id="project-page">

                <div className="proj-margin">

					<a href="/projects"><p>all projects</p></a>

                    <h1>Title of Project</h1>

                    <h3>subtitle</h3>

                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                     
                </div>


                <div className="proj-highlight">

                    <p className="highlight-text">The challenge lorem ipsum dolor sit amet jorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              
                </div>


                <div className="proj-margin">

                    <h3>subtitle</h3>

                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                    <img src="/images/card-hike.jpeg" alt="alt text here" className="proj-image" />

                </div>


                <img src="/images/hero-hiking.jpg" alt="alt text here" className="proj-image-full"/>


                <div className="proj-margin">
                    
                    <h3>subtitle</h3>
                    
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                     
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
               
                </div>


                <div className="proj-solution">

                    <p className="solution-text">The solution lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                </div>


                <div className="proj-nav">
                    
                    <h3>[prev project]</h3><h3>[next project]</h3>

                </div>


            </div>
		</>
	);
}