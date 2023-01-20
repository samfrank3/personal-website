import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import pic from "../images/Sam_head.png";

const AboutBody=styled.div`
width: auto;
height: auto;
padding: 30px;
margin: 0 auto;
`

function About(){
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1265);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1265)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div id='About' style={{paddingBottom: '10rem', paddingTop: '5rem', margin: '0 10%'}}>
            <div style={{padding: '11rem 0', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <div style={{margin: '0 auto'}}>
                    <img src={pic} alt="Sam HeadShot" width='350' length='350' style={{borderRadius: '300px'}}/>
                </div>
                <AboutBody>
                    {isDesktop ? (<h1 className="subTitle" style={{marginBottom: '0', color: '#F9FEFF'}}>About</h1>) 
                    : (<h1 className="subTitle" style={{textAlign: 'center', color: '#F9FEFF'}}>About</h1>)}
                    <hr style={{border: 'none', height: '3px', backgroundColor: '#F9FEFF', width: '100%'}}/>
                    <br/>
                    <p className="aboutBody" style={{lineHeight: '1.5', fontSize: '22px', color: '#F9FEFF'}}>
                    
                        Hey! I'm Samuel Frank and I am a Junior at the University of
                        Rochester pursuing a dual degree in Computer Science and 
                        Accounting. I'm passionate about designing and creating 
                        software tools to help people reach their fullest potential. 
                        I strive to continuously challenge myself and learn about 
                        the latest trends and technologies. Please check out my <a href="https://drive.google.com/file/d/1D5iejvP-b0TUNGACtHWGVozDrwxEvad6/view?usp=sharing" target="_blank" style={{color: '#75f0c3', borderBottom: '2px solid #75f0c3'}} rel="noreferrer">resume!</a>
                        
                    </p> 
                </AboutBody>
            </div>
        </div>
    )
}

export default About;