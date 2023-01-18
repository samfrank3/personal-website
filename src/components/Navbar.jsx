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
background: rgba(4,25,36,0.3);
brightness: 0.1;
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
    .navigation{
        padding-top: 40px;
        display: block;
        padding-left: 0;
        margin: 0 0px 0 0;
        padding-bottom: 20px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
       
        overflow: hidden;
        transition: max-width 0.5s ease;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
    }

    .button{
        width: 200px;
        position: relative;
        margin-top: -35px;
        cursor: pointer;
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
@media(max-width: 1000px){
    &:hover {
        color: #75f0c3;
        border-left: 4px solid #75f0c3;
        transition: all 0.2s cubic-bezier(.05,.27, .55,.98);
        border-bottom: none;
    }
    &.active{
        background-color: transparent;
        color: #75f0c3;
        border-left: 4px solid #75f0c3;
        border-bottom: none;
    }
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
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <ul className= "navigation" >
                <div className="button" onClick={toggleHamburger}>
                    <div className="burger burger1" />
                    <div className="burger burger2" />
                    <div className="burger burger3" />
                </div>
                <li><Anchor id="navigation" className={isActive === 'Home' ? 'active': ''} href='#top'>Home</Anchor></li>
                <li><Anchor id="navigation" className={isActive === 'About' ? 'active': ''} href='#About'>About</Anchor></li>
                <li><Anchor id="navigation" className={isActive === 'Experience' ? 'active': ''} href='#Experience'>Experience</Anchor></li>
                <li><Anchor id="navigation" className={isActive === 'Projects' ? 'active': ''} href='#Projects'>Projects</Anchor></li>
                <li><Anchor id="navigation" className={isActive === 'Leadership' ? 'active': ''} href="#Leadership">Leadership</Anchor></li>
            </ul>
            <style jsx> {`
                @media(max-width: 1000px) {
                    #navigation{
                        display: ${hamburgerOpen? 'block': 'none'};
                        width: 200px;
                    }
                    .navigation{
                        max-width: ${setHeight};
                        background-color: ${hamburgerOpen? '#2a3b42' : ''};
                    }

                    .button{
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: space-around;
                        height: 2.25rem;
                        padding-left: 10px;
                        padding-top: 5px;
                        background-color: ${hamburgerOpen? '#2a3b42' : ''};
                    }

                    .burger{
                        background-color: #F9FEFF;
                        width: 2rem;
                        height: 0.25rem;
                        border-radius: 10px;
                        transform-origin: 1px;
                        transition: all 0.3s linear;
                    }
                    .burger1{
                        transform: ${ hamburgerOpen ? 'rotate(45deg)' : 'rotate(0)'};
                        {/* background-color: ${hamburgerOpen? '#75f0c3': '#F9FEFF'} */}
                        background-color: #F9FEFF;
                    }

                    .burger2{
                        transform: ${hamburgerOpen ? 'translateX(100%)': 'translateX(0)'};
                        opacity: ${hamburgerOpen? '0': '1'};
                        background-color: #F9FEFF;
                    }

                    .burger3{
                        transform: ${ hamburgerOpen? 'rotate(-45deg)' : 'rotate(0)'};
                        {/* background-color: ${hamburgerOpen? '#75f0c3': '#F9FEFF'} */}
                        background-color: #F9FEFF;
                    }

                }
            `}</style>
        </NavBar>
    )
};

export default Navbar;