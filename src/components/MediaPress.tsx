"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const colors = {
  green: '#1F7299', // Matching medical blue highlight
  bgDark: '#0a0806',
};

// Category filters matching your requirements
const categories = ["All", "Articles", "Watch"];

// Structured mock press data based on your specific requirements
const pressItems = [
  {
    id: 1,
    category: "Articles",
    title: "MedxGo to Launch Food, Medication and Logistics Platform Across South-West Nigeria and Kwara State",
    source: "Legit",
    date: "March 2026",
    link: "https://www.legit.ng/nigeria/1699954-medxgo-launches-food-medication-logistics-platform-south-west-nigeria-kwara/",
    type: "Read More"
  },
  {
    id: 2,
    category: "Articles",
    title: "MedxGo Emerges Africa’s Next Technology-driven Solution For Food, Medication, Logistics Delivery",
    source: "Independent Newspapers",
    date: "June 2026",
    link: "https://independent.ng/breaking-medxgo-emerges-africas-next-technology-driven-solution-for-food-medication-logistics-delivery/",
    type: "Read Article"
  },
  {
    id: 3,
    category: "Articles",
    title: "How MedxVerse Is Using AI, Telemedicine To Expand Healthcare Access Across Nigeria, Africa",
    source: "Independent Newspapers",
    date: "June 2026",
    link: "https://independent.ng/how-medxverse-is-using-ai-telemedicine-to-expand-healthcare-access-across-nigeria-africa/",
    type: "Read More"
  },
  {
    id: 4,
    category: "Articles",
    title: "MedxVerse unveils telemedicine platform to expand healthcare access in Africa",
    source: "The Sun",
    date: "March 2026",
    link: "https://thesun.ng/medxverse-unveils-telemedicine-platform-to-expand-healthcare-access-in-africa/",
    type: "Read Article"
  },
  {
    id: 5,
    category: "Watch",
    title: "MedxGo Official Introduction | Food & Medication Delivery Made Easy",
    source: "YouTube",
    date: "July 2026",
    link: "https://youtube.com/watch?v=eFV2Bw20rxg&si=8IGom9sSxZ87cs66",
    type: "Watch Now"
  },
  {
    id: 6,
    category: "Watch",
    title: "Introducing Lexi AI",
    source: "YouTube",
    date: "April 2026",
    link: "https://youtube.com/shorts/OcLQkeyNK4c?si=IqFB-P1bNh6I2Vr_",
    type: "Watch Now"
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
