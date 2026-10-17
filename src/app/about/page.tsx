import type { Metadata } from 'next';
import Image from 'next/image';
import { BadgeCheck, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | ZION PRINT TECH SOLUTIONS',
  description: 'ZION PRINT TECH SOLUTIONS provides printing and packaging machinery, technical service, application support, project consultancy, spares and consumables.',
};

const values = [
  { name: 'Precision', icon: BadgeCheck, mark: 'P', color: '#0084D6' },
  { name: 'Reliability', icon: ShieldCheck, mark: 'R', color: '#E6007A' },
  { name: 'Innovation', icon: Lightbulb, mark: 'I', color: '#FFC700' },
  { name: 'Service', icon: Handshake, mark: 'S', color: '#0B2076' },
];

function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.18em] ${light ? 'text-[#FFC700]' : 'text-[#0084D6]'}`}>
      <span className={`h-1.5 w-6 rounded-full ${light ? 'bg-[#FFC700]' : 'bg-[#0084D6]'}`} />
      <span className={light ? 'text-white' : 'text-[#0B2076]'}>{children}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner with Clean Light Corporate Gradient */}
      <section className="relative isolate w-full overflow-hidden bg-gradient-to-r from-[#F0F5FA] via-[#EBF3FC] to-[#E2ECF7] text-slate-900 border-b border-slate-200">
        <div className="absolute inset-0 -z-20 opacity-[0.035] [background-image:linear-gradient(#0b2076_1px,transparent_1px),linear-gradient(90deg,#0b2076_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="site-container py-12 md:py-16">
          <SectionTag>Who We Are</SectionTag>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0084D6]">About Zion Print Tech Solutions</p>
              <h1 className="sr-only">Who We Are — Zion Print Tech Solutions</h1>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B2076] md:text-4xl">
                Engineering Excellence in Flexographic Printing
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-7">
                At ZION PRINT TECH SOLUTIONS, we are driven by a desire to transform the printing and packaging industry. With more than 15 years of hands-on experience in web-offset and flexographic printing technologies, machinery technical service and application processes, we understand the industry&apos;s technical nuances and evolving demands.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-7">
                We work with manufacturers of packaging and printed products, from established brands to businesses in the early stages of growth. Our goal is to bridge global innovation with local customer needs by providing customized solutions aligned with each customer&apos;s aspirations.
              </p>
            </div>

            <div className="relative pr-0 sm:pr-7">
              <div className="absolute -right-1 -top-5 hidden h-28 w-28 border-r-2 border-t-2 border-[#FFC700]/80 sm:block" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl p-4">
                <Image src="/images/products/clean/zion-branded-flexo-machine.png" alt="ZION PRINT TECH SOLUTIONS flexographic printing machinery" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-contain p-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values */}
      <section className="w-full border-b border-slate-200 bg-[#F4F7FB] py-12 md:py-16">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm sm:p-8">
            <SectionTag>Mission Statement</SectionTag>
            <div className="mt-6 h-1.5 w-12 bg-[#FFC700] rounded-full" />
            <h2 className="mt-6 max-w-xl text-xl font-extrabold leading-8 tracking-[-0.015em] text-[#0B2076] sm:text-2xl sm:leading-9">
              Delivering reliable technology and hands-on technical support to empower packaging and printing industries.
            </h2>
          </article>

          <article className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm sm:p-8">
            <SectionTag>Core Values</SectionTag>
            <div className="mt-6 h-1.5 w-12 bg-[#0084D6] rounded-full" />
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.name} className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B2076] text-white">
                      <Icon className="h-5 w-5" style={{ color: value.color }} />
                    </div>
                    <span className="text-sm font-extrabold text-slate-900 sm:text-base">{value.name}</span>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      {/* Vision & Philosophy (Light Corporate Theme) */}
      <section className="relative w-full overflow-hidden bg-white py-14 text-slate-900 md:py-20 border-b border-slate-200">
        <div className="relative site-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm sm:p-8">
            <SectionTag>Vision</SectionTag>
            <div className="mt-6 h-1.5 w-12 bg-[#FFC700] rounded-full" />
            <h2 className="mt-6 text-xl font-extrabold leading-8 tracking-[-0.015em] text-[#0B2076] sm:text-2xl sm:leading-9">
              To lead the advancement of label-printing equipment through technological innovation.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              We aim to become a world-leading provider of intelligent printing solutions and empower the high-quality development of global packaging industries.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm sm:p-8">
            <SectionTag>Business Philosophy</SectionTag>
            <div className="mt-6 h-1.5 w-12 bg-[#0084D6] rounded-full" />
            <p className="mt-6 text-xl font-extrabold leading-8 tracking-[-0.015em] text-[#0B2076] sm:text-2xl">
              Quality first. Customer foremost.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Guided by these core principles, we serve the industry with integrity, pursue innovation-driven development, and strive for operational excellence.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
