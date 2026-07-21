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

export default function AccessibilityStatementPage() {
  const lastUpdated = "July 21, 2026";

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
          className="flex flex-col mb-12 border-b border-neutral-900 pb-8"
        >
          <span 
            className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: colors.accentGreen }}
          >
            Digital Inclusion
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Accessibility Statement
          </h1>
          <p className="text-xs text-neutral-500 font-mono">
            Effective Date: {lastUpdated}
          </p>
        </motion.div>

        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10 text-neutral-300 text-sm md:text-base leading-relaxed font-light"
        >
          {/* Commitment Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              1. Our Commitment
            </h2>
            <p>
              <strong>Timilehin Seyi Ogunsakin</strong> is dedicated to ensuring digital accessibility for everyone, including individuals with disabilities. Digital healthcare equity is a core principle driving our technology ecosystem—including <strong>MedXVerse</strong>, <strong>MedXGo</strong>, and <strong>MedXLearn</strong>—and we continually apply relevant accessibility standards to optimize user experience across all web platforms.
            </p>
          </section>

          {/* Standards & Guidelines */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              2. Conformance Status
            </h2>
            <p>
              This website strives to align with the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards. These guidelines define requirements to make web content more accessible to people with a wide range of disabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/50">
                <h3 className="font-medium text-white text-sm mb-1">Keyboard & Screen Readers</h3>
                <p className="text-xs text-neutral-400">Structured layout markup, logical focus outlines, and semantic HTML elements support keyboard-only navigation and screen reader software.</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/50">
                <h3 className="font-medium text-white text-sm mb-1">Visual & Motion Controls</h3>
                <p className="text-xs text-neutral-400">High-contrast color ratios against dark background palettes and responsive typography designed to prevent visual strain across screens.</p>
              </div>
            </div>
          </section>

          {/* Known Technical Measures */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              3. Ongoing Optimization
            </h2>
            <p>
              We routinely audit our application components to identify and resolve accessibility barriers. Our design routines explicitly exclude unnecessary visual clutter and prioritize clear icon indicators over emojis to maintain readable interface semantics.
            </p>
          </section>

          {/* Feedback & Contact */}
          <section className="pt-6 border-t border-neutral-900">
            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">Encountering accessibility barriers?</h3>
                <p className="text-xs text-neutral-400 mt-1">We welcome your feedback. Please reach out via our booking portal to report accessibility issues or request accommodations.</p>
              </div>
              <a 
                href="https://calendly.com/cambridgeprakash/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-medium text-white transition-all shadow-md shrink-0"
                style={{ backgroundColor: colors.green }}
              >
                Get in Touch
              </a>
            </div>
          </section>

        </motion.div>
      </div>
    </main>
  );
}