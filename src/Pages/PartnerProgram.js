import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import HeroSection from "../component/PartnerProgramPage/HeroSection";
import PpPage from "../component/PartnerProgramPage/PpPage";
import EnrollProcess from "../component/PartnerProgramPage/EnrollProcess";
import Participate from "../component/PartnerProgramPage/Participate";
import ParticipateBtn from "../component/PartnerProgramPage/ParticipateBtn";
import PartnerRegistration from "../component/PartnerProgramPage/PartnerRegistration";




function PartnerProgram() {
  return (
    <>
      <Navbar />
      <HeroSection />
   <PpPage/>
   <EnrollProcess/>
   <Participate/>
   <ParticipateBtn/>

  
      <Footer />
    </>
  );
}

export default PartnerProgram;
