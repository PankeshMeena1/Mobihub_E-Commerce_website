import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../css/COD.css'; // Assuming you have a separate CSS file

const COD = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePayment = () => {
    // Implement Cash on Delivery processing logic here (simulated for educational purposes).
    console.log('Processing Cash on Delivery payment:');
    console.log('Full Name:', fullName);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div className="cod-container">
      <h2>Cash on Delivery</h2>
      <form className="cod-form">
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="cod-input"
          />
        </label>
        <br />
        <label>
          Delivery Address:
          <textarea
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="cod-textarea"
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="cod-input"
          />
        </label>
        <br />
        <button type="button" onClick={handlePayment} className="cod-button">
          Confirm Cash on Delivery
        </button>
      </form>

    </div>
  );
};

export default COD;
