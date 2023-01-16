import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Hamburger = ({isOpen}) => {
    return(
        <>
            <div className = "hamburger" >
                <div style= {{backgroundColor: '#FFF'}} className="burger burger1"/>
                <div style= {{backgroundColor: '#FFF'}} className="burger burger2"/>
                <div style= {{backgroundColor: '#FFF'}} className="burger burger3"/>
            </div>

            <style jsx>{`
                .hamburger{
                    padding-top: 10px;
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    {/* z-index: 10; */}
                    background-color: #F9FEFF;
                }

                .burger{
                    background-color: #F9FEFF;
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: black;
                    transform-origin: 1px;
                    transition: all 0.3 linear;
                }

                .burger1{
                    transform: ${ isOpen ? 'rotate(50deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ isOpen ? 'translateX(-100%)' : 'translateX(0)'};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3{
                    transform: ${ isOpen ? 'rotate(-50deg)' : 'rotate(0)'};
                }

            `}</style>
        </>
    );
};

// export default function Hamburger({ isOpen }) {
//     return(
//         <>
//             <div className="hamburger">
//                 <div style= {{backgroundColor: '#FFF'}} className="burger burger1"/>
//                 <div style= {{backgroundColor: '#FFF'}} className="burger burger2"/>
//                 <div style= {{backgroundColor: '#FFF'}} className="burger burger3"/>
//             </div>

//             <style jsx>{`
//                 .hamburger{
//                     {/* padding-top: 10px; */}
//                     width: 2rem;
//                     height: 2rem;
//                     display: flex;
//                     justify-content: space-around;
//                     flex-flow: column nowrap;
//                     {/* z-index: 10; */}
//                     background-color: #F9FEFF;
//                 }

//                 .burger{
//                     background-color: #F9FEFF;
//                     width: 2rem;
//                     height: 0.25rem;
//                     border-radius: 10px;
//                     background-color: black;
//                     transform-origin: 1px;
//                     transition: all 0.3 linear;
//                 }

//                 .burger1{
//                     transform: ${ isOpen ? 'rotate(50deg)' : 'rotate(0)'};
//                 }
//                 .burger2{
//                     transform: ${ isOpen ? 'translateX(-100%)' : 'translateX(0)'};
//                     opacity: ${ isOpen ? 0 : 1};
//                 }
//                 .burger3{
//                     transform: ${ isOpen ? 'rotate(-50deg)' : 'rotate(0)'};
//                 }

//             `}</style>
//         </>
//     )
// }

export default Hamburger;