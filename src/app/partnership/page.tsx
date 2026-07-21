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

const PARTNERSHIP_TRACKS = [
  {
    tag: "Commercial & Clinical Deployments",
    title: "Virtual Care & Health Tech Rollouts",
    description: "Partnering with regional hospitals, clinics, and health networks to pilot and integrate modern virtual care infrastructure and digital patient monitoring tools.",
    requirements: "Clinical facilities, established healthcare providers, or digital health distribution networks.",
    status: "Open for Q3/Q4"
  },
  {
    tag: "Technical & Venture Co-Creation",
    title: "Frontier Health AI Innovation",
    description: "Collaborating with fellow engineers, researchers, and founders to co-develop open-source clinical models or launch high-impact digital health ventures.",
    requirements: "Full-stack engineers, ML practitioners, or clinical domain experts with active prototypes.",
    status: "Active Collaboration"
  },
  {
    tag: "Academic & Institutional",
    title: "Computational Health Research",
    description: "Joint research projects focusing on AI-assisted diagnostics, telemetry data optimization, and health equity in resource-constrained environments.",
    requirements: "Academic institutions, research labs, or non-profit global health organizations.",
    status: "Open"
  }
];

export default function PartnershipsPage() {
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
            Partnership Openings
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            Strategic collaborations with health tech ventures, clinical institutions, research labs, and technical co-creators driving scalable global health solutions.
          </p>
        </motion.div>

        {/* Strategic Focus Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/60 mb-16"
        >
          <h2 className="text-sm font-semibold text-white mb-2">Partnership Philosophy</h2>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            I prioritize strategic alignment over volume—focusing on partnerships where computational systems and software engineering yield compounding, measurable improvements in clinical workflow efficiency, diagnostic precision, or patient accessibility.
          </p>
        </motion.div>

        {/* Partnership Tracks */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white tracking-tight mb-8">Active Collaboration Tracks</h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 gap-6"
          >
            {PARTNERSHIP_TRACKS.map((track, idx) => (
              <div 
                key={idx}
                className="p-6 md:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/60 flex flex-col justify-between gap-6 hover:border-neutral-800 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span 
                      className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-900/80"
                      style={{ color: colors.accentGreen }}
                    >
                      {track.tag}
                    </span>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      {track.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{track.title}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                    {track.description}
                  </p>
                </div>

                <div className="border-t border-neutral-900 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 block mb-1">Ideal Partner Profile</span>
                    <p className="text-xs text-neutral-300 font-light">{track.requirements}</p>
                  </div>
                  <a 
                    href="mailto:contact@timilehin.dev?subject=Partnership%20Proposal"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors shrink-0"
                  >
                    <span>Propose Collaboration</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="pt-6 border-t border-neutral-900">
          <div className="p-8 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Have a Custom Partnership Proposal?</h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-md font-light leading-relaxed">
                If your initiative falls outside these specific tracks but addresses frontier healthcare technology or computational software engineering, reach out directly.
              </p>
            </div>
            <a 
              href="mailto:contact@timilehin.dev?subject=Custom%20Partnership%20Inquiry"
              className="px-6 py-3 rounded-lg text-xs font-medium text-white transition-all shadow-md shrink-0"
              style={{ backgroundColor: colors.green }}
            >
              Initiate Partnership Discussion
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}