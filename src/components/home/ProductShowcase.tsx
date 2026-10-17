'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ShowcaseItem {
  id: string;
  name: string;
  categoryName: string;
  categorySlug: string;
  slug: string;
  image: string;
  highlight: string;
  badge: string;
}

// Row 1: Flexographic Printing, Prepress & Carton Converting (9 products)
const row1Products: ShowcaseItem[] = [
  {
    id: 'prod1',
    name: 'Narrow Web Flexo Printing Machine 2-14 Colors',
    categoryName: 'Flexo Presses',
    categorySlug: 'flexographic-printing',
    slug: 'narrow-web-flexo-printing-machine-2-14-colors',
    image: '/images/products/fitted/narrow-web-flexo-printing-machine-2-14-colors-v2.png',
    highlight: 'All Servo Drive • 320-800mm Web Width',
    badge: '2-14 Colors',
  },
  {
    id: 'prod2',
    name: 'Multi-functional Full Servo Flexo Printing Machine 9-Colors',
    categoryName: 'Flexo Presses',
    categorySlug: 'flexographic-printing',
    slug: 'multi-functional-full-servo-flexo-printing-machine-9-colors',
    image: '/images/products/fitted/multi-functional-full-servo-flexo-printing-machine.webp',
    highlight: 'Full Servo • Semi-Rotary Die Cut',
    badge: '9 Colors',
  },
  {
    id: 'prod3',
    name: 'Flexographic Printing Machine for Paper Cups 4-Colors',
    categoryName: 'Flexo Presses',
    categorySlug: 'flexographic-printing',
    slug: 'flexographic-printing-machine-for-paper-cups-4-colors',
    image: '/images/products/fitted/paper-cups-flexo-printing-4c.webp',
    highlight: 'Hydraulic Lift • Corona Treater',
    badge: '4 Colors',
  },
  {
    id: 'pre1',
    name: 'High-Precision Plate Mounting Machine',
    categoryName: 'Pre-Production',
    categorySlug: 'pre-production-machines',
    slug: 'plate-mounting-machine',
    image: '/images/products/fitted/plate-mounting-machine.webp',
    highlight: 'HD Dual Camera Optical Alignment',
    badge: 'Accuracy',
  },
  {
    id: 'pre-flexo-plate-making',
    name: 'Plate Masking & Making Machine',
    categoryName: 'Pre-Production',
    categorySlug: 'pre-production-machines',
    slug: 'flexo-plate-making-machine',
    image: '/images/products/fitted/hh-flexo-plate-making-machine.webp',
    highlight: 'All-in-One Exposure, Wash & Dry',
    badge: 'Plate Making',
  },
  {
    id: 'pre-dbqx-350',
    name: 'Ultrasonic Anilox Cleaning Machine',
    categoryName: 'Pre-Production',
    categorySlug: 'pre-production-machines',
    slug: 'dbqx-350-ultrasonic-cleaning-machine',
    image: '/images/products/fitted/dbqx-350-ultrasonic-cleaning-machine.png',
    highlight: 'Ultrasonic Deep Cell Cleaning • Constant Temp',
    badge: 'Prepress Wash',
  },
  {
    id: 'pre-exposure-stickness',
    name: 'Exposure & Stickness Removal Machine',
    categoryName: 'Pre-Production',
    categorySlug: 'pre-production-machines',
    slug: 'exposure-stickness-removal-machine',
    image: '/images/products/fitted/exposure-stickness-removal-machine.webp',
    highlight: 'UVC Light Debonding • Stainless Steel',
    badge: 'Exposure & Debonding',
  },
  {
    id: 'pre-plate-washing',
    name: 'Plate Washing Machine',
    categoryName: 'Pre-Production',
    categorySlug: 'pre-production-machines',
    slug: 'plate-washing-machine',
    image: '/images/products/fitted/plate-cleaning-machine.webp',
    highlight: 'Two-stage Gentle Wash & Dry • Circulation Filter',
    badge: 'Plate Wash',
  },
];

