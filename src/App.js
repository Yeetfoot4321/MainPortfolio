import React, { useState, useRef } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Certifications from "./components/Certifications"; // Adjust path if needed
import Project from "./pages/Projects";
import Experience from "./components/Timeline";
import Aboutme from "./pages/aboutme";
import Homepage from "./components/homepage";
import "./App.css";

function App() {
  const homepage = useRef(null);
  const aboutme = useRef(null);
  const projects = useRef(null);
  const certifications = useRef(null);
  const experiences = useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };


  return (
    <div className="App">
      <ScrollToTop />
      <nav className="hero fixed-top">
        {/* Changed div to nav for semantic meaning */}
        <ul>
          <li onClick={() => scrollToSection(homepage)} className="link">
            Home
          </li>
          <li onClick={() => scrollToSection(aboutme)} className="link">
            About me
          </li>
          <li onClick={() => scrollToSection(projects)} className="link">
            Projects
          </li>
          <li onClick={() => scrollToSection(certifications)} className="link">
            Certifications
          </li>
          <li onClick={() => scrollToSection(experiences)} className="link">
            Experiences
          </li>
        </ul>
      </nav>{/* Conditionally render particles */}
      <div ref={homepage} className="homepage">
        {/* Pass handleHideParticles prop to Homepage if needed */}
        <Homepage />
      </div>
      <div ref={aboutme} className="aboutme">
        <Aboutme />
      </div>
      <div ref={projects} className="projects">
        <Project />
      </div>
      <div ref={certifications} className="certifications">
        {/* No props needed for Certifications component */}
        <Certifications />
      </div>
      <div ref={experiences} className="experiences">
        <h3>Experiences</h3>
        <Experience />
      </div>
    </div>
  );
}

export default App;
