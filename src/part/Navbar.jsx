import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ openModal }) => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    REZUS
                </Link>
                <div className="navbar-items">
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                    <select className="language-selector">
                        <option value="en">English</option>
                        <option value="ru">Russian</option>
                        <option value="ka">Georgian</option>
                    </select>
                    <select className="currency-selector">
                        <option value="usd">USD</option>
                        <option value="gel">Georgian Lari</option>
                        <option value="rub">Russian Ruble</option>
                    </select>
                    <Link to="/profile" className="navbar-link">
                        Contact us
                    </Link>
                    <button onClick={openModal} className="navbar-button">
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
