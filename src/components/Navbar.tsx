"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface NavbarProps {
  colors: {
    blue: string;
    green: string;
    accentGreen: string;
    textWhite: string;
    bgDark: string;
  };
  bookingUrl?: string;
}

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'companies', label: 'Companies' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'press', label: 'Press' },
  { id: 'testimonials', label: 'Testimonials' },
];

// Added your Calendly link as the default fallback
export default function Navbar({ 
  colors, 
  bookingUrl = "https://calendly.com/cambridgeprakash/30min" 
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Failsafe layout-agnostic navigation handler for mobile and desktop viewports
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Close the drawer immediately to trigger the exit animation frame
    setIsOpen(false); 

    // Defer measuring the layout bounding boxes until the browser registers the state change
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Calculate precise offset to accommodate the fixed position header height
        const headerOffset = 84; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 80); // 80ms buffer resolves frame lock contention with AnimatePresence
  };

  // Monitor scrolling to track active sections
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScrollFallback = () => {
      if (window.scrollY < 50) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollFallback);
    };
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-neutral-900/30 backdrop-blur-md"
      style={{ backgroundColor: `${colors.bgDark}A6` }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between relative">
        
        {/* Logo and Brand Name */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
        >
          <div
            className="w-8 h-8 md:w-10 md:h-10 rounded-sm transition-transform duration-300 group-hover:rotate-12 flex items-center justify-center font-bold text-xs md:text-sm text-white shadow-inner"
            style={{ backgroundColor: colors.green }}
          >
            TO
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
            Timilehin Seyi Ogunsakin
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative pb-1 transition-colors duration-300 flex flex-col items-center group ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-1 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: colors.accentGreen }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA Button Link */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all shadow-md text-center select-none"
          style={{ backgroundColor: colors.green }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.green}
        >
          Get in Touch
        </a>

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
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-base font-medium flex items-center justify-between py-1 transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span 
                      className="w-2 h-2 rounded-full mr-2" 
                      style={{ backgroundColor: colors.accentGreen }}
                    />
                  )}
                </a>
              );
            })}
            
            {/* Mobile CTA Button Link */}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-white font-medium w-full py-3 rounded-lg text-sm transition-all text-center mt-2 shadow-md block select-none"
              style={{ backgroundColor: colors.green }}
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
      }
        
