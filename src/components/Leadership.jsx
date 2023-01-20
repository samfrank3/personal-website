import React from 'react';
import image1 from '../images/CSUG.JPG';
import image2 from '../images/DandyHacks.JPG';
import image3 from '../images/UXD.JPG';
import LeadershipCard from './LeadershipCard';

const Leadership = () => {
    return (
        <div id='Leadership' style={{paddingTop: '5rem', margin: '0 auto'}}>
            <h1 className="subTitle" style={{textAlign: 'center', color: '#F9FEFF'}}>Leadership Experience</h1>
            <LeadershipCard 
                club="Computer Science Undergraduate Council (CSUG)" 
                title="President" 
                content= "CSUG is the University of Rochester's biggest Computer Science student organization focused on building a community that supports each other. My main responsibility is to host and organize professional development and social events for both CS majors and people interested in CS. I delegate tasks to fellow E-Board members, optime student resources, and act as a liaison between the UR CS department and the student body. <br/><b>Previous Roles:</b> First-Year Representative (2020-2021), Business Manager (2021-2022), and Vice President (2022)"
                image={image1} />
            <LeadershipCard
                club="DandyHacks Hackathon" 
                title="Finance Team Lead (2021-2023)" 
                content= "DandyHacks is the University of Rochester's largest hackathon. We are focused on providing a safe environment where students can cultivate their technical and social skills even if they're new to hacking. My main responsibility is to communicate with potential sponsors and vendors about funding opportunities and estimated costs respectively. I also lead a team of three to help plan budgets, create balance sheets, and reconcile the ledger. We have raised a total of $25,000 over my tenure." 
                image={image2}
            />
            <LeadershipCard 
                club="User Experience Design Club" 
                title="Business Manager" 
                content = "User Experience Design is a newly established student organization focused on introducing UX to the University of Rochester. My main responsibility is to fundraise and allocate costs to promote UX-related events and activities. Among hosting UX-related events, we also have experiential learning projects where members can work on semester-long UX projects led by other students who have UX experience. As part of the experiential learning, I am also working for a student-led startup, Ushop, which aims to have a campus-based second-hand marketplace platform." 
                image={image3}
            />
        </div>
    )
}
export default Leadership;