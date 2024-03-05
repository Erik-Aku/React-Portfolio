function Resume() {
    return (
        <section>
            <div className="resume">
                <h1>Resume</h1>
            </div> 
               <br></br>
           <div className="pdf">
                <a href={('src/assets/files/erikaku.pdf')} alt='Download Resume'><h2>Download Resume</h2>
                    </a>
                </div>
            <div className='skills'>
                <h3>Skills </h3>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Angular</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Mongo</li>
                    <li>Mysql</li>
                </ol>
            </div>
        </section>
    );
}

// export Resume Component
export default Resume;