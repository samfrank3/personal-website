import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import pic from "../images/Sam_head.png";

const AboutBody=styled.div`
width: auto;
height: auto;
padding: 30px 0 0 0;
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
                    {isDesktop ? (<h1 className="subTitle" style={{marginBottom: '0', color: '#F9FEFF', fontFamily: 'Playfair Display'}}>About</h1>) 
                    : (<h1 className="subTitle" style={{textAlign: 'center', color: '#F9FEFF', fontFamily: 'Playfair Display'}}>About</h1>)}
                    <hr style={{border: 'none', height: '3px', backgroundColor: '#F9FEFF', width: '100%'}}/>
                    <br/>
                    <p className="aboutBody">
                    
                        Hey! I'm Samuel Frank and I am a Senior at the University of
                        Rochester pursuing a dual degree in Computer Science and 
                        Accounting. I'm passionate about designing and creating 
                        software tools to help empower people to tackle intricate issues. 
                        I strive to continuously challenge myself and learn about 
                        the latest trends and technologies. Please check out my <a href="https://drive.google.com/file/d/1U7-rSjomvLH0CIF0v0Z_GxMCid_hqCaj/view?usp=sharing" target="_blank" style={{color: '#75f0c3', borderBottom: '2px solid #75f0c3'}} rel="noreferrer">resume!</a>
                        
                    </p> 
                </AboutBody>
            </div>
            <style jsx>{`
            .aboutBody{
                font-size: 1.6rem;
                width: 600px;
                line-height: 1.5;
                color: #F9FEFF;
                display: inline-block;
                margin: 0 auto;
            }
            @media(max-width: 1000px){
                .aboutBody{
                    font-size: 1.3rem;
                    text-align: center;
                }
            }
            `}</style>
        </div>
    )
}

export default About;