import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ClipboardCheck, 
  Wrench, 
  Headphones, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Services & Support | ZION PRINT TECH SOLUTIONS',
  description: 'Turnkey machine commissioning, precision calibration, hands-on press crew training, and genuine spare parts supply for flexographic printing and packaging machinery across India.',
};

const serviceTiers = [
  {
    id: 'technical-service',
    icon: ClipboardCheck,
    badge: 'On-Site & Remote Diagnostics',
    title: 'Machine Commissioning & Precision Calibration',
    subtitle: 'Turnkey Installation, Optical Alignment & Preventive Maintenance',
    image: '/images/services/technical-service-support-desk.webp',
    description:
      'Our factory-trained service engineers provide end-to-end mechanical and electrical installation, dynamic calibration, laser optical alignment, and periodic preventive maintenance across all flexographic printing, slitting, and converting machinery.',
    capabilities: [
      'Turnkey press installation & foundation leveling',
      'Dynamic mechanical & electrical calibration',
      'Plate cylinder & anilox roller alignment checks',
      'Electronic web guide & tension control tuning',
      'Scheduled preventive maintenance contracts (AMC)',
      'Emergency on-site breakdown response'
    ],
  },
  {
    id: 'training-consultation',
    icon: Wrench,
    badge: 'Press Crew Skill Upgrading',
    title: 'Training & Process Consultation',
    subtitle: 'Operator Certification & Production Optimization',
    image: '/images/services/training-consultation-natural.webp',
    description:
      'We empower press operators and production managers with practical, hands-on training to minimize makeready times, optimize ink viscosity and doctor blade settings, eliminate print defects, and maximize hourly output on complex substrates.',
    capabilities: [
      'Comprehensive operator hands-on press operation training',
      'Doctor blade, ink metering & anilox line screen matching',
      'Plate mounting accuracy & registration troubleshooting',
      'Cold foil stamping & UV curing parameter optimization',
      'Makeready time reduction & substrate waste minimization',
      'Standard Operating Procedure (SOP) formulation'
    ],
  },
  {
    id: 'after-sales-support',
    icon: Headphones,
    badge: '24/7 Dedicated Support',
    title: 'After-Sales & Spare Parts Supply',
    subtitle: 'Genuine OEM Components & Lifetime Technical Assistance',
    image: '/images/services/after-sales-consultation.webp',
    description:
      'Zion maintains a comprehensive inventory of critical OEM spare parts, precision gears, pneumatic shafts, sensors, and consumables. With our 24/7 technical hotline and rapid-dispatch logistics, your production downtime is minimized.',
    capabilities: [
      'Genuine OEM spare parts with rapid dispatch nationwide',
      'Pneumatic expanding shafts, chucks & magnetic cylinders',
      'UV lamps, reflectors & electronic ballasts replacement',
      'Rotary slitting blades, circular knives & anvil sleeves',
      '24/7 telephonic and video remote engineering support',
      'Complete machinery warranty backing & lifecycle care'
    ],
  },
];

interface CoreServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  highlights: string[];
}

