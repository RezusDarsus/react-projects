import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <p>Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <form>
                <label>Name*</label>
                <input type="text" name="name" required />
                <label>Email address *</label>
                <input type="email" name="email" required />
                <label>Message</label>
                <textarea name="message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
