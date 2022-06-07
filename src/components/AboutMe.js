import React from "react";
import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <div id="AboutMe" className="AboutMe" ref={props.forwardedRef}>
      <h2>About Me</h2>
    </div>
  );
};

export default AboutMe;
