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
float: right;
color: #F9FEFF;
text-align: center;
padding: 15px;
text-decoration: none;
font-size: 1.5rem;
&:hover  {
    color: #75f0c3;
    border-bottom: 2px solid #75f0c3;
}
&.active{
    background-color: transparent;
    color: #75f0c3;
    border-bottom: 2px solid #75f0c3;
}
`;

const Navbar =() => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isActive, setIsActive] = useState('Home')
    
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos);
        if(currentScrollPos <= 675){
            setIsActive('Home');
        }else if(currentScrollPos <=1369){
            setIsActive('About');
        }else if(currentScrollPos <=2639){
            setIsActive('Experience');
        }else if(currentScrollPos <=3630){
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
            <Anchor href='#top' style={{float: 'left', fontFamily:'Playfair Display', fontSize: '25px'}}>Samuel Frank</Anchor>
            <Anchor className={isActive === 'Leadership' ? 'active': ''} href="#Leadership">Leadership</Anchor>
            <Anchor className={isActive === 'Projects' ? 'active': ''} href='#Projects'>Projects</Anchor>
            <Anchor className={isActive === 'Experience' ? 'active': ''} href='#Experience'>Experience</Anchor>
            <Anchor className={isActive === 'About' ? 'active': ''} href='#About'>About</Anchor>
            <Anchor className={isActive === 'Home' ? 'active': ''} href='#top'>Home</Anchor>
            
        </NavBar>
    )
};

export default Navbar;