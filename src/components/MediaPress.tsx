"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const colors = {
  green: '#1F7299', // Matching medical blue highlight
  bgDark: '#0a0806',
};

// Category filters matching your requirements
const categories = ["All", "Interviews", "Podcasts", "Articles", "TV & Radio", "Features"];

// Structured mock press data based on your specific requirements
const pressItems = [
  {
    id: 1,
    category: "Interviews",
    title: "AI and the Sovereign Future of African Healthcare Infrastructure",
    source: "TechCabal",
    date: "June 2026",
    link: "#",
    type: "Read Interview"
  },
  {
    id: 2,
    category: "Podcasts",
    title: "Balancing Medicine and Technology Entrepreneurship in Africa",
    source: "The Venture Labs Podcast",
    date: "May 2026",
    link: "#",
    type: "Listen Now"
  },
  {
    id: 3,
    category: "TV & Radio",
    title: "Live: Transforming Clinical Diagnosis with Machine Learning Systems",
    source: "CNBC Africa",
    date: "March 2026",
    link: "#",
    type: "Watch Appearance"
  },
  {
    id: 4,
    category: "Articles",
    title: "How Digital Health Innovators are Rewriting the Medical Curriculum",
    source: "BusinessDay",
    date: "Jan 2026",
    link: "#",
    type: "Read Article"
  },
  {
    id: 5,
    category: "Features",
    title: "Top Innovators Transforming the African Continent's Tech Landscape",
    source: "Forbes Africa Magazine",
    date: "Nov 2025",
    link: "#",
    type: "View Feature"
  },
  {
    id: 6,
    category: "Features",
    title: "Official Press Release: Announcing Next-Gen Medical Learning Platform Deployment",
    source: "Digital Health Press",
    date: "Sept 2025",
    link: "#",
    type: "Read Release"
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

export default function MediaPress() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? pressItems 
    : pressItems.filter(item => item.category === activeTab || (activeTab === "TV & Radio" && item.category === "TV & Radio"));

  return (
    <section 
      id="press"
      className="py-24 md:py-32 relative overflow-hidden border-t border-neutral-900/60"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* --- Section Header Layout --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span 
              className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4 block"
              style={{ color: colors.green }}
            >
              Newsroom
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Media & Press Features
            </h2>
          </motion.div>

          {/* --- Navigation Category Tabs --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none mask-image-right"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className="px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 border"
                style={{
                  backgroundColor: activeTab === category ? colors.green : 'transparent',
                  borderColor: activeTab === category ? colors.green : '#171717',
                  color: activeTab === category ? '#fff' : '#a3a3a3'
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* --- Press Cards Display --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                href={item.link}
                key={item.id}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-neutral-900 bg-neutral-950/30 backdrop-blur-sm transition-all duration-300 hover:border-neutral-800 hover:bg-neutral-900/10 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors"
                    >
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-500 font-light">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-medium text-neutral-200 group-hover:text-white leading-snug transition-colors mb-3">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-8 flex items-center justify-between pt-4 border-t border-neutral-900/60">
                  <span className="text-xs font-semibold text-neutral-400">{item.source}</span>
                  
                  <div className="flex items-center gap-1.5 text-xs font-medium transition-all group-hover:gap-2" style={{ color: colors.green }}>
                    <span>{item.type}</span>
                    <svg className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}