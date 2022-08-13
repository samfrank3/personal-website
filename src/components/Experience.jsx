import React from 'react';
import cydoc from '../images/cydoc-logo.svg';
import rochci from '../images/roc-hci-logo.png'
import uofr from '../images/uofr-logo.png';
import ExperienceCard from './ExperienceCard'

const Experience = () => {
    return (
        <div id="Experience"  style={{paddingTop: '15rem', margin: '0 auto'}}>
            <h1 className="subTitle" style={{textAlign: 'center'}}>Experience</h1>
            <hr style={{border: 'none', height: '3px', backgroundColor: '#fff',marginBottom:'3rem', width: '33%'}}/>
            <ExperienceCard
                logo={cydoc}
                company='Cydoc'
                title='Software Engineering Intern'
                time='June 2022 - Present'
            />
            <ExperienceCard logo={rochci} company='ROC-HCI Lab' title='Research Assistant' time='April 2022 - Present' />
            <ExperienceCard logo={uofr} company='CS Department' title='Lab Teaching Assistant' time='August 2021 - Present' />
        </div>
    )
}

export default Experience;