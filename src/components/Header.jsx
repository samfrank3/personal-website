import React from "react";
import Typewriter from "typewriter-effect";


function Header() {
    return (
        <div style={{paddingBottom: '15rem'}}>
            <div className="left">
                <h1 className="intro">
                    Hello.<br/>
                    I'm<span className="name"> Samuel Frank</span><br />
                    <span className="positions">
                        <Typewriter 
                        options={{
                            strings: ['A Student', 'A Computer Scientist', 'A Software Engineer'],
                            autoStart: true,
                            loop: true
                        }}
                        />
                    </span>
                </h1>
            </div>
        </div>
        
    )
}

export default Header;