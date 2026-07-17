"use client";
import React from 'react';
import PortfolioHero from '@/components/PortfolioHero';
// import About from '@/components/About'; // We will uncomment this once we create the About file!

export default function Home() {
  return (
    <main className="bg-[#0a0806] text-white min-h-screen overflow-y-auto selection:bg-[#1F7299]/30">
      {/* 1. Hero Fold (occupies the first full screen) */}
      <PortfolioHero />
      
      {/* 2. About Section (will render right below the fold) */}
      {/* <About /> */}
    </main>
  );
}
