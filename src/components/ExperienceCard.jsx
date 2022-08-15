import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components'

const SamCard = styled.div`
    margin: 40px auto;
    border-radius: 25px;
    width: 70%;
    height:265px;
    background: #eee;
    ${'' /* background: linear-gradient(0deg, #00baa0, #008b90); */}
    ${'' /* background: linear-gradient(45deg, #2bc0e4, #0f3443); */}
`;
const SamBack = styled.div`
    ${'' /* background: rgba(0,0,0,0.4); */}
    display: flex;
    flex-direction: row;
    height:265px;
    overflow: auto;
    ${'' /* animation: ${props => props.hovering ? fadeIn: fadeOut} 1s linear; */}
`;
const SamFront = styled.div`
    display: flex;
    flex-direction: row;
    height:265px;
    ${'' /* animation: ${props => props.hovering ? fadeOut: fadeIn} 1s linear; */}
`

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
                        <h1 style={{fontSize: '24px', color: '#445463'}}>{props.company}</h1>
                    </div>
                    <div style={{padding: '2px', backgroundColor: '#445463'}}></div>
                    <div style={{width:'74%'}}>
                        <ul>
                            {props.description.map(item => {
                                return <li style={{fontSize: '21px', color: '#445463', fontFamily: 'Roboto', lineHeight: '1.5'}}>{item}</li>
                            })}
                        </ul>
                    </div>
                    {/* <div>
                       <ul style={{fontSize: '21px', lineHeight: '1.5', color:'#445463', fontFamily: 'Roboto'}}>
                            {props.description.map(item => {
                                return <li>{item}</li>
                            })}
                       </ul>
                    </div> */}
                   </SamBack>
                :
                <SamFront hovering={isHovering}>
                    <div style={{width: '24%', textAlign: 'center', paddingTop: '30px'}}>
                        <img src={props.logo} alt='logo' style={{width:'150px', height:'150px'}} />
                        <h1 style={{fontSize: '24px', color: '#445463'}}>{props.company}</h1>
                    </div>
                    <div style={{padding: '2px', backgroundColor: '#445463'}}></div>
                    <div style={{margin: 'auto', textAlign: 'center', color: '#445463'}}>
                        <h2>{props.title}</h2>
                        <h3>{props.time}</h3>
                    </div>
                </SamFront>
                }
            </SamCard>
        </div>
    )
}
export default ExperienceCard;