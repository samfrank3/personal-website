import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components'

const SamCard = styled.div`
    margin: 40px auto;
    border-radius: 25px;
    width: 70%;
    height:265px;
    background: #F9FEFF;
    
`;
const SamBack = styled.div`
    display: flex;
    flex-direction: row;
    height:265px;
    overflow: auto;
`;
const SamFront = styled.div`
    display: flex;
    flex-direction: row;
    height:265px;
`
const FadeBack = styled.div`
    width:74%;
    animation: ${props => props.hovering ? fadeOut: fadeIn} 500ms linear;
`;

const FadeFront = styled.div`
    margin: auto;
    textAlign: center;
    color: #041924;
    animation: ${props => props.hovering ? fadeOut: fadeIn} 500ms linear;
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

const ExperienceCard = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = () =>{
        setIsHovering(true);
    }
    
    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return(
        <div>
            <SamCard onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} hovering={isHovering}>
                {isHovering? 
                    <SamBack hovering={isHovering}>
                    <div style={{width: '24%', textAlign: 'center', paddingTop: '30px'}}>
                        <img src={props.logo} alt='logo' style={{width:'150px', height:'150px'}} />
                        <h1 style={{fontSize: '24px', color: '#041924'}}>{props.company}</h1>
                    </div>
                    <div style={{padding: '2px', backgroundColor: '#041924'}}></div>
                    <FadeBack>
                        <ul>
                            {props.description.map(item => {
                                return <li key={item.toString()} style={{fontSize: '21px', color: '#041924', fontFamily: 'Roboto', lineHeight: '1.5'}}>{item}</li>
                            })}
                        </ul>
                    </FadeBack>
                   </SamBack>
                :
                <SamFront hovering={isHovering}>
                    <div style={{width: '24%', textAlign: 'center', paddingTop: '30px'}}>
                        <img src={props.logo} alt='logo' style={{width:'150px', height:'150px'}} />
                        <h1 style={{fontSize: '24px', color: '#041924'}}>{props.company}</h1>
                    </div>
                    <div style={{padding: '2px', backgroundColor: '#041924'}}></div>
                    <FadeFront>
                        <h2 style={{textAlign: 'center'}}>{props.title}</h2>
                        <h3 style={{textAlign: 'center'}}>{props.time}</h3>
                    </FadeFront>
                </SamFront>
                }
            </SamCard>
        </div>
    )
}
export default ExperienceCard;