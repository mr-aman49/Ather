import React from 'react';
import './styles/Hero.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Yazz EV </h1>
        <p>Bring home an Yazz EV  this festive season and enjoy benefits up to ₹25,000*</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Know more</button>
          <button className="hero-button secondary">Book a Test ride</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
