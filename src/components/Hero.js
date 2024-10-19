import React, { useState, useEffect } from 'react';
import './styles/Hero.css';

// Correct paths to the assets using require
const backgrounds = [
  { type: 'image', src: require('./styles/assets/hero-bggg.jpg.jpg') },
  { type: 'image', src: require('./styles/assets/hero-bggg6.jpg.jpeg') },
  { type: 'image', src: require('./styles/assets/hero-bggg7.jpg') },
  { type: 'video', src: require('./styles/assets/hero-video.mp4.mp4') }
];

const Hero = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const changeBackground = () => {
      setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
    };

    const intervalId = setInterval(changeBackground, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const renderBackground = () => {
    const background = backgrounds[currentBackground];

    if (background.type === 'video') {
      return (
        <video key={background.src} autoPlay muted loop className="hero-video">
          <source src={background.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <div
          key={background.src}
          className="hero-image"
          style={{ backgroundImage: `url(${background.src})` }}
        />
      );
    }
  };

  return (
    <section className="hero-banner">
      {renderBackground()}
      <div className="hero-content">
        <h1>Yazz EV </h1>
        <p>Bring home a Yazz EV this festive season and enjoy benefits up to ₹25,000*</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Know more</button>
          <button className="hero-button secondary">Book a Test ride</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
