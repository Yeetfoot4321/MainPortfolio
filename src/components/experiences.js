import React from "react";
import ReactDOM from "react-dom";
import Image from "react-image-enlarger";
import idc from "../pages/images/idc_challenge.jpeg";
import computingface from "../pages/images/facerecog.png";
import sec3comp from "../pages/images/sec3Model.png"// Assuming your styles.css is still in the same directory
import "../styles.css"
// Function for a single image with zoom functionality
function SingleImage({ src, alt, title, description }) {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <div style={{ width: "30%", border: "1px solid #ddd", padding: "10px", marginBottom: "20px" }}>
      <Image
        src={src}
        alt={alt}
        zoomed={zoomed}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Images from local files
const localImages = [
  { src: idc, alt: "Integrated Design Challenge", title: "Integrated Design Challenge", description: "Robot line trace and environment detection" },
  { src: computingface, alt: "Secondary 4 Computing+ Coursework", title: "Secondary 4 Computing+ Coursework", description: "Face recognition and virtual props" },
  { src: sec3comp, alt: "Secondary 3 Project", title: "Secondary 3 Project", description: "Project description" },
  // Assuming you have an image file named hmgics.jpg
  { src: "hmgics.jpg", alt: "HyundaiHMGICS", title: "HyundaiHMGICS", description: "Project description" },
];

// Function for displaying local images
function LocalProjects() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      {localImages.map(image => (
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
