import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
0%,
100% {
    border-radius: 50%;
    transform: rotate(0deg);
    background-color: pink;
}
50%{
    border-radius: 0%;
    transform: rotate(180deg);
    background-color: lightblue;
}`;

const rotateSquareCircle = keyframes`
    from{
        border-radius: 0%;
        transform: rotate(180deg);
        background-color: pink;
    },
    to{
        border-radius: 50%;
        transform: rotate(0deg);
        background-color: lightblue;
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
margin: 70px 40px;
text-align: center;
padding: ${props => props.click ? '30px 0' : '170px 0'};
background-color: pink;
border-radius: ${props => props.click ? '10%' : '50%'};
animation: ${props => props.click ? rotateCircleSquare : rotateSquareCircle} 500ms linear;
`

const ProjectsCard = (props) => {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick);
    };

    return (
        <div onClick={handleClick}>
            <ProjectCircle click={isClick}>
                {isClick ?  <div><h3 style={{fontSize: '30px'}}>{props.title}</h3><p style={{fontSize: '25px', padding: '0 5%'}}>{props.summary}</p></div>:
                <h1 style={{fontSize: '35px'}}>{props.title}</h1>}
            </ProjectCircle>

        </div>
    )
}

export default ProjectsCard;