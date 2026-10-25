'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductShowcase from '@/components/home/ProductShowcase';
import FeaturedMachineryCarousel from '@/components/home/FeaturedMachineryCarousel';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Home() {
  return (
    <>
      {/* ================= ADVANCED LIGHT HERO SECTION ================= */}
      <section id="home" className="relative isolate flex min-h-[500px] items-center overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F3F7FC] to-[#E5EDF7] py-14 sm:min-h-[540px] lg:min-h-[600px] border-b border-slate-200/80">
        
        {/* Ambient Glows */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#0084D6]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-[#FFC700]/10 blur-3xl pointer-events-none" />

        {/* Floating machinery hero image with a blended edge */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0,
              y: [0, -6, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              x: { duration: 0.8 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/products/clean/synchroline-viper-feathered.png"
              alt="High-speed flexographic printing press machinery"
              fill
              priority
              sizes="(min-width: 1024px) 70vw, (min-width: 640px) 76vw, 100vw"
              className="object-contain object-right opacity-90 sm:opacity-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F3F7FC] via-[#F3F7FC]/70 to-transparent" />
          </motion.div>
          {/* Mobile readability shield */}
          <div className="pointer-events-none absolute inset-0 bg-white/75 sm:hidden" />
        </div>

        <div className="relative z-10 site-container flex min-h-[440px] items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex w-full max-w-[700px] flex-col items-start text-left sm:w-[65%] lg:w-[54%]"
          >
            
            {/* Crisp High-Contrast Animated Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-[clamp(2.1rem,4.2vw,3.75rem)] font-black leading-[1.08] tracking-[-0.035em] text-[#0B2076]"
            >
              <span className="block">Precision in Printing.</span>
              <span className="mt-2 block bg-gradient-to-r from-[#0B2076] via-[#0084D6] to-[#0284C7] bg-clip-text text-transparent">
                Excellence in Service.
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-4 text-sm text-slate-600 leading-relaxed sm:text-base max-w-xl font-medium"
            >
              High-performance flexographic printing presses, slitter-rewinders, tooling, and comprehensive technical support engineered for packaging leaders.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98, y: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link 
                  href="/products" 
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0B2076] hover:bg-[#081754] px-8 py-4 text-[15px] font-extrabold text-white shadow-[0_10px_25px_rgba(11,32,118,0.22)] transition duration-300 hover:shadow-[0_14px_30px_rgba(11,32,118,0.30)]"
                >
                  {/* Subtle shine highlight */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  Explore Our Solutions 
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <ArrowRight className="h-4 w-4 text-[#FFC700]" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 px-6 py-4 text-[15px] font-bold text-[#0B2076] transition duration-300 shadow-sm"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE DO: PRODUCTS & SOLUTIONS SHOWCASE ================= */}
      <ProductShowcase />

      {/* ================= FEATURED MACHINERY HORIZONTAL CAROUSEL ================= */}
      <FeaturedMachineryCarousel />

      {/* ================= LIGHT CONTACT BAR WITH SPRING ENTRANCE ================= */}
      <section id="contact" className="scroll-mt-[106px] w-full border-t-2 border-[#0B2076] bg-gradient-to-r from-[#EBF3FC] via-[#F4F8FD] to-[#E7F0FA] py-12 text-slate-900">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl text-[#0B2076]">
              Ready to Upgrade Your Machinery?
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Speak with our engineering specialists for custom machinery configuration, tooling, and support.
            </p>
          </div>
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0B2076] hover:bg-[#081754] px-8 py-4 text-sm font-black text-white shadow-lg transition duration-300"
            >
              Contact Us 
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <ArrowRight className="h-4 w-4 text-[#FFC700]" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
