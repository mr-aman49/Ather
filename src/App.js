import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <div className="product-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          <ProductCard 
            image="./assets/product1.png" 
            name="Ather 450X" 
            description="Best electric scooter in the market." 
          />
          <ProductCard 
            image="./assets/product2.png" 
            name="Ather 340" 
            description="Efficient, affordable electric vehicle." 
          />
        </div>
      </div>
      <About></About>
      <Footer />
    </div>
  );
}

export default App;
