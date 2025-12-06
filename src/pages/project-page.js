
export default function projectPage({ projects }) {
	return (
		<>
			<div id="project-page">

                <div className="proj-margin">

					<a href="/projects"><p>back</p></a>

                    <h1>Title of Project</h1>

                    <h3>subtitle</h3>

                     <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                     
                     <p>Lorem ipsum dolor sit amet, <span className="bold">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                    <img src="/images/card-hike.jpeg" alt="alt text here" className="proj-image" />

                </div>

            </div>
		</>
	);
}