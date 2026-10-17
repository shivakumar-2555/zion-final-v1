'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Settings } from 'lucide-react';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  categorySlug: string;
  index?: number;
}

export function ProductCard({ product, categorySlug, index = 0 }: ProductCardProps) {
  const isPortraitMachine = product.slug === 'plate-mounting-machine' || product.slug === 'gw-fj-230s-slitter-rewinder-label-inspection';
  const detailUrl = `/products/${categorySlug}/${product.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-[#0084D6] hover:shadow-[0_20px_40px_-15px_rgba(11,32,118,0.16)]"
    >
      {/* Image Container */}
      <Link
        href={detailUrl}
        className="relative block aspect-[4/3] overflow-hidden border-b border-slate-100 bg-slate-50/50 p-4"
      >
        {product.image ? (
          <>
            {isPortraitMachine && (
              <>
                <Image 
                  src={product.image} 
                  alt="" 
                  fill 
                  aria-hidden 
                  className="scale-110 object-contain opacity-20 blur-lg" 
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" 
                />
                <span className="absolute inset-0 z-[1] bg-white/40" />
              </>
            )}
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="z-[2] object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Settings className="h-14 w-14 text-slate-300 transition-transform duration-500 group-hover:rotate-45" />
          </div>
        )}
      </Link>

      {/* Content Container */}
      <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
        {/* Product Title */}
        <h3 className="text-base font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#0B2076] md:text-lg line-clamp-2">
          <Link href={detailUrl}>
            {product.name}
          </Link>
        </h3>

        {/* Footer CTA */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={detailUrl}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2076] transition-colors duration-200 group-hover:text-[#0084D6] uppercase tracking-wider"
          >
            <span>View Details</span>
            <motion.span 
              initial={{ x: 0 }}
              whileHover={{ x: 3 }} 
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
