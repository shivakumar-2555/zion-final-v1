import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ProductCard } from '@/components/machinery/ProductCard';
import { categories, getProductsByCategory } from '@/data/products';

interface PageProps { 
  params: Promise<{ category: string }>; 
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = categories.find(
    (item) => item.slug === category || item.id === category || item.legacySlugs?.includes(category)
  );
  
  return categoryData 
    ? { 
        title: `${categoryData.name} | ZION PRINT TECH SOLUTIONS`, 
        description: categoryData.description 
      } 
    : { title: 'Category Not Found | ZION PRINT TECH SOLUTIONS' };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryData = categories.find(
    (item) => item.slug === category || item.id === category || item.legacySlugs?.includes(category)
  );
  
  if (!categoryData) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(categoryData.id);

  return (
    <>
      {/* Category Header Banner matching Clean Light Corporate Theme */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F0F5FA] via-[#EBF3FC] to-[#E2ECF7] py-10 text-slate-900 md:py-16 border-b border-slate-200">
        <div className="site-container">
          
          {/* Breadcrumb Navigation: Home -> Products -> [Category] */}
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0B2076] transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/products" className="hover:text-[#0B2076] transition-colors">Products</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#0B2076] font-bold">{categoryData.name}</span>
          </nav>

          <div className={`flex flex-col gap-8 ${categoryData.image ? 'lg:flex-row lg:items-center lg:gap-12' : ''}`}>
            <div className="flex-1">
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#0B2076] md:text-4xl lg:text-5xl uppercase">
                {categoryData.name}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                {categoryData.description}
              </p>
            </div>
            {categoryData.image && (
              <div className="relative w-full lg:w-[440px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" style={{aspectRatio: '16/10'}}>
                <Image 
                  src={categoryData.image} 
                  alt={categoryData.name} 
                  fill 
                  priority
                  className="object-contain p-2" 
                  sizes="(max-width: 1024px) 100vw, 440px" 
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Horizontal Category Filter / Switcher Bar */}
      <div className="w-full bg-white border-b border-slate-200 sticky top-[72px] z-30 shadow-xs">
        <div className="site-container py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-slate-400 font-bold uppercase tracking-wider shrink-0 pr-1">Categories:</span>
            {categories.map((cat) => {
              const isActive = cat.id === categoryData.id;
              return (
                <Link
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-[#0B2076] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="w-full bg-[#F4F7FB] py-12 md:py-16 lg:py-20">
        <div className="site-container">
          <div className="mb-8 flex items-center justify-between border-b border-slate-200/80 pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-[#0B2076] md:text-2xl">
                Available Models ({categoryProducts.length})
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Precision industrial equipment built for high duty cycles and reliable performance.
              </p>
            </div>
            <Link 
              href="/products" 
              className="text-xs font-bold text-[#0B2076] hover:text-[#0084D6] transition-colors flex items-center gap-1 shrink-0"
            >
              &larr; All Categories
            </Link>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  categorySlug={categoryData.slug} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 min-h-[100px]" />
          )}
        </div>
      </section>
    </>
  );
}
