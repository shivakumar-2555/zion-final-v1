"use client";

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { motion } from 'framer-motion';

function InquiryForm() {
  const searchParams = useSearchParams();
  const preSelectedProduct = searchParams.get('product') || '';
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = preSelectedProduct ? `Inquiry: ${preSelectedProduct}` : 'Inquiry - Zion Print Tech Solutions';
    const body = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      preSelectedProduct ? `Product: ${preSelectedProduct}` : '',
      '',
      `Message: ${formState.message}`,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:info@zionprinttech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {preSelectedProduct && (
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Product / Machine Requested</label>
          <div className="flex flex-col rounded-xl border border-[#0084D6]/30 bg-[#0084D6]/5 px-4 py-3">
            <span className="font-extrabold text-[#0B2076]">{preSelectedProduct}</span>
            <span className="mt-0.5 text-xs font-semibold text-[#0084D6]">Quote requested for this model</span>
          </div>
        </div>
      )}
      <div className="space-y-2">
        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700">Your Full Name</label>
        <input 
          id="name" 
          type="text" 
          required 
          placeholder="e.g. John Doe"
          value={formState.name} 
          onChange={(event) => setFormState({ ...formState, name: event.target.value })} 
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#0B2076]/20" 
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</label>
        <input 
          id="email" 
          type="email" 
          required 
          placeholder="e.g. john@company.com"
          value={formState.email} 
          onChange={(event) => setFormState({ ...formState, email: event.target.value })} 
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#0B2076]/20" 
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">Inquiry Details / Requirements</label>
        <textarea 
          id="message" 
          rows={5} 
          required 
          placeholder="Please describe your printing, converting, or tooling requirements..."
          value={formState.message} 
          onChange={(event) => setFormState({ ...formState, message: event.target.value })} 
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#0B2076] focus:outline-none focus:ring-2 focus:ring-[#0B2076]/20" 
        />
      </div>
      <motion.button 
        type="submit" 
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-xl bg-[#0B2076] hover:bg-[#081754] px-6 py-4 text-base font-extrabold text-white shadow-md transition flex items-center justify-center gap-2"
      >
        <Send className="h-4 w-4 text-[#FFC700]" /> Send Inquiry
      </motion.button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Header Banner matching Clean Light Corporate Theme */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F0F5FA] via-[#EBF3FC] to-[#E2ECF7] py-12 text-slate-900 md:py-16 border-b border-slate-200">
        <div className="site-container">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#0B2076]">Contact Our Team</h1>
          <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
            Speak directly with our flexographic machinery specialists for quotations, technical service, and spare parts.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-[#F4F7FB] py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0B2076] md:text-3xl">Corporate Office</h2>
            <p className="mt-1 text-sm text-slate-600 mb-6">Our headquarters &amp; technical service center in Hyderabad</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B2076] text-[#FFC700]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Address</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    H.No: 36-153/A, R.No-07, Block-A, Papireddy Nagar, Jagadgirigutta, Quthbullapur Mandal, Hyderabad, Medchal Malkajgiri Dist., Telangana - 500037.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B2076] text-[#0084D6]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Direct Phone</h3>
                  <div className="mt-1 flex flex-col gap-1 text-sm font-semibold text-slate-700">
                    <a href="tel:+918179334344" className="hover:text-[#0B2076] transition-colors">+91 81793 34344</a>
                    <a href="tel:+917981367956" className="hover:text-[#0B2076] transition-colors">+91 7981367956</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B2076] text-[#E6007A]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Email Support</h3>
                  <a href="mailto:info@zionprinttech.com" className="mt-1 block text-sm font-semibold text-slate-700 hover:text-[#0B2076] transition-colors">
                    info@zionprinttech.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm md:p-10">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h2 className="text-2xl font-extrabold text-[#0B2076]">Send an Inquiry</h2>
              <p className="mt-1 text-xs text-slate-500">Fill in your requirements and our team will get back within 24 hours.</p>
            </div>
            <Suspense fallback={<div className="h-80" />}>
              <InquiryForm />
            </Suspense>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Integration */}
      <section className="w-full border-t border-slate-200 bg-white py-12 md:py-16">
        <div className="site-container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0B2076] md:text-3xl">Factory &amp; Service Location</h2>
              <p className="mt-1 text-sm text-slate-600">Navigate directly to our service facility via Google Maps</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=ZION+PRINT+TECH+SOLUTIONS,+H.No:+36-153/A,+R.No-07,+Block-A,+Papireddy+Nagar,+Jagadgirigutta,+Quthbullapur+Mandal,+Hyderabad,+Medchal+Malkajgiri+Dist.,+Telangana+-+500037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B2076] hover:bg-[#081754] px-6 py-3 text-sm font-bold text-white transition shadow-sm"
            >
              Open in Google Maps <MapPin className="h-4 w-4 text-[#FFC700]" />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe 
              title="ZION PRINT TECH SOLUTIONS Location" 
              src="https://maps.google.com/maps?q=ZION%20PRINT%20TECH%20SOLUTIONS%2C%20H.No%3A%2036-153%2FA%2C%20R.No-07%2C%20Block-A%2C%20Papireddy%20Nagar%2C%20Jagadgirigutta%2C%20Quthbullapur%20Mandal%2C%20Hyderabad%2C%20Medchal%20Malkajgiri%20Dist.%2C%20Telangana%20-%20500037&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="h-[420px] w-full border-0" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>
        </div>
      </section>
    </>
  );
}
