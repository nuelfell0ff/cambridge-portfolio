"use client";
import React from 'react';
import PortfolioHero from '@/components/PortfolioHero';
import ProfessionalHeadline from '@/components/ProfessionalHeadline'; // New Import
import About from '@/components/About';
import FeaturedCompanies from '@/components/FeaturedCompanies';
import PhotoGallery from '@/components/PhotoGallery';

export default function Home() {
  return (
    <main className="bg-[#0a0806] text-white min-h-screen overflow-y-auto selection:bg-[#1F7299]/30">
      <PortfolioHero />
      
      <ProfessionalHeadline />
      
      <About />

      <FeaturedCompanies />

      <PhotoGallery />
    </main>
  );
}
