import React from 'react';
import { presentationConfig } from '../../config';
import './Navbar.css';

const Navbar = ({ currentSlide, totalSlides, isAutoPlaying, toggleAutoPlay }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img 
          src={presentationConfig.company.logo} 
          alt={presentationConfig.company.name}
          className="navbar-logo"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <span className="navbar-logo-text" style={{display: 'none'}}>
          {presentationConfig.company.name}
        </span>
      </div>
      
      <div className="navbar-center">
        {presentationConfig.features.showSlideNumbers && (
          <span className="slide-counter">
            {currentSlide + 1} / {totalSlides}
          </span>
        )}
      </div>
      
      <div className="navbar-right">
        <button 
          className={`autoplay-btn ${isAutoPlaying ? 'playing' : ''}`}
          onClick={toggleAutoPlay}
          title={isAutoPlaying ? 'Pause' : 'Play'}
        >
          {isAutoPlaying ? '⏸' : '▶'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;