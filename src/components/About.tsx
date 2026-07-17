"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

// Medical blue brand colors matching the hero
const colors = {
  blue: '#193A60',
  green: '#1F7299', // Medical blue highlight
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
};

// Animation settings for elements revealing as you scroll down
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Subtle radial decorative background glow */}
      <div 
        className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10 filter blur-[80px]"
        style={{ backgroundColor: colors.green }}
      />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* --- Header Section (Centered on mobile, left-aligned on desktop) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-24"
        >
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: colors.accentGreen }}
          >
            Professional Biography
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            The Mind Behind <br />
            <span style={{ color: colors.green }}>The Innovation</span>
          </h2>
          <div className="h-[2px] w-12 mt-6" style={{ backgroundColor: colors.green }} />
        </motion.div>

        {/* --- Grid Layout: Biography & Core Foundations --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Compelling Story Timeline (8 Columns on Large Screens) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-12"
          >
            {/* 1. Background & Education */}
            <motion.div variants={fadeInUp} className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">Background & Education</h3>
              <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                As a medical practitioner in training equipped with a deep technical blueprint in software engineering, 
                my journey is rooted in a unique intersection of scientific rigor and digital construction. Navigating 
                clinical rotations alongside lines of code has shaped my approach to complex real-world problem solving.
              </p>
            </motion.div>

            {/* 2. The Spark for Medicine */}
            <motion.div variants={fadeInUp} className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">Why I Entered Medicine</h3>
              <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                I pursued clinical medicine to understand healthcare from the ground up—experiencing the direct human, 
                operational, and systemic friction points that define patients' lives. I wanted to build solutions 
                grounded in real patient-doctor empathy, not theoretical assumptions.
              </p>
            </motion.div>

            {/* 3. MedxLearn & MedxVerse */}
            <motion.div variants={fadeInUp} className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">The Genesis of MedxLearn & MedxVerse</h3>
              <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-4">
                Recognizing systemic training hurdles, I founded **MedxLearn** to bridge key educational gaps for 
                healthcare students. This quickly expanded into the architecture of **MedxVerse**, pushing the boundaries of 
                interactive, modern medical training technologies.
              </p>
            </motion.div>

            {/* 4. Vision for Healthcare in Africa */}
            <motion.div variants={fadeInUp} className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
              <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">Vision for Healthcare in Africa</h3>
              <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                Africa's healthcare ecosystem doesn't just need minor upgrades—it requires a complete technological leap. 
                My focus is on engineering scalable, AI-driven digital ecosystems that democratize specialized clinical 
                knowledge and make advanced diagnostics universally accessible across the continent.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Philosophy & Strategy Cards (5 Columns on Large Screens) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
          >
            {/* Leadership & Philosophy Card */}
            <motion.div 
              variants={fadeInUp}
              className="border border-neutral-800 bg-neutral-900/10 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden group hover:border-neutral-700/80 transition-colors duration-500"
            >
              {/* Card top edge accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: colors.green }} />
              
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 block mb-3 uppercase">Philosophy</span>
              <h3 className="text-xl font-bold text-neutral-100 mb-4">Leadership Journey</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                True leadership is about executing solutions at the razor's edge where code collides with clinical need. 
                My personal philosophy relies on radical utility, strict iterative execution, and uncompromised focus on the user's workflow.
              </p>
              <div className="text-xs italic text-neutral-300 border-l border-neutral-800 pl-3">
                "We don't build software to admire it; we build it to save time, save energy, and ultimately, save lives."
              </div>
            </motion.div>

            {/* Future Ambitions Card */}
            <motion.div 
              variants={fadeInUp}
              className="border border-neutral-800 bg-neutral-900/10 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden group hover:border-neutral-700/80 transition-colors duration-500"
            >
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 block mb-3 uppercase font-semibold">The Horizon</span>
              <h3 className="text-xl font-bold text-neutral-100 mb-4">Future Ambitions</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Looking forward, my roadmap is clear: to scale MedxLearn into the primary tech training environment 
                for clinics, deploy intelligent AI-driven auxiliary protocols into rural health spaces, and establish 
                a permanent ecosystem linking technology directly to public health.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
        }
              
