"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, Mail } from 'lucide-react';
import Link from 'next/link';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-[90] md:bottom-6 md:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 mb-2 flex flex-col gap-3"
          >
            <a 
              href="tel:+918179334344"
              className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-slate-200 bg-white p-2.5 pr-4 font-semibold text-slate-800 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-[#0084D6]/10 text-[#0084D6] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              Phone
            </a>
            <Link 
              href="/contact"
              className="flex items-center gap-3 whitespace-nowrap rounded-xl border border-slate-200 bg-white p-2.5 pr-4 font-semibold text-slate-800 shadow-lg transition-shadow hover:shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-[#0B2076]/10 text-[#0B2076] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              Inquiry Form
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2076] text-white shadow-xl transition-all duration-300 hover:bg-[#081754] hover:scale-105"
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-[#FFC700]" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
