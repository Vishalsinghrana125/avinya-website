import React from "react";
// import { div, div } from "react-bootstrap";
import "./HeroSection.css";
import Heroimg from "../../assets/heroimg.svg"

function HeroSection() {
  return (
   
      <div className="hero-section"> 
        <div className="hero-head">
          <h1 className="hero-Section-hedline">
            Get your <span className="helight">Own Teaching App </span>
             today and put your{" "}
            <span className="helight">
              Teaching
              online!
            </span>
          </h1>
          <button className="hero-btn-1">Join Now </button>
          <button className="hero-btn-2">Book A Demo</button>
        </div>
        <div className="hero-img-section"><img className="hero-img" src={Heroimg} alt="Hero img" /></div>
      </div>
   
  );
}

export default HeroSection;
