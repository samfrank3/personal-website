import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
width: auto;
height: 50px;
display: block;
font-family: Roboto;
position: -webkit-sticky;
position: sticky;
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
    color: #f2f2f2;
}
`;

const Navbar =() => {
    return (
        <NavBar>
            <Anchor href='#top'>Home</Anchor>
            <Anchor href='#About'>About</Anchor>
            <Anchor href='#Experience'>Experience</Anchor>
            <Anchor href='#Projects'>Projects</Anchor>
            <Anchor href="#Leadership">Leadership</Anchor>
            <Anchor href='#top' style={{float: 'right', fontFamily:'Playfair Display'}}>Samuel Frank</Anchor>
        </NavBar>
    )
};

export default Navbar;