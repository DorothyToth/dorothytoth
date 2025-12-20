
export default function projectPage({ projects }) {
	return (
		<>
			<div id="project-page">

                <div className="proj-heading">

					<a href="/projects"><p>- all projects</p></a>

                    <h1>Title of Project</h1>

                    <h5>Description lorem ipsum dolor sit amet jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h5>

                </div>


                <div className="proj-author">

                     <div>
                    <h6>Team</h6>
                    <p><b>Adam Dehnel</b> Product Architecture</p>
                    <p><b>Dorothy Toth</b> User Experience Design</p>
                    </div>

                    {/* <div>
                    <h6>Role</h6>
                    <p>User Experience & Interface Design</p>
                    </div> */}

                    <div>
                    <h6>Client</h6>
                    <p>BI Worldwide</p>
                    </div>

                    <div>
                    <h6>Timeframe</h6>
                    <p>4 Months</p>
                    </div>

                    <div>
                    <h6>Prototype</h6>
                    <p>Figma</p>
                    </div>
                </div>


                <img src="/images/hero-doe.jpg" alt="alt text here" className="proj-image-full"/>


                <div className="proj-overview">

                    <div>
                    <h6>reason</h6>
                    <p className="overview-text">The challenge lorem ipsum dolor sit amet jorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    
                    <div>
                    <h6>rhyme</h6>
                    <p className="overview-text">The challenge lorem ipsum dolor sit amet jorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                </div>


                <div className="proj-margin">

                    <h3>subtitle</h3>

                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                    <img src="/images/card-food.png" alt="alt text here" className="proj-image" />

                </div>


                <div className="proj-margin">
                    
                    <h3>subtitle</h3>
                    
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                    <img src="/images/card-hike.jpeg" alt="alt text here" className="proj-image" />
 
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
               
                </div>


                <div className="proj-margin">
                    
                    <h3>subtitle</h3>
                    
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                     
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                    <img src="/images/card-food.png" alt="alt text here" className="proj-image" />
               
                </div>


                <div className="proj-margin">
                    
                    <h3>subtitle</h3>
                    
                    <img src="/images/card-food.png" alt="alt text here" className="proj-image" />

                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                     
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
               
                </div>


                <div className="proj-impact">

                    <p className="impact-text">The impact lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                </div>


                <div className="proj-margin">
                    
                    <h3>Next Steps</h3>
                    
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                     
                    <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
               
                </div>


                


                <div className="proj-nav">
                    
                    <h3>[- prev project]</h3><h3>[next project -]</h3>

                </div>


            </div>
		</>
	);
}