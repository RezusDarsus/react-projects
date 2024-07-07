import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span className="logo">REZUS</span>
            <div className="footer-items">
                <img src={`${process.env.PUBLIC_URL}/visa.svg`} alt="Visa" className="footer-icon" />
                <img src={`${process.env.PUBLIC_URL}/mastercard.svg`} alt="Mastercard" className="footer-icon" />
                <img src={`${process.env.PUBLIC_URL}/georgia.svg`} alt="Georgia" className="footer-icon" />
                <img src={`${process.env.PUBLIC_URL}/lari.svg`} alt="Lari" className="footer-icon" />
            </div>
            <a href="http://your-privacy-policy-url.com" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Policy</a>
        </div>
    );
}

export default Footer;
