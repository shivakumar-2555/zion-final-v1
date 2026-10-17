import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M5.3 7.8H1.7V22h3.6V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22.3 13.9c0-4.3-2.3-6.3-5.4-6.3a4.7 4.7 0 0 0-4.2 2.3V7.8H9.1V22h3.6v-7c0-1.8.3-3.6 2.6-3.6 2.2 0 2.3 2.1 2.3 3.7V22h3.6l1.1-8.1Z" /></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M13.7 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.3H6.8V13h3.1v9h3.8Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" /></svg>;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-600">
      <div className="site-container grid gap-9 py-11 md:grid-cols-2 lg:grid-cols-[minmax(0,1.05fr)_minmax(180px,0.5fr)_minmax(0,1fr)] lg:gap-12 lg:py-12">
        <div className="min-w-0">
          <div className="relative h-14 w-[230px]">
            <Image 
              src="/images/logo.png" 
              alt="ZION PRINT TECH SOLUTIONS" 
              fill 
              sizes="230px" 
              className="object-contain" 
            />
          </div>
          <p className="mt-6 max-w-lg text-sm leading-6 text-slate-600">ZION PRINT TECH SOLUTIONS specializes in flexographic printing machinery, packaging machinery, and application support services.</p>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0B2076]">
            <span>Precision</span><span className="text-[#0084D6]">•</span>
            <span>Reliability</span><span className="text-[#E6007A]">•</span>
            <span>Innovation</span><span className="text-[#FFC700]">•</span>
            <span>Service</span>
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="flex items-center gap-3 text-base font-extrabold text-[#0B2076]"><span className="h-2 w-2 bg-[#FFC700] rounded-sm" />Quick Links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="group flex items-center gap-2 font-medium transition-colors duration-300 hover:text-[#0B2076]">
                  <span className="h-px w-0 bg-[#0B2076] transition-all duration-300 group-hover:w-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-7 text-sm font-extrabold text-[#0B2076]">Social Media</h2>
          <div className="mt-3.5 flex gap-3" aria-label="Social Media Icons">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors duration-300 hover:border-[#0B2076] hover:bg-blue-50 hover:text-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#FFC700] focus:ring-offset-2 focus:ring-offset-white" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors duration-300 hover:border-[#0B2076] hover:bg-blue-50 hover:text-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#FFC700] focus:ring-offset-2 focus:ring-offset-white" aria-label="Facebook" title="Facebook"><FacebookIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors duration-300 hover:border-[#0B2076] hover:bg-blue-50 hover:text-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#FFC700] focus:ring-offset-2 focus:ring-offset-white" aria-label="Instagram" title="Instagram"><InstagramIcon /></a>
          </div>
        </div>

        <div className="min-w-0 md:col-span-2 lg:col-span-1">
          <h2 className="flex items-center gap-3 text-base font-extrabold text-[#0B2076]"><span className="h-2 w-2 bg-[#0084D6] rounded-sm" />Contact Details</h2>
          <div className="mt-5 space-y-4">
            <a href="https://www.google.com/maps/search/?api=1&query=ZION+PRINT+TECH+SOLUTIONS+Papireddy+Nagar+Hyderabad+Telangana" target="_blank" rel="noopener noreferrer" className="group flex gap-4 rounded-xl border border-slate-200 bg-[#f8fafc] p-4 transition-colors duration-300 hover:border-[#0B2076] hover:bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-[#FFC700] focus:ring-offset-2 focus:ring-offset-white">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FFC700]" />
              <address className="text-sm not-italic leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-900">H.No: 36-153/A, R.No-07, Block-A, Papireddy Nagar, Jagadgirigutta, Quthbullapur Mandal, Hyderabad, Medchal Malkajgiri Dist., Telangana - 500037.</address>
            </a>
            <div className="flex gap-4 text-sm font-medium">
              <Phone className="h-5 w-5 shrink-0 text-[#0084D6]" />
              <div className="flex flex-col gap-1.5">
                <a href="tel:+918179334344" className="inline-flex rounded-sm transition-colors duration-300 hover:text-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#FFC700] focus:ring-offset-2 focus:ring-offset-white">+91 81793 34344</a>
                <a href="tel:+917981367956" className="inline-flex rounded-sm transition-colors duration-300 hover:text-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#FFC700] focus:ring-offset-2 focus:ring-offset-white">+91 7981367956</a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium">
              <Mail className="h-5 w-5 shrink-0 text-[#0084D6]" />
              <a href="mailto:info@zionprinttech.com" className="inline-flex rounded-sm transition-colors duration-300 hover:text-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#FFC700] focus:ring-offset-2 focus:ring-offset-white">info@zionprinttech.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-slate-200 bg-[#f8fafc]">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-6 text-[13px] font-medium text-slate-500 md:flex-row">
          <p className="text-center text-slate-500 md:text-left">
            &copy; 2026 <span className="font-bold text-slate-700">Zion Print Tech Solutions</span>. All rights reserved.
          </p>
          <p className="text-center text-slate-500 md:text-right">
            Website designed &amp; developed by{' '}
            <a href="https://mectto.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0B2076] hover:text-[#0084D6] transition-colors">
              Mectto Automachine Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
