import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <div id='Projects' style={{paddingTop: '15rem', margin: '0 auto'}}>
            <h1 className="subTitle" style={{textAlign: 'center', color: '#F9FEFF'}}>Projects</h1>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <ProjectsCard 
                    title='BlackJack Casino'
                    summary='This web application allows users to play blackjack, bet, and chat with other people online. They can register and/or login to their accounts, see leaderboards, and make transactions.'
                    technology = {[
                        'Flask',
                        'Javascript',
                        'Python',
                    ]}
                    links= {[
                        {
                            name: 'Website Link',
                            link: "https://bjcasino.herokuapp.com/"
                        },
                        {
                            name: 'Github Link',
                            link: 'https://github.com/samfrank3/blackjackCasino',
                        },
                    ]}
                />
                <ProjectsCard 
                    title='Malloc Implementation' 
                    summary='This project implemented C memory allocation functions such as malloc(), realloc() and free() in C. Designed and tested a segmented explicit free list that allocate memory using a best-fit search.'
                    technology = {[
                        'C',
                        'System Design'
                    ]}
                    links= {[
                        {
                            name: 'Github Link',
                            link: 'https://github.com/samfrank3/Malloc-Implementation'
                        },
                    ]}
                />
                <ProjectsCard 
                    title='Fake News Detector' 
                    summary = 'Utilized NLP techniques such as tf-idf to help vectorize words and create ML models. We compared Logistic Regression, Tree Classification, and Random Forest Classification.'
                    technology = {[
                        'Python',
                        'Machine Learning',
                        'Jupyter Notebook',
                    ]}
                    links= {[
                        {
                            name: 'View Paper',
                            link: 'https://drive.google.com/file/d/1TmfPtLLr3IGtlo80Cvu6dy0ztpIBqeZM/view?usp=sharing'
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default Projects; 