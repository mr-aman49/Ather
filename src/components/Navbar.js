import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import atherLogo from './styles/assets/yazzev.logo.jpg'; // Ensure the correct path to the image

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={atherLogo} alt="Ather Logo" />
        </Link>
        <nav className="navbar-links">
          <Link to="/#rides">E-SCOOTERS</Link>
          <Link to="/#450series">BE A FAMILY</Link>
          <Link to="/#investors">EXPLORE</Link>
          <Link to="/testRide">Test Ride</Link>
          <Link to="/aboutUs">ABOUT</Link>
          <Link to="/blog">BLOG</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
