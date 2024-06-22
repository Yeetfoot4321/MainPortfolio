import React from 'react';
import './homepage.css'; // Import your CSS file
import { TypeAnimation } from 'react-type-animation';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Gradient background with animation */}
      <div className="background-animation" ></div>

      {/* Text content with type animation */}
      <h1>Hello I'm Gerald</h1>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'I want to pursue Science',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'I want to pursue Technology',
          1000,
          'I want to pursue Engineering',
          1000,
          'I want to pursue Math',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', marginLeft: '50px' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Homepage;
