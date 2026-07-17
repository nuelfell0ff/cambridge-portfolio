"use client";
import React from 'react';
import PortfolioHero from '@/components/PortfolioHero';
import ProfessionalHeadline from '@/components/ProfessionalHeadline'; // New Import
import About from '@/components/About';

export default function Home() {
  return (
    <main className="bg-[#0a0806] text-white min-h-screen overflow-y-auto selection:bg-[#1F7299]/30">
      {/* 1. Hero */}
      <PortfolioHero />
      
      {/* 2. Professional Headline Ticker (Clean & Simple transitional section) */}
      <ProfessionalHeadline />
      
      {/* 3. Detailed Bio */}
      <About />
    </main>
  );
}
