import React from 'react';
import './styles/About.css';  // Include custom CSS for styling
import aboutImage from './styles/assets/yazz-profile.jpg';  // Image file path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={aboutImage} alt="About Us" className="yazz-profile" />
      </div>
      <div className="about-right">
        <h2>About Us</h2>
        <p>
        India is on the brink of an Electric Vehicle revolution, firmly dedicated to meeting our global commitments and making significant strides toward sustainable energy goals. 
        Yazz EV, a part of Sununited Enterprises group, aims to contribute to developing eco-friendly and sustainable mobility products for the future. We are passionately driven by
         a vision to revolutionize commuting with high-performance EV solutions.
        </p>
        <p>
      
At Yazz EV, we firmly believe that transportation should not only be efficient but also enjoyable. Our scooters are meticulously designed to encompass sleek aesthetics, uncompromising performance,
 and cutting-edge technology. To deliver this exceptional experience, we have established a state-of-the-art facility with efficient manufacturing processes to ensure timely delivery and rigorous 
 quality control procedures to guarantee a worry-free ride.Our dedicated research and development team continuously strives to 
 incorporate the latest technologies, ensuring that our scooters are feature-rich and trouble-free.

What distinguishes Yazz EV Scooters is our unwavering commitment to offering an exceptional customer experience. Our Customer Experience Centers and Service Centers are dedicated to 
        providing the ultimate buying and service experience.
        As we prepare for our launch, we welcome you to join us on this electrifying journey toward a more sustainable future. 
        Whether you're navigating city streets or exploring new horizons, Yazz Scooters promises to redefine your commute with style, performance, and a clear conscience.
</p>
<h3>Aspirational Mobility Redefined!</h3>
      </div>
    </div>
  );
};

export default About;
