import React from 'react';
import './styles/ProductCard.css';

const ProductCard = () => {
  const plans = [
    {
      id: 1,
      title: 'Yazz EV Battery Protect™',
      description: 'Extend your battery warranty and ensure it stays protected for long-term use.',
    },
    {
      id: 2,
      title: 'Yazz EV Connect™',
      description: 'Unlock smarter connectivity features like theft alerts, ride stats, and more.',
    },
    {
      id: 3,
      title: 'Yazz EV Roadside Assistance',
      description: '24/7 coverage for roadside emergencies, breakdowns, and flat tires.',
    },
    {
      id: 4,
      title: 'Yazz EV Care',
      description: 'Comprehensive care to keep your scooter in top condition with regular maintenance.',
    },
  ];

  return (
    <section className="product-card-container">
      <div className="product-card-header">
        <h2>Ownership taken care of.</h2>
      </div>

      <div className="product-card-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <h4>{plan.title}</h4>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
