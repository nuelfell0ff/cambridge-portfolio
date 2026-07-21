"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Medical blue brand colors matching the portfolio theme
const colors = {
  blue: '#193A60',
  green: '#1F7299', // Medical blue highlight
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
};

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
      staggerChildren: 0.12
    }
  }
};

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Decorative radial background glows */}
      <div 
        className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10 filter blur-[80px]"
        style={{ backgroundColor: colors.green }}
      />
      <div 
        className="absolute top-1/3 right-10 w-[250px] h-[250px] rounded-full pointer-events-none opacity-5 filter blur-[100px]"
        style={{ backgroundColor: colors.accentGreen }}
      />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* --- Header Section --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col items-center md:items-start text-center md:text-left mb-16"
        >
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: colors.accentGreen }}
          >
            Professional Biography
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            Transforming Healthcare <br />
            <span style={{ color: colors.green }}>Through Innovation</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-400 font-light max-w-2xl leading-relaxed">
            Ogunsakin Timilehin Seyi is a Nigerian healthcare innovator, medical professional, entrepreneur, 
            and digital health strategist whose work sits at the intersection of medicine, artificial intelligence, 
            psychology, and technology.
          </p>
          <div className="h-[2px] w-12 mt-6" style={{ backgroundColor: colors.green }} />
        </motion.div>

        {/* --- Main Structural Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side Column: Core Biography Timeline Stack */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Initial visible segment snippet */}
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
                <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">Executive Summary</h3>
                <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                  As the Founder and Chief Executive Officer of MedxVerse Telemedicine & Virtual Care Ltd, Timilehin leads the development of one of Africa's emerging digital healthcare ecosystems. His vision extends beyond telemedicine, encompassing artificial intelligence, electronic health records, digital pharmacy, medical logistics, preventive healthcare, and intelligent healthcare infrastructure capable of serving millions of people across underserved communities.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
                <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">The Multi-Disciplinary Approach</h3>
                <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                  Timilehin's multidisciplinary academic foundation uniquely combines medicine, psychology, business, leadership, and technology. This rare blend enables him to approach healthcare innovation from both scientific and human-centered perspectives, integrating clinical reasoning with behavioural science, strategic management, and digital transformation.
                </p>
              </div>
            </div>

            {/* Collapsible content section containing all remaining core biography text details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="space-y-8 overflow-hidden"
                >
                  <div className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
                    <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Responsible AI Integration</h3>
                    <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                      Throughout his journey, he has consistently championed the responsible integration of Artificial Intelligence into healthcare. His work explores how AI can support clinicians, optimize healthcare delivery, improve patient engagement, enhance disease surveillance, and expand access to quality healthcare without replacing the indispensable role of healthcare professionals.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
                    <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Foundations & Leadership Roles</h3>
                    <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-3">
                      Driven by an unwavering belief that healthcare should be accessible, affordable, and technology-enabled, he currently operates across several foundational ventures expanding across the African continent:
                    </p>
                    <ul className="text-sm text-neutral-400 space-y-2 font-light list-disc pl-5">
                      <li><strong className="text-neutral-200">MedxVerse Telemedicine & Virtual Care Ltd:</strong> Integrated digital health system framework.</li>
                      <li><strong className="text-neutral-200">MedxGo:</strong> Technology-enabled logistics management system for essential products.</li>
                      <li><strong className="text-neutral-200">MedxLearn:</strong> Educational platform driving healthcare training via digital learning tools.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
                    <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Academic Profile</h3>
                    <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-3">
                      His academic portfolio supports structured operational scale and deep domain insights:
                    </p>
                    <ul className="text-sm text-neutral-400 space-y-1.5 font-light list-disc pl-5">
                      <li>B.Sc (First Class Honours) in Psychology — JSS Academy of Higher Education & Research, India</li>
                      <li>Medical Training conducted in Nigeria</li>
                      <li>Master of Business Administration (MBA)</li>
                      <li>Postgraduate Diploma in Healthcare and Communication</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-neutral-900 group hover:border-[#1F7299] transition-colors duration-500">
                    <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-[#1F7299] transition-colors duration-500" />
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">Core Areas of Research Focus</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        "Surgical AI Development", "Healthcare Robotics Systems", 
                        "Clinical Decision Support", "Digital Mental Health Platforms", 
                        "Low-Resource Access Solutions", "Health Informatics Frameworks"
                      ].map((item, index) => (
                        <span key={index} className="text-xs bg-neutral-950 px-3 py-1.5 border border-neutral-900 text-neutral-400 rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle trigger button */}
            <div className="pt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-semibold tracking-wider uppercase border-b border-neutral-800 pb-1 transition-colors hover:text-white"
                style={{ color: colors.green }}
              >
                {isExpanded ? 'Read Less About Timilehin' : 'Read Full Biography'}
              </button>
            </div>
          </div>

          {/* Right Side Column: Meta Strategy Cards & Architectural Focus */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
          >
            {/* Philosophical Context Quote Card */}
            <motion.div 
              variants={fadeInUp}
              className="border border-neutral-800 bg-neutral-900/10 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden group hover:border-neutral-700/80 transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundColor: colors.green }} />
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 block mb-3 uppercase">Philosophy</span>
              <h3 className="text-xl font-bold text-neutral-100 mb-4">Core Mission</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                His entrepreneurial philosophy is rooted in innovation with purpose—leveraging emerging systems to maximize patient visibility, empower active practitioners, and support broader healthcare delivery systems.
              </p>
              <div className="text-xs italic text-neutral-300 border-l border-neutral-800 pl-3 leading-relaxed">
                "Innovation is most meaningful when it transforms lives, strengthens communities, and creates opportunities for future generations. The future of healthcare will be built through collaboration between medicine, technology, and humanity—and that future begins today."
              </div>
            </motion.div>

            {/* Core Competencies Tech Cloud Layout Card */}
            <motion.div 
              variants={fadeInUp}
              className="border border-neutral-800 bg-neutral-900/10 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden group hover:border-neutral-700/80 transition-colors duration-500"
            >
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 block mb-3 uppercase font-semibold">Technical Vectors</span>
              <h3 className="text-xl font-bold text-neutral-100 mb-3">System Convergence</h3>
              <p className="text-xs text-neutral-500 font-light mb-4">
                Timilehin focuses engineering resources across these critical system parameters:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Artificial Intelligence", "Telemedicine Systems", "Digital Therapeutics", 
                  "Electronic Health Records", "Precision Medicine Protocols", "Predictive Analytics",
                  "Digital Public Health", "Clinical Workflow Optimization", "Logistics Architecture"
                ].map((item, index) => (
                  <span 
                    key={index}
                    className="text-[11px] font-medium border rounded-md px-2.5 py-1 transition-all duration-300"
                    style={{ 
                      borderColor: 'rgba(255,255,255,0.05)', 
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      color: '#a3a3a3' 
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
                       }
