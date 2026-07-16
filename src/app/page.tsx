"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Defined colors from Lexi Ai logo (file: image_1.png)
const colors = {
  blue: '#193A60', // Dark Blue from dark speech bubble
  green: '#22A360', // Teal Green from light speech bubble
  accentGreen: '#3EC36F', // Brighter green from cross and circles
  textWhite: '#FFFFFF',
  bgDark: '#0a0806',
};

// SVG Icon Components for Footer (using accent green)
const Icon = ({ path }: { path: string }) => (
  <svg 
    className="w-4 h-4" 
    fill="none" 
    stroke={colors.accentGreen} 
    strokeWidth="2.5" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const crossPath = "M12 4.5v15m7.5-7.5h-15"; // Simple cross

// Animation Variants
const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: i * 0.1, duration: 0.6 } 
  })
};

export default function PortfolioHero() {
  const controls = useAnimation();

  useEffect(() => {
    // Inject Poppins font link
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    controls.start("visible");
  }, [controls]);

  return (
    <div 
      className="min-h-screen text-white flex flex-col justify-between p-6 md:p-12 relative overflow-hidden"
      style={{
        backgroundColor: colors.bgDark,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Subtle background glow - matching the new green color */}
      <div className="absolute inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(circle at 80% 50%, ${colors.green}1A 0%, transparent 60%)` // 1A for 10% opacity
           }}>
      </div>

      {/* --- Navigation Bar --- */}
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
        className="flex items-center justify-between w-full max-w-7xl mx-auto z-10"
      >
        <div className="text-xl font-semibold tracking-tight">
          Timilehin Seyi Ogunsakin
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
          <a href="#home" className="text-white border-b-2 pb-1" style={{borderColor: colors.accentGreen}}>Home</a>
          <a href="#companies" className="hover:text-white transition-colors">Companies</a>
          <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="#innovation" className="hover:text-white transition-colors">Innovation</a>
          <a href="#press" className="hover:text-white transition-colors">Press</a>
        </div>

        <button 
          className="text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all"
          style={{backgroundColor: colors.green}}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.green}
        >
          Get in Touch
        </button>
      </motion.nav>

      {/* --- Hero Section --- */}
      <motion.main 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
        className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full py-16 z-10"
      >
        {/* Subtle Overline Tag */}
        <span className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
              style={{color: colors.accentGreen}}>
          The Future of Health is AI-Driven
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-3xl">
          Timilehin Seyi <br />
          {/* Replaced orange with the green from image_1.png */}
          <span style={{ color: colors.green }}>Ogunsakin</span>
        </h1>

        {/* Subtitle Roles */}
        <p className="mt-6 text-neutral-400 text-base md:text-lg max-w-2xl font-light leading-relaxed">
          Founder <span className="mx-2 text-neutral-600">|</span> 
          Healthcare Technology Entrepreneur <span className="mx-2 text-neutral-600">|</span> 
          Medical Student <span className="mx-2 text-neutral-600">|</span> <br className="hidden md:inline" />
          AI & Digital Health Innovator
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button 
            className="text-white font-medium px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-all"
            style={{backgroundColor: colors.accentGreen}}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.green}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
          >
            Schedule a Meeting
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          
          <button 
            className="border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 text-neutral-200 font-medium px-6 py-3 rounded-lg text-sm transition-all"
            style={{backgroundColor: `rgba(16, 21, 28, 0.4)`}} // Using blue tone for portfolio button
          >
            View Portfolio
          </button>
        </div>
      </motion.main>

      {/* --- Footer Highlights Grid --- */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={2}
        className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-900/50 z-10"
      >
        <div>
          {/* Cross icon from logo */}
          <div className="mb-1">
            <Icon path={crossPath} />
          </div>
          <h4 className="text-sm font-semibold text-neutral-200">Founder</h4>
          <p className="text-xs text-neutral-400 mt-0.5">MedxLearn</p>
        </div>
        
        <div>
          <div className="mb-1">
            <Icon path={crossPath} />
          </div>
          <h4 className="text-sm font-semibold text-neutral-200">AI Innovator</h4>
        </div>
        
        <div>
          <div className="mb-1">
            <Icon path={crossPath} />
          </div>
          <h4 className="text-sm font-semibold text-neutral-200">Health Tech Leader</h4>
        </div>
        
        <div>
          <div className="mb-1">
            <Icon path={crossPath} />
          </div>
          <h4 className="text-sm font-semibold text-neutral-200">Digital Visionary</h4>
        </div>
      </motion.section>
    </div>
  );
}