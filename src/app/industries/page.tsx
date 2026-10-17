import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Tag, 
  Box, 
  ShieldCheck, 
  Sparkles,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve | ZION PRINT TECH SOLUTIONS',
  description: 'Specialized flexographic printing, label converting, and industrial packaging machinery tailored for flexible packaging, label manufacturing, and carton converting.',
};

const industries = [
  {
    id: 'label-printing',
    name: 'Label Printing',
    summary: 'Self-adhesive labels, tags & barcodes',
    image: '/images/industries/label_printing.webp',
    icon: Tag,
    description:
      'Precision narrow-web flexo and semi-rotary converting solutions for pressure-sensitive labels, pharmaceutical security tags, beverage wraps, and barcodes. Features UV curing on every printing unit, inline rotary die cutting, and 100% web inspection for zero-defect output.',
    keyApplications: [
      'Prime self-adhesive product labels',
      'Pharmaceutical tamper-evident labels',
      'Security tags & serialized barcodes',
      'In-Mold Labels (IML) for containers',
      'Multi-layer peel-and-reseal coupons',
      'Thermal transfer & direct thermal labels'
    ],
    categoryLink: '/products/post-production-machines',
  },
  {
    id: 'flexible-packaging',
    name: 'Flexible Packaging',
    summary: 'Pouching, food packaging, shrink films',
    image: '/images/industries/flexible_packaging.webp',
    icon: Layers,
    description:
      'High-performance inline flexographic presses and converting lines engineered for multi-layer barrier films, food pouches, shrink sleeves, and laminated rollstock. Delivers exceptional registration accuracy and high print consistency at production speeds up to 120 m/min.',
    keyApplications: [
      'Retort & vacuum food packaging',
      'Multi-layer laminated barrier pouches',
      'Shrink films, sleeves & wraparounds',
      'Cold-seal confectionery packaging',
      'BOPP, PET & PE flexible films',
      'Biodegradable & compostable wraps'
    ],
    categoryLink: '/products/flexographic-printing',
  },
  {
    id: 'industrial-packaging',
    name: 'Industrial Packaging',
    summary: 'Corrugated cartons, paper bags & cups',
    image: '/images/industries/industrial_packaging.webp',
    icon: Box,
    description:
      'Heavy-duty roll-fed punching, slitting, and carton forming systems designed for paper cup blanks, corrugated packaging, multi-wall sacks, and folding cartons. Built with reinforced frames and high tonnage for reliable 24/7 continuous industrial manufacturing.',
    keyApplications: [
      'Heavy-duty paper cup & bowl blanks',
      'Roll-fed carton converting & creasing',
      'Cashier thermal paper roll slitting',
      'Multi-wall industrial paper sacks',
      'Corrugated container label lamination',
      'Rigid paperboard & blister card die cutting'
    ],
    categoryLink: '/products/post-production-machines',
  },
];

const substrates = [
  { name: 'BOPP / PET / PE Films', spec: '12 - 150 µm thickness' },
  { name: 'Self-Adhesive Paper & Film', spec: 'Standard & thermal stocks' },
  { name: 'Paperboard & Cup Paper', spec: '150 - 450 gsm caliper' },
  { name: 'Aluminum Foil & Laminates', spec: 'Barrier composite rolls' },
  { name: 'In-Mold Labels (IML)', spec: 'Synthetic PP substrate' },
  { name: 'Shrink PVC & PETG', spec: 'Cross-directional shrink' },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F0F5FA] via-[#EBF3FC] to-[#E2ECF7] py-12 text-slate-900 md:py-16 border-b border-slate-200">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0B2076] transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#0B2076] font-bold">Industries We Serve</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#0B2076] md:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Providing proven converting machinery, inline printing systems, and consumable solutions engineered to meet the demanding requirements of global packaging converters and label manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ZIG-ZAG SECTOR LAYOUT ================= */}
      <section className="w-full bg-white py-14 md:py-20 border-b border-slate-200">
        <div className="site-container">
          <div className="flex flex-col gap-14 lg:gap-20">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              const isEven = index % 2 === 0;

              return (
                <article
                  key={ind.id}
                  id={ind.id}
                  className={`flex flex-col md:items-center gap-8 lg:gap-14 scroll-mt-24 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Image Card */}
                  <div className="w-full md:w-1/2 lg:w-5/12">
                    <div className="group relative aspect-[16/11] sm:aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition-all duration-300 hover:border-[#0084D6] hover:shadow-xl hover:shadow-[#0B2076]/10">
                      <Image
                        src={ind.image}
                        alt={ind.name}
                        fill
                        loading="eager"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2076]/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Description Beside Box */}
                  <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2.5 mb-2.5">
                      <span className="h-2 w-7 bg-[#0084D6] rounded-full" />
                      <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0084D6]">
                        {ind.name}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2076] tracking-tight">
                      {ind.summary}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {ind.description}
                    </p>

                    {/* Key Applications Pills */}
                    <div className="mt-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Key Applications:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ind.keyApplications.map((app) => (
                          <span
                            key={app}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#0084D6]" />
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>


                    {/* Action Button */}
                    <div className="mt-6 flex items-center gap-4">
                      <Link
                        href={ind.categoryLink}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0B2076] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#081754] transition-colors shadow-xs"
                      >
                        <span>Explore {ind.name} Machines</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="text-xs sm:text-sm font-bold text-[#0084D6] hover:text-[#0B2076] transition-colors"
                      >
                        Request Industry Quote &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SUBSTRATE COMPATIBILITY ================= */}
      <section className="w-full bg-[#F4F7FB] py-14 md:py-20 border-b border-slate-200">
        <div className="site-container">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 mb-2.5">
              <span className="h-2 w-7 bg-[#0084D6] rounded-full" />
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0084D6]">Material Versatility</span>
              <span className="h-2 w-7 bg-[#0084D6] rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2076]">
              Substrate &amp; Media Compatibility
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our presses and converting lines handle a broad range of flexible, rigid, and sensitive substrate media.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {substrates.map((sub) => (
              <div
                key={sub.name}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white shadow-2xs"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#0B2076]">{sub.name}</h4>
                  <p className="text-xs text-slate-500">{sub.spec}</p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-[#0084D6]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="w-full bg-[#0B2076] py-12 md:py-16 text-white">
        <div className="site-container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Looking for Specialized Machinery for Your Market?
            </h2>
            <p className="mt-1 text-sm text-slate-200 max-w-xl">
              Our engineering team can configure custom web widths, color decks, die-cutting stations, and web handling to match your substrate.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0084D6] hover:bg-[#0074BD] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-colors"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
