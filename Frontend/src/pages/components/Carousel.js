// Carousel.js
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons
import CarouselImages from './CarouselImages';
import '../../css/Carousel.css';
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % CarouselImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? CarouselImages.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % CarouselImages.length);
  };

  return (
    <div className="carousel-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {CarouselImages.map((image, index) => (
          <img key={index} src={image} alt="carousel" className="slide" />
        ))}
      </div>
      <button onClick={prevSlide} className="arrow prev"><FaChevronLeft /></button> {/* Use FaChevronLeft for previous */}
      <button onClick={nextSlide} className="arrow next"><FaChevronRight /></button> {/* Use FaChevronRight for next */}
    </div>
  );
};

export default Carousel;