const coreFieldServices: CoreServiceItem[] = [
  {
    id: 'breakdown-calls',
    number: '01',
    title: 'Breakdown Calls',
    subtitle: 'Rapid Fault Isolation & Emergency Restoration',
    image: '/images/services/tech_support_new.jpg',
    description: 'Rapid dispatch of senior mechanical and electrical engineers for critical press breakdowns, electrical drive fault diagnostics, and mechanical failures to restore operations with minimal plant downtime.',
    highlights: [
      'Priority 24/7 emergency response hotline',
      'On-site root-cause diagnostics & fault isolation',
      'Servo drive, PLC & registration error clearance',
      'Emergency replacement of critical wear components'
    ],
  },
  {
    id: 'preventive-maintenance',
    number: '02',
    title: 'Preventive Maintenance Calls',
    subtitle: 'Precision Laser Alignment & Multi-Point Audits',
    image: '/images/services/technical-service-natural.png',
    description: 'Systematic periodic machine audits, precision optical alignment, gear meshing calibration, lubrication review, and bearing condition assessments to prevent costly unplanned press stops.',
    highlights: [
      'Comprehensive multi-point mechanical inspection',
      'Laser alignment & cylinder parallelism checks',
      'Pneumatic tension & brake torque calibration',
      'Proactive wear-part monitoring & replenishment'
    ],
  },
  {
    id: 'annual-maintenance',
    number: '03',
    title: 'Annual Maintenance Calls (AMC)',
    subtitle: 'Structured Quarterly Overhauls & Priority SLAs',
    image: '/images/services/training_consultation_v2.jpg',
    description: 'Structured annual maintenance agreements tailored for flexo presses and converting lines, guaranteeing scheduled quarterly visits, preferential emergency SLA response, and discounted OEM spare parts.',
    highlights: [
      'Scheduled quarterly on-site overhaul visits',
      'Priority technician dispatch SLA for critical issues',
      'Predictable annual operating maintenance budget',
      'Continuous press operator fine-tuning & training'
    ],
  },
  {
    id: 'used-machinery-installation',
    number: '04',
    title: 'Used Flexographic Machineries Installation Supports',
    subtitle: 'Dismantling, Rigging, Re-Erection & Commissioning',
    image: '/images/products/clean/zion-branded-flexo-machine.png',
    description: 'Specialized engineering support for decommissioning, safe dismantling, rigging supervision, re-erection, optical realignment, foundation leveling, and production commissioning of pre-owned flexo presses.',
    highlights: [
      'Professional decommissioning & electrical marking',
      'Foundation leveling & heavy rigging supervision',
      'Laser optical cylinder & gear re-alignment',
      'Full electrical reconnection & production test runs'
    ],
  },
  {
    id: 'third-party-installation',
    number: '05',
    title: 'Third-Party Installation & Supports',
    subtitle: 'Multi-Brand Integration & Overseas Press Setup',
    image: '/images/services/technical_service_hd.jpg',
    description: 'Expert mechanical, electrical, and automation engineering support for machinery imported from overseas or third-party manufacturers requiring reliable, local Indian technical commissioning.',
    highlights: [
      'Multi-brand mechanical & electrical assembly',
      'Localized cabling, transformer & pneumatic setup',
      'Control panel debugging & PLC parameter tuning',
      'Full test runs with actual customer substrates'
    ],
  },
  {
    id: 'repair-services',
    number: '06',
    title: 'Repair Services',
    subtitle: 'Component Reconditioning & Precision Overhauls',
    image: '/images/services/after_sales_v2.jpg',
    description: 'High-precision repair and reconditioning for critical machinery assemblies, including gearboxes, doctor blade chambers, UV curing units, expanding air shafts, magnetic cylinders, and servo motors.',
    highlights: [
      'Precision mechanical gearbox & bearing overhauls',
      'Anilox roller surface & journal reconditioning',
      'Pneumatic expanding shaft bladder & leaf repairs',
      'UV lamp, reflector & electronic ballast restoration'
    ],
  },
];

