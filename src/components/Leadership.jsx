import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'
import image1 from '../images/CSUG.png';
import image2 from '../images/DandyHacks.png';
import image3 from '../images/UXD.png';


const Leadership = () => {
    const slider = (
        <AwesomeSlider style={{width: '80%', height: '500px', margin: '0 auto'}} media = {[
            {source: image1},
            {source: image2},
            {source: image3}
        ]}
        />
    )
    return (
        <div id='Leadership' style={{paddingTop: '15rem', paddingBottom: '15rem', margin: '0 auto'}}>
            <h1 className="subTitle" style={{textAlign: 'center'}}>Leadership Experience</h1>
            <hr style={{border: 'none', height: '3px', backgroundColor: '#fff',marginBottom:'3rem', width: '33%'}}/>
            {slider}
        </div>
    )
}
export default Leadership;