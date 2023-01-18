import React, {useState} from 'react';
import styled from 'styled-components'

const ProjectCircle = styled.div`
width: 400px;
height: 600px;
margin: 70px 20px;
text-align: center;
padding: 30px 0;
background: #F9FEFF;
border-radius: 10%;
`

const Anchor = styled.a`
color: #041924;
&:hover{
    color: #041924;
    ${'' /* border-bottom: 3px solid #75f0c3; */}
}
`;

const Technologies = styled.div`
margin: 0 auto;
font-size: 1rem;
line-height:1;
height: 35px;
width: 80px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
color: #F9FEFF;
background-color: #2a3b42;
`;

const Button = styled.button`
    margin: 10px;
    width: 275px;
    height: 50px;
    cursor: pointer;
    border-radius: 30px;
    color: #F9FEFF;
    background-color: #041924;
    font-size: 20px;
    &:hover{
        color:#75f0c3;
    }
`;

const ProjectsCard = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
            <ProjectCircle onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} hovering={isHovering}>
                <div>
                    <h3 style={{fontSize: '35px'}}>
                        <Anchor href={props.links.link} target="_blank" rel="noopener noreferrer">{props.title}</Anchor>
                    </h3>
                    <p style={{fontSize: '25px', padding: '0 5%', color: '#041924', height: '250px'}}>{props.summary}</p>
                    <div style={{display: 'flex', rowDirection:'row', margin: '0 15%'}}>
                        {props.technology.map(item => {return <Technologies>{item}</Technologies>})}
                    </div>
                    <div style={{margin: '1.5rem'}}>
                        {props.links.map(item => {return<a href={item.link} target="_blank" rel="noopener noreferrer"><Button>{item.name}</Button></a>})}
                    </div>
                    
                </div>
            </ProjectCircle>
    )
}

export default ProjectsCard;