import React from 'react';
import './SideNav.css';

const SideNav = ({ slides, currentSlide, goToSlide }) => {
  return (
    <div className="side-nav">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
          onClick={() => goToSlide(index)}
          title={slide.name}
        />
      ))}
    </div>
  );
};

export default SideNav;