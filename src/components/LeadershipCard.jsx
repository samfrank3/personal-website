import React, {useState, useRef} from 'react';
import './LeadershipCard.css';
import {Icon} from "@iconify/react";

const LeadershipCard = (props) => {
    const [setActive, setActiveState]=useState("");
    const [setHeight, setHeightState]=useState('0px');
    const [setRotate, setRotateState]=useState('accordion-icon');
    const content=useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? 'active': '')
        setHeightState(
            setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive=== 'active' ? 'accordion-icon': 'accordion-icon rotate'
        );
    }

    return (
        <div className="accordion-section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <img className="image" src={props.image} alt="img"></img>
                <div className='accordion-title'><span className="title">{props.title}</span></div>
                <div className="accordion-club"><span className="club">{props.club}</span><Icon className={`${setRotate}`} icon="mdi:chevron-right" width="2em"/></div>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}` }} className="accordion-content">
                <hr style={{marginTop: '0px'}}/>
                <div className="accordion-text" dangerouslySetInnerHTML = {{__html: props.content}} />
            </div>
        </div>
    );
};

export default LeadershipCard;