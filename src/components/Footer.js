// Footer.js
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Wish to know more about Ather?</h2>
        <p>
          The best things about an Ather can’t be put in words, or captured in images.
          We’ll take up all your questions, just drop us your number. We’ll call you.
        </p>
        <button className="contact-button">Get in touch</button>
      </div>

      <div className="faq-section">
        <h3>Your questions, answered</h3>
        <ul className="faq-list">
          <li>How do I charge an electric scooter?</li>
          <li>Can I use an electric scooter if I live in an apartment?</li>
          <li>Do I need a Driver’s License, Helmet, and Registration to use an electric scooter?</li>
          <li>Why do Electric Scooters have riding modes?</li>
          <li>What is the cost of charging an electric scooter?</li>
          <li>Do I ever need to replace an electric scooter’s battery?</li>
          <li>Can electric scooters be used in the rain?</li>
          <li>Can’t find what you’re looking for? Visit our <a href="#">FAQs page</a>.</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <div>
            <h4>Electric Scooters</h4>
            <ul>
              <li>Ather 450 Plus</li>
              <li>Ather 450X Apex</li>
              <li>Ather 450X</li>
              <li>Book Test Ride</li>
              <li>Locate Dealers</li>
            </ul>
          </div>
          <div>
            <h4>Buy Electric Scooter</h4>
            <ul>
              <li>Book Ather Scooter</li>
              <li>Find a Dealer</li>
              <li>Pricing</li>
              <li>Charging</li>
              <li>FlexPay</li>
            </ul>
          </div>
          <div>
            <h4>Ownership</h4>
            <ul>
              <li>Ownership Cost Calculator</li>
              <li>Smart Helmets</li>
              <li>Accessories</li>
              <li>Ather Merchandise</li>
              <li>Ather Connect</li>
            </ul>
          </div>
          <div>
            <h4>Investor Relations</h4>
            <ul>
              <li>BPID Documents</li>
              <li>Financials</li>
              <li>Corporate Contacts</li>
            </ul>
          </div>
        </div>

        <div className="footer-note">
          <p>Beware of scammers in Ather's clothing. Don’t get tricked into frauds.</p>
        </div>
      </div>

      <div className="footer-disclaimer">
        <p>
          Disclaimer: All specifications, prices, and features mentioned in this page are subject to change without prior notice.
          Ather reserves the right to make changes as required without notice or obligation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
