import React from 'react'
import pic from "../images/Sam_head.png"

function About(){
    return (
        <div id='About' style={{paddingTop: '10rem', paddingBottom:'15rem'}}>
            <div  style={{padding: '11rem 0', display: 'flex', flexDirection: 'row'}}>
                <div style={{margin: '0 auto'}}>
                    <img src={pic} alt="Sam HeadShot" width='300' length='300' style={{borderRadius: '300px', border: "6px solid #0F3443"}}/>
                </div>
                <div style={{margin: '0 auto'}}>
                <h1 className="subTitle" style={{marginBottom: '0px'}}>About </h1>
                    <hr style={{border: 'none', height: '3px', backgroundColor: '#fff', marginLeft: '0', width: '100%'}}/>
                    <br/>
                    <p className="aboutBody" style={{lineHeight: '1.5', fontSize: '22px'}}>
                    
                        Hey, I'm Samuel Frank and I am a Junior at the University of Rochester
                        studying Computer Science and Accounting. I'm passionate about designing
                        and creating software tools that help people reach their fullest potential. 
                        I strive to continuously challenge myself and learn more about the product
                        
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default About;