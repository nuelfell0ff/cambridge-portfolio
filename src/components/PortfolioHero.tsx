"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';

// Defined colors matching the professional medical blue theme
const colors = {
  blue: '#193A60', 
  green: '#1F7299', // Swapped out original green for the medical blue highlight
  accentGreen: '#1F7299', // Swapped out accent green
  textWhite: '#FFFFFF',
  bgDark: '#0a0806',
};

// SVG Icon Components for Footer (using new medical blue highlight)
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
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  })
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { delay: 0.3, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
  }
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
    <section
      id="home" // <-- FIX: Added this ID so the Navbar anchor links and scroll tracking work perfectly!
      className="w-full text-white flex flex-col pt-20 md:pt-24 relative overflow-hidden h-auto"
      style={{
        backgroundColor: colors.bgDark,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background Decorative Element */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 85% 45%, ${colors.green}15 0%, transparent 55%)`
        }}
      />

      {/* --- Responsive Fixed Navbar --- */}
      <Navbar colors={colors} />

      {/* --- Hero Grid Section --- */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-7xl mx-auto w-full px-6 md:px-12 py-12 md:py-16 z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
          className="md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          {/* Subtle Overline Tag */}
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: colors.accentGreen }}
          >
            The Future of Health is AI-Driven
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-2xl">
            Timilehin Seyi <br />
            <span style={{ color: colors.green }}>Ogunsakin</span>
          </h1>

          {/* Subtitle Roles */}
          <p className="mt-6 text-neutral-400 text-base sm:text-base max-w-xl font-light leading-relaxed">
            Founder <span className="mx-1 sm:mx-2 text-neutral-600">|</span>
            Healthcare Technology Entrepreneur <span className="mx-1 sm:mx-2 text-neutral-600">|</span>
            Medical Professional <span className="mx-1 sm:mx-2 text-neutral-600">|</span> <br className="hidden sm:inline" />
            AI & Digital Health Innovator
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 w-full max-w-md sm:max-w-none">
            
            {/* Action Meeting Link */}
            <a
              href="https://calendly.com/cambridgeprakash/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-white font-medium px-6 py-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-lg select-none"
              style={{ backgroundColor: colors.accentGreen }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#15526f'} 
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
            </a>

            <button
              className="w-full sm:w-auto border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 text-neutral-200 font-medium px-6 py-3 rounded-lg text-sm transition-all text-center flex items-center justify-center"
              style={{ backgroundColor: `rgba(25, 58, 96, 0.15)` }}
            >
              View CV
            </button>
          </div>
        </motion.div>

        {/* Right Column: Expanded Image Container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          className="md:col-span-5 lg:col-span-6 w-full flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[340px] lg:max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900/20 backdrop-blur-sm p-3 shadow-2xl group">
            
            {/* Subtle inner container glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, ${colors.accentGreen}10 0%, transparent 70%)`
              }}
            />

            {/* Image Component */}
            <img 
              src="https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784282802/IMG_0015_nxb79u.jpg"
              alt="Timilehin Seyi Ogunsakin" 
              className="w-full h-full object-cover rounded-xl transition-all duration-700 ease-out"
              fetchPriority="high" 
              loading="eager"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.getElementById('image-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }
              }}
            />

            {/* Beautiful Graphic Fallback */}
            <div 
              id="image-fallback" 
              className="hidden absolute inset-3 rounded-xl flex-col items-center justify-center border border-dashed border-neutral-800 bg-neutral-950/50"
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 animate-pulse"
                style={{ backgroundColor: `${colors.green}20` }}
              >
                <Icon path={crossPath} />
              </div>
              <span className="text-xs text-neutral-500 font-medium">Insert Image Here</span>
            </div>

          </div>
        </motion.div>

      </main>
    </section>
  );
        }
                
