import React from "react";
import Typewriter from "typewriter-effect";


function Header() {
    return (
        <div id='Home' style={{paddingBottom: '20rem', paddingTop: '2rem'}}>
            <div className="left">
                <h1 className="intro reveal">
                    Hello.<br/>
                    I'm<span className="name"> Samuel Frank</span><br />
                    <span className="positions">
                        <Typewriter 
                        options={{
                            strings: ['A Student', 'A Software Engineer', 'A Ravenclaw'],
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