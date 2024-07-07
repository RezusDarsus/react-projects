import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    return (
        <div className="features-container">
            <div className="feature-item">
                <img src={`${process.env.PUBLIC_URL}/money.svg`} alt="Best prices"/>
                <h3>Exclusive Deals</h3>
                <p>Enjoy exclusive deals and discounts when you book directly with us. We partner with a wide network of
                    hotels and accommodation providers to offer you the best rates.</p>
            </div>
            <div className="feature-item">
                <img src={`${process.env.PUBLIC_URL}/apartment.svg`} alt="Hotels across the world"/>
                <h3>Global Reach</h3>
                <p>Choose from over 2.5 million properties worldwide. From luxury hotels to cozy hostels, find the
                    perfect place to stay wherever your travels take you.</p>
            </div>
            <div className="feature-item">
                <img src={`${process.env.PUBLIC_URL}/chat.svg`} alt="24/7 Customer Care"/>
                <h3>Round-the-Clock Support</h3>
                <p>Our dedicated customer service team is available 24/7 to assist you with booking and travel-related
                    inquiries. Experience hassle-free travel with our reliable support.</p>
            </div>
        </div>
    );
};

export default FeaturesSection;
