import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="./styles/assets/ather-logo.png" alt="Ather Logo" />
        </a>
        <nav className="navbar-links">
          <a href="#rides">Rizta</a>
          <a href="#450series">450 Series</a>
          <a href="#investors">Investor Relations</a>
          <a href="#charging">Charging</a>
          <a href="#helmets">Smart Helmets</a>
          <a href="#shop">Shop</a>
          <a href="#locate">Locate Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