const lifecycleSteps = [
  {
    step: '01',
    title: 'Technical Consultation',
    desc: 'Understanding your plant layout, substrate parameters, and production speed requirements to recommend exact configurations.',
  },
  {
    step: '02',
    title: 'Installation & Commissioning',
    desc: 'Precision laser leveling, wiring validation, test-roll dry runs, and final sign-off under actual production conditions.',
  },
  {
    step: '03',
    title: 'Crew Training & Handover',
    desc: 'Intensive on-press training for operators covering registration controls, safety protocols, and routine maintenance tasks.',
  },
  {
    step: '04',
    title: 'Lifetime Service & Parts',
    desc: 'Regular health checks, proactive part replacements, and 24/7 rapid assistance to keep continuous production humming.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F0F5FA] via-[#EBF3FC] to-[#E2ECF7] py-12 text-slate-900 md:py-16 border-b border-slate-200">
        <div className="site-container">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0B2076] transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#0B2076] font-bold">Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2 w-7 bg-[#0084D6] rounded-full" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0084D6]">
                Engineering &amp; Technical Support
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#0B2076] md:text-5xl">
              Technical Services &amp; Support
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base font-normal">
              From turnkey press commissioning and precision optical alignment to hands-on press crew training and genuine spare parts supply — Zion Print Tech Solutions ensures peak productivity and minimal downtime across your entire plant.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 1: TECHNICAL SERVICES & SUPPORT (3 EXISTING CORE SERVICES) ================= */}
      <section className="w-full bg-white py-14 md:py-20 border-b border-slate-200" id="technical-services">
        <div className="site-container">
          <div className="flex flex-col gap-14 lg:gap-20">
            {serviceTiers.map((tier, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={tier.id}
                  id={tier.id}
                  className={`flex flex-col md:items-center gap-8 lg:gap-14 scroll-mt-24 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Photo Card */}
                  <div className="w-full md:w-1/2 lg:w-5/12">
                    <div className="group relative aspect-[16/11] sm:aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition-all duration-300 hover:border-[#0084D6] hover:shadow-xl hover:shadow-[#0B2076]/10">
                      <Image
                        src={tier.image}
                        alt={tier.title}
                        fill
                        loading="eager"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2076]/25 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Service Description & Capabilities */}
                  <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2.5 mb-2.5">
                      <span className="h-2 w-7 bg-[#0084D6] rounded-full" />
                      <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0084D6]">
                        {tier.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2076] tracking-tight">
                      {tier.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 mt-0.5">
                      {tier.subtitle}
                    </p>

                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {tier.description}
                    </p>

                    <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {tier.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 font-medium bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl">
                          <CheckCircle2 className="h-4 w-4 text-[#0084D6] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0B2076] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#081754] transition-colors shadow-xs"
                      >
                        <span>Book Service Assistance</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href="tel:+918179334344"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0084D6] hover:text-[#0B2076] transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" /> +91 81793 34344
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: CORE FIELD OPERATIONS / SPECIALIZED ENGINEERING & FIELD SERVICES ================= */}
      <section className="w-full bg-[#F4F7FB] py-14 md:py-20 border-b border-slate-200" id="specialized-services">
        <div className="site-container">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 bg-[#0084D6] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0084D6]">Core Field Operations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B2076] tracking-tight">
              Specialized Engineering &amp; Field Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Factory-trained mechanical, electrical, and process engineers providing rapid on-site troubleshooting, scheduled preventive overhauls, and complete machinery installation across India.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreFieldServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:border-[#0084D6] hover:shadow-xl hover:shadow-[#0B2076]/10 transition-all duration-300"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2076] group-hover:text-[#0084D6] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#0084D6]">
                    {service.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {service.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#0084D6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2076] hover:text-[#0084D6] uppercase tracking-wider transition-colors"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href="tel:+918179334344"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-[#0B2076] transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    <span>Call Support</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: 4-STEP SERVICE LIFECYCLE ================= */}
      <section className="w-full bg-white py-14 md:py-20 border-b border-slate-200">
        <div className="site-container">
          <div className="mb-12 text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-1.5 w-6 bg-[#0084D6] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0084D6]">Our Process</span>
              <span className="h-1.5 w-6 bg-[#0084D6] rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2076]">
              End-to-End Service Lifecycle
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-normal">
              Structured engineering execution from initial consultation through lifetime support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lifecycleSteps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-2xs hover:border-[#0084D6] hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center mb-3">
                    <span className="h-1.5 w-6 bg-[#0084D6] rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2076] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: SERVICE CALLOUT / CTA ================= */}
      <section className="w-full bg-[#0B2076] py-12 md:py-16 text-white">
        <div className="site-container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Need Immediate Machine Service or OEM Parts?
            </h2>
            <p className="mt-1 text-sm text-slate-200 max-w-xl font-normal">
              Connect directly with our Hyderabad engineering center for rapid troubleshooting, part quotations, or scheduled plant visits.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0084D6] hover:bg-[#0074BD] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-colors"
            >
              <span>Contact Service Desk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+918179334344"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition-colors"
            >
              <Phone className="h-4 w-4 text-[#FFC700]" />
              <span>+91 81793 34344</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
