import React from 'react';
import source from "../images/playingfield.jpeg";
import tasks from "../images/tasksidc.png";
import video1 from '../videos/task1idc.mp4';
import task2 from "../images/idchumantask2.jpeg";
import task2_2 from "../images/dinosaurtask2.jpeg";
const IdcProject = () => {
  return (
    <div className="project-details">  {/* Apply padding to the main container */}
      <h1>Integrated Design Challenge (2024)</h1>
      <u><h3>Context</h3></u>
      <p>The Noto Peninsula (Japan) Earthquake, occurring on January 1, 2024, was a catastrophic event that had profound implications for Japan and the broader global community. The 7.5 magnitude quake shook the central prefecture of Ishikawa, collapsing buildings, sparking fires and triggering tsunami alerts as far away as eastern Russia. </p>
      <h3>Proposed Solution: Search and Rescue Vehicle</h3>
      <p>In response to the challenges posed by the Japan Earthquake and other natural disasters, there is a pressing need to design and construct a specialised vehicle for disaster management and supply operations.  The vehicle should address the following key criteria:</p>
      <ul>
        <li>Mobility and Maneuverability: Vehicles should support resource retrieval by being capable of navigating to the disaster zone using the safe path and equipped with appropriate retrieval tools.</li>
        <li>Sensing and Detection Capabilities: Incorporating advanced sensors, imaging systems, and detection technologies, the vehicle should facilitate the identification of survivors and other critical information. Data collection and analysis capabilities are essential for informed decision-making and situational awareness.</li>
        <li>Communication and Command Integration: Seamless integration with communication networks, command centres, and other rescue assets is essential for coordinated operations and interoperability. </li>
      </ul>
      <p>The proposed search and rescue vehicle aims to enhance the effectiveness, efficiency, and safety of disaster response efforts in Japan and beyond by addressing these requirements. Collaborative research, development, and implementation initiatives involving multidisciplinary expertise are critical for realising this vision and saving lives in times of crisis.</p>
      <img src={source} height="300" width="600" />
      <p>This is the playing field we are supposed to run on.</p>
      <img src={tasks} height="300" width="600" />
       <h1>Here are some of the runs we did on the playing field</h1>
       <h3>Task 1</h3>
       <video autoPlay loop muted className="w-full h-full object-cover" height="300" width="600">
           <source src={video1} type="video/mp4"/>
           Your browser does not support the video tag.
      </video>
      <h3>Task 2</h3>
      <div class="column"> 
        <img src={task2} style={{ width: '70%', marginLeft: '230px' }}/> 
      </div> 
      <div class="column"> 
        <img src={task2_2} style={{ width: '70%', marginLeft: '250px' }}/> 
      </div> 
    </div>
  );
};

export default IdcProject;
