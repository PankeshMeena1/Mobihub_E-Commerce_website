import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer"> 
      <div className="footer-section">
        <h3>Categories</h3>
        <br/>
        <br/>
        <ul>
          <li><Link to="/category1">Category 1</Link></li>
          <br/>
          <li><Link to="/category2">Category 2</Link></li>
          <br/>
          <li><Link to="/category3">Category 3</Link></li>
          <br/>
          <li><Link to="/category4">Category 4</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Information</h3>
        <br/>
        <br/>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <br/>
          <li><Link to="/contact">Contact Us</Link></li>
          <br/>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <br/>
          <li><Link to="/terms">Terms & Conditions</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Customer Service</h3>
        <br/>
        <br/>
        <ul>
          <li><Link to="/faq">FAQs</Link></li>
          <br/>
          <li><Link to="/shipping">Shipping Information</Link></li>
          <br/>
          <li><Link to="/returns">Returns & Exchanges</Link></li>
          <br/>
          <li><Link to="/track">Track Your Order</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Newsletter</h3>
        <br/>
        <br/>
        <p>Subscribe to our newsletter for updates</p>
        <br/>
        <form>
          <input type="email" placeholder="Your Email" className="input-field" />
          <br/>
          <br/>
          <Link to="#" className="link-button">Subscribe</Link>
        </form>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <br/>
        <br/>
        <div className="social-icons">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Mobihub  Website. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
