import React from 'react';
import './styles/About.css';

// Importing images
import missionImage from './styles/assets/mission.png';
import technologyImage from './styles/assets/technologyy.png';
import visionImage from './styles/assets/vision.png';


const About = () => {
  return (
    <div className="about-page">
      <h1>About Yazz EV</h1>

      <div className="about-grid">
        <div className="about-card">
          <img src={missionImage} alt="Our Mission" />
          <h3>Our Mission</h3>
          <p>Our goal is to revolutionize urban mobility with eco-friendly electric vehicles.</p>
        </div>
        <div className="about-card">
          <img src={technologyImage} alt="Our Technology" />
          <h3>Our Technology</h3>
          <p>We use cutting-edge engineering to build electric scooters that lead the market in performance and sustainability.</p>
        </div>
        <div className="about-card">
          <img src={visionImage} alt="Our Vision" />
          <h3>Our Vision</h3>
          <p>We strive to create a greener, more sustainable future for transportation.</p>
        </div>
      </div>

      
      </div>
    
  );
};

export default About;
