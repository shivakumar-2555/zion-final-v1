"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ChevronDown, 
  Mail, 
  Menu, 
  Phone, 
  X, 
  Settings, 
  Layers, 
  Scissors, 
  Printer, 
  Package, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { categories, MachineryCategory } from '@/data/categories';

const iconMap = {
  Printer,
  Layers,
  Settings,
  Scissors,
  Package,
} as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogueOpen, setCatalogueOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Close catalogue on route change
  useEffect(() => {
    setCatalogueOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside and escape key listener for accessibility
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCatalogueOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCatalogueOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCatalogueOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCatalogueOpen(false);
    }, 180);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes('#') || e.ctrlKey || e.metaKey || e.shiftKey) {
      setCatalogueOpen(false);
      setMobileMenuOpen(false);
      return;
    }

    const [path, hash] = href.split('#');
    const currentPath = window.location.pathname;

    if (currentPath === path || (path === '/' && currentPath === '')) {
      e.preventDefault();
      setCatalogueOpen(false);
      setMobileMenuOpen(false);
      
      const element = document.getElementById(hash);
      if (element) {
        const topOffset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const isCategoryActive = (category: MachineryCategory) => {
    return (
      pathname === `/products/${category.slug}` ||
      pathname.startsWith(`/products/${category.slug}/`) ||
      (category.legacySlugs && category.legacySlugs.some((ls) => pathname.startsWith(`/products/${ls}`)))
    );
  };

  // Split categories for 2-column balanced mega-menu layout:
  // Column 1: Flexo Printing & Pre-Production
  // Column 2: Post-Production & Consumables
  const columnOneCategories = categories.slice(0, 2);
  const columnTwoCategories = categories.slice(2, 4);

  return (
    <>
      {/* Top Bar with CMYK Indicator Dots (Clean Light) */}
      <div className="w-full bg-[#F8FAFC] text-slate-700 border-b border-slate-200/90">
        <div className="site-container flex items-center justify-between gap-6 py-2 text-xs">
          <p className="hidden uppercase tracking-[0.14em] text-slate-600 sm:flex items-center gap-2 font-semibold">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0084D6]"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#E6007A]"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFC700]"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#0B2076]"></span>
            </span>
            Flexographic &amp; Packaging Machinery Supply
          </p>
          <div className="ml-auto flex items-center gap-4 sm:gap-6">
            <a href="tel:+918179334344" className="flex items-center gap-1.5 text-slate-700 hover:text-[#0B2076] font-bold transition-colors">
              <Phone className="h-3.5 w-3.5 text-[#0084D6]" /> +91 81793 34344
            </a>
            <a href="mailto:info@zionprinttech.com" className="hidden items-center gap-1.5 text-slate-700 hover:text-[#0B2076] font-bold md:flex transition-colors">
              <Mail className="h-3.5 w-3.5 text-[#0084D6]" /> info@zionprinttech.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 shadow-[0_4px_20px_rgba(11,32,118,0.06)] backdrop-blur-md">
        {/* Animated Scroll Progress Bar on Top of Navbar */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0084D6] via-[#E6007A] to-[#FFC700] origin-left z-[60]" 
          style={{ scaleX }}
        />
        
        <nav className="site-container flex h-[72px] items-center justify-between" aria-label="Main navigation">
          
          {/* Logo with subtle hover scale */}
          <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="relative block h-[46px] w-[180px] sm:h-[52px] sm:w-[210px] shrink-0 transition-transform duration-300 hover:scale-[1.02]" aria-label="ZION PRINT TECH SOLUTIONS home">
            <Image src="/images/logo.png" alt="ZION PRINT TECH SOLUTIONS" fill priority sizes="(max-width: 640px) 180px, 210px" className="object-contain object-left" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 xl:flex">
            <Link 
              href="/#home" 
              onClick={(e) => handleNavClick(e, '/#home')} 
              className="text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-[#0B2076]"
            >
              Home
            </Link>

            <Link 
              href="/about" 
              onClick={(e) => handleNavClick(e, '/about')} 
              className="text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-[#0B2076]"
            >
              About Us
            </Link>

            <Link 
              href="/services" 
              onClick={(e) => handleNavClick(e, '/services')} 
              className={`text-sm font-bold transition-colors duration-200 ${pathname === '/services' ? 'text-[#0B2076]' : 'text-slate-700 hover:text-[#0B2076]'}`}
            >
              Services
            </Link>

            {/* Products Mega Dropdown with Smooth Interaction & 5-Category Architecture */}
            <div 
              ref={dropdownRef}
              className="relative" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/products" 
                onClick={(e) => handleNavClick(e, '/products')} 
                className={`flex items-center gap-1.5 py-[24px] text-sm font-bold transition-colors duration-200 ${catalogueOpen || pathname.startsWith('/products') ? 'text-[#0B2076]' : 'text-slate-700 hover:text-[#0B2076]'}`} 
                aria-expanded={catalogueOpen} 
                aria-haspopup="true"
                aria-controls="products-mega-menu"
              >
                Products 
                <motion.span
                  animate={{ rotate: catalogueOpen ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </Link>

              {/* Animated Industrial 2-Column Mega Dropdown */}
              <AnimatePresence>
                {catalogueOpen && (
                  <motion.div
                    id="products-mega-menu"
                    role="menu"
                    aria-label="Products Catalogue"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-[calc(100%-6px)] z-[70] hidden w-[720px] -translate-x-1/2 rounded-2xl border border-slate-200/95 bg-white p-4 shadow-[0_20px_50px_rgba(11,32,118,0.16)] xl:block backdrop-blur-xl"
                  >
                    {/* Top Header Row with Category Counter & All Products Link */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0084D6]" />
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                          Machinery Divisions (5 Categories)
                        </span>
                      </div>
                      <Link 
                        href="/products" 
                        onClick={() => setCatalogueOpen(false)} 
                        className="text-xs font-bold text-[#0B2076] hover:text-[#0084D6] flex items-center gap-1 transition-colors group"
                      >
                        <span>View Complete Catalogue</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </div>

                    {/* 2-Column Balanced Layout */}
                    <div className="grid grid-cols-2 gap-2">
                      
                      {/* Column 1: Printing & Pre-Production */}
                      <div className="space-y-1.5">
                        {columnOneCategories.map((category) => {
                          const IconComponent = iconMap[category.iconName] || Settings;
                          const active = isCategoryActive(category);

                          return (
                            <Link
                              key={category.id}
                              href={`/products/${category.slug}`}
                              onClick={() => setCatalogueOpen(false)}
                              className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 border ${
                                active 
                                  ? 'bg-[#EBF3FC] border-[#0084D6]/40 shadow-sm' 
                                  : 'border-transparent hover:border-slate-200/80 hover:bg-[#F4F7FB]'
                              }`}
                            >
                              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                                active 
                                  ? 'bg-[#0B2076] text-white' 
                                  : 'bg-slate-100 text-slate-600 group-hover:bg-[#0B2076] group-hover:text-white'
                              }`}>
                                <IconComponent className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between">
                                  <span className={`text-[13px] font-bold transition-colors duration-200 ${
                                    active ? 'text-[#0B2076]' : 'text-slate-900 group-hover:text-[#0B2076]'
                                  }`}>
                                    {category.name}
                                  </span>
                                  {active && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#0084D6]" />
                                  )}
                                </div>
                                <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-1 leading-tight">
                                  {category.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Column 2: Converting, Tooling & Catalogue Spotlight */}
                      <div className="space-y-1.5">
                        {columnTwoCategories.map((category) => {
                          const IconComponent = iconMap[category.iconName] || Package;
                          const active = isCategoryActive(category);

                          return (
                            <Link
                              key={category.id}
                              href={`/products/${category.slug}`}
                              onClick={() => setCatalogueOpen(false)}
                              className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 border ${
                                active 
                                  ? 'bg-[#EBF3FC] border-[#0084D6]/40 shadow-sm' 
                                  : 'border-transparent hover:border-slate-200/80 hover:bg-[#F4F7FB]'
                              }`}
                            >
                              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                                active 
                                  ? 'bg-[#0B2076] text-white' 
                                  : 'bg-slate-100 text-slate-600 group-hover:bg-[#0B2076] group-hover:text-white'
                              }`}>
                                <IconComponent className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between">
                                  <span className={`text-[13px] font-bold transition-colors duration-200 ${
                                    active ? 'text-[#0B2076]' : 'text-slate-900 group-hover:text-[#0B2076]'
                                  }`}>
                                    {category.name}
                                  </span>
                                  {active && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#0084D6]" />
                                  )}
                                </div>
                                <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-1 leading-tight">
                                  {category.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/industries" 
              onClick={(e) => handleNavClick(e, '/industries')} 
              className={`text-sm font-bold transition-colors duration-200 ${pathname === '/industries' ? 'text-[#0B2076]' : 'text-slate-700 hover:text-[#0B2076]'}`}
            >
              Industries We Serve
            </Link>

            <Link 
              href="/contact" 
              onClick={(e) => handleNavClick(e, '/contact')} 
              className="text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-[#0B2076]"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Right CTA Button */}
          <div className="hidden items-center xl:flex">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link 
                href="/contact" 
                onClick={(e) => handleNavClick(e, '/contact')} 
                className="rounded-xl bg-[#0B2076] hover:bg-[#081754] px-6 py-3 text-sm font-black text-white shadow-md transition-all duration-200"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            type="button" 
            className="rounded-xl border border-slate-300 p-2.5 text-slate-800 transition-colors hover:border-[#0B2076] hover:bg-blue-50 xl:hidden" 
            onClick={() => setMobileMenuOpen(true)} 
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white xl:hidden"
          >
            <div className="flex h-[72px] items-center justify-between border-b border-slate-200 px-5">
              <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="relative block h-11 w-[180px] shrink-0">
                <Image src="/images/logo.png" alt="ZION PRINT TECH SOLUTIONS" fill sizes="180px" className="object-contain object-left" />
              </Link>
              <button 
                type="button" 
                className="rounded-xl border border-slate-300 p-2 text-slate-700 transition-colors hover:bg-slate-100" 
                onClick={() => setMobileMenuOpen(false)} 
                aria-label="Close main menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.3 }}
              className="flex-1 overflow-y-auto px-5 py-6"
            >
              <div className="flex flex-col divide-y divide-slate-100">
                <Link href="/#home" onClick={(e) => handleNavClick(e, '/#home')} className="py-3.5 text-lg font-bold text-slate-900 hover:text-[#0B2076] transition-colors">Home</Link>
                <Link href="/about" onClick={(e) => handleNavClick(e, '/about')} className="py-3.5 text-lg font-bold text-slate-900 hover:text-[#0B2076] transition-colors">About Us</Link>
                <Link href="/services" onClick={(e) => handleNavClick(e, '/services')} className={`py-3.5 text-lg font-bold transition-colors ${pathname === '/services' ? 'text-[#0B2076]' : 'text-slate-900 hover:text-[#0B2076]'}`}>Services</Link>
                
                {/* Mobile Products Navigation Accordion */}
                <div className="py-4">
                  <div className="flex items-center justify-between">
                    <Link href="/products" onClick={(e) => handleNavClick(e, '/products')} className="text-lg font-bold text-slate-900 hover:text-[#0B2076] transition-colors">Products</Link>
                    <span className="text-xs font-bold text-[#0084D6] uppercase tracking-wider">5 Categories</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {categories.map((category) => {
                      const IconComponent = iconMap[category.iconName] || Settings;
                      const active = isCategoryActive(category);

                      return (
                        <Link 
                          key={category.id}
                          href={`/products/${category.slug}`} 
                          onClick={() => setMobileMenuOpen(false)} 
                          className={`group flex items-center gap-3 rounded-xl border p-3 transition-colors ${
                            active 
                              ? 'bg-[#EBF3FC] border-[#0084D6]/40 text-[#0B2076]' 
                              : 'border-slate-100 hover:bg-[#F4F7FB]'
                          }`}
                        >
                          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            active 
                              ? 'bg-[#0B2076] text-white' 
                              : 'bg-slate-100 text-slate-600 group-hover:bg-[#0B2076] group-hover:text-white'
                          }`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className={`text-[14px] font-bold block ${
                              active ? 'text-[#0B2076]' : 'text-slate-900 group-hover:text-[#0B2076]'
                            }`}>
                              {category.name}
                            </span>
                          </div>
                          {active && (
                            <span className="h-2 w-2 rounded-full bg-[#0084D6]" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link href="/industries" onClick={(e) => handleNavClick(e, '/industries')} className={`py-3.5 text-lg font-bold transition-colors ${pathname === '/industries' ? 'text-[#0B2076]' : 'text-slate-900 hover:text-[#0B2076]'}`}>Industries We Serve</Link>
                <Link href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="py-3.5 text-lg font-bold text-slate-900 hover:text-[#0B2076] transition-colors">Contact Us</Link>
              </div>
            </motion.div>

            <div className="border-t border-slate-200 bg-slate-50 p-5">
              <Link 
                href="/contact" 
                onClick={(e) => handleNavClick(e, '/contact')} 
                className="block rounded-xl bg-[#0B2076] hover:bg-[#081754] px-5 py-3.5 text-center font-bold text-white shadow-md transition-colors"
              >
                Contact Us
              </Link>
              <div className="mt-4 flex flex-wrap justify-center gap-5 text-xs text-slate-600">
                <a href="tel:+918179334344" className="font-semibold text-slate-800 flex items-center gap-1">
                  <Phone className="h-3 w-3 text-[#FFC700]" /> +91 81793 34344
                </a>
                <a href="mailto:info@zionprinttech.com" className="font-semibold text-slate-800 flex items-center gap-1">
                  <Mail className="h-3 w-3 text-[#FFC700]" /> info@zionprinttech.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
