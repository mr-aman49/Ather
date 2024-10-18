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
            name="Yazz EV" 
            description="Best electric scooter in the market." 
          />
          
        </div>
      </div>
      <About></About>
      <Footer />
    </div>
  );
}

export default App;
