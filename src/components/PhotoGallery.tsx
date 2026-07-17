"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const colors = {
  green: '#1F7299', // Professional medical blue highlight
  bgDark: '#0a0806',
};

// --- Easily drop your Cloudinary image links here ---
// Keep 'f_auto,q_auto,w_800' in your URLs for blazing-fast loading!
const galleryItems = [
  {
    title: "Speaking at Events",
    description: "Keynote address on healthcare automation frameworks.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784285694/IMG-20260418-WA0086_sftuft.jpg",
    link: "#", 
  },
  {
    title: "Hospital Rotations",
    description: "Bridging code with clinical diagnostics on the ward floor.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784285398/IMG_0054_sfkwrt.heic",
    link: "#",
  },
  {
    title: "Startup Meetings",
    description: "Strategic scaling sessions with the MedxLearn core team.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784282802/IMG_0015_nxb79u.jpg",
    link: "#",
  },
  {
    title: "Conferences",
    description: "Exchanging digital health architecture breakthroughs with MedxVerse OAU Campus.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784285694/IMG-20260418-WA0070_ok5mtk.jpg",
    link: "#",
  },
  {
    title: "Community Outreach",
    description: "Democratizing medical access and health education protocols.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784282802/IMG_0015_nxb79u.jpg",
    link: "#",
  },
  {
    title: "Studio Portraits",
    description: "Official executive headshot for leadership panels.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784285393/IMG_0016_z3ccvn.jpg",
    link: "#",
  },
];

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
    transition: { staggerChildren: 0.1 }
  }
};

export default function PhotoGallery() {
  return (
    <section 
      id="gallery"
      className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
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
            Moments & Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional <span style={{ color: colors.green }}>Gallery</span>
          </h2>
          <div className="h-[2px] w-12 mt-6" style={{ backgroundColor: colors.green }} />
        </motion.div>

        {/* --- Responsive Image Grid --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950/40 group shadow-lg"
            >
              {/* Main Background Image - Increased default brightness to keep original photos vibrant */}
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 filter brightness-[0.95] md:brightness-[0.9] group-hover:brightness-[0.75]"
                loading="lazy"
              />

              {/* Permanent elegant border on the container */}
              <div className="absolute inset-0 border border-neutral-900/40 rounded-2xl pointer-events-none" />

              {/* 
                Text & Link Overlay with Lighter Bottom-up Gradient Protection:
                - Reduced bottom color to black/75 (down from 95)
                - Reduced middle transition to black/20 (down from 50)
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-6 flex flex-col justify-end transition-all duration-500 ease-out">
                <div>
                  <span 
                    className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-neutral-900/80 border border-neutral-800/60 inline-block mb-3"
                    style={{ color: colors.green }}
                  >
                    {item.title}
                  </span>
                  <p className="text-sm text-neutral-200 font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* View Link Trigger */}
                <div className="pt-2">
                  <a 
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white border-b border-white/20 pb-0.5 hover:border-white transition-all"
                  >
                    View Context
                    <svg 
                      className="w-3 h-3 text-neutral-400" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
