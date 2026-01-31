import React from 'react';
import './Slides.css';

const ContactSlide = () => {
  return (
    <div className="slide contact-slide">
      <div className="slide-content">
        <h2>📞 Let's Grow Together</h2>
        <p style={{marginTop: '30px', fontSize: '20px'}}>
          Ready to start your organic farming journey?
        </p>
        <div style={{marginTop: '40px'}}>
          <p>📧 contact@graino.com</p>
          <p>📱 +1 234 567 890</p>
        </div>
        <button className="cta-button" style={{marginTop: '40px'}}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ContactSlide;