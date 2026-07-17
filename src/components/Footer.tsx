"use client";
import React from 'react';
import { motion } from 'framer-motion';

const colors = {
  blue: '#193A60', 
  green: '#1F7299', // Medical blue highlight
  accentGreen: '#1F7299',
  textWhite: '#FFFFFF',
  bgDark: '#0a0806',
};

// --- DATA STRUCTURES (Preparing for later routing) ---

// 1. Content Sitemap/Navigation Groups
const sitemap = [
  {
    title: "Contact & Inquiries",
    links: [
      { name: "Business Inquiry Form", href: "#", description: "Standard business outreach" },
      { name: "Speaking Requests", href: "#", description: "Keynotes & panels" },
      { name: "Partnership Inquiries", href: "#", description: "Strategic collaborations" },
      { name: "Investor Contact", href: "#", description: "VC & funding outreach" },
      { name: "Media Requests", href: "#", description: "Press & interviews" },
    ]
  },
  {
    title: "Book & Consult",
    links: [
      { name: "Speaking Engagements", href: "#" },
      { name: "Advisory Sessions", href: "#" },
      { name: "Media Interviews", href: "#" },
      { name: "Startup Consultations", href: "#" },
    ]
  },
  {
    title: "Frequently Asked Questions",
    links: [
      { name: "Speaking & Events FAQ", href: "#" },
      { name: "Collaborations FAQ", href: "#" },
      { name: "Startups & Ventures FAQ", href: "#" },
      { name: "Research & Academic FAQ", href: "#" },
      { name: "Mentorship FAQ", href: "#" },
    ]
  }
];

// 2. Social Profiles
const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z" },
  { name: "X", href: "#", icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  { name: "Instagram", href: "#", icon: "M12.315 2c2.43 0 2.784.01 3.81.058a5.207 5.207 0 011.72.333c.725.28 1.25.64 1.77.172.53.513.896 1.042 1.173 1.773.28.72.484 1.201.333 1.722.048 1.026.058 1.38.058 3.81s-.01 2.784-.058 3.81a5.207 5.207 0 01-.333 1.72c-.28.725-.64 1.25-1.173 1.77-.513.53-1.042.896-1.773 1.173-.72.28-1.201.484-1.722.333-1.026.048-1.38.058-3.81.058s-2.784-.01-3.81-.058a5.207 5.207 0 01-1.72-.333 4.148 4.148 0 01-1.77-1.173A4.14 4.14 0 012 16.125c.048-1.026.058-1.38.058-3.81s-.01-2.784-.058-3.81a5.207 5.207 0 01.333-1.72A4.14 4.14 0 013.297 3.27a4.148 4.148 0 011.77-1.173c.72-.28 1.201-.484 1.722-.333C7.901 2.01 8.255 2 10.685 2h1.63z" },
  { name: "YouTube", href: "#", icon: "M19.615 3.184c-3.604-.242-11.625-.242-15.23 0-3.897.266-4.385 2.303-4.385 8.816 0 6.513.488 8.55 4.385 8.816 3.604.242 11.625.242 15.23 0 3.897-.266 4.385-2.303 4.385-8.816 0-6.513-.488-8.55-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" },
  { name: "GitHub", href: "#", icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" },
];

// 3. Legal Footer Links
const legalLinks = ["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility Statement"];

export default function WebsiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full text-white px-6 md:px-12 pt-20 pb-8 relative overflow-hidden border-t border-neutral-900/40"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Subtle Accent blob */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 90%, ${colors.blue}15 0%, transparent 50%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* --- Top Section: Sitemap & Branding --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900/60 mb-12">
          
          {/* Branding & Social Column */}
          <div className="md:col-span-12 lg:col-span-3 flex flex-col items-start gap-5">
            <motion.div 
              className="flex items-center space-x-3 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-9 h-9 rounded-md flex items-center justify-center border border-neutral-800" style={{ backgroundColor: `${colors.blue}20` }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.green }} />
              </div>
              <span className="text-xl font-bold tracking-tight">Timilehin <span className="font-light text-neutral-400">Seyin Ogunsakin</span></span>
            </motion.div>
            
            <p className="text-neutral-400 text-xs font-light leading-relaxed max-w-sm">
              Bridging clinical experience with modern AI software engineering to scale high-impact digital healthcare solutions globally.
            </p>

            {/* Contact Information Block */}
            <div className="mt-4 flex flex-col gap-2.5 text-xs text-neutral-500 font-light">
              <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <a href="#" className="hover:text-white transition-colors">contact@timilehin.dev</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <span>Cambridge, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Sitemap Columns (Contact, FAQ, Booking groups) */}
          <div className="md:col-span-12 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {sitemap.map((group, groupIdx) => (
              <motion.div 
                key={groupIdx}
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              >
                <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-300" style={{ fontFamily: "monospace" }}>
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-3.5">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href={link.href} className="group flex flex-col gap-1 items-start">
                        <div className="flex items-center gap-2 transition-all group-hover:gap-2.5">
                          <span className="text-[13px] text-neutral-400 font-light group-hover:text-white transition-colors">
                            {link.name}
                          </span>
                          <svg className="w-3 h-3 text-neutral-600 transform transition-all group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: `${colors.green}00`, groupHover: { color: colors.green } }} >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>Here is the complete **WebsiteFooter** section. It integrates all the distinct content buckets you provided (Contact, Social, FAQ, Booking, and Legal) into one sharp, medical-tech-focused layout.

This footer uses clean vector icons, subtle background gradients, micro-interactions on hover, and a structured grid that ensures clean vertical alignment and high clarity on all screens.

### File Name: `WebsiteFooter.tsx`

```tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const colors = {
  blue: '#193A60', 
  green: '#1F7299', // Medical blue highlight
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
};

// Sitemap Groups (Contact, Booking, FAQ) mapping your core requirements
const sitemap = [
  {
    title: "Contact & Inquiries",
    links: [
      { name: "Business Inquiry Form", href: "#" },
      { name: "Speaking Requests", href: "#" },
      { name: "Partnership Inquiries", href: "#" },
      { name: "Investor Contact", href: "#" },
      { name: "Media Requests", href: "#" },
    ]
  },
  {
    title: "Book & Consult",
    links: [
      { name: "Speaking Engagements", href: "#" },
      { name: "Advisory Sessions", href: "#" },
      { name: "Media Interviews", href: "#" },
      { name: "Startup Consultations", href: "#" },
    ]
  },
  {
    title: "Common Questions",
    links: [
      { name: "Speaking FAQ", href: "#" },
      { name: "Collaborations FAQ", href: "#" },
      { name: "Startups FAQ", href: "#" },
      { name: "Research FAQ", href: "#" },
      { name: "Mentorship FAQ", href: "#" },
    ]
  }
];

// Professional Profiles Section Icons (SVG)
const socialLinks
