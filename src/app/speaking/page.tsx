"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const colors = {
  blue: '#193A60',
  green: '#1F7299',
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
};

const SPEAKING_TOPICS = [
  {
    category: "Keynote & Panels",
    title: "AI & Computational Systems in Frontier Healthcare",
    description: "How machine learning, real-time data pipelines, and telemetry are redesigning diagnostics and patient outcomes in resource-constrained environments.",
    takeaways: ["Architecting scalable clinical AI models", "Navigating data privacy & regulatory hurdles", "Bridging the global health tech equity gap"]
  },
  {
    category: "Technical Workshop",
    title: "Engineering Resilient Digital Health Infrastructure",
    description: "A deep dive into constructing high-availability, low-latency health platforms, virtual care systems, and secure telemetry integrations.",
    takeaways: ["System design for clinical reliability", "Interoperability & EHR integration", "Zero-downtime health data architecture"]
  },
  {
    category: "Fireside Chat & Strategy",
    title: "Venture Building & Health Tech Innovation in Emerging Markets",
    description: "Insights on growing health technology ventures from ground zero, securing early adoption, and scaling digital health ecosystems.",
    takeaways: ["Founder lessons from MVP to regional scale", "Building trust with clinical stakeholders", "Navigating health venture ecosystems"]
  }
];

const ENGAGEMENT_STATS = [
  { value: "15+", label: "Keynotes & Panels" },
  { value: "5k+", label: "Attendees Reached" },
  { value: "Global", label: "Conference Reach" }
];

export default function SpeakingPage() {
  return (
    <main 
      className="min-h-screen text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden selection:bg-[#1F7299]/30 selection:text-white"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Radial Gradient Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at top, ${colors.blue}20 0%, transparent 70%)`
        }}
      />

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Navigation Back Link */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col mb-16 border-b border-neutral-900 pb-10"
        >
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: colors.accentGreen }}
          >
            Engage & Consult
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Speaking & Panels
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            Keynotes, fireside chats, and expert panel discussions exploring the intersection of digital health technology, computational AI systems, and healthcare venture strategy.
          </p>
        </motion.div>

        {/* Impact Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-3 gap-4 mb-16 p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 divide-x divide-neutral-900 text-center"
        >
          {ENGAGEMENT_STATS.map((stat, idx) => (
            <div key={idx} className="px-2">
              <span className="text-2xl md:text-4xl font-bold text-white block mb-1">{stat.value}</span>
              <span className="text-[11px] md:text-xs text-neutral-400 font-light">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Speaking Topics */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white tracking-tight mb-8">Core Speaking Topics</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 gap-6"
          >
            {SPEAKING_TOPICS.map((topic, idx) => (
              <div 
                key={idx}
                className="p-6 md:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/60 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:border-neutral-800 transition-colors"
              >
                <div className="max-w-xl">
                  <span 
                    className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 inline-block mb-3"
                    style={{ color: colors.accentGreen }}
                  >
                    {topic.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">{topic.title}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                    {topic.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topic.takeaways.map((takeaway, tIdx) => (
                      <span key={tIdx} className="text-[11px] text-neutral-300 bg-neutral-900/60 border border-neutral-800/80 px-2.5 py-1 rounded-md font-light">
                        {takeaway}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-900">
                  <a 
                    href="mailto:contact@timilehin.dev?subject=Speaking%20Inquiry"
                    className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>Request Topic</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Media Kit & Booking Callout */}
        <section className="pt-6 border-t border-neutral-900">
          <div className="p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Book Timilehin for Your Event</h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-md font-light leading-relaxed">
                Available for international health tech conferences, university guest lectures, executive panel moderations, and technical symposiums.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a 
                href="mailto:contact@timilehin.dev?subject=Speaking%20Inquiry%20-%20Event%20Booking"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-lg text-xs font-medium text-white transition-all shadow-md"
                style={{ backgroundColor: colors.green }}
              >
                Submit Keynote Booking
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}