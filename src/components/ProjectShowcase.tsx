'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  description: string;
  appUrl: string;
  imageUrl: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: '1',
    title: 'Project App 1',
    description: 'Interactive system dashboard application built with modern web technologies.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552543/image.png_2K_202607150715_1_wy3nn8.png',
  },
  {
    id: '2',
    title: 'Project App 2',
    description: 'Dynamic platform workspace optimized for high-performance productivity.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552424/Group_17505_wtq2ci.png',
  },
  {
    id: '3',
    title: 'Project App 3',
    description: 'Custom portal interface tailored for seamless data management.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552424/Group_17507_g5y1wz.png',
  },
  {
    id: '4',
    title: 'Project App 4',
    description: 'Mobile responsive workspace optimized for lightweight mobile layouts.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Android_Compact_-_4_vonkgv.png',
  },
  {
    id: '5',
    title: 'Project App 5',
    description: 'Compact application client environment designed for speed.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Android_Compact_-_5_xqmm2e.png',
  },
  {
    id: '6',
    title: 'Project App 6',
    description: 'Integrated application component engine built for administrative utilities.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Group_17506_jkppkc.png',
  },
  {
    id: '7',
    title: 'Project App 7',
    description: 'Streamlined control utility panel optimized for real-time tracking.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Android_Compact_-_3_x58tkf.png',
  },
  {
    id: '8',
    title: 'Project App 8',
    description: 'Personalized secure access framework application.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552423/Android_Compact_-_1_sa68m8.png',
  },
  {
    id: '9',
    title: 'Project App 9',
    description: 'Performance statistics tracker running modular database pipelines.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552422/Android_Compact_-_7_zv7amf.png',
  },
  {
    id: '10',
    title: 'Project App 10',
    description: 'Cloud storage and asset manager system wrapper.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552422/Android_Compact_-_9_p5fgrr.png',
  },
  {
    id: '11',
    title: 'Project App 11',
    description: 'Responsive notification and queue delivery service asset.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552422/Android_Compact_-_10_oewkze.png',
  },
  {
    id: '12',
    title: 'Project App 12',
    description: 'Application integration bridge rendering custom UI blocks.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552422/Android_Compact_-_6_c0jquc.png',
  },
  {
    id: '13',
    title: 'Project App 13',
    description: 'Final execution gateway system manager platform client.',
    appUrl: '#',
    imageUrl: 'https://res.cloudinary.com/datmds5xl/image/upload/v1784552421/Android_Compact_-_8_cj1bkk.png',
  },
];

export default function ProjectShowcase() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Applications</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">
          Explore the projects and interactive portals crafted for the platform ecosystem.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS_DATA.map((product, index) => {
          // Dynamic CSS scoping rules to enforce initial limits (4 for mobile, 6 for desktop)
          let visibilityClass = 'block';
          if (!isExpanded) {
            if (index >= 4 && index < 6) {
              visibilityClass = 'hidden lg:block'; // Hidden on mobile/tablet, shown on desktop
            } else if (index >= 6) {
              visibilityClass = 'hidden'; // Fully cut off initially
            }
          }

          return (
            <div
              key={product.id}
              className={`${visibilityClass} group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
            >
              {/* Image Frame */}
              <div className="aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Text Meta Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.title}
                  </h3>
                  <a
                    href={product.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label={`Open ${product.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Toggle Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 shadow-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              See More
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </section>
  );
    }
