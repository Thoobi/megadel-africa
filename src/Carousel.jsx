import React, { useState, useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";

const Carousel = ({ children }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    if (sliderRef.current) {
      const sliderInstance = new KeenSlider(sliderRef.current);
      setSlider(sliderInstance);

      const interval = setInterval(() => {
        if (sliderInstance) {
          sliderInstance.next();
          setCurrentSlide(
            (prev) => (prev + 1) % React.Children.count(children)
          );
        }
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [sliderRef, children]);

  const handleDotClick = (index) => {
    if (slider) {
      slider.moveToIdx(index);
      setCurrentSlide(index);
    }
  };

  return (
    <div className="carousel-container">
      <div ref={sliderRef} className="keen-slider">
        {React.Children.map(children, (child) => (
          <div className="keen-slider__slide">{child}</div>
        ))}
      </div>
      <div className="dots">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;
