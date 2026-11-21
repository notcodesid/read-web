"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I import articles from the web, Substack, or Medium?",
      a: "Paste a public article link and Read will try to extract a clean reading view. Some websites, private pages, and paywalled articles are not supported. Read does not bypass publisher access restrictions.",
    },
    {
      q: "What is Today's read?",
      a: "Each day Read picks one unfinished piece from your own library that fits the time you say you have: 5, 15 or 30 minutes. A piece you have already started comes first. It also appears in the Home Screen and Lock Screen widget.",
    },
    {
      q: "How does Lock In work?",
      a: "Choose how long you want to read. If you allow Screen Time access and pick apps, categories, or websites, Read pauses them until the timer ends; otherwise it is a plain reading timer. You can also set a daily reading time, and Read reminds you and pauses those apps by itself every day. It does not silence every notification, and you can end a session early in Read.",
    },
    {
      q: "What is Read to Unlock?",
      a: "An optional mode for people who want help putting the phone down. The apps you choose stay paused, and every minute you read in Read earns two minutes with them, up to 60 a day. Screen Time pauses them again once the time is used, and you can turn it off for the day or for good whenever you like.",
    },
    {
      q: "Does Read work offline?",
      a: "Saved text can be read offline after importing. You need internet access to import new articles or back up your library; external images and links may still need a connection. Open your article once before travelling to check it is ready.",
    },
    {
      q: "Can I export my highlights and notes?",
      a: "Yes. Read exports highlights and notes as a Markdown file through the iOS share sheet. You can import the file into apps such as Notion or Obsidian; it does not connect automatically to those accounts.",
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
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full flex items-center justify-between text-left gap-6 group"
                >
                  <h3 id={`faq-q-${idx}`} className="text-base sm:text-lg font-normal text-[#111b14] group-hover:text-black transition-colors">
                    {faq.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="w-7 h-7 rounded-full bg-[#e8e4d9] group-hover:bg-[#18181b] group-hover:text-white flex items-center justify-center shrink-0 transition-colors text-[#111b14]"
                  >
                    <Plus aria-hidden="true" className="w-3.5 h-3.5 stroke-[2]" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      id={`faq-answer-${idx}`}
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
