"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface ProductsSectionProps {
  colors?: {
    blue: string;
    green: string;
    accentGreen: string;
    bgDark: string;
  };
}

// Consistent application design theme colors
const defaultColors = {
  blue: '#193A60',
  green: '#1F7299',
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
};

const PRODUCTS = [
  { id: 1, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552543/image.png_2K_202607150715_1_wy3nn8.png", title: "MedXVerse Dashboard", category: "Core Platform" },
  { id: 2, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552424/Group_17505_wtq2ci.png", title: "Clinical Workflow Manager", category: "Enterprise" },
  { id: 3, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552424/Group_17507_g5y1wz.png", title: "MedXGo Mobile Client", category: "Mobile System" },
  { id: 4, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Android_Compact_-_4_vonkgv.png", title: "Patient Vital Monitor", category: "Diagnostics" },
  { id: 5, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Android_Compact_-_5_xqmm2e.png", title: "MedXLearn Portal", category: "Education" },
  { id: 6, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Group_17506_jkppkc.png", title: "Telehealth Hub Interface", category: "Remote Care" },
  { id: 7, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Android_Compact_-_3_x58tkf.png", title: "EHR Synchronizer", category: "Data Management" },
  { id: 8, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Android_Compact_-_1_sa68m8.png", title: "Pharmacy Dispensation Module", category: "Logistics" },
  { id: 9, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552422/Android_Compact_-_7_zv7amf.png", title: "Diagnostic Analytics Suite", category: "AI Analytics" },
  { id: 10, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552422/Android_Compact_-_9_p5fgrr.png", title: "Lab Results Tracker", category: "Diagnostics" },
  { id: 11, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552422/Android_Compact_-_10_oewkze.png", title: "Emergency Dispatch Router", category: "Operations" },
  { id: 12, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552422/Android_Compact_-_6_c0jquc.png", title: "Billing & Claims Processor", category: "Finance" },
  { id: 13, image: "https://res.cloudinary.com/datmds5xl/image/upload/v1784552421/Android_Compact_-_8_cj1bkk.png", title: "Secure Patient Vault", category: "Security" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export default function ProductsSection({ colors = defaultColors }: ProductsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(6);

  // Manage responsive cutoffs accurately safely inside window environment lifecycle
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(isExpanded ? PRODUCTS.length : 4);
      } else {
        setItemsToShow(isExpanded ? PRODUCTS.length : 6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const visibleProducts = PRODUCTS.slice(0, itemsToShow);

  return (
    <section
      id="companies"
      className="w-full text-white px-6 md:px-12 py-24 relative overflow-hidden border-t border-neutral-900/40"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Interactive Radial Gradient Neon Base */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, ${colors.blue}10 0%, transparent 50%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-center md:text-left">
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: colors.accentGreen }}
          >
            Product Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Ecosystem & <span style={{ color: colors.green }}>Products</span>
          </h2>
          <div className="h-[2px] w-12 mt-4 mx-auto md:mx-0" style={{ backgroundColor: colors.accentGreen }} />
        </div>

        {/* Dynamic Products Grid Layout */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                className="group relative flex flex-col rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-neutral-800/80 hover:bg-neutral-900/20 shadow-lg hover:shadow-2xl"
              >
                {/* Visual Media Container Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-neutral-900 bg-neutral-950 flex items-center justify-center p-4">
                  {/* Outer Frame Mockup Background Accent Layer */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/20 z-10 pointer-events-none" />
                  
                  {/* Product Image Media Assets */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] z-0"
                    loading="lazy"
                  />
                </div>

                {/* Content Panel Frame details */}
                <div className="p-6 flex flex-col justify-between flex-grow relative z-20">
                  <div className="flex flex-col gap-1">
                    <span 
                      className="text-[10px] uppercase font-bold tracking-wider"
                      style={{ color: colors.accentGreen }}
                    >
                      {product.category}
                    </span>
                    <h3 className="text-base font-semibold text-neutral-200 group-hover:text-white transition-colors duration-300 tracking-tight leading-snug">
                      {product.title}
                    </h3>
                  </div>

                  {/* Interactive Dynamic Bottom Vector Tag */}
                  <div className="flex items-center gap-1.5 mt-4 text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300 self-start">
                    <span>View Project Specifications</span>
                    <svg 
                      className="w-3.5 h-3.5 transition-transform duration-300 transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </div>
                </div>

                {/* Subtle Hover Radial Card Accent Layer */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 100%, ${colors.accentGreen}0B 0%, transparent 60%)`
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Interactive Show State Action Button Toggle */}
        <motion.div 
          layout="position"
          className="mt-16 flex justify-center w-full relative z-30"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 text-neutral-200 font-medium px-6 py-3 rounded-lg text-sm transition-all select-none shadow-md"
            style={{ backgroundColor: `rgba(25, 58, 96, 0.08)` }}
          >
            <span>{isExpanded ? 'See Less' : 'See More'}</span>
            <svg 
              className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
              style={{ color: colors.accentGreen }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
