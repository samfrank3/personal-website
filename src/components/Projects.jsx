import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <div id='Projects' style={{paddingTop: '15rem', margin: '0 auto'}}>
            <h1 className="subTitle" style={{textAlign: 'center'}}>Projects</h1>
            <hr style={{border: 'none', height: '3px', backgroundColor: '#fff',marginBottom:'3rem', width: '33%'}}/>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <ProjectsCard 
                    title='BlackJack Casino'
                    summary='This web application allows users to play blackjack, bet, and chat with other people online. They can register and/or login to their accounts, see leaderboards, and make transactions.'
                    link={'https://bjcasino.herokuapp.com/'}
                />
                <ProjectsCard 
                    title='Malloc Implementation' 
                    summary='This project implemented C memory allocation functions such as malloc(), realloc() and free() in C. I designed and tested a segmented explicit free list which allocates memory using a best-fit search.'
                />
                <ProjectsCard 
                    title='Mapping Project'
                    summary='Created a map of New York State that highlights the shortest path between two arbitrary points on the map and highlight the shortest path to reach all the points.'
                />
                <ProjectsCard 
                    title='Fake News Detector' 
                    summary = 'Utilized NLP techniques such as tf-idf to help vectorize words and create ML models. We compared Logistic Regression, Tree Classification, and Random Forest Classification.'
                    link={'https://drive.google.com/file/d/1TmfPtLLr3IGtlo80Cvu6dy0ztpIBqeZM/view?usp=sharing'}
                />
            </div>
        </div>
    )
}

export default Projects; 