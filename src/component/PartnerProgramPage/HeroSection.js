import React from 'react';
// import { Row, Col } from "react-bootstrap";
import PPHand from "../../assets/PPHand.png";

function HeroSection() {
  return (
    





<div className="hero-section"> 
        <div>
          <h1 className="hero-Section-hedline">
          Welcome to the <span className="helight">Avinya Partner</span>
           Program
        
          </h1>
          <button className="hero-btn-1">Join Now </button>
          <button className="hero-btn-2">Book A Demo</button>
        </div>
        <div  className="hero-img-section"><img className="hero-img" src={PPHand} alt="Hero img" width={400} /></div>
      </div>
  )
}

export default HeroSection