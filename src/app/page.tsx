"use client";
import React from 'react';
import PortfolioHero from '@/components/PortfolioHero';
import ProfessionalHeadline from '@/components/ProfessionalHeadline';
import About from '@/components/About';
import Certificates from '@/components/Certificates';
import FeaturedCompanies from '@/components/FeaturedCompanies';
import PhotoGallery from '@/components/PhotoGallery';
import VisionStatement from '@/components/VisionStatement';
import MediaPress from '@/components/MediaPress';
import BlogTopicsSection from '@/components/BlogTopicsSection';
import Testimonials from '@/components/Testimonials';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

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
      <PortfolioHero />
      
      <ProfessionalHeadline />
      
      <About />

      <Certificates />

      <FeaturedCompanies />

      <PhotoGallery />

      <VisionStatement />

      <MediaPress />

      <BlogTopicsSection />

      <Testimonials />

      <NewsletterSection />

      <Footer />
    </main>
  );
}
