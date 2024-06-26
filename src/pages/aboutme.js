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
          I am Seow Jie Rui Gerald, a Secondary Four student studying at the School of Science and Technology (SST). I am currently enrolled in the SST-Ngee Ann Polytechnic Integrated Diploma Programme. In SST, I am taking the applied subject Engineering+ which consists of Electronics, Computing+ and Physics.
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
          <h1>Codewars: </h1>
          <img src={codewars} alt="Codewars Rank" height="100" width="400"/>
          </ul>
      </div>
      
    </div>
  );
}
