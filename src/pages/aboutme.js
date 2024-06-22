import React from 'react';
import codewars from "../pages/images/codewarsrank.png";
import "./aboutme.css"
export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-left">
        <h2>About Me</h2>
        <p>
          {/* Write your description about yourself here */}
          I am a secondary four student currrently studying in School of Science and Technology. I am currently enrolled in the SST-Ngee Ann Polytechnic Integrated Diploma Programme. Currently in SST, I am taking the applied subject engineering+ which consists of electronics, computing and physics.
        </p>
      </div>
      <div className="about-me-right">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (React)</li>
          <li>Python</li>
          <li>C++</li>
          {/* Add more skills as needed */}
          <image src={codewars} />
        </ul>
      </div>
    </div>
  );
}
