"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function CtaSection() {
  return (
    <section id="early-access" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-[#18181b] text-[#f5f4ef] p-10 sm:p-16 lg:p-20 shadow-xl"
        >
          {/* Subtle warm neutral ambient glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
            }}
            className="absolute -right-20 -bottom-20 w-96 h-96 bg-white rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Read logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-contain select-none shadow-md"
              />
              <span className="inline-block text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                / TESTFLIGHT BETA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.08] tracking-[-0.03em] text-white">
              Begin your reading life.
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              Free during the beta. Available now on iPhone and iPad.
            </p>

            {/* TestFlight Direct Action Button */}
            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <a
                  href="https://testflight.apple.com/join/cmbsq8e5"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-[#f5f4ef] hover:bg-white text-[#18181b] pl-7 pr-2.5 py-3 rounded-full text-base font-medium transition-all shadow-md"
                >
                  <span>Join TestFlight beta</span>
                  <span className="w-8 h-8 rounded-[8px] bg-[#18181b] group-hover:bg-black text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
