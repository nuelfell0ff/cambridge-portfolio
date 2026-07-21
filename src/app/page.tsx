"use client";

import React from 'react';
import PortfolioHero from '@/components/PortfolioHero';
import ProfessionalHeadline from '@/components/ProfessionalHeadline';
import About from '@/components/About';
import ProjectShowcase from '@/components/ProjectShowcase';
import Certificates from '@/components/Certificates';
import FeaturedCompanies from '@/components/FeaturedCompanies';
import PhotoGallery from '@/components/PhotoGallery';
import VisionStatement from '@/components/VisionStatement';
import MediaPress from '@/components/MediaPress';
import BlogTopicsSection from '@/components/BlogTopicsSection';
import Testimonials from '@/components/Testimonials';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

// Page-level color configuration tokens
const colors = {
  bgDark: '#0a0806',
  green: '#1F7299',
};

export default function Home() {
  return (
    <main 
      className="text-white min-h-screen overflow-y-auto selection:bg-[#1F7299]/30"
      style={{ backgroundColor: colors.bgDark }}
    >
      {/* 1. Introductory Core Layers */}
      <PortfolioHero />
      <ProfessionalHeadline />
      <About />

      {/* 2. Interactive Product & Project Catalog */}
      <ProjectShowcase />

      {/* 3. Proof, Validation & Affiliation Layers */}
      <Certificates />
      <FeaturedCompanies />
      <PhotoGallery />

      {/* 4. Vision, Editorial & Media Narratives */}
      <VisionStatement />
      <MediaPress />
      <BlogTopicsSection />

      {/* 5. Engagement & Conversion Footprint */}
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
