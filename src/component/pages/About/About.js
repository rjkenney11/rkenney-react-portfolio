import React from "react";
import "./About.css";
import NavBar from "../../NavBar/NavBar";
import Wrapper from "../../Wrapper/Wrapper";
import AboutMe from "../../AboutMe/AboutMe";

function About() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <AboutMe />
    </Wrapper>
    </div>

  );
}

export default About;