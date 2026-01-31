import React from 'react';
import './Slides.css';

const StatsSlide = () => {
  return (
    <div className="slide stats-slide">
      <div className="slide-content">
        <h2>📊 Our Impact</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '40px'}}>
          <div className="stat-box">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Happy Farmers</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">95%</div>
            <div className="stat-label">Germination Rate</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">50+</div>
            <div className="stat-label">Seed Varieties</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSlide;