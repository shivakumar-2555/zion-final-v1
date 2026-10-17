'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Layers, Settings, Printer, Scissors, Package } from 'lucide-react';
import { categories, getProductsByCategory } from '@/data/products';

const iconMap = {
  Printer,
  Layers,
  Settings,
  Scissors,
  Package,
} as const;

export default function ProductsPage() {
  return (
    <>
      {/* Header Banner matching Clean Light Corporate Theme */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F0F5FA] via-[#EBF3FC] to-[#E2ECF7] py-12 text-slate-900 md:py-16 border-b border-slate-200">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0B2076] transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#0B2076] font-bold">Products</span>
          </nav>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0084D6]/30 text-[#0B2076] text-xs font-bold mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0084D6]"></span> Complete Industrial Catalogue (4 Divisions)
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0B2076] md:text-5xl">
            Machinery &amp; Equipment
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Explore our four primary machinery divisions: state-of-the-art flexographic printing presses, prepress systems, automated post-production converting lines, and essential pressroom tooling consumables.
          </p>
        </div>
      </section>

      {/* 4 Primary Categories Grid */}
      <section className="w-full bg-[#F4F7FB] py-12 md:py-16 lg:py-20">
        <div className="site-container">
          <div className="mb-10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0084D6]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Machinery Divisions</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0B2076] md:text-3xl mt-1">Four Primary Divisions</h2>
            <p className="mt-1 text-sm text-slate-600">Select a division below to view specialized machinery models, technical specifications, and configurations.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.iconName as keyof typeof iconMap] || Settings;
              const categoryProducts = getProductsByCategory(category.id);
              const href = `/products/${category.slug}`;

              return (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-[#0084D6] hover:shadow-[0_20px_40px_-15px_rgba(11,32,118,0.15)]"
                >
                  <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-slate-50 border-b border-slate-100">
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      fill 
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" 
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" 
                    />
                    <span className="absolute top-3 right-3 rounded-md bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0B2076] border border-slate-200/80 shadow-xs">
                      {categoryProducts.length} Models
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#0084D6]">
                      <IconComponent className="h-4 w-4" />
                      <span>{category.badge}</span>
                    </div>

                    <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-[#0B2076] transition-colors">
                      <Link href={href}>{category.name}</Link>
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                      {category.description}
                    </p>

                    <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                      <Link 
                        href={href} 
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2076] transition-colors group-hover:text-[#0084D6] uppercase tracking-wider"
                      >
                        View Division Models 
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
