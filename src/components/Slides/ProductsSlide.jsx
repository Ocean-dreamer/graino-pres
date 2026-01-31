import React from 'react';
import './Slides.css';

const ProductsSlide = () => {
  return (
    <div className="slide products-slide">
      <div className="slide-content">
        <h2>🌱 Our Products</h2>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap'}}>
          <div className="product-card">
            <div className="product-emoji">🍅</div>
            <h3>Tomato Seeds</h3>
            <p>96% germination</p>
          </div>
          <div className="product-card">
            <div className="product-emoji">🥒</div>
            <h3>Cucumber Seeds</h3>
            <p>94% germination</p>
          </div>
          <div className="product-card">
            <div className="product-emoji">🌶️</div>
            <h3>Pepper Seeds</h3>
            <p>92% germination</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlide;