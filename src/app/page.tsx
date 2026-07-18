"use client";
import React from 'react';
import PortfolioHero from '@/components/PortfolioHero';
import ProfessionalHeadline from '@/components/ProfessionalHeadline';
import About from '@/components/About';
import FeaturedCompanies from '@/components/FeaturedCompanies';
import PhotoGallery from '@/components/PhotoGallery';
import VisionStatement from '@/components/VisionStatement';
import MediaPress from '@/components/MediaPress';
import BlogTopicsSection from '@/components/BlogTopicsSection';

// Define the colors object here so the selection bar or any page-level styles can safely read it!
const colors = {
  bgDark: '#0a0806',
  green: '#1F7299',
};

export default function Home() {
  return (
    <main 
      className="text-white min-h-screen overflow-y-auto selection:bg-[#1F7299]/30"
      style={{ backgroundColor: colors.bgDark }} // This was likely causing the crash if colors was missing!
    >
      {/* 1. Hero Fold */}
      <PortfolioHero />
      
      {/* 2. Professional Headline Section */}
      <ProfessionalHeadline />
      
      {/* 3. Biography Section */}
      <About />

      {/* 4. Ventures / Companies Grid */}
      <FeaturedCompanies />

      {/* 5. Photos Section */}
      <PhotoGallery />

      <VisionStatement />

      <MediaPress />

      <BlogTopicsSection />
    </main>
  );
}