import React, { useState } from "react";
import { Link } from "react-router-dom";
// import './CreditCard.css'; // Import the CSS file for styling

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = () => {
    // Implement payment processing logic here (e.g., through a secure payment gateway).
    // For security reasons, do not handle real payments or store sensitive information on the client side.
    console.log('Payment processing...');
  };

  return (
    <div className="credit-card-container">
      <h2>Credit Card Payment</h2>
      <form className="credit-card-form">
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="credit-card-input"
            maxLength="16"
          />
        </label>
        <br />
        <label>
          Card Holder:
          <input
            type="text"
            name="cardHolder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            className="credit-card-input"
          />
        </label>
        <br />
        <label>
          Expiry Date:
          <input
            type="text"
            name="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            className="credit-card-input"
          />
        </label>
        <br />
        <label>
          CVC:
          <input
            type="text"
            name="cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            maxLength="3"
            className="credit-card-input"
          />
        </label>
        <br />
        <button type="button" onClick={handlePayment} className="credit-card-button">
          Process Payment
        </button>
      </form>
     
    </div>
  );
};

export default CreditCard;
