import React, { useState } from 'react';
import './Slider.css';

const slides = [
    '/photo-for-slides.jpg',
    '/photo-for-slides-2.jpg',
    '/photo-for-slides-3.jpg',
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slider">
            <button className="left-arrow" onClick={prevSlide}>
                &lt;
            </button>
            <div className="slider-wrapper">
                <img src={slides[currentIndex]} alt={`slide-${currentIndex}`} className="slide-image" />
            </div>
            <button className="right-arrow" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Slider;
