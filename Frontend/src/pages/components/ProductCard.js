// ProductCard.js

import React from 'react';
// import './ProductCard.css';

const ProductCard = ({ Image_URL, productName, productPrice, regularPrice, onAddToCart, product_ID }) => {
  return (
    <>
      <div className="product-card">
        <div className="wishlist-icon">&#x2665;</div>
        <div className="product-image">
        <img  src={Image_URL} alt={productName} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{productName}</h3>
          <div className="price-section">
            <span className="product-price">${productPrice}</span>
            <span className="regular-price">{regularPrice}</span>
          </div>
          <button className="add-to-cart-button" onClick={() => onAddToCart(productName, productPrice, regularPrice, Image_URL, product_ID)}>
            Add to Cart
          </button>
        </div>
      </div>


    </>
  );
};

export default ProductCard;
