import React, { useState } from "react";
import idc from "../pages/images/idc_challenge.jpeg";
import computingface from "../pages/images/facerecog.png";
import sec3comp from "../pages/images/sec3Model.png";
import ReactDOM from "react-dom";
import physics from "../pages/images/Physics.png";
import circuit from "../pages/images/metronome_elec.jpeg"
import calc from "../pages/images/mathcalc.png"
import compcalc from "../pages/images/compcalc.png"
import sciencecomm from "../pages/images/sciencecomm.png"
import "../styles.css";

// Function for a single image with zoom functionality
function SingleImage({ src, alt, title, description }) {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <div
      style={{
        width: zoomed ? "80%" : "30%",
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "20px",
        transition: "width 0.3s ease-in-out",
      }}
      onClick={toggleZoom}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "auto", cursor: "pointer" }}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Images from local files
const localImages = [
  {
    src: idc,
    alt: "Integrated Design Challenge",
    title: "Integrated Design Challenge",
    description: "Robot line trace and environment detection",
  },
  {
    src: computingface,
    alt: "Secondary 4 Computing+ Coursework",
    title: "Secondary 4 Computing+ Coursework",
    description: "Face recognition and virtual props",
  },
  {
    src: sec3comp,
    alt: "Secondary 3 Computing+ Coursework",
    title: "Secondary 3 Computing+ Coursework",
    description: "Machine Learning on Spam Detection",
  },
  {
    src: physics,
    alt: "Physics Performance Task",
    title: "Physics Performance Task",
    description:
      "The task was to create an antenna that can receive radio waves. It will receives a sound wave that is in a form of a morse code is sent at a specfic frequency. After receiving the sound wave, it will be converted back to text by code.",
  },
  {
    src: circuit,
    alt: "Electronics Performance Task",
    title: "Electronics Performance Task",
    description:
      "The task was to create a metronome using a 555-timer in astable mode. Using a potentiometer to change the resistance in order to change the period of the electrical pulses produced from the 555-timer.",
  },
  {
    src: calc,
    alt: "Extra",
    title: "Calculus Extension",
    description:
      "This was an extra project I had done. This was to calculate the surface area and volume of an equation when it is revolving around the x-axis.",
  },
  {
    src: compcalc,
    alt: "Extra",
    title: "Calculus Extension 2 using Python",
    description:
      "In addition, I was able to use python and sympy to make some simple calculations. This code allows me to get the surface area and volume of an equation when revolved around the x-axis.",
  },
  {
    src: sciencecomm,
    alt: "Extra",
    title: "Science Communication",
    description:
      "The task was to write a pop science article about a research article. My group was tasked to write about Optimising connectivity solutions for anarboreal gliding mammal. I learnt how to be clear and concise while using words that are not too hard for readers to understand. ",
  }
];

// Function for displaying local images
function LocalProjects() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {localImages.map((image) => (
        <SingleImage key={image.src} {...image} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Projects</h1>
      <LocalProjects />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
