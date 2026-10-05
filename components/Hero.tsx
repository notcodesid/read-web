"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import angledMockup from "@/public/Angled iPhone Collection App Mockup.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[820px] xl:min-h-[860px] flex flex-col justify-between overflow-hidden bg-[#f5f4ef] pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-20 lg:pb-14">
      {/* Clean warm neutral ambient glow behind mockup */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-gradient-to-tr from-zinc-300/35 via-zinc-200/25 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
      />

      {/* Main Hero Stage */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-end">
        {/* On desktop: Phone Mockup is placed at the exact 50% horizontal center with reduced top clearance */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[56px] xl:top-[64px] z-20 flex items-center justify-center my-2 lg:my-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative w-[260px] sm:w-[290px] md:w-[315px] lg:w-[330px]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.025, y: -6 }}
              className="transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={angledMockup}
                alt="Read app running on iPhone"
                priority
                quality={100}
                sizes="(max-width: 768px) 280px, 340px"
                className="w-full h-auto select-none drop-shadow-[0_28px_50px_rgba(0,0,0,0.18)] drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Content Flanking the Centered Phone */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 z-10">
          {/* Left Column: Main Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl xl:max-w-2xl lg:max-w-[430px] xl:max-w-[480px] lg:pb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-[54px] xl:text-[62px] font-normal leading-[1.06] tracking-[-0.035em] text-[#111b14]">
              Every essay you saved, finally read.
            </h1>
            <p className="mt-6 text-[15px] sm:text-[16px] text-[#52525b] leading-relaxed font-normal">
              Save from anywhere. Read offline in calm paperback typography. Lock out distractions until you finish.
            </p>
          </motion.div>

          {/* Right Column: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[340px] xl:max-w-[360px] flex flex-col items-start justify-end pb-2 lg:pb-6"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
              <a
                href="https://testflight.apple.com/join/cmbsq8e5"
                target="_blank"
                rel="noreferrer"
                className="group w-full inline-flex items-center justify-between gap-3 bg-[#18181b] hover:bg-black text-[#f5f4ef] pl-6 pr-2.5 py-3 rounded-full text-[14.5px] font-medium transition-all duration-200 shadow-md hover:shadow-xl"
              >
                <span>Join TestFlight beta</span>
                <span className="w-7 h-7 rounded-[8px] bg-[#f5f4ef] text-[#18181b] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
