import React from 'react';
import './Slides.css';

const ProcessSlide = () => {
  return (
    <div className="slide process-slide">
      <div className="slide-content">
        <h2>🚜 Our Process</h2>
        <p>From farm to your door in 6 simple steps</p>
        <div style={{marginTop: '40px', fontSize: '18px'}}>
          Selection → Cultivation → Harvesting → Testing → Packaging → Delivery
        </div>
      </div>
    </div>
  );
};

export default ProcessSlide;