"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const colors = {
  blue: '#193A60', 
  green: '#1F7299', // Medical blue highlight
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
};

// Exactly 6 targeted source types from your requirements
const testimonials = [
  {
    role: "Doctor",
    quote: "His platform directly resolves diagnostic workflow friction. It's rare to see a developer who completely grasps the realities of clinical accuracy and time constraints under heavy hospital rotations.",
    author: "Dr. Abiodun Alao",
    designation: "Consultant Cardiologist"
  },
  {
    role: "Professor",
    quote: "Timilehin bridges academic clinical principles with modern engineering effortlessly. His contribution to medical education interfaces sets a completely new benchmark for student engagement models.",
    author: "Prof. Evelyn Harrison",
    designation: "Director of Clinical Informatics"
  },
  {
    role: "Investor",
    quote: "We back founders who possess deep domain empathy. Balancing high-tier engineering skills with an ongoing medical career gives him an unfair advantage in identifying health-tech market inefficiencies.",
    author: "Marcus Vance",
    designation: "Managing Partner, Helix Ventures"
  },
  {
    role: "Colleague",
    quote: "He operates at an unbelievable pace. Whether we are debugging an production API routing error or prepping for cross-sectional anatomy presentations, his processing capacity is elite.",
    author: "Chinedu Okafor",
    designation: "Senior Frontend Engineer"
  },
  {
    role: "Student",
    quote: "The interactive tools he built completely restructured how our cohort studies complex pathology tracking. He converts frustrating, dense data columns into intuitive visual interfaces.",
    author: "Sarah Jenkins",
    designation: "Final Year Medical Student"
  },
  {
    role: "Partner",
    quote: "Our deployment across regional pilot centers succeeded weeks ahead of schedule due to his system architecture choices. A sharp, exceptionally reliable technical leader.",
    author: "Elena Rostova",
    designation: "Chief Innovation Officer, MedCore Global"
  }
];

export default function TestimonialsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id="testimonials"
      className="w-full text-white px-6 md:px-12 py-16 md:py-20 relative overflow-hidden border-t border-neutral-900/40"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Radial Light Accent */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 85% 20%, ${colors.blue}15 0%, transparent 60%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* --- Section Header Layout --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span 
              className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3 block"
              style={{ color: colors.accentGreen }}
            >
              Validation & Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Trusted Voices <span style={{ color: colors.green }}>& Reviews</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Feedback from clinical, technical, and venture ecosystem stakeholders collaborating across digital healthcare frontlines.
          </p>
        </div>

        {/* --- Responsive Grid Content Frame --- */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {testimonials.map((item, idx) => {
              // Standard responsiveness behavior mirroring the previous section layout rule
              const isHiddenOnMobile = !isExpanded && idx >= 3;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.05 }}
                  className={`group relative rounded-xl border border-neutral-800/80 bg-neutral-900/10 backdrop-blur-sm p-6 flex flex-col justify-between transition-colors duration-300 hover:border-neutral-700/80 hover:bg-neutral-900/30 overflow-hidden ${
                    isHiddenOnMobile ? "hidden sm:flex" : "flex"
                  }`}
                >
                  {/* Glass Card Grid Hover Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.green}05 0%, transparent 60%)`
                    }}
                  />

                  <div>
                    {/* Top Tag & Quotation Graphic Node */}
                    <div className="flex items-center justify-between mb-6">
                      <span 
                        className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-neutral-900 text-neutral-400 border border-neutral-800/40"
                      >
                        {item.role}
                      </span>
                      <svg 
                        className="w-6 h-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: colors.accentGreen }}
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.85h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9 integra-9l1 2.151c-2.432.917-3.995 3.638-3.995 5.85h4v10h-10z" d="M4.583 17.321C3.553 16.227 3 14.685 3 12.7c0-2.433.554-4.759 1.663-6.977l1.393 1.018C5.181 8.358 4.7 9.873 4.7 11.291h2.518v6.03H4.583zm9 0c-1.029-1.094-1.553-2.636-1.553-4.621 0-2.433.554-4.759 1.663-6.977l1.393 1.018c-.875 1.617-1.356 3.132-1.356 4.55h2.518v6.03h-2.665z"/>
                      </svg>
                    </div>

                    {/* Actual Quote Body */}
                    <p className="text-neutral-300 text-[13px] font-light leading-relaxed mb-6 italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Profile Identification Footer */}
                  <div className="pt-4 border-t border-neutral-900/60 flex flex-col">
                    <span className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                      {item.author}
                    </span>
                    <span className="text-xs text-neutral-500 font-light mt-0.5">
                      {item.designation}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* --- Mobile View See More Controls Interaction --- */}
        <div className="flex sm:hidden justify-center mt-10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-medium border border-neutral-800 bg-neutral-900/30 text-neutral-300 hover:text-white transition-colors active:scale-95"
          >
            <span>{isExpanded ? "Hide Testimonials" : "See All Testimonials"}</span>
            <svg 
              className={`w-3.5 h-3.5 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
            }
