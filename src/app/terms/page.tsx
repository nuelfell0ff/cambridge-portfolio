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

export default function TermsOfServicePage() {
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
            Legal Agreement
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Terms of Service
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
          {/* Agreement to Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and navigating the personal portfolio, product showcase, and advisory platforms operated by <strong>Timilehin Seyi Ogunsakin</strong>, you agree to be bound by these Terms of Service and all applicable laws. If you disagree with any portion of these terms, you are advised to discontinue platform navigation.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              2. Intellectual Property Rights
            </h2>
            <p>
              All proprietary code, custom software architectures, interface designs, logos, and ecosystem project assets showcased on this site—including but not limited to <strong>MedXVerse</strong>, <strong>MedXGo</strong>, and <strong>MedXLearn</strong>—are the exclusive intellectual property of Timilehin Seyi Ogunsakin unless explicitly stated otherwise.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400 text-sm pt-1">
              <li>Unauthorized reproduction, mirroring, or distribution of UI design elements or software source patterns is strictly prohibited.</li>
              <li>Brand logos and identity markers may not be used in external media without explicit written permission.</li>
            </ul>
          </section>

          {/* Advisory & Engagement Bookings */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              3. Consultations & Advisory Services
            </h2>
            <p>
              Bookings scheduled through our integrated calendar portals (e.g., keynotes, executive health-tech strategy, software engineering advisory) are subject to scheduling confirmation and mutual availability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/50">
                <h3 className="font-medium text-white text-sm mb-1">Keynotes & Speaking</h3>
                <p className="text-xs text-neutral-400">Conference keynotes and panel invitations are finalized following direct agenda alignment.</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/50">
                <h3 className="font-medium text-white text-sm mb-1">Ecosystem Advisory</h3>
                <p className="text-xs text-neutral-400">Strategic technical advisory for digital health platforms is governed by separate non-disclosure and service agreements.</p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              4. Disclaimer & Limitation of Liability
            </h2>
            <p>
              Information presented across this portfolio is provided for informational, demonstration, and professional networking purposes. While every effort is made to maintain accuracy, content is delivered on an "as is" basis without implied warranties of any kind.
            </p>
          </section>

          {/* Modifications */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              5. Governing Law & Modifications
            </h2>
            <p>
              We reserve the right to revise or update these Terms of Service at any time without prior notice. Continued usage of the website following any changes signifies your acceptance of the updated terms.
            </p>
          </section>

          {/* Contact Section */}
          <section className="pt-6 border-t border-neutral-900">
            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">Questions about our Terms of Service?</h3>
                <p className="text-xs text-neutral-400 mt-1">Connect directly via the official booking channel for inquiries or partnership terms.</p>
              </div>
              <a 
                href="https://calendly.com/cambridgeprakash/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-medium text-white transition-all shadow-md shrink-0"
                style={{ backgroundColor: colors.green }}
              >
                Schedule Meeting
              </a>
            </div>
          </section>

        </motion.div>
      </div>
    </main>
  );
}