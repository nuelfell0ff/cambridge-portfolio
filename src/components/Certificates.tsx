"use client";
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// Consistent application design theme colors
const colors = {
  blue: '#193A60', 
  green: '#1F7299', // Medical blue highlight
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
  textMuted: '#a3a3a3',
};

// Component data configuration outside scope
const CERTIFICATES = [
  { title: "Professional Diploma in Coaching and Mentoring", issuer: "Executive Education" },
  { title: "Executive Diploma of Chief Digital Officer", issuer: "Digital Leadership Institute" },
  { title: "Professional Diploma in Digital Products Management", issuer: "Product Analytics Board" },
  { title: "Professional Diploma in Business Project Management", issuer: "Project Management Authority" },
  { title: "Professional Diploma in Software Testing & Quality Assurance", issuer: "Tech Quality Council" },
  { title: "Professional Diploma in Procurement, Sourcing, and Supply Chains", issuer: "Supply Chain Institute" },
  { title: "Professional Diploma of Finance Business Partner", issuer: "Financial Leadership Forum" },
  { title: "Professional Diploma of Real Estate Business Expert", issuer: "Real Estate Academy" },
  { title: "Professional Diploma of Virtual Executive Assistant", issuer: "Executive Services Board" },
  { title: "Executive Diploma of Chief Information Officer (CIO)", issuer: "Enterprise IT Institute" },
  { title: "Professional Diploma in Web3, NFT, and NFT Smart Contracts", issuer: "Decentralized Systems Board" },
  { title: "Diploma of Microsoft Dynamics 365 CRM Business Architect", issuer: "Enterprise Architecture Systems" },
  { title: "Advanced Management Program", issuer: "Global Business School" },
  { title: "Professional Certificate in Career Coaching", issuer: "Human Capital Institute" },
  { title: "Business Administration", issuer: "Management & Strategy College" },
  { title: "Advanced Diploma in Human Resources Management", issuer: "HR Professional Bodies" },
  { title: "Data Governance & Quality for Better Business Decisions", issuer: "Data Governance Board" },
];

// Animation presets explicitly typed to satisfy Next.js TS compiler
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.215, 0.61, 0.355, 1] as const
    }
  }
};

export default function CertificatesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split data based on state configurations
  const visibleCertificates = isExpanded ? CERTIFICATES : CERTIFICATES.slice(0, 6);

  return (
    <section
      id="certificates"
      className="w-full text-white px-6 md:px-12 py-24 relative overflow-hidden border-t border-neutral-900/40"
      style={{
        backgroundColor: colors.bgDark,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Structural Neon Decorative Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, ${colors.blue}12 0%, transparent 60%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Section Title Header */}
        <div className="flex flex-col mb-16 text-center md:text-left">
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: colors.accentGreen }}
          >
            Credentials & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Professional <span style={{ color: colors.green }}>Certifications</span>
          </h2>
          <div className="h-[2px] w-12 mt-4 mx-auto md:mx-0" style={{ backgroundColor: colors.accentGreen }} />
        </div>

        {/* Certificates Grid Interface with Framer Motion AnimatePresence */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="popLayout">
            {visibleCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-sm transition-all duration-300 hover:border-neutral-800/80 hover:bg-neutral-900/20 shadow-sm hover:shadow-xl"
              >
                {/* Radial interactive card glow on desktop hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 12% 12%, ${colors.accentGreen}10 0%, transparent 75%)`
                  }}
                />

                <div className="flex items-start gap-4 z-10">
                  {/* Structural Functional Icon element */}
                  <div 
                    className="flex items-center justify-center p-2.5 rounded-lg border border-neutral-900 bg-neutral-950 text-neutral-400 group-hover:text-white transition-colors duration-300"
                    style={{ backgroundColor: 'rgba(25, 58, 96, 0.05)' }}
                  >
                    <svg 
                      className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                      style={{ color: colors.accentGreen }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>

                  {/* Text Blocks */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider font-light text-neutral-500 group-hover:text-neutral-400 transition-colors">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Action Toggle Trigger */}
        <motion.div 
          layout="position"
          className="mt-12 flex justify-center w-full relative z-10"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 text-neutral-200 font-medium px-6 py-3 rounded-lg text-sm transition-all select-none"
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
