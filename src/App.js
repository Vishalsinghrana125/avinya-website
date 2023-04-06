import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import ContactUs from "./Pages/ContactUs";
import PartnerProgram from "./Pages/PartnerProgram";
import JoinNow from "./Pages/JoinNow";
import JoinNowMid from "./component/join/JoinNowMid";
import JoinNowFinal from "./component/join/JoinNowFinal";
import JoinNowStart from "./component/join/JoinNowStart";
import PartnerRegistration from "./component/PartnerProgramPage/PartnerRegistration";
import Registration from "./component/PartnerProgramPage/Registration";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/Contact-us" element={<ContactUs />} />
      <Route path="/partner-program" element={<PartnerProgram />} />
      <Route path="/join-now" element={<JoinNow/>} />

      <Route path="/join-now/joinnowmid" element={<JoinNowMid/>} />
      <Route path="/join-now/joinnowfinal" element={<JoinNowFinal/>} />
      <Route path="/join-now/" element={<JoinNowStart/>} />
      <Route path="/partner-program/registration" element={ <Registration/>}/>
    </Routes>
  );
}

export default App;
