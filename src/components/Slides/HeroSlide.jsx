import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../data/content';

const HeroSlide = ({ onNext }) => {
  const { hero } = content;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e8f5e0] via-[#f5f9f2] to-[#dcefd4] overflow-hidden font-sans">
      
      {/* Decorative corner brackets - top left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-[#2d5016]"
      />

      {/* Decorative corner brackets - top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-[#2d5016]"
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 min-h-screen flex flex-col justify-between py-12">
        
        {/* Top section with "2026" in top right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-end"
        >
          <div className="text-right">
            <div className="text-[10px] tracking-[0.3em] text-[#5a8a38] font-medium mb-1">
              ANNÉE SCOLAIRE
            </div>
            <div className="text-6xl font-black text-[#5a8a38]" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
              2026
            </div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
            
            {/* Left Column - GRAINO handwritten style + Team + Project Info */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Large handwritten GRAINO */}
              <motion.div
                initial={{ opacity: 0, x: -100, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -3 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 80
                }}
                className="relative"
              >
                <motion.div
                  animate={{ 
                    rotate: [-3, -2, -3],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-[clamp(4rem,12vw,8rem)] font-black text-[#2d8b60] leading-none"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Brush Script MT', cursive",
                    textShadow: '4px 4px 0px rgba(45,80,22,0.2), 8px 8px 0px rgba(45,80,22,0.1)',
                    WebkitTextStroke: '2px #1a5c40',
                    paintOrder: 'stroke fill',
                  }}
                >
                  GRAINO
                </motion.div>
                
                {/* Underline squiggle */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.8 }}
                  className="absolute -bottom-4 left-0 w-full h-8"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 5 10 Q 75 5, 150 10 T 295 10"
                    stroke="#2d8b60"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </motion.div>

              {/* Team Members Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-white/80 backdrop-blur-sm p-6 border-3 border-[#5a8a38] shadow-lg"
              >
                <div className="text-xs tracking-[0.2em] text-[#5a8a38] font-bold mb-4">
                  ÉQUIPE PROJET
                </div>
                {hero.teamMembers.map((name, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
                    className="flex items-center gap-3 mb-3 last:mb-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#5a8a38]" />
                    <span className="text-[#1a3010] font-semibold text-sm">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Project Info Box - moved down a bit */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-white/80 backdrop-blur-sm p-6 border-3 border-[#5a8a38] shadow-lg"
              >
                <div className="text-xs tracking-[0.2em] text-[#5a8a38] font-bold mb-2">
                  PROJET SCOLAIRE
                </div>
                <div className="text-5xl font-black text-[#2d5016]" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
                  2026
                </div>
              </motion.div>
            </div>

            {/* Right Column - Main Title and Content */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              
              {/* Main Title - AGRO-COMMERCIALE smaller and on one line */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-6"
              >
                <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black text-[#3d6020] leading-tight mb-3">
                  PROJET D'ENTREPRISE
                </h1>
                <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black text-[#2d5016] leading-tight border-b-4 border-[#5a8a38] inline-block pb-2">
                  AGRO-COMMERCIALE
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="max-w-2xl mb-10"
              >
                <p className="text-base md:text-lg text-[#3d6020] leading-relaxed font-medium">
                  {hero.description}
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <motion.button
                  onClick={onNext}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-4 bg-[#5a8a38] text-white font-bold text-sm tracking-wider overflow-hidden shadow-xl rounded-full transition-all duration-300 hover:bg-[#4a7c2c] hover:shadow-2xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    DÉCOUVRIR LE PROJET
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-lg"
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="grid grid-cols-4 gap-4 mt-12"
              >
                {[
                  { value: '100', unit: '%', label: 'BIOLOGIQUE' },
                  { value: '95', unit: '%', label: 'GERMINATION' },
                  { value: '24', unit: 'h', label: 'LIVRAISON' },
                  { value: '500', unit: '+', label: 'VARIÉTÉS' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-black text-[#5a8a38]" style={{ fontFamily: "'Impact', sans-serif" }}>
                      {stat.value}
                      <span className="text-2xl">{stat.unit}</span>
                    </div>
                    <div className="text-[10px] tracking-[0.15em] text-[#3d6020] font-semibold mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar - Progress bar replacement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex justify-between items-center text-xs text-[#3d6020] font-semibold mt-auto pt-8 border-t-2 border-[#5a8a38]/30"
        >
          <div className="flex gap-8">
            <div>
              <span className="text-[#5a8a38]">Est.</span> 2026
            </div>
            <div>
              Dakhla, Maroc
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:block text-[10px] tracking-wider">
              Faites défiler pour continuer
            </div>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#5a8a38] rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating seed particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#5a8a38] rounded-full opacity-30"
          style={{
            left: `${15 + i * 9}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}

      {/* Decorative leaf - top left */}
      <motion.div
        initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
        animate={{ opacity: 0.12, rotate: -15, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-32 left-32 text-[6rem] pointer-events-none select-none"
      >
        🌿
      </motion.div>
    </div>
  );
};

export default HeroSlide;