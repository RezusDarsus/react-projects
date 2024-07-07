import React from 'react';

const Feature = ({ icon, title, description }) => {
    return (
        <div className="feature">
            <img src={`${process.env.PUBLIC_URL}/${icon}`} alt={title} className="feature-icon"/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Feature;
