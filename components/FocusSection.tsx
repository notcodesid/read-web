"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import focusModalImg from "@/public/iPhone Reading Focus Mockup.png";

export default function FocusSection() {
  return (
    <section id="focus" className="relative w-full bg-[#18181b] text-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Clean, Elegant Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              <span>[02]</span>
              <span>/ FOCUS LOCK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-normal tracking-[-0.035em] text-white leading-[1.12]">
              Your phone is the reason you never finish.
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed font-normal">
              Set a timer. Screen Time blocks every distraction until you finish.
            </p>
          </motion.div>

          {/* Right: iPhone Focus Modal Mockup (Enlarged) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center py-4"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] flex justify-center scale-105 sm:scale-115 lg:scale-125 transition-transform duration-300">
              <Image
                src={focusModalImg}
                alt="Apple Screen Time Reading Focus Modal on iPhone"
                priority
                className="w-full h-auto object-contain select-none drop-shadow-[0_28px_60px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
