import React from 'react';
import './styles/Navbar.css';
import atherLogo from './styles/assets/yazzev.logo.jpg';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={atherLogo} alt="Ather Logo" />
        </a>
        <nav className="navbar-links">
          <a href="#rides">E-SCOOTERS</a>
          <a href="#450series">BE A FAMILY</a>
          <a href="#investors">EXPLORE</a>
          <a href="#charging">MEDIA</a>
          <a href="#helmets">ABOUT</a>
          <a href="#shop">BLOG</a>
          <a href="#locate">Locate Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
