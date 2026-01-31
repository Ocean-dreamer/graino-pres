import React from 'react';
import './Slides.css';

const TestimonialsSlide = () => {
  return (
    <div className="slide testimonials-slide">
      <div className="slide-content">
        <h2>💬 What Farmers Say</h2>
        <div className="testimonial-box">
          <p className="testimonial-text">
            "Graino seeds transformed my farm! 96% germination rate and amazing support."
          </p>
          <p className="testimonial-author">- Ahmed Hassan, Organic Farmer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlide;