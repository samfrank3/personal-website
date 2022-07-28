import React from 'react';
import styled from 'styled-components';
import {Icon} from "@iconify/react";

const FooterStyle=styled.div`
    text-align: center;
    padding: 50px 0;
`;

const IconLinks = styled.div`
    margin: 20px 0;
    color: #eee;

    & a {
        color: #eee;
        font-size: 25px;
        margin: 0 1em;
    }

    & a:hover{
        color: #34E89E;
    }
`;

function Footer() {
    const year = new Date().getFullYear();
    return (
        <FooterStyle>
            <IconLinks>
                <a href="https://www.linkedin.com/in/samuel-n-frank/" target="_blank" rel="noopener noreferrer"><Icon icon="akar-icons:linkedin-fill" width="3em"/></a>
                <a href="https://github.com/samfrank3" target="_blank" rel="noopener noreferrer"><Icon  icon="charm:github" width="2.5em" /></a>
                <a href="mailto:sfrank8@u.rochester.edu" target={"_blank"} rel="noopener noreferrer"><Icon icon="mdi:email-edit" width="3em"/></a>
            </IconLinks>
    
            <p>Copyright ⓒ {year} Samuel Frank</p>
        </FooterStyle>
    )
}

export default Footer;