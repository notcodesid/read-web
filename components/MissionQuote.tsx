"use client";

import React from "react";
import { motion } from "motion/react";

export default function MissionQuote() {
  return (
    <section className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 border-t border-black/[0.06]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1100px] mx-auto text-center space-y-8"
      >
        <p className="text-[12px] sm:text-[13px] tracking-[0.2em] uppercase text-[#71717a] font-medium">
          / OUR INTENTION
        </p>
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal leading-[1.28] tracking-[-0.025em] text-[#111b14]">
          “We believe reading belongs in your everyday life—a quiet room to pause, think, and immerse yourself in ideas that outlast the algorithm.”
        </blockquote>
        <div className="pt-2 flex items-center justify-center gap-3 text-xs tracking-wider uppercase text-zinc-600 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span>Made for real focus</span>
        </div>
      </motion.div>
    </section>
  );
}
