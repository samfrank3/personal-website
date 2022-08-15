import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components'

const rotateSquareCircle = keyframes`
    from{
        border-radius: 0%;
        transform: rotate(-180deg);
    },
    to{
        border-radius: 50%;
        transform: rotate(0deg);
    }
`;

const rotateCircleSquare = keyframes`
    from{
        border-radius: 50%;
        transform: rotate(180deg);
    }
    to{
        border-radius: 0%;
        transform: rotate(0deg);
    }
`;

const ProjectCircle = styled.div`
width: 400px;
height: 400px;
${'' /* cursor: pointer; */}
margin: 70px 20px;
text-align: center;
${'' /* padding: ${props => props.click ? '30px 0' : '170px 0'}; */}
padding: 30px 0;
background: #eee;
${'' /* background: linear-gradient(180deg, #2BC0E4, #0F3443); */}
${'' /* background: ${props => props.click ? 'linear-gradient(0deg, #2BC0E4, #0F3443)' : 'linear-gradient(180deg, #2BC0E4, #0F3443)'}; */}
${'' /* background: ${props => props.click ? 'linear-gradient(0deg, #00baa0, #008b90)' : 'linear-gradient(180deg, #00baa0, #008b90)'}; */}
${'' /* border-radius: ${props => props.click ? '10%' : '50%'};
animation: ${props => props.click ? rotateCircleSquare : rotateSquareCircle} 500ms linear; */}
border-radius: 10%;
`

const Anchor = styled.a`
color: #000;
&:hover{
    color: ${props => props.click ? '#2BC0E4': '#0F3443'};
    border-bottom: 3px solid ${props => props.click ? '#2BC0E4': '#0F3443'};
}
`;
const ProjectsCard = (props) => {
    const [isClick, setIsClick] = useState(true);

    const handleClick = () => {
        setIsClick(!isClick);
    };

    return (
            // <ProjectCircle onClick={handleClick} click={isClick}>
            //     {isClick? 
            //         <div>
            //             <h3 style={{fontSize: '35px'}}>
            //                 <Anchor href={props.link} target="_blank" rel="noopener noreferrer" click={isClick}>{props.title}</Anchor>
            //             </h3>
            //             <p style={{fontSize: '25px', padding: '0 5%', color: '#000'}}>{props.summary}</p>
            //         </div>
            //     :
            //         <h1 style={{fontSize: '35px'}}>
            //             <Anchor href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</Anchor>
            //         </h1>
            //     }
            // </ProjectCircle>
            <ProjectCircle>
                <div>
                    <h3 style={{fontSize: '35px'}}>
                        <Anchor href={props.link} target="_blank" rel="noopener noreferrer" click={isClick}>{props.title}</Anchor>
                    </h3>
                    <p style={{fontSize: '25px', padding: '0 5%', color: '#000'}}>{props.summary}</p>
                </div>
            </ProjectCircle>
    )
}

export default ProjectsCard;