"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface NavbarProps {
  colors: {
    blue: string;
    green: string;
    accentGreen: string;
    textWhite: string;
    bgDark: string;
  };
}

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Navbar({ colors }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // "fixed top-0 left-0 right-0" pins it. "backdrop-blur-md" keeps it premium when scrolling over content.
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-neutral-900/30 backdrop-blur-md"
      style={{ backgroundColor: `${colors.bgDark}A6` }} // 65% opacity of bgDark
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between relative">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <div 
            className="w-8 h-8 md:w-10 md:h-10 rounded-sm transition-transform duration-300 hover:rotate-12" 
            style={{ backgroundColor: colors.green }}
          />
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            Timilehin Seyi Ogunsakin
          </span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
          <a href="#home" className="text-white border-b-2 pb-1" style={{ borderColor: colors.accentGreen }}>Home</a>
          <a href="#companies" className="hover:text-white transition-colors">Companies</a>
          <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="#innovation" className="hover:text-white transition-colors">Innovation</a>
          <a href="#press" className="hover:text-white transition-colors">Press</a>
        </div>

        {/* Desktop CTA Button */}
        <button 
          className="hidden md:block text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all shadow-md"
          style={{ backgroundColor: colors.green }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.green}
        >
          Get in Touch
        </button>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <span 
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full border-b border-neutral-800/50 p-6 flex flex-col space-y-5 shadow-2xl backdrop-blur-xl"
            style={{ backgroundColor: `${colors.bgDark}FA` }}
          >
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium pb-1 border-b" 
              style={{ borderColor: colors.accentGreen }}
            >
              Home
            </a>
            <a 
              href="#companies" 
              onClick={() => setIsOpen(false)} 
              className="text-base font-medium text-neutral-300 hover:text-white"
            >
              Companies
            </a>
            <a 
              href="#timeline" 
              onClick={() => setIsOpen(false)} 
              className="text-base font-medium text-neutral-300 hover:text-white"
            >
              Timeline
            </a>
            <a 
              href="#innovation" 
              onClick={() => setIsOpen(false)} 
              className="text-base font-medium text-neutral-300 hover:text-white"
            >
              Innovation
            </a>
            <a 
              href="#press" 
              onClick={() => setIsOpen(false)} 
              className="text-base font-medium text-neutral-300 hover:text-white"
            >
              Press
            </a>
            
            <button 
              className="text-white font-medium w-full py-3 rounded-lg text-sm transition-all text-center mt-2"
              style={{ backgroundColor: colors.green }}
            >
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}