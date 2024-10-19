import React, { useState } from 'react';
import './styles/Features.css';

// Import all images
import atherLogos from './styles/assets/rizta.png.JPG';
import ather450S from './styles/assets/450s.png.JPG';
import ather450X from './styles/assets/450x.png.JPG';
import ather450Apex from './styles/assets/450apex.png.JPG';
import atherFront from './styles/assets/rizta.png.JPG'; 
import atherBack from './styles/assets/back-view.png.JPG'; 
import atherRight from './styles/assets/right-view.png.JPG'; 
import atherLeft from './styles/assets/left-view.png.JPG'; 
import atherFront1 from './styles/assets/450s.png.JPG'; 
import atherBack1 from './styles/assets/back-view1.png.JPG'; 
import atherRight1 from './styles/assets/right-view1.png.JPG'; 
import atherLeft1 from './styles/assets/left-view1.png.JPG'; 
import atherFront2 from './styles/assets/450x.png.JPG';
import atherBack2 from './styles/assets/back-view2.png.JPG'; 
import atherRight2 from './styles/assets/right-view2png.JPG'; 
import atherLeft2 from './styles/assets/left-view2.png.JPG';
import atherFront3 from './styles/assets/450apex.png.JPG';
import atherBack3 from './styles/assets/back-view3.png.JPG'; 
import atherRight3 from './styles/assets/right-view3png.JPG'; 
import atherLeft3 from './styles/assets/left-view3.png.JPG';

const models = [
  {
    id: 1,
    name: 'Horus Y1H1',
    price: '₹1,09,999',
    flexpay: '₹2,199/month',
    img: atherLogos,  
    isNew: true,
    views: {
      front: atherFront,
      back: atherBack1,
      right: atherRight1,
      left: atherLeft1,
    }
  },
  {
    id: 2,
    name: 'NEXZ N1Y1',
    price: '₹1,15,599',
    flexpay: '₹2,475/month',
    img: ather450S,  
    isNew: false,
    views: {
      front: atherFront1,
      back: atherBack,
      right: atherRight,
      left: atherLeft,
    }
  },
  {
    id: 3,
    name: 'Fenix Y1F1',
    price: '₹1,40,599',
    flexpay: '₹2,789/month',
    img: ather450X,  
    isNew: false,
    views: {
      front: atherFront2,
      back: atherBack2,
      right: atherRight2,
      left: atherLeft2,
    }
  },
  {
    id: 4,
    name: 'Zus Y1Z1',
    price: '₹1,49,999',
    flexpay: '₹3,439/month',
    img: ather450Apex,
    isNew: false,
    views: {
      front: atherFront3,
      back: atherBack3,
      right: atherRight3,
      left: atherLeft3,
    }
  },
];

// Possible views in sequence
const viewSequence = ['front', 'back', 'right', 'left'];

const Features = () => {
  // Initialize active view index for each model
  const [activeViewIndices, setActiveViewIndices] = useState(models.map(() => 0));

  // Function to handle next/previous image views for a specific model
  const handleNextView = (modelIndex) => {
    setActiveViewIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[modelIndex] = (newIndices[modelIndex] + 1) % viewSequence.length; // Increment and loop back
      return newIndices;
    });
  };

  const handlePrevView = (modelIndex) => {
    setActiveViewIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[modelIndex] = (newIndices[modelIndex] - 1 + viewSequence.length) % viewSequence.length; // Decrement and loop
      return newIndices;
    });
  };

  const getCurrentView = (model, modelIndex) => model.views[viewSequence[activeViewIndices[modelIndex]]];

  return (
    <section className="features">
      <div className="features-header">
        <h2>All thrills. All electric.</h2>
        <p>
          Presenting all-new electric scooters from Yazz EV. Built to outperform both EV scooters and petrol scooters alike,
          with all the style, smarts, and speed you need.
        </p>
      </div>

      <h3>Pick your Yazz EV</h3>

      <div className="features-grid">
        {models.map((model, index) => (
          <div key={model.id} className="model-card">
            {model.isNew && <span className="new-badge">All New</span>}

            {/* Arrows for navigating views specific to each model */}
            <div className="arrow left-arrow" onClick={() => handlePrevView(index)}>←</div>

            {/* Display images based on the selected view */}
            <img src={getCurrentView(model, index)} alt={`${model.name} ${viewSequence[activeViewIndices[index]]} view`} />

            <div className="arrow right-arrow" onClick={() => handleNextView(index)}>→</div>

            <h4>{model.name}</h4>
            <p>Starting at {model.price}</p>
            <small>Or Flexpay at {model.flexpay}</small>

            <div className="model-buttons">
              <button className="primary-btn">Book now</button>
              <button className="secondary-btn">Learn more</button>
            </div>
          </div>
        ))}
      </div>

      <div className="compare-models">
        <button className="compare-btn">Compare models →</button>
      </div>
    </section>
  );
};

export default Features;
