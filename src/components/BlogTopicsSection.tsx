"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

const colors = {
  blue: '#193A60', 
  green: '#1F7299', // Medical blue highlight
  accentGreen: '#1F7299',
  textWhite: '#FFFFFF',
  bgDark: '#0a0806',
};

// Target content data structure
const blogTopics = [
  {
    title: "Healthcare",
    description: "Analyzing shifts in global health systems, clinical workflows, and modern patient care delivery models.",
    icon: "M19 10.5V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9.5a4 4 0 0 1 8 0V12h2v-1.5a4 4 0 0 1 4 0Z", // Clinical node representation
  },
  {
    title: "Leadership",
    description: "Insights on managing multi-disciplinary development teams, tech strategies, and scaling medical ventures.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "AI & Intelligence",
    description: "Deep dives into neural networks, diagnostics assistance automation, and computer vision frameworks in medicine.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Startups & Ventures",
    description: "The execution ecosystem: ideation, funding paradigms, unit economics, and building high-impact health tech.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Medical Education",
    description: "Bridging clinical academia with innovative learning paradigms, knowledge retention tools, and training tools.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Personal Growth",
    description: "Systems for mental performance optimization, managing intense cognitive loads, and high-output frameworks.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17",
  },
  {
    title: "Innovation & Future",
    description: "Exploring frontier tech including digital therapeutics, bio-hacking interfaces, and disruptive medical pipelines.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

// Staggered layout variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

export default function BlogTopicsSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section 
      className="w-full text-white px-6 md:px-12 py-16 md:py-20 relative overflow-hidden"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Subtle Accent Blob */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 75%, ${colors.blue}20 0%, transparent 60%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* Section Heading Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span 
              className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3 block"
              style={{ color: colors.accentGreen }}
            >
              Curated Thoughts & Research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Core Writing <span style={{ color: colors.green }}>Topics</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Intersections of clinical frameworks, system computing, and personal leverage designed for health-tech innovators.
          </p>
        </div>

        {/* Dynamic Responsive Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {blogTopics.map((topic, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
              className="group relative rounded-xl border border-neutral-800/80 bg-neutral-900/10 backdrop-blur-sm p-6 flex flex-col justify-between transition-colors duration-300 hover:border-neutral-700/80 hover:bg-neutral-900/30 overflow-hidden"
            >
              {/* Subtle Linear Hover Glow Border effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colors.green}08 0%, transparent 50%)`
                }}
              />

              <div>
                {/* Icon Wrapper Frame */}
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 border border-neutral-800/80 transition-colors duration-300 group-hover:border-neutral-700"
                  style={{ backgroundColor: `rgba(25, 58, 96, 0.12)` }}
                >
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                    fill="none" 
                    stroke={colors.accentGreen} 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={topic.icon} />
                  </svg>
                </div>

                {/* Topic Meta Text */}
                <h3 className="text-lg font-semibold text-neutral-100 mb-2 transition-colors duration-300 group-hover:text-white">
                  {topic.title}
                </h3>
                <p className="text-neutral-400 text-xs font-light leading-relaxed mb-6">
                  {topic.description}
                </p>
              </div>

              {/* Action Vector Indicator */}
              <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" style={{ color: colors.accentGreen }}>
                <span>Explore essays</span>
                <svg 
                  className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}