import React from 'react'
import pic from "../images/Sam_head.png"

function About(){
    return (
        // <div className="ui segment" style={{backgroundColor: 'transparent', marginTop: '20rem'}}>
            <div className="ui two column grid" style={{paddingTop: '15rem', paddingBottom: '15rem'}}>
                <div className="column" style={{paddingLeft: '15%'}}>
                    <img src={pic} alt="Sam HeadShot" width='300' length='300' style={{borderRadius: '300px', border: "6px solid #0F3443"}}/>
                </div>
                <div className="column" style={{display: 'grid', alignItems: 'center'}}>
                    <h1 className="subTitle" style={{marginBottom: '0px'}}>About </h1>
                    <hr style={{border: 'none', height: '3px', backgroundColor: '#fff', marginTop: '0px', marginLeft: '0', width: '85%'}}/>
                    <p className="aboutBody">
                    
                        Hey, I'm Samuel Frank and I am a Junior at the University of Rochester
                        studying Computer Science and Accounting. I'm passionate about designing
                        and creating software tools that help people reach their fullest potential. 
                        I strive to continuously challenge myself and learn more about the product
                        
                    </p> 
                </div>
            </div>
        // </div>
    )
}

export default About;