import React from "react";
import NavBar from "../../NavBar/NavBar";
import Wrapper from "../../Wrapper/Wrapper";
import ContactMe from "../../ContactMe/ContactMe";


function Contact(){
  return (
  <div>
    <NavBar />
    <Wrapper>
      <ContactMe/>
    </Wrapper>
  </div>
  )
}

export default Contact;
