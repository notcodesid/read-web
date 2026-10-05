"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I import articles from the web, Substack, or Medium?",
      a: "Yes. Paste any public link and Read's extractor pulls clean text — no ads, paywall banners, or cookie popups.",
    },
    {
      q: "How does Focus Lock work?",
      a: "Pick a session length (15–60 min). Read uses Apple's Screen Time API to block distracting apps and silence notifications until the timer ends. The only exits are finishing — or restarting your phone.",
    },
    {
      q: "Does Read work offline?",
      a: "Fully. Saved essays, highlights, and notes live on your device. Planes, subways, dead zones — all fine.",
    },
    {
      q: "Can I export my highlights and notes?",
      a: "Yes. One-tap export to Notion and Obsidian. Your data is yours, and a full export is available anytime.",
    },
  ];

  return (
    <section id="faq" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-3 pb-8 sm:pb-12"
        >
          <span className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase">
            / FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-[-0.03em] text-[#111b14] leading-[1.15]">
            Frequently asked questions.
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl divide-y divide-black/[0.08]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.q} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-6 group"
                >
                  <span className="text-base sm:text-lg font-normal text-[#111b14] group-hover:text-black transition-colors">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-7 h-7 rounded-full bg-[#e8e4d9] group-hover:bg-[#18181b] group-hover:text-white flex items-center justify-center shrink-0 transition-colors text-[#111b14]"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2]" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-[14.5px] text-[#52525b] leading-relaxed pr-8 font-normal">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
