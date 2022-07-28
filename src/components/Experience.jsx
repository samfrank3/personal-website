import React from 'react';
import cydoc from '../images/cydoc-logo.svg';
import rochci from '../images/roc-hci-logo.png'
import uofr from '../images/uofr-logo.png';
import Card from './Card'

const Experience = () => {
    return (
        <div style={{paddingTop: '15rem', margin: '0 auto'}}>
            <h1 className="subTitle" style={{textAlign: 'center'}}>Experience</h1>
            <hr style={{border: 'none', height: '3px', backgroundColor: '#fff',marginBottom:'3rem', width: '33%'}}/>
            <Card logo={cydoc} company='Cydoc' title='Software Engineering Intern' time='June 2022 - Present' />
            <Card logo={rochci} company='ROC-HCI Lab' title='Research Assistant' time='April 2022 - Present' />
            <Card logo={uofr} company='CS Department' title='Lab Teaching Assistant' time='August 2021 - Present' />
        </div>
    )
}

export default Experience;