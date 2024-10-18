import React from 'react';
import './styles/Features.css';

const models = [
  {
    id: 1,
    name: 'Ather Rizta',
    price: '₹1,09,999',
    flexpay: '₹2,199/month',
    img: './assets/rizta.png',
    isNew: true,
  },
  {
    id: 2,
    name: 'Ather 450S',
    price: '₹1,15,599',
    flexpay: '₹2,475/month',
    img: './assets/450s.png',
    isNew: false,
  },
  {
    id: 3,
    name: 'Ather 450X',
    price: '₹1,40,599',
    flexpay: '₹2,789/month',
    img: './assets/450x.png',
    isNew: false,
  },
  {
    id: 4,
    name: 'Ather 450 Apex',
    price: '₹1,49,999',
    flexpay: '₹3,439/month',
    img: './assets/450apex.png',
    isNew: false,
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-header">
        <h2>All thrills. All electric.</h2>
        <p>
          Presenting all-new electric scooters from Ather. Built to outperform both EV scooters and petrol scooters alike,
          with all the style, smarts, and speed you need.
        </p>
      </div>

      <h3>Pick your Ather</h3>

      <div className="features-grid">
        {models.map((model) => (
          <div key={model.id} className="model-card">
            {model.isNew && <span className="new-badge">All New</span>}
            <img src={model.img} alt={model.name} />
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
