"use client";
import React from 'react';
import { motion } from 'framer-motion';

// 1. Configuration Constants (Kept safely outside the component scope)
const FOOTER_COLORS = {
  blue: '#193A60', 
  green: '#1F7299', 
  bgDark: '#0a0806',
};

const SITEMAP_GROUPS = [
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

const SOCIAL_PROFILES = [
  { name: "LinkedIn", href: "#", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z" },
  { name: "X", href: "#", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  { name: "Instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.2-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.351-2.609-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "YouTube", href: "#", path: "M19.615 3.184c-3.604-.242-11.625-.242-15.23 0-3.897.266-4.385 2.303-4.385 8.816 0 6.513.488 8.55 4.385 8.816 3.604.242 11.625.242 15.23 0 3.897-.266 4.385-2.303 4.385-8.816 0-6.513-.488-8.55-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" },
  { name: "GitHub", href: "#", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility Statement"];

// 2. Main Functional Component
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-10 gap-y-12 pb-16 border-b border-neutral-900/60 mb-12">
          
          {/* Brand Profile Information */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 flex flex-col items-start gap-4">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-9 h-9 rounded-md flex items-center justify-center border border-neutral-800" style={{ backgroundColor: `${FOOTER_COLORS.blue}20` }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: FOOTER_COLORS.green }} />
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
                Cambridge, United Kingdom
              </span>
            </div>
          </div>

          {/* Interactive Navigation Link Collections */}
          {SITEMAP_GROUPS.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              className="lg:col-span-3 flex flex-col gap-5"
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
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-2 text-[13px] text-neutral-400 font-light hover:text-white transition-colors"
                    >
                      <span className="transition-transform group-hover:translate-x-0.5">{link.name}</span>
                      <svg className="w-3 h-3 text-neutral-600 transform opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: FOOTER_COLORS.green }} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
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
            <div className="flex items-center gap-4">
              {LEGAL_LINKS.map((link) => (
                <a key={link} href="#" className="hover:text-neutral-400 transition-colors">
                  {link}
                </a>
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
