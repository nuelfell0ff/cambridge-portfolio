"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  blue: '#193A60', 
  green: '#1F7299', // Medical blue highlight
  accentGreen: '#1F7299',
  bgDark: '#0a0806',
};

const subscriptionPerks = [
  { title: "Articles", desc: "Deep dives into digital health, clinical AI, and full-stack software architectures." },
  { title: "Updates", desc: "Monthly changelogs and build progress from ongoing medical tech platforms." },
  { title: "Speaking Events", desc: "Keynotes, panels, and tech talks across healthcare and innovation ecosystems." },
  { title: "Product Launches", desc: "Early beta access and distribution announcements for new software releases." }
];

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      // Simulating network delay for production feel
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section 
      id="newsletter"
      className="w-full text-white px-6 md:px-12 py-16 md:py-24 relative overflow-hidden border-t border-neutral-900/40"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background Glow Node */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 80%, ${colors.blue}12 0%, transparent 50%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- Left Column: Header & Value Propositions --- */}
          <div className="lg:col-span-6 flex flex-col">
            <span 
              className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3 block"
              style={{ color: colors.accentGreen }}
            >
              Stay Informed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Subscribe For <span style={{ color: colors.green }}>Updates</span>
            </h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed mb-10 max-w-xl">
              Join a network of clinicians, engineers, and venture operators receiving specialized insights at the intersection of medicine and technology.
            </p>

            {/* Feature Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {subscriptionPerks.map((perk, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex gap-3"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                      <div className="w-0.5 h-0.5 rounded-full" style={{ backgroundColor: colors.accentGreen }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1">{perk.title}</h4>
                    <p className="text-neutral-500 text-[12px] font-light leading-normal">{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Functional Form Element --- */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end w-full">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-lg rounded-2xl border border-neutral-800/80 bg-neutral-900/10 backdrop-blur-sm p-8 relative overflow-hidden"
            >
              {/* Decorative light strip */}
              <div 
                className="absolute top-0 left-0 right-0 h-[1px]" 
                style={{ backgroundImage: `linear-gradient(90deg, transparent, ${colors.green}40, transparent)` }} 
              />

              <h3 className="text-lg font-medium text-neutral-200 mb-2">Join the newsletter</h3>
              <p className="text-neutral-500 text-xs font-light mb-6">No spam. Unsubscribe at any time with a single click.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      disabled={status === 'loading' || status === 'success'}
                      placeholder="Enter your email address"
                      className="w-full h-11 bg-neutral-950 border border-neutral-800 rounded-lg px-4 text-xs font-light text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-700 transition-colors disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="h-11 px-6 rounded-lg text-xs font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 flex-shrink-0 active:scale-[0.98] disabled:opacity-50 disabled:scale-100"
                    style={{ backgroundColor: colors.green }}
                  >
                    {status === 'loading' ? (
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>

                {/* --- Animated Interface Feedback Messaging --- */}
                <AnimatePresence mode="popLayout">
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-[11px] font-light pl-1"
                    >
                      {errorMessage}
                    </motion.p>
                  )}

                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 rounded-lg bg-neutral-950 border border-neutral-800/60 flex items-start gap-3 mt-2"
                    >
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <div>
                        <h5 className="text-xs font-medium text-neutral-200">Subscription Activated</h5>
                        <p className="text-[11px] text-neutral-500 font-light mt-0.5">You have successfully registered for ecosystem updates.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
                          }
