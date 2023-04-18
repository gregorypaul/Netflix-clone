import React, { useState, useEffect } from 'react'
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState([]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if( window.scrollY > 200 ) {
                handleShow(true);
            } else 
                handleShow(false);     
        });
        return () => {
            window.removeEventListener("scroll", null);     
        };  
    }, [])
  return (
    <div className={`nav ${show && "nav__show"}`}>
        <img 
            className="nav__logo" 
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" 
            alt="Netflix logo" 
        />
    </div>
  )
}

export default Nav