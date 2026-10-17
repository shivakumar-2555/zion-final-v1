'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import type { Product } from '@/types/product';

export default function FeaturedMachineryCarousel() {
  // Filter products that have images and slugs
  const validProducts = products.filter(
    (p): p is Product & { image: string; slug: string } => Boolean(p.image && p.slug)
  );

  // Take top 14 machines across all divisions
  const featuredProducts = validProducts.slice(0, 14);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const updateCardsPerPage = useCallback(() => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;
    if (width >= 1280) {
      setCardsPerPage(3);
    } else if (width >= 768) {
      setCardsPerPage(2);
    } else {
      setCardsPerPage(1);
    }
  }, []);

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, [updateCardsPerPage]);

  const maxIndex = Math.max(0, featuredProducts.length - cardsPerPage);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Touch gesture support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      id="products" 
      className="scroll-mt-[106px] relative w-full bg-[#F4F7FB]/60 py-14 md:py-20 border-b border-slate-200 overflow-hidden"
      aria-label="Machinery Catalogue"
    >
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-stretch">
          
          {/* ================= LEFT BOX: FEATURED MACHINERY (Zion Brand Themed) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-48 xl:w-56 shrink-0 rounded-3xl bg-gradient-to-b from-[#0B2076] via-[#091D66] to-[#0084D6] p-6 text-white shadow-xl shadow-[#0B2076]/20 flex items-center justify-center relative overflow-hidden group self-stretch"
          >
            {/* Ambient glowing radial effects */}
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#0084D6]/35 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-cyan-400/25 blur-2xl pointer-events-none" />

            {/* Mobile Title */}
            <span className="lg:hidden text-lg font-black uppercase tracking-wider relative z-10 text-center">
              Featured Machinery
            </span>

            {/* Desktop Vertical Bold Typography */}
            <div className="hidden lg:flex flex-1 items-center justify-center my-auto relative z-10">
              <span 
                className="text-white font-black text-2xl xl:text-[28px] tracking-[0.25em] uppercase select-none drop-shadow-md"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Featured Machinery
              </span>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: HEADER + CAROUSEL + CONTROLS ================= */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            
            {/* Header beside the box */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-slate-200/80 pb-5"
            >
              <div>
                <div className="inline-flex items-center gap-2.5 mb-2">
                  <span className="h-2 w-7 bg-[#0084D6] rounded-full" />
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0084D6]">
                    Machinery Catalogue
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2076]">
                  Machinery Catalogue
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
                  Explore our comprehensive fleet of flexographic printing presses, converting machinery, and precision finishing lines in continuous production worldwide.
                </p>
              </div>

              <Link 
                href="/products" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0B2076] hover:text-[#0084D6] transition-colors group shrink-0"
              >
                <span>Explore Full Catalogue</span>
                <ArrowRight className="h-4 w-4 text-[#0084D6] transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Carousel Slider Track */}
            <div 
              className="overflow-hidden w-full py-1 group/track"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex -mx-2.5 transition-transform duration-500 ease-out will-change-transform"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / cardsPerPage}%)`,
                }}
              >
                {featuredProducts.map((product) => {
                  const productHref = `/products/${product.category}/${product.slug}`;

                  return (
                    <div
                      key={product.id}
                      className="shrink-0 px-2.5 w-full md:w-1/2 xl:w-1/3"
                    >
                      <article className="h-full flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-[#0084D6]/50 transition-all duration-300 group">
                        
                        {/* Machine Image in Inset Tinted Container */}
                        <Link
                          href={productHref}
                          className="relative block w-full aspect-[4/3] rounded-xl bg-[#F4F7FB] p-3 overflow-hidden group/img"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                          />
                        </Link>

                        {/* Product Title (Clean, centered, no tags, no description) */}
                        <h3 className="text-sm sm:text-base font-bold text-[#0B2076] group-hover:text-[#0084D6] transition-colors text-center line-clamp-2 mt-4 min-h-[44px] flex items-center justify-center">
                          <Link href={productHref}>
                            {product.name}
                          </Link>
                        </h3>

                        {/* View Details Action Button (Matching Reference) */}
                        <Link
                          href={productHref}
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0B2076]/10 text-[#0B2076] font-bold text-xs uppercase tracking-wider hover:bg-[#0B2076] hover:text-white transition-all duration-200 mt-4 group/btn"
                        >
                          <span>View Details</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Navigation Controls & Dots */}
            <div className="mt-8 flex items-center justify-between gap-4">
              
              {/* Left/Right Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous machinery slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0B2076] shadow-sm transition-all duration-200 hover:border-[#0084D6] hover:bg-[#0084D6] hover:text-white cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next machinery slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0B2076] shadow-sm transition-all duration-200 hover:border-[#0084D6] hover:bg-[#0084D6] hover:text-white cursor-pointer active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Pagination Dots with Active Pill */}
              <div 
                className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[240px] sm:max-w-none no-scrollbar"
                role="tablist"
                aria-label="Machinery carousel pagination"
              >
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-selected={currentIndex === idx}
                    role="tab"
                    className={`transition-all duration-300 rounded-full cursor-pointer shrink-0 ${
                      currentIndex === idx
                        ? 'w-7 h-2.5 bg-[#0084D6] shadow-xs'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="text-xs font-bold text-slate-400 shrink-0">
                <span className="text-[#0B2076]">{currentIndex + 1}</span> / {maxIndex + 1}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
