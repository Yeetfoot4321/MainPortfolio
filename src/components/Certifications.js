import React, { useState } from "react";
import "./certifications.css"; // Import your CSS file
import { certificationsData } from "./certificationsData"; // Adjust path if needed

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initial state
  const [selectedCert, setSelectedCert] = useState(null); // Track currently selected cert for zooming

  const filteredCerts = certificationsData.filter(
    (cert) => cert.category === selectedCategory || selectedCategory === "All"
  );

  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleImageClick = (cert) => setSelectedCert(cert);

  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <nav>
        <ul>
          <li
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </li>
          <li
            className={selectedCategory === "Computing+" ? "active" : ""}
            onClick={() => handleCategoryChange("Computing+")}
          >
            Computing+
          </li>
          <li
            className={selectedCategory === "Education" ? "active" : ""}
            onClick={() => handleCategoryChange("Education")}
          >
            Education
          </li>
          <li
            className={selectedCategory === "Others" ? "active" : ""}
            onClick={() => handleCategoryChange("Others")}
          >
            Others
          </li>
        </ul>
      </nav>
      <div className="cert-grid">
        {filteredCerts.map((cert, index) => (
          <div className="cert" key={cert.title}>
            <SingleImage // Use SingleImage component here
              cert={cert}
              onZoomClick={handleImageClick} // Pass handleImageClick for zooming
            />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
        {/* Add a closing div for every two certifications */}
        {filteredCerts.length % 2 !== 0 && (
          <div className="cert-grid__spacer"></div>
        )}
      </div>
    </div>
  );
};

const SingleImage = ({ cert, onZoomClick }) => {
  const [zoomed, setZoomed] = useState(false);

  const handleZoom = () => {
    setZoomed(!zoomed); // Toggle zoomed state
    onZoomClick(cert); // Pass cert information for tracking (optional)
  };

  return (
    <div
      className={`single-image ${zoomed ? "zoomed" : ""}`}
      onClick={handleZoom}
    >
      <img src={cert.imageSrc} alt={cert.title} />
    </div>
  );
};

export default Certifications;
