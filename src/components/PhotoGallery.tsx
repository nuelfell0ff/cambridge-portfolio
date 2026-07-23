"use client";
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const colors = {
  green: '#1F7299', // Professional medical blue highlight
  bgDark: '#0a0806',
};

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
    title: "Meet the Maker",
    description: "Beyond the projects and data schemas—here is the person building it all.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784285396/IMG_0104-1_r3hcic.jpg",
    link: "#",
  },
  {
    title: "Conferences",
    description: "Exchanging digital health architecture breakthroughs with MedxVerse OAU Campus.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784285694/IMG-20260418-WA0070_ok5mtk.jpg",
    link: "#",
  },
  {
    title: "Frames & Profiles",
    description: "A simple, clean studio shot keeping things light and personal.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784285395/IMG_0013_ypaz60.jpg",
    link: "#",
  },
  {
    title: "Portraits",
    description: "Official executive headshot for leadership panels.",
    imageUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784823883/SAVE_20260723_172314_nrwugz.jpg",
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

export default function PhotoGallery() {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item, index) => {
              // On mobile/small screens, hide index 3, 4, 5 if not expanded.
              // On large desktop screens (lg:grid), Tailwind overrides make everything layout properly.
              const shouldHideOnMobile = !isExpanded && index >= 3;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  // Handles hiding on mobile via simple utility layout toggle
                  className={`relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950/40 group shadow-lg ${shouldHideOnMobile ? 'hidden sm:block' : 'block'
                    }`}
                >
                  {/* Main Background Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 filter brightness-[0.95] md:brightness-[0.9] group-hover:brightness-[0.75]"
                    loading="lazy"
                  />

                  {/* Border Protection Layer */}
                  <div className="absolute inset-0 border border-neutral-900/40 rounded-2xl pointer-events-none" />

                  {/* Gradient Protected Content Layout */}
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
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- Simple Mobile Adaptive 'See More' Button Layout --- */}
        <div className="mt-10 flex justify-center sm:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 text-xs text-neutral-300 tracking-wider font-semibold uppercase px-6 py-3 rounded-xl transition-all"
          >
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        </div>

      </div>
    </section>
  );
}