// Row 2: Finishing, Inspection, Slitting & Consumables (6 products)
const row2Products: ShowcaseItem[] = [
  {
    id: 'post-dbfq-370h',
    name: 'High Speed Slitting Rewinding Machine',
    categoryName: 'Post-Production',
    categorySlug: 'post-production-machines',
    slug: 'dbfq-370h-slitting-rewinding-machine',
    image: '/images/products/fitted/dbfq-370h-slitting-rewinding-machine-v2.png',
    highlight: 'Full Servo • 350 m/min Slitting • Turret Rewind',
    badge: 'High Speed Slitter',
  },
  {
    id: 'post-dbmq-f320h',
    name: 'High Speed Flatbed Die Cutting Slitting Machine',
    categoryName: 'Post-Production',
    categorySlug: 'post-production-machines',
    slug: 'dbmq-f320h-flatbed-die-cutting-slitting-machine',
    image: '/images/products/fitted/dbmq-f320h-flatbed-die-cutting-slitting-machine-v2.png',
    highlight: '400 strokes/min • High Precision Die Cut',
    badge: 'Flatbed Die Cut',
  },
  {
    id: 'post-dbiml-370',
    name: 'Semi-rotary IML Die Cutting Machine',
    categoryName: 'Post-Production',
    categorySlug: 'post-production-machines',
    slug: 'dbiml-370-semi-rotary-iml-die-cutting-machine',
    image: '/images/products/fitted/dbiml-370-semi-rotary-iml-die-cutting-machine-v2.png',
    highlight: 'Full & Semi-Rotary • IML & Film Converting',
    badge: 'IML Converting',
  },
  {
    id: 'post-dbpj-450',
    name: 'Automatic Label Inspecting & Slitting Machine',
    categoryName: 'Post-Production',
    categorySlug: 'post-production-machines',
    slug: 'dbpj-450-automatic-label-inspecting-slitting-machine',
    image: '/images/products/fitted/dbpj-450-automatic-label-inspecting-slitting-machine.png',
    highlight: '100% Optical Inspection • 4 Servo Drive',
    badge: 'Inspection & Slit',
  },
  {
    id: 'post-hmq350je',
    name: 'Full Servo Rotary Die Cutting & Turret Rewinder',
    categoryName: 'Post-Production',
    categorySlug: 'post-production-machines',
    slug: 'full-servo-rotary-die-cutting-machine-with-slitting-and-turret-rewinding',
    image: '/images/products/fitted/hmq-350je-semi-rotary.webp',
    highlight: 'Full Servo • Dual Spindle Turret Rewinder',
    badge: 'Rotary Die Cut',
  },
  {
    id: 'cons-tapes',
    name: 'BiesSse BS MOUNT Cushion Adhesive Tapes',
    categoryName: 'Consumables',
    categorySlug: 'accessories-consumables',
    slug: 'cushion-adhesive-mounting-tapes-and-adhesives',
    image: '/images/products/fitted/cushion-mounting-tapes-adhesives-v2.png',
    highlight: '10 Compressibilities • Full HD Flexo Certified',
    badge: 'Mounting Tapes',
  },
];

function ProductCard({ item }: { item: ShowcaseItem }) {
  return (
    <Link
      href={`/products/${item.categorySlug}/${item.slug}`}
      className="group relative flex w-[400px] sm:w-[460px] md:w-[500px] shrink-0 items-center gap-5 rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0084D6]/70 hover:shadow-[0_18px_40px_rgba(11,32,118,0.14)] cursor-pointer"
    >
      {/* Machinery Image Thumbnail (Spacious & Crisp) */}
      <div className="relative h-28 w-32 sm:h-32 sm:w-38 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2 flex items-center justify-center transition-colors group-hover:border-blue-100 group-hover:bg-blue-50/40">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 130px, 160px"
        />
      </div>

      {/* Information Container with Large Prominent Typography */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#0084D6]">
            {item.categoryName}
          </span>
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 transition-colors group-hover:bg-[#0084D6]/10 group-hover:text-[#0084D6]">
            {item.badge}
          </span>
        </div>

        <h3 className="text-[16px] sm:text-[18px] md:text-[19px] font-black leading-snug text-[#0B2076] line-clamp-1 transition-colors group-hover:text-[#0084D6]">
          {item.name}
        </h3>

        <p className="mt-1.5 text-[13px] sm:text-[14px] text-slate-600 font-medium line-clamp-1">
          {item.highlight}
        </p>
      </div>
    </Link>
  );
}

export default function ProductShowcase() {
  // Seamless loop by repeating each array
  const row1Duplicated = [...row1Products, ...row1Products];
  const row2Duplicated = [...row2Products, ...row2Products];

  return (
    <section 
      id="what-we-do" 
      className="relative w-full bg-[#F8FAFC] pt-14 pb-12 sm:pt-16 sm:pb-14 md:pt-20 md:pb-16 border-b border-slate-200 overflow-hidden"
      aria-label="What We Do - Products & Solutions"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#0084D6]/5 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* ================= SECTION HEADER ================= */}
      <div className="site-container mb-8 md:mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Eyebrow: WHAT WE DO */}
          <div className="inline-flex items-center gap-2.5 mb-2.5">
            <span className="h-2.5 w-8 bg-[#0084D6] rounded-full" />
            <span className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wider text-[#0084D6]">
              What We Do
            </span>
          </div>

          {/* Sub-label: Products & Solutions */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
            Products &amp; Solutions
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B2076]">
            High-Performance Printing &amp; Packaging Machinery
          </h2>

          {/* Supporting Copy */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
            Explore our comprehensive fleet of flexographic printing presses, converting machinery, and precision finishing lines in continuous production worldwide.
          </p>
        </motion.div>
      </div>

      {/* ================= 2-ROW FULL-WIDTH CONTINUOUS ANIMATED MARQUEE ================= */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade masks for seamless enter/exit transition */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 md:w-28 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 md:w-28 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10" />

        <div className="flex flex-col gap-5 sm:gap-6 py-3">
          {/* Row 1: Slides Left */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-left pause-hover flex gap-5 sm:gap-6">
              {row1Duplicated.map((item, index) => (
                <ProductCard key={`row1-${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2: Slides Right */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-right pause-hover flex gap-5 sm:gap-6">
              {row2Duplicated.map((item, index) => (
                <ProductCard key={`row2-${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
