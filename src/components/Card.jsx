import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components'

const SamCard = styled.div`
    margin: 40px auto;
    width: 70%;
    height: 300px;
    background: linear-gradient(90deg, #2BC0E4, #0F3443);
`;

const SamCardHover=styled.div`
    background: rgba(0,0,0,0.4);
    height: 100%;
    animation: ${props => props.out ? fadeOut : fadeIn} 0.3s linear;
`;

const fadeIn=keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;

const Card = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseIn = () =>{
        setIsHovering(true);
    }
    
    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        isHovering ?
        <SamCard onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
            <SamCardHover>
                <span style={{fontSize: '21px', lineHeight: '1.5'}}>
                    <ul style={{padding: '25px 60px', fontFamily: 'Helvetica Neue'}}>
                        <li style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </span>
            </SamCardHover>
        </SamCard>
        :
        <SamCard className="ui two column grid" style={{margin: '40px auto'}} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                <div className="column" style={{width: '20%', padding: 0, textAlign: 'center'}}>
                    <div className="img" style={{marginTop: '20px'}}>
                        <img src={props.logo} width='150' height='150' alt='logo'/>
                    </div>
                    <h1>{props.company}</h1>
                </div>
                <div style={{padding: '2px', backgroundColor: '#fff'}}></div>
                <div className="column" style={{padding: 0, margin: 'auto', textAlign: 'center'}}>
                    <h2>{props.title}</h2>
                    <h3>{props.time}</h3>
                </div>
        </SamCard>
    );
}

export default Card;