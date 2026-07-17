"use client";
import React from 'react';
import { motion } from 'framer-motion';

const colors = {
  green: '#1F7299', // Professional medical blue highlight
  bgDark: '#0a0806',
};

// Headlines to cycle or display
const headlines = [
  "Healthcare Technology Entrepreneur",
  "Founder",
  "Medical Student",
  "Digital Health Innovator",
  "AI in Medicine Advocate",
  "Public Speaker",
];

export default function ProfessionalHeadline() {
  return (
    <section 
      className="py-12 md:py-20 relative overflow-hidden border-y border-neutral-900/60"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${colors.green} 0%, transparent 60%)`
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Intro Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span 
            className="text-[10px] font-bold tracking-[0.25em] uppercase"
            style={{ color: colors.green }}
          >
            Professional Focus
          </span>
        </motion.div>

        {/* Central Bold Statement */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-3xl text-center font-light leading-relaxed max-w-4xl mx-auto text-neutral-200"
        >
          Operating at the intersection of <span className="font-semibold" style={{ color: colors.green }}>clinical medicine</span> and <span className="font-semibold text-white">advanced artificial intelligence</span> to engineer the future of health.
        </motion.p>
      </div>

      {/* --- Smooth Animated Infinite Ticker --- */}
      <div className="mt-10 md:mt-14 flex overflow-hidden select-none gap-10 relative w-full mask-gradient">
        {/* Gradient edge fades for the ticker */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0806] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0806] to-transparent z-10 pointer-events-none" />

        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex flex-nowrap shrink-0 items-center gap-10 min-w-full"
        >
          {/* First loop of headlines */}
          {headlines.map((headline, idx) => (
            <div key={`head-1-${idx}`} className="flex items-center gap-10 whitespace-nowrap">
              <span className="text-base md:text-lg font-medium text-neutral-400 tracking-wide">
                {headline}
              </span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.green }} />
            </div>
          ))}
          {/* Duplicate loop for seamless infinite scrolling */}
          {headlines.map((headline, idx) => (
            <div key={`head-2-${idx}`} className="flex items-center gap-10 whitespace-nowrap">
              <span className="text-base md:text-lg font-medium text-neutral-400 tracking-wide">
                {headline}
              </span>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.green }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
        }
