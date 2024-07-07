import React, { useState } from 'react';
import './promosection.css';

const PromoSection = () => {
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (agree) {
            console.log('Submitting:', email);
            alert('Thank you for subscribing!');
        } else {
            alert('Please agree to receive newsletters.');
        }
    };

    return (
        <div className="promo-section">
            <img src={`${process.env.PUBLIC_URL}/licensed-image.jpg`} alt="Promo" className="promo-img"/>
            <div className="promo-content">
                <h2>Book our hotels!</h2>
                <p>Be the first to know about special prices and offers.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            id="newsletter"
                        />
                        <label htmlFor="newsletter">I agree to receive newsletters and special offers.</label>
                    </div>
                    <button type="submit" className="subscribe-button">Subscribe</button>
                </form>
                <button className="close-button">X</button>
            </div>
        </div>
    );
};

export default PromoSection;
