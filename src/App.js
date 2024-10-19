import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import About from './components/About';
import BlogPage from './components/BlogPage';
import TestRide from './components/TestRide';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Route for Homepage */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Features />
                <div className="product-section">
                  <h2 id ="productid">Our Products</h2>
                  <div className="product-grid">
                    <ProductCard 
                      image="./assets/product1.png"  // Correct the path as needed
                      name="Yazz EV" 
                      description="Best electric scooter in the market." 
                    />
                  </div>
                </div>
                
              </>
            } 
          />
          
          {/* Route for Blog Page */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/testRide" element={<TestRide />} />
          <Route path="/aboutUs" element={<About />} />
          
        </Routes>
        <br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
