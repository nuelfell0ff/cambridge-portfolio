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

const ADVISORY_SERVICES = [
  {
    title: "Healthcare Digital Transformation",
    description: "Guiding health platforms, clinics, and health-tech startups in architecting secure, scalable virtual care systems and telemetry workflows.",
    deliverables: ["Ecosystem System Architecture", "Clinical Workflow Optimization", "Telemedicine Deployment"]
  },
  {
    title: "Venture Strategy & Product Scaling",
    description: "Strategic roadmapping for founders and executives building digital health ventures across emerging markets, from MVP to regional deployment.",
    deliverables: ["Product Growth Strategy", "Go-To-Market Alignment", "Regulatory & Risk Advisory"]
  },
  {
    title: "AI Integration in Clinical Systems",
    description: "Advising leadership on leveraging machine learning and computational health frameworks to enhance diagnostic efficiency and equity.",
    deliverables: ["Clinical AI Strategy", "Data Privacy & Governance", "Operational Automation"]
  }
];

export default function AdvisoryPage() {
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
            Executive Consulting
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Advisory & Strategy
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            Strategic counsel for health tech founders, executive boards, and institutions navigating frontier challenges in digital healthcare, AI integration, and venture scaling.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {ADVISORY_SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/60 flex flex-col justify-between hover:border-neutral-800 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-neutral-500 mb-2 block">0{idx + 1}</span>
                <h2 className="text-lg font-semibold text-white mb-3">{service.title}</h2>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div className="border-t border-neutral-900/80 pt-4">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 block mb-2">Key Focus Areas</span>
                <ul className="space-y-1.5">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs text-neutral-300 flex items-center gap-2 font-light">
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Engagement Protocol */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white tracking-tight mb-6">Engagement Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40">
              <h3 className="text-sm font-medium text-white mb-2">1-on-1 Executive Sessions</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Targeted 30-to-60 minute consultation calls dedicated to evaluating tech stack architectures, clinical product validation, or healthcare venture roadmaps.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40">
              <h3 className="text-sm font-medium text-white mb-2">Retained Board & Strategic Advisory</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Ongoing strategic partnership for health tech startups and ecosystem ventures requiring routine technical oversight and leadership direction.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-6 border-t border-neutral-900">
          <div className="p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Book an Executive Consultation</h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-md font-light leading-relaxed">
                Schedule a direct session to explore advisory options for your health technology venture or institutional initiatives.
              </p>
            </div>
            <a 
              href="https://calendly.com/cambridgeprakash/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-xs font-medium text-white transition-all shadow-md shrink-0"
              style={{ backgroundColor: colors.green }}
            >
              Reserve Strategy Session
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}