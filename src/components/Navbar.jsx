import React, {useState, useEffect} from 'react';
import Hamburger from "./Hamburger";
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
.navigation{
    list-style-type: none;
    float: right;
    display: flex;
}

.hamburger{
    display: none;
}
@media (max-width: 1000px){
    .hamburger{
        display: flex;
        float: right;
        height: 40px;
        padding-top: 10px;
        margin-right: 10px;
    }

    .navigation{
        padding-top: 40px;
        display: block;
        padding-left: 0;
        margin: 0 5px 0 0;
        background-color: #aaa;
        padding-bottom: 20px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
       
        overflow: hidden;
        transition: max-height 0.5s ease;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
    }

    .button{
        width: 200px;
        height: 60px;
        background-color: #aaa;
        position: relative;
        margin-top: -40px;
    }
}
`;

const Anchor =styled.a`
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
    const [isActive, setIsActive] = useState('Home'); 
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [setHeight, setHeightState] = useState('50px');

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
        setHeightState(hamburgerOpen? '50px' : '325px')
        console.log("clicked")
    }


    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
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
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[prevScrollPos, isActive, handleScroll]);

    return (
        
        <NavBar>
        
        <Anchor href='#top' style={{float: 'left', fontFamily:'Playfair Display', fontSize: '25px'}}>Samuel Frank</Anchor>
            <ul className= "navigation" style={{maxHeight: `${setHeight}`}}>
                <div className="button" onClick={toggleHamburger}></div>
                <li><Anchor id="navigation" className={isActive === 'Home' ? 'active': ''} href='#top'>Home</Anchor></li>
                <li><Anchor id="navigation" className={isActive === 'About' ? 'active': ''} href='#About'>About</Anchor></li>
                <li><Anchor id="navigation" className={isActive === 'Experience' ? 'active': ''} href='#Experience'>Experience</Anchor></li>
                <li><Anchor id="navigation" className={isActive === 'Projects' ? 'active': ''} href='#Projects'>Projects</Anchor></li>
                <li><Anchor id="navigation" className={isActive === 'Leadership' ? 'active': ''} href="#Leadership">Leadership</Anchor></li>
            </ul>
            
            
            <style jsx> {`
                @media(max-width: 1000px) {
                    #navigation{
                        // display: ${hamburgerOpen? 'block': 'none'};
                        display: ${setHeight =='300px'? 'block': 'inline-block'};
                        
                        
                        width: 200px;
                    }
                }
            `}</style>
        </NavBar>
    )
};

export default Navbar;