"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const colors = {
  green: '#1F7299', // Professional medical blue highlight
  bgDark: '#0a0806',
};

// The core conceptual pillars driving your vision
const pillars = [
  "Future of Healthcare",
  "AI",
  "Africa",
  "Innovation",
  "Entrepreneurship",
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

export default function VisionStatement() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Hook up the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Create different parallax offsets for pillars on large screens.
  // Lower numbers (e.g., -100) drift less; higher numbers (-250) drift more.
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -250]);

  // Combine transforms into a convenient array mapping
  const parallaxOffsets = [y1, y2, y3, y2, y1]; 

  return (
    <section 
      ref={targetRef}
      id="vision"
      className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden border-t border-neutral-900/70"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Decorative Element */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-1/2 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 100%, ${colors.green} 0%, transparent 70%)`
        }}
      />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* --- Section Header --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col items-center text-center mb-24 md:mb-32"
        >
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: colors.green }}
          >
            Looking Forward
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl selection:bg-white selection:text-black">
            Engineering the Next Era<br className='hidden sm:block'/> of Global Health.
          </h2>
          <div className="h-[2px] w-16 mt-10" style={{ backgroundColor: colors.green }} />
        </motion.div>

        {/* --- Vision Pillars Grid --- */}
        {/*
            MOBILE: Simple vertical stack below the headline.
            DESKTOP (md): Horizontal row that overlaps slightly and uses parallax.
        */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="relative grid grid-cols-1 md:flex md:flex-row md:justify-between items-center gap-10 md:gap-4 md:mt-[-80px] z-0"
        >
          {pillars.map((pillar, index) => {
            const parallaxY = parallaxOffsets[index % parallaxOffsets.length];

            return (
              <motion.div
                key={pillar}
                variants={fadeInUp}
                // Apply parallax effect only on screens larger than mobile (md+)
                style={{ y: typeof window !== 'undefined' && window.innerWidth >= 768 ? parallaxY : 0 }}
                className={`
                  flex flex-col items-center text-center px-4 py-8
                  border border-neutral-900 bg-neutral-950/40 rounded-3xl 
                  transition-colors hover:border-neutral-800/80 group
                  ${index % 2 === 0 ? 'md:mt-20' : 'md:mt-0'} // Alternating start positions
                `}
              >
                {/* Visual Connector Line */}
                <div 
                  className="w-[1px] h-10 mb-6 transition-transform group-hover:scale-y-110" 
                  style={{ backgroundColor: colors.green, opacity: 0.4 }} 
                />
                
                {/* Pillar Text - High Contrast & Clean */}
                <span className="text-lg md:text-xl font-semibold tracking-tight text-neutral-100 max-w-[200px] leading-snug group-hover:text-white transition-colors">
                  {pillar}
                </span>

                {/* Aesthetic Detail (Alternating) */}
                <span className="text-4xl mt-6 font-light text-neutral-800 pointer-events-none group-hover:text-neutral-700 transition-colors">
                  {`0${index + 1}`}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}