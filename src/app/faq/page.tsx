"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  blue: '#193A60',
  green: '#1F7299',
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
};

const FAQ_CATEGORIES = [
  "All",
  "General & Background",
  "Advisory & Consulting",
  "Speaking & Media",
  "Technical & Engineering"
];

const FAQS = [
  {
    category: "General & Background",
    question: "What is Timilehin's background at the intersection of tech and health?",
    answer: "Timilehin combines a technical background in software engineering and computational systems with a deep focus on healthcare digital transformation. His work centers on engineering resilient virtual care platforms, telemetry workflows, and AI integration for global health challenges."
  },
  {
    category: "General & Background",
    question: "Where is Timilehin based and available for work?",
    answer: "Based out of Lagos, Nigeria, Timilehin works globally across time zones. Advisory calls, speaking engagements, and technical collaborations are conducted virtually or on-site for key global events and executive summits."
  },
  {
    category: "Advisory & Consulting",
    question: "How do 1-on-1 advisory sessions work?",
    answer: "Strategy sessions can be reserved directly via Calendly for 30 or 60 minutes. Topics range from auditing health-tech architectures and evaluating clinical AI feasibility to defining venture growth roadmaps in emerging markets."
  },
  {
    category: "Advisory & Consulting",
    question: "Does Timilehin offer long-term board or venture advisory?",
    answer: "Yes, retained strategic advisory is available for select health-tech startups, healthcare networks, and research labs that require continuous technical leadership, architecture oversight, and product direction."
  },
  {
    category: "Speaking & Media",
    question: "How far in advance should keynotes or panel requests be submitted?",
    answer: "It is recommended to submit requests 4 to 8 weeks ahead of scheduled conference dates, particularly for international events or custom technical workshops that require tailored curriculum development."
  },
  {
    category: "Speaking & Media",
    question: "Are media interviews and podcast appearances accepted?",
    answer: "Yes, Timilehin frequently participates in discussions around computational health, digital medicine, software architecture, and technology venture growth in emerging markets."
  },
  {
    category: "Technical & Engineering",
    question: "What core tech stacks and systems does Timilehin work with?",
    answer: "His technical stack focuses on modern, scalable Web/Cloud architectures (Next.js, React, Node.js/Express, TypeScript, Tailwind CSS), alongside computational health frameworks, low-latency telemetry pipelines, and AI integration."
  },
  {
    category: "Technical & Engineering",
    question: "How can we propose an open-source or research collaboration?",
    answer: "Direct technical proposals can be sent via the Partnership Openings channel or by emailing contact@timilehin.dev with brief details on your project stack, clinical use case, and roadmap."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "All" 
    ? FAQS 
    : FAQS.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

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

      <div className="max-w-4xl mx-auto z-10 relative">
        
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
          className="flex flex-col mb-12 border-b border-neutral-900 pb-10"
        >
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: colors.accentGreen }}
          >
            Engage & Consult
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            Answers regarding executive advisory, speaking engagements, technical stack expertise, and strategic health tech partnerships.
          </p>
        </motion.div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {FAQ_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIdx(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "text-white shadow-sm"
                  : "text-neutral-400 border border-neutral-900 bg-neutral-950/40 hover:text-white hover:border-neutral-800"
              }`}
              style={{
                backgroundColor: activeCategory === category ? colors.green : undefined
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accordion FAQ List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 mb-16"
        >
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-neutral-900 bg-neutral-950/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className="shrink-0 p-1 rounded-full bg-neutral-900 text-neutral-400">
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-neutral-900/60 text-xs text-neutral-400 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Contact Footer */}
        <section className="pt-6 border-t border-neutral-900">
          <div className="p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Still Have Questions?</h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-md font-light leading-relaxed">
                Reach out directly with specific queries about project inquiries, media appearances, or technical consultations.
              </p>
            </div>
            <a 
              href="mailto:contact@timilehin.dev?subject=General%20Inquiry"
              className="px-6 py-3 rounded-lg text-xs font-medium text-white transition-all shadow-md shrink-0"
              style={{ backgroundColor: colors.green }}
            >
              Get in Touch
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}