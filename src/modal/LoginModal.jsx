import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    if (!isOpen) return null;

    const handleSwitchMode = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <button className="closeButton" onClick={onClose}>&times;</button>
                {isSignUp ? (
                    <>
                        <h2>Sign up</h2>
                        <input type="email" placeholder="E-mail address" />
                        <input type="password" placeholder="Password" />
                        <button className="modalButton">Sign up</button>
                        <p>
                            By clicking "Sign up", you consent to our <a href="#">processing of personal data</a>.
                        </p>
                        <div className="socialLogin">
                            <button className="socialButton facebook">
                                <i className="fab fa-facebook-f"></i> Sign up with Facebook
                            </button>
                            <button className="socialButton google">
                                <i className="fab fa-google"></i> Sign up with Google
                            </button>
                        </div>
                        <p>
                            Already have an account? <span onClick={handleSwitchMode} className="switchMode">Log in</span>
                        </p>
                    </>
                ) : (
                    <>
                        <h2>Log in or Sign up</h2>
                        <input type="email" placeholder="E-mail address" />
                        <input type="password" placeholder="Password" />
                        <button className="modalButton">Log in</button>
                        <div className="socialLogin">
                            <button className="socialButton facebook">
                                <i className="fab fa-facebook-f"></i> Log in with Facebook
                            </button>
                            <button className="socialButton google">
                                <i className="fab fa-google"></i> Log in with Google
                            </button>
                        </div>
                        <p>
                            Don't have an account? <span onClick={handleSwitchMode} className="switchMode">Sign up</span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginModal;
