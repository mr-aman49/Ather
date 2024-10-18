// About.js
import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Ather</h1>
      <div className="about-grid">
        <div className="about-card">
          <img src="path_to_image1" alt="Story 1" />
          <h3>Our Mission</h3>
          <p>Our goal is to revolutionize urban mobility with eco-friendly electric vehicles.</p>
        </div>
        <div className="about-card">
          <img src="path_to_image2" alt="Story 2" />
          <h3>Our Technology</h3>
          <p>We use cutting-edge engineering to build electric scooters that lead the market in performance and sustainability.</p>
        </div>
        <div className="about-card">
          <img src="path_to_image3" alt="Story 3" />
          <h3>Our Vision</h3>
          <p>We strive to create a greener, more sustainable future for transportation.</p>
        </div>
      </div>

      <div className="about-experience">
        <h2>Top up your Ather experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <img src="path_to_image4" alt="Smart Helmets" />
            <h3>Smart Helmets</h3>
            <p>Say hello to all-new helmet experiences.</p>
            <a href="#">Explore Smart Helmets</a>
          </div>
          <div className="experience-card">
            <img src="path_to_image5" alt="Accessories" />
            <h3>Accessories</h3>
            <p>Wonderful and purposeful accessories for your Ather experience.</p>
            <a href="#">Shop Accessories</a>
          </div>
          <div className="experience-card">
            <img src="path_to_image6" alt="Merch" />
            <h3>Merch</h3>
            <p>Apparel and helmets.</p>
            <a href="#">Shop Merch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
