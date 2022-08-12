import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <div style={{paddingTop: '15rem', margin: '0 auto'}}>
            <h1 className="subTitle" style={{textAlign: 'center'}}>Projects</h1>
            <hr style={{border: 'none', height: '3px', backgroundColor: '#fff',marginBottom:'3rem', width: '33%'}}/>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <ProjectsCard title='BlackJack Casino' summary='This web application allows users to play blackjack, bet, and chat with other people online. They have to register and/or login to their accounts'/>
                <ProjectsCard title='Malloc Implementation' summary='This project implemented C memory allocation functions such as malloc(), realloc() and free() in C. I designed and tested a segmented explicit free list which allocates memory using a best-fit search.'/>
                <ProjectsCard title='Street Mapping' summary="Created a map of New York State that highlights the shortest path between two arbitrary points on the map and highlight the shortest path to reach all the points."/>
                <ProjectsCard title='Fake News Detector' summary = 'Created a ML algorithm'/>
            </div>
        </div>
    )
}

export default Projects; 