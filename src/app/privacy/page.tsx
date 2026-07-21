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

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 21, 2026";

  return (
    <main 
      className="min-h-screen text-white pt-32 pb-24 px-6 md:px-12 relative overflow-hidden selection:bg-[#1F7299]/30 selection:text-white"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Interactive Radial Gradient Glow */}
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
            Legal Framework
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Privacy Policy
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
          {/* Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              1. Overview & Purpose
            </h2>
            <p>
              This Privacy Policy details how the official portfolio platform of <strong>Timilehin Seyi Ogunsakin</strong>, along with associated professional advisory, speaking channels, and ecosystem platforms—including <strong>MedXVerse</strong>, <strong>MedXGo</strong>, and <strong>MedXLearn</strong>—collects, utilizes, and protects information gathered from users visiting this website or scheduling consultations.
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed pt-1">
              Respecting user data privacy is fundamental across all health technology, educational, and executive operations led by Timilehin Seyi Ogunsakin.
            </p>
          </section>

          {/* Data We Collect */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              2. Information We Collect
            </h2>
            <p>
              We only collect data strictly necessary to fulfill scheduling inquiries, advisory engagement requests, or communication submissions:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400 text-sm">
              <li><strong className="text-neutral-200">Contact & Booking Information:</strong> Full name, professional email address, organization details, and notes submitted via scheduling portals (e.g., Calendly).</li>
              <li><strong className="text-neutral-200">Interactive Communication Data:</strong> Direct inquiries regarding keynote speaking, health tech consultations, software architecture, or venture advisory.</li>
              <li><strong className="text-neutral-200">Technical Web Telemetry:</strong> Standard non-identifying web analytics such as browser type, IP address region, referring pages, and session durations to optimize layout performance.</li>
            </ul>
          </section>

          {/* How We Use Your Data */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              3. How We Use Information
            </h2>
            <p>
              Information collected through this platform is exclusively used for professional interactions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/50">
                <h3 className="font-medium text-white text-sm mb-1">Advisory & Speaking</h3>
                <p className="text-xs text-neutral-400">Processing consultation sessions, executive advisory bookings, and conference keynotes.</p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/50">
                <h3 className="font-medium text-white text-sm mb-1">Ecosystem Communication</h3>
                <p className="text-xs text-neutral-400">Responding to executive inquiries regarding MedXVerse, MedXGo, and MedXLearn platform rollouts.</p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              4. Third-Party Integrations
            </h2>
            <p>
              Our website integrates with trusted third-party service providers to facilitate scheduling and deliver media assets efficiently:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-400 text-sm">
              <li><strong className="text-neutral-200">Calendly:</strong> Facilitates consultation and meeting bookings. Please review Calendly’s independent privacy policy when reserving dates.</li>
              <li><strong className="text-neutral-200">Cloudinary & Vercel:</strong> Host static media assets, product UI frames, and deliver serverless web applications securely.</li>
            </ul>
          </section>

          {/* Data Security & Protection */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
              5. Data Protection & Sharing
            </h2>
            <p>
              We strictly enforce a policy against selling, renting, or leasing user data to third parties. All personal contact information obtained via direct outreach remains confidential.
            </p>
          </section>

          {/* Contact Section */}
          <section className="pt-6 border-t border-neutral-900">
            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">Have questions regarding data privacy?</h3>
                <p className="text-xs text-neutral-400 mt-1">Direct all legal inquiries or data protection requests through the official booking portal.</p>
              </div>
              <a 
                href="https://calendly.com/cambridgeprakash/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-medium text-white transition-all shadow-md shrink-0"
                style={{ backgroundColor: colors.green }}
              >
                Schedule Inquiry
              </a>
            </div>
          </section>

        </motion.div>
      </div>
    </main>
  );
}