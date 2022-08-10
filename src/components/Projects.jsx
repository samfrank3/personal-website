import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <div style={{paddingTop: '15rem', margin: '0 auto'}}>
            <h1 className="subTitle" style={{textAlign: 'center'}}>Projects</h1>
            <hr style={{border: 'none', height: '3px', backgroundColor: '#fff',marginBottom:'3rem', width: '33%'}}/>
            <div className="container" style={{background: '#fff', width: '80%', height: '200px', margin: '0 auto', position: 'relative', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', paddingLeft: 0}}>
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
            </div>
        </div>
    )
}

export default Projects; 