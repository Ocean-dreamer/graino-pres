import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
// import Navbar from './components/Navigation/Navbar';
import SideNav from './components/Navigation/SideNav';
import ProgressBar from './components/Navigation/ProgressBar';

// Slides
import HeroSlide from './components/Slides/HeroSlide';
import ProblemSlide from './components/Slides/ProblemSlide';
import SolutionSlide from './components/Slides/SolutionSlide';
import ProductsSlide from './components/Slides/ProductsSlide';
import ProcessSlide from './components/Slides/ProcessSlide';
import StatsSlide from './components/Slides/StatsSlide';
import GallerySlide from './components/Slides/GallerySlide';
import TestimonialsSlide from './components/Slides/TestimonialsSlide';
import VisionSlide from './components/Slides/VisionSlide';
import ContactSlide from './components/Slides/ContactSlide';

import { presentationConfig, slides } from './config';
import { useCallback } from "react";



function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(presentationConfig.animations.enableAutoPlay);

  

  const slideComponents = {
    HeroSlide,
    ProblemSlide,
    SolutionSlide,
    ProductsSlide,
    ProcessSlide,
    StatsSlide,
    GallerySlide,
    TestimonialsSlide,
    VisionSlide,
    ContactSlide,
  };

  const CurrentSlideComponent = slideComponents[slides[currentSlide].component];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }, []);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);


  // Keyboard navigation
  useEffect(() => {
  if (!presentationConfig.features.enableKeyboard) return;

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(slides.length - 1);
        break;
      default:
        break;
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [nextSlide, prevSlide, goToSlide]);


  // Auto-play
useEffect(() => {
  if (!isAutoPlaying) return;

  const interval = setInterval(() => {
    if (currentSlide < slides.length - 1) {
      nextSlide();
    } else {
      setIsAutoPlaying(false);
    }
  }, presentationConfig.animations.autoPlayInterval);

  return () => clearInterval(interval);
}, [currentSlide, isAutoPlaying, nextSlide]);

  // Touch/Swipe support (duplicate removed - keeping the cleaner version below)
  // swipe support 
  useEffect(() => {
  if (!presentationConfig.features.enableSwipe) return;

  let touchStartY = 0;

  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  window.addEventListener('touchstart', handleTouchStart);
  window.addEventListener('touchend', handleTouchEnd);

  return () => {
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchend', handleTouchEnd);
  };
}, [nextSlide, prevSlide]);


  // Slide transition variants
  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="app">
      {/* <Navbar 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        isAutoPlaying={isAutoPlaying}
        toggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
      /> */}
      
      {presentationConfig.features.showProgressBar && (
        <ProgressBar current={currentSlide + 1} total={slides.length} />
      )}
      
      {presentationConfig.features.showNavDots && (
        <SideNav 
          slides={slides}
          currentSlide={currentSlide}
          goToSlide={goToSlide}
        />
      )}

      <div className="slides-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="slide-wrapper"
          >
            <CurrentSlideComponent 
              onNext={nextSlide}
              onPrev={prevSlide}
              isActive={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="navigation-arrows">
        {currentSlide > 0 && (
          <button className="nav-arrow nav-arrow-up" onClick={prevSlide}>
            ↑
          </button>
        )}
        {currentSlide < slides.length - 1 && (
          <button className="nav-arrow nav-arrow-down" onClick={nextSlide}>
            ↓
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
