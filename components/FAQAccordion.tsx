"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Faq = { q: string; a: string };

export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="rounded-card border border-line overflow-hidden divide-y divide-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="bg-bg1">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full text-left px-7 md:px-8 py-7 flex justify-between items-center gap-6 font-semibold text-[17.5px]"
            >
              {f.q}
              <span
                className={`relative w-8 h-8 flex-shrink-0 rounded-full border-[1.5px] transition-colors ${
                  isOpen ? "border-orange" : "border-line"
                }`}
              >
                <span
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13px] h-[2px] rounded-full transition-colors ${
                    isOpen ? "bg-orange" : "bg-mid"
                  }`}
                />
                <span
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[13px] w-[2px] rounded-full transition-all ${
                    isOpen ? "bg-orange rotate-90 opacity-0" : "bg-mid"
                  }`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-7 md:px-8 pb-7 text-mid text-[15.5px] leading-relaxed max-w-[680px]">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
