import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { companies } from '@/data/companies';

const colors = {
  green: '#1F7299',
  bgDark: '#0a0806',
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes for build time optimization
export async function generateStaticParams() {
  return Object.keys(companies).map((slug) => ({
    slug,
  }));
}

export default async function CompanyDetailPage({ params }: PageProps) {
  // Await the asynchronous params promise (Required in Next.js 15+)
  const { slug } = await params;

  // Find the matching company data using the URL slug
  const company = companies[slug];

  // If user enters an invalid URL (e.g. /companies/unknown), show 404 page
  if (!company) {
    notFound();
  }

  return (
    <main 
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 text-white relative overflow-hidden"
      style={{ backgroundColor: colors.bgDark, fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Back Button */}
        <Link 
          href="/#companies" 
          className="inline-flex items-center gap-2 text-xs uppercase font-medium text-neutral-400 hover:text-white transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Main Site
        </Link>

        {/* Company Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 pb-10 border-b border-neutral-900">
          <img 
            src={company.logoUrl} 
            alt={company.name} 
            className="w-20 h-20 rounded-2xl object-cover border border-neutral-800 shadow-2xl shrink-0"
          />
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-neutral-500 block mb-1">
              Company Overview
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {company.name}
            </h1>
            <p className="text-sm md:text-base font-light text-neutral-400 mt-2">
              {company.tagline}
            </p>
          </div>
        </div>

        {/* Company Details */}
        <div className="space-y-10 mb-12">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
              About the Platform
            </h2>
            <p className="text-base text-neutral-300 font-light leading-relaxed">
              {company.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl bg-neutral-950/60 border border-neutral-900">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                Mission Statement
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {company.mission}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                Key Impact
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {company.impact}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              Core Highlights & Capabilities
            </h2>
            <ul className="space-y-3">
              {company.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-300 font-light">
                  <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: colors.green }} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* External Link Button */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-neutral-500">
            Ready to explore {company.name}? Proceed to the official platform.
          </p>
          <a
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-8 py-3.5 rounded-xl transition-all shadow-lg hover:opacity-90"
            style={{ backgroundColor: colors.green }}
          >
            Visit Live Website
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}    
