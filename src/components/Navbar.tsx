"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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

const companyItems = [
  {
    name: "Lexi AI",
    href: "/companies/lexi-ai",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784823883/SAVE_20260723_172314_nrwugz.jpg"
  },
  {
    name: "MedxLearn",
    href: "/companies/medxlearn",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784284283/SAVE_20260717_113050_dpq3jv.jpg"
  },
  {
    name: "MedxVerse Telemedicine",
    href: "/companies/medxverse",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784313040/IMG_0341_mpyrmt.jpg"
  },
  {
    name: "MedxGo",
    href: "/companies/medxgo",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784313041/Frame_ieybdx.jpg"
  },
];

const navItems = [
  { id: '#home', label: 'Home' },
  { id: '#about', label: 'About' },
  { id: 'companies', label: 'Companies', isDropdown: true },
  { id: '#gallery', label: 'Gallery' },
  { id: '#press', label: 'Press' },
  { id: '#testimonials', label: 'Testimonials' },
];

export default function Navbar({ 
  colors, 
  bookingUrl = "https://calendly.com/cambridgeprakash/30min" 
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track active section on scroll using IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navItems
      .filter((item) => item.id.startsWith('#'))
      .map((item) => document.getElementById(item.id.replace('#', '')))
      .filter((el): el is HTMLElement => el !== null);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    setIsOpen(false); 
    setIsDropdownOpen(false);

    // Only prevent default and scroll smoothly if target is an in-page section link
    if (target.startsWith('#')) {
      e.preventDefault();
      const id = target.replace('#', '');

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 84; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 80);
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-neutral-900/40 backdrop-blur-md"
      style={{ backgroundColor: `${colors.bgDark}A6` }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between relative">
        
        {/* Brand Logo */}
        <Link 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
        >
          <div
            className="w-8 h-8 md:w-10 md:h-10 rounded-md transition-transform duration-300 group-hover:rotate-6 flex items-center justify-center font-bold text-xs md:text-sm text-white shadow-md"
            style={{ backgroundColor: colors.green }}
          >
            TO
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
            Timilehin Seyi Ogunsakin
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div 
                  key={item.id} 
                  ref={dropdownRef}
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1.5 text-neutral-400 hover:text-white pb-1 transition-colors duration-300 focus:outline-none"
                  >
                    <span>{item.label}</span>
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 w-64 z-50"
                      >
                        <div 
                          className="rounded-xl border border-neutral-800/80 p-2 shadow-2xl backdrop-blur-2xl"
                          style={{ backgroundColor: `${colors.bgDark}F2` }}
                        >
                          {companyItems.map((comp) => (
                            <Link
                              key={comp.name}
                              href={comp.href}
                              onClick={(e) => handleNavClick(e, comp.href)}
                              className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-neutral-800/50 transition-colors group/item cursor-pointer"
                            >
                              <img 
                                src={comp.logoUrl} 
                                alt={comp.name} 
                                className="w-7 h-7 rounded-md object-cover border border-neutral-800"
                              />
                              <div className="flex-1">
                                <p className="text-xs font-semibold text-neutral-200 group-hover/item:text-white flex items-center justify-between">
                                  {comp.name}
                                  <svg className="w-3 h-3 text-neutral-500 group-hover/item:text-neutral-300 group-hover/item:translate-x-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                  </svg>
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const cleanId = item.id.replace('#', '');
            const isActive = activeSection === cleanId;
            return (
              <Link
                key={item.id}
                href={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative pb-1 transition-colors duration-300 flex flex-col items-center group ${
                  isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-1 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: colors.accentGreen }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-transform duration-200 active:scale-95 shadow-md hover:opacity-95 text-center select-none"
          style={{ backgroundColor: colors.green }}
        >
          Get in Touch
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          aria-label="Toggle Navigation Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full border-b border-neutral-800/80 p-6 flex flex-col space-y-5 shadow-2xl backdrop-blur-xl overflow-hidden"
            style={{ backgroundColor: `${colors.bgDark}F7` }}
          >
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.id} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="text-base font-medium flex items-center justify-between py-1 text-neutral-400 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>

                    {isMobileDropdownOpen && (
                      <div className="pl-4 mt-2 space-y-3 border-l border-neutral-800 my-2">
                        {companyItems.map((comp) => (
                          <Link
                            key={comp.name}
                            href={comp.href}
                            onClick={(e) => handleNavClick(e, comp.href)}
                            className="flex items-center gap-3 py-1.5 text-sm text-neutral-300 hover:text-white"
                          >
                            <img src={comp.logoUrl} alt={comp.name} className="w-5 h-5 rounded object-cover" />
                            <span>{comp.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const cleanId = item.id.replace('#', '');
              const isActive = activeSection === cleanId;
              return (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-base font-medium flex items-center justify-between py-1 transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span 
                      className="w-2 h-2 rounded-full mr-2" 
                      style={{ backgroundColor: colors.accentGreen }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="pt-2">
              <Link
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-white font-medium px-5 py-3 rounded-lg text-sm shadow-md"
                style={{ backgroundColor: colors.green }}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
