"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// 1. Configuration Constants
const FOOTER_COLORS = {
  blue: '#193A60',
  green: '#1F7299',
  bgDark: '#0a0806',
};

const SITEMAP_GROUPS = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Companies", href: "#companies" },
      { name: "Gallery", href: "#gallery" },
      { name: "Press & Media", href: "#press" },
      { name: "Testimonials", href: "#testimonials" },
    ]
  },
  {
    title: "Engage & Consult",
    links: [
      { name: "Advisory & Strategy", href: "/advisory" },
      { name: "Speaking & Panels", href: "/speaking" },
      { name: "Partnership Openings", href: "/partnership" },
      { name: "General FAQ", href: "/faq" },
    ]
  }
];

const SOCIAL_PROFILES = [
  { name: "LinkedIn", href: "https://www.linkedin.com/posts/timilehin-adeleke-ogunsakin-80a063202_", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z" },
  { name: "X", href: "https://x.com/cambridge54080?s=11", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  { name: "Instagram", href: "https://www.instagram.com/the_realcambridge?utm_source=qr", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.2-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.351-2.609-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "YouTube", href: "https://youtube.com/@medxverse?si=YKFzMFlb4EsW9p08", path: "M19.615 3.184c-3.604-.242-11.625-.242-15.23 0-3.897.266-4.385 2.303-4.385 8.816 0 6.513.488 8.55 4.385 8.816 3.604.242 11.625.242 15.23 0 3.897-.266 4.385-2.303 4.385-8.816 0-6.513-.488-8.55-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" },
  { name: "Snapchat", href: "https://snapchat.com/t/foaPxwKM", path: "M12.28 1.83c-.8-.06-2.14.28-3.08 1.19-.7.67-.93 1.54-.93 2.76 0 1.05.3 1.63.53 2.06.07.13.04.18-.08.23-.33.16-1.04.58-1.42 1.34-.33.68-.2 1.47.38 2.22.1.13.12.23.02.34-.32.32-.98.92-1.32 2.08-.29.98.05 1.87.97 2.47.16.1.18.19.11.33-.25.49-.63 1.53-.29 2.59.39 1.18 1.55 1.68 2.51 1.54.17-.03.24.04.28.2.22 1 .84 1.94 1.96 2.07 1.05.12 1.83-.56 2.11-1.39.06-.17.14-.2.3-.14.88.35 1.9.12 2.54-.59.56-.62.61-1.48.51-2.28-.02-.17.04-.25.2-.26.97-.08 1.77-.6 2.05-1.5.28-.93-.05-1.85-.74-2.48-.12-.11-.12-.2-.02-.33.45-.6.67-1.33.56-2.1-.14-.99-.81-1.63-1.4-1.92-.12-.06-.14-.13-.08-.26.27-.51.49-1.18.49-2.09 0-1.25-.33-2.19-1.05-2.88-.98-.95-2.38-1.26-3.21-1.18Z" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Accessibility Statement", href: "/accessibility" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full text-white px-6 md:px-12 pt-20 pb-8 relative overflow-hidden border-t border-neutral-900/40"
      style={{ backgroundColor: FOOTER_COLORS.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Neon Accent Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 90%, ${FOOTER_COLORS.blue}15 0%, transparent 50%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 relative">

        {/* --- Top Layout Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-12 pb-16 border-b border-neutral-900/60 mb-12">

          {/* Brand Profile Information */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start gap-4">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-sm transition-transform duration-300 group-hover:rotate-12 flex items-center justify-center font-bold text-xs md:text-sm text-white shadow-inner"
                style={{ backgroundColor: FOOTER_COLORS.green }}
              >
                TO
              </div>
              <span className="text-xl font-semibold tracking-tight">T. Seyi Ogunsakin</span>
            </motion.div>

            <p className="text-neutral-400 text-xs font-light leading-relaxed max-w-sm">
              Healthcare Technology Entrepreneur & Medical Innovator leveraging computational systems to solve frontier global health challenges.
            </p>

            <div className="mt-2 flex flex-col gap-2 text-xs text-neutral-500 font-light">
              <span className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                contact@timilehin.dev
              </span>
              <span className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                Lagos, Nigeria
              </span>
            </div>
          </div>

          {/* Interactive Navigation Link Collections */}
          {SITEMAP_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              className="sm:col-span-1 lg:col-span-4 flex flex-col gap-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-[13px] text-neutral-400 font-light hover:text-white transition-colors"
                    >
                      <span className="transition-transform group-hover:translate-x-0.5">{link.name}</span>
                      <svg className="w-3 h-3 text-neutral-600 transform opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: FOOTER_COLORS.green }} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Base Row (Legal Information & Social Interfaces) --- */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3 text-xs text-neutral-600 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>&copy; {currentYear} Timilehin Ogunsakin.</span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {LEGAL_LINKS.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-neutral-400 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {SOCIAL_PROFILES.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                aria-label={`Visit professional ${link.name} profile`}
                className="group relative flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 bg-neutral-950 transition-all hover:border-neutral-700 hover:bg-neutral-900 active:scale-95 shadow-sm"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, ${FOOTER_COLORS.green}15 0%, transparent 70%)`
                  }}
                />
                <svg className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d={link.path} />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </footer>
  );
   }
                
