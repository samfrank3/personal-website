import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
width: 100%;
height: 60px;
display: block;
font-family: Roboto;
position: fixed;
z-index:5;
top: 0;
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
`;

const Anchor =styled.a`
float: left;
color: #0F3443;
text-align: center;
padding: 15px;
text-decoration: none;
font-size: 1.5rem;
&:hover  {
    color: #FFF;
    border-bottom: 2px solid white;
}
&.active{
    color: #FFF;
    border-bottom: 2px solid white;
}
`;

const Navbar =() => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isActive, setIsActive] = useState('Home')

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if(currentScrollPos <= 622){
            setIsActive('Home');
        }else if(currentScrollPos <=1635){
            setIsActive('About');
        }else if(currentScrollPos <=2873){
            setIsActive('Experience');
        }else if(currentScrollPos <=4276){
            setIsActive('Projects');
        }else {
            setIsActive('Leadership');
        }
        setPrevScrollPos(currentScrollPos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[prevScrollPos, isActive, handleScroll]);

    return (
        <NavBar>
            <Anchor className={isActive === 'Home' ? 'active': ''} href='#top'>Home</Anchor>
            <Anchor className={isActive === 'About' ? 'active': ''} href='#About'>About</Anchor>
            <Anchor className={isActive === 'Experience' ? 'active': ''} href='#Experience'>Experience</Anchor>
            <Anchor className={isActive === 'Projects' ? 'active': ''} href='#Projects'>Projects</Anchor>
            <Anchor className={isActive === 'Leadership' ? 'active': ''} href="#Leadership">Leadership</Anchor>
            <Anchor href='#top' style={{float: 'right', fontFamily:'Playfair Display'}}>Samuel Frank</Anchor>
        </NavBar>
    )
};

export default Navbar;