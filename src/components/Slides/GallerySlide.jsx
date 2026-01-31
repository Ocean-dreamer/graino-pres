import React from 'react';
import './Slides.css';

const GallerySlide = () => {
  return (
    <div className="slide gallery-slide">
      <div className="slide-content">
        <h2>📸 Our Farm</h2>
        <p>Take a look at where the magic happens</p>
        <div style={{marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="gallery-placeholder">
              🌾 Photo {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySlide;