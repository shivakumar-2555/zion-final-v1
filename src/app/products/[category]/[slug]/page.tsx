import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { categories, products, getProductsByCategory } from '@/data/products';
import { ChevronRight, CheckCircle2, Download, PhoneCall, Mail, Settings, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/machinery/ProductCard';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const targetSlug = 
    resolvedParams.slug === 'unit-type-flexo-printing-machine-6-colors'
      ? 'narrow-web-flexo-printing-machine-2-14-colors'
      : resolvedParams.slug === 'plate-winding-machine'
      ? 'plate-washing-machine'
      : resolvedParams.slug;
  const product = products.find((p) => p.slug === targetSlug);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} | ZION PRINT TECH SOLUTIONS`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const targetSlug = 
    resolvedParams.slug === 'unit-type-flexo-printing-machine-6-colors'
      ? 'narrow-web-flexo-printing-machine-2-14-colors'
      : resolvedParams.slug === 'plate-winding-machine'
      ? 'plate-washing-machine'
      : resolvedParams.slug;
  const product = products.find((p) => p.slug === targetSlug);
  const categoryData = categories.find(
    (c) => c.slug === resolvedParams.category || c.id === resolvedParams.category || c.legacySlugs?.includes(resolvedParams.category)
  );

  const isMatch = Boolean(
    product && categoryData && (
      product.category === categoryData.id ||
      product.secondaryCategory === categoryData.id ||
      (categoryData.legacySlugs && categoryData.legacySlugs.includes(product.category as string))
    )
  );

  if (!product || !categoryData || !isMatch) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(categoryData.id)
    .filter(p => p.id !== product.id)
    .slice(0, 3);
  const technicalData = product.functions ?? product.specifications ?? {};
  const productDescription = product.shortDescription?.trim() || `${product.features.join('. ')}.`;
  const specificationHighlights = Object.entries(technicalData)
    .filter(([key]) => key.toLowerCase() !== 'model')
    .slice(0, 3)
    .map(([key, value]) => `${key}: ${value}`);
  const tableHighlights = (product.specificationTables ?? [])
    .flatMap((table) => {
      if (table.columns[0]?.toLowerCase() === 'model') {
        return table.columns.slice(0, 3).map((column, columnIndex) => (
          `${column}: ${table.rows.map((row) => row[columnIndex]).join(', ')}`
        ));
      }

      return table.rows.slice(0, 3).map((row) => (
        `${row[0]}: ${row.slice(1).map((value, valueIndex) => `${table.columns[valueIndex + 1]} ${value}`).join('; ')}`
      ));
    })
    .slice(0, 3);
  const machineHighlights = [
    ...product.features.slice(0, 3),
    ...(specificationHighlights.length > 0 ? specificationHighlights : tableHighlights),
  ].slice(0, 6);

  return (
    <>
      {/* Breadcrumbs Banner */}
      <div className="w-full border-b border-slate-200 bg-white py-4 shadow-sm">
        <div className="site-container">
          <div className="flex items-center text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#0B2076] transition-colors flex items-center">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 mx-2 flex-shrink-0 text-slate-400" />
            <Link href="/products" className="hover:text-[#0B2076] transition-colors">Products</Link>
            <ChevronRight className="h-3.5 w-3.5 mx-2 flex-shrink-0 text-slate-400" />
            <Link href={`/products/${categoryData.slug}`} className="hover:text-[#0B2076] transition-colors">{categoryData.name}</Link>
            <ChevronRight className="h-3.5 w-3.5 mx-2 flex-shrink-0 text-slate-400" />
            <span className="text-[#0B2076] font-bold">{product.name}</span>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-[#F4F7FB] py-10 md:py-14">
        <div className="mb-6">
          <Link href={`/products/${categoryData.slug}`} className="inline-flex items-center text-sm font-bold text-[#0B2076] hover:text-[#0084D6] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to {categoryData.name}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Product Image Area */}
          <div className="lg:col-span-7 space-y-6">
            <div className="group relative flex aspect-[16/11] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
               {product.image ? (
                 <Image src={product.image} alt={product.name} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]" priority sizes="(min-width: 1024px) 58vw, 100vw" />
               ) : (
                 <Settings className="w-32 h-32 text-slate-300 relative z-10 group-hover:scale-105 transition-transform duration-700" />
               )}
            </div>
          </div>

          {/* Product Details Area */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="inline-block w-fit rounded-lg bg-[#0084D6]/10 border border-[#0084D6]/20 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0084D6]">
                {categoryData.name}
              </div>
            </div>
            
            <h1 className="mb-4 text-2xl font-black leading-[1.18] tracking-tight text-slate-900 md:text-3xl">
              {product.name}
            </h1>
            
            <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">{productDescription}</p>

            {machineHighlights.length > 0 && (
              <ul className="space-y-3 mb-8">
                {machineHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#0084D6]" />
                    <span className="text-sm font-semibold leading-6 text-slate-700 md:text-[15px]">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="space-y-3.5">
              <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="block w-full">
                <Button size="lg" className="w-full rounded-xl bg-[#0B2076] hover:bg-[#081754] py-7 text-base font-extrabold text-white shadow-lg transition-all duration-200">
                  <Mail className="mr-3 h-5 w-5 text-[#FFC700]" /> Request a Quote
                </Button>
              </Link>
              <div className="flex gap-3">
                <a href="tel:+918179334344" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full rounded-xl border-slate-300 py-6 font-bold text-slate-700 hover:border-[#0B2076] hover:text-[#0B2076] transition-colors">
                    <PhoneCall className="mr-2 h-4 w-4 text-[#FFC700]" /> Call Sales
                  </Button>
                </a>
                {product.brochurePath && (
                  <a href={product.brochurePath} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full rounded-xl border-slate-300 py-6 font-bold text-slate-700 hover:border-[#0B2076] hover:text-[#0B2076] transition-colors">
                      <Download className="mr-2 h-4 w-4 text-[#0084D6]" /> Brochure
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="w-full border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="site-container">
            <h3 className="text-2xl font-extrabold text-[#0B2076] mb-8">Related Machinery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related, idx) => (
                <ProductCard key={related.id} product={related} categorySlug={categoryData.slug} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
