import React from 'react';
import cydoc from '../images/cydoc-logo.svg';
import rochci from '../images/roc-hci-logo.svg'
import uofr from '../images/uofr-logo.svg';
import ExperienceCard from './ExperienceCard'

const Experience = () => {
    return (
        <div id="Experience"  style={{margin: '0 auto', paddingTop:'75px', paddingBottom: '10rem'}}>
            <h1 className="subTitle" style={{textAlign: 'center', color: '#F9FEFF'}}>Experience</h1>
            <ExperienceCard
                logo={cydoc}
                company='Cydoc'
                title='Software Engineering Intern'
                time='June 2022 - Present'
                description = {[
                    "Develop an AI-driven medical web application to optimize patient-healthcare interactions by streamlining physicians' and other health care professionals' note-taking processes.",
                    'Revamp customer-facing products by redesigning pages, components, and features to enhance user experience. Document and debug styling and layout-related code for both web and mobile view with Chrome DevTools.',
                    'Technologies Used: React, Redux, Javascript, TypeScript',
                ]}
            />
            <ExperienceCard 
                logo={rochci} 
                company='ROC-HCI Lab' 
                title='Research Assistant' 
                time='April 2022 - Present' 
                description = {[
                    'Research existing frameworks in EdTech and how to effectively utilize ML to make ML concepts more accessible to K-12 educators.',
                    'Design, test, and update the SmileyDiscovery web system and Authoring Recommendation Tool to improve scientific discovery in K-12 education.',
                    'Create lesson plans that educators would use to incorporate machine learning techniques within classes. Utilized K-Means Clustering, K-Nearest-Neighbor, and Tree Classification to scientific data.'
                ]}
            />
            <ExperienceCard 
                logo={uofr} 
                company='CS Department' 
                title='Lab Teaching Assistant' 
                time='August 2021 - Present' 
                description = {[
                    'Lead lab sessions and office hours to help students learn about the foundations of Computer Science. Evaluate labs, projects, and tests.',
                    'Refine student understanding by providing constructive feedback and resolve any inquiries students may have.',
                    'Course: Data Structures and Algorithms (3 semesters)'
                ]}
            />
        </div>
    )
}

export default Experience;