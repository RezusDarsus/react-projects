import React from 'react';
import './PaymentSection.css';

const PaymentSection = () => {
    return (
        <div className="payment-section">
            <div className="payment-methods">
                <img src={`${process.env.PUBLIC_URL}/visa.svg`} alt="Visa" className="payment-logo" />
                <img src={`${process.env.PUBLIC_URL}/mastercard.svg`} alt="MasterCard" className="payment-logo" />
            </div>
            <div className="privacy-policy">
                <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>
            </div>
        </div>
    );
};

export default PaymentSection;
