import React from 'react';
import './styles/TestRide.css';  // Custom CSS for styling
import riderImage from './styles/assets/rider-image.avif';  // Path to your image

const TestRide = () => {
  return (
    <div className="timeride-container">
      <div className="form-section">
        <h2>TEST RIDE</h2>
        <p>Fill in the details below for your own F77 Test Ride Experience.</p>

        <form>
          <div className="input-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="tel" placeholder="+91 Phone Number" required />
          <input type="email" placeholder="Email ID" required />
          
          <select required>
            <option value="">Select your City</option>
            {/* Add more city options as needed */}
          </select>

          <button type="submit">NEXT</button>
        </form>
      </div>

      <div className="image-section">
        <img src={riderImage} alt="Rider on an electric scooter" />
      </div>
    </div>
  );
};

export default TestRide;
