"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const colors = {
  green: '#1F7299', // Professional medical blue highlight
  bgDark: '#0a0806',
};

// --- Easily Update Your Company Details and Cloudinary Logo Links Here ---
const companies = [
  {
    name: "Lexi AI",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784823883/SAVE_20260723_172314_nrwugz.jpg", // Replace with your dedicated Lexi AI logo URL if available
    description: "An intelligent conversational AI platform built for real-time triage, automated workflow support, and natural language decision assistance.",
    mission: "To deliver accessible, multilingual artificial intelligence that simplifies complex inquiries, streamlines daily operations, and guides users instantly.",
    impact: "Serving as an integrated intelligence engine across health, delivery, and automated user assistance platforms with high accuracy and low latency.",
    link: "https://lexiai.chat",
  },
  {
    name: "MedxLearn",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784284283/SAVE_20260717_113050_dpq3jv.jpg", 
    description: "An all-in-one multi-campus school management portal and modern LMS engineered for end-to-end academic infrastructure.",
    mission: "To power institutions with robust, scalable software that simplifies course registration, grading workflows, and automated computer-based testing.",
    impact: "Streamlining operations for institutions from single-campus academies to expansive university networks with zero-friction administrative tools.",
    link: "https://medxlearnapp.com",
  },
  {
    name: "MedxVerse Telemedicine & Virtual Care Ltd",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784313040/IMG_0341_mpyrmt.jpg", 
    description: "A borderless digital health ecosystem bringing 24/7 instant online doctor consultations, electronic prescriptions, and medical data management to Africa.",
    mission: "To bridge the critical healthcare deficit using an optimized, data-efficient digital care delivery framework tailored for emerging regions.",
    impact: "Providing continuous, low-bandwidth medical access and verified digital prescriptions to thousands of remote or underserved users.",
    link: "https://medxverseapp.com",
  },
  {
    name: "MedxGo",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784313041/Frame_ieybdx.jpg", 
    description: "A hyper-local delivery and health companion ecosystem combining instant pharmacy fulfillment, premium food delivery, and intelligent assistance.",
    mission: "To connect communities with fast on-demand logistics, simple prescription uploads, and immediate medical guidance via Lexi AI.",
    impact: "Accelerating last-mile delivery chains for essential care resources, daily meals, and digital triage tools directly to the consumer's doorstep.",
    link: "https://medxgoapp.com",
  },
];

// Core scrolling animations
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function FeaturedCompanies() {
  return (
    <section 
      id="companies"
      className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Soft background glow */}
      <div 
        className="absolute top-1/2 right-10 w-[250px] h-[250px] rounded-full pointer-events-none opacity-5 filter blur-[100px]"
        style={{ backgroundColor: colors.green }}
      />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* --- Header --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-20"
        >
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: colors.green }}
          >
            Leadership & Ventures
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span style={{ color: colors.green }}>Companies</span>
          </h2>
          <div className="h-[2px] w-12 mt-6" style={{ backgroundColor: colors.green }} />
        </motion.div>

        {/* --- Companies Cards Grid --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border border-neutral-900 bg-neutral-950/40 hover:border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl"
            >
              <div>
                {/* Logo & Name Area */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shrink-0">
                    <img 
                      src={company.logoUrl} 
                      alt={`${company.name} logo`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-100 leading-snug group-hover:text-white transition-colors">
                    {company.name}
                  </h3>
                </div>

                {/* Main Bio / Description */}
                <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                  {company.description}
                </p>

                {/* Sub-details (Mission & Impact) */}
                <div className="space-y-4 pt-4 border-t border-neutral-900">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 block">Mission</span>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed mt-1">{company.mission}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 block">Key Impact</span>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed mt-1">{company.impact}</p>
                  </div>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-8">
                <a 
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase transition-all"
                  style={{ color: colors.green }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#15526f'}
                  onMouseOut={(e) => e.currentTarget.style.color = colors.green}
                >
                  Visit Website
                  <svg 
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
    }
