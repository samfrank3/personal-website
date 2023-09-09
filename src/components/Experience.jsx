import React from 'react';
import cydoc from '../images/cydoc-logo.svg';
import rochci from '../images/roc-hci-logo.svg';
import uofr from '../images/uofr-logo.svg';
import ey from '../images/EY-logo.svg';
import ExperienceCard from './ExperienceCard'

const Experience = () => {
    return (
        <div id="Experience"  style={{margin: '0 auto', paddingTop:'75px', paddingBottom: '10rem'}}>
            <h1 className="subTitle" style={{textAlign: 'center', color: '#F9FEFF', fontFamily: 'Playfair Display'}}>Experience</h1>
            <ExperienceCard 
                logo={ey}
                company='Ernst & Young LLP'
                title='Tax Technology and Transformation Intern'
                time='June 2023 - August 2023'
                description={[
                    "Reduced time spent on analyst tasks by 73% by building a data cleaning and converting tool",
                    "Improved data transformation features that visualize strategic transactions, enhancing client usability through comprehensive test cases, benchmarks, user guides, and presentations",
                    "Conducted an evaluation of client Country-by-Country-Reporting data and composed a detailed year-over-year analytics report using Power Query and Power BI",
                    "Technologies used: Python, C#/.NET, Excel, PowerPoint, Alteryx, Azure"
                ]}
            />
            <ExperienceCard
                logo={cydoc}
                company='Cydoc'
                title='Software Engineering Intern'
                time='June 2022 - December 2022'
                description = {[
                    "Develop an AI-driven medical web application to optimize patient-healthcare interactions by streamlining physicians' and other health care professionals' note-taking processes.",
                    'Revamp customer-facing products by redesigning pages, components, and features to enhance user experience. Document and debug styling and layout-related code for both web and mobile view with Chrome DevTools.',
                    <a href="https://www.cydoc.ai/" rel="noreferrer" target="_blank">Cydoc Website</a>,
                    'Technologies Used: React, Redux, Jest, Javascript, TypeScript'
                ]}
            />
            <ExperienceCard 
                logo={uofr} 
                company='CS Department' 
                title='CS Teaching Assistant' 
                time='August 2021 - Present' 
                description = {[
                    'Lead lab sessions and office hours to help students learn about the foundations of Computer Science. Evaluate labs, projects, and tests.',
                    'Refine student understanding by providing constructive feedback and resolve any inquiries students may have.',
                    'Course: Data Structures and Algorithms (3 semesters), Introduction to HCI (1 semester)'
                ]}
            />
            <ExperienceCard 
                logo={rochci} 
                company='ROC-HCI Lab' 
                title='Research Assistant' 
                time='April 2022 - May 2023' 
                description = {[
                    'Investigated 5 strategies to integrate Machine Learning (ML) in K-12 education and explored its applications in existing inquiry-based learning frameworks within Education Technology',
                    'Design, test, and update the SmileyDiscovery web system and Authoring Recommendation Tool to improve scientific discovery in K-12 education.',
                    'Created educator-friendly lesson plans on ML techniques to help students discover the world using K- Means Clustering, K-Nearest Neighbor, and Tree Classification algorithms on scientific observations',
                    <a href="https://inter-play-lab.github.io/FaceOverlay_Publish/HTML/DataNarrative.html" rel="noreferrer" target="_blank">SmileyDiscovery System</a>,
                    "Technologies Used: Python, Jupyter Notebook, Scikit-Learn, Pandas, Figma, Miro"
                ]}
            />
            
        </div>
    )
}

export default Experience;