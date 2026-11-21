"use client";

import React from "react";
import { motion } from "motion/react";
import PhoneFrame from "@/components/PhoneFrame";
import lockInShot from "@/public/app/lock-in.webp";
import everyDayShot from "@/public/app/every-day.webp";

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
              <span>[03]</span>
              <span>/ LOCK IN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-normal tracking-[-0.035em] text-white leading-[1.12]">
              Your phone is the reason you never finish.
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed font-normal">
              Start a Lock In session and Screen Time pauses the apps you choose until the timer ends. Set a daily reading time and it happens by itself. Or turn on Read to Unlock: your chosen apps stay paused, and every minute you read earns two minutes with them. Free, like everything in Read.
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
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-[520px]">
              <PhoneFrame
                src={lockInShot}
                alt="The Lock In sheet in Read: choose 25 minutes, choose distracting apps, start session"
                className="w-full"
              />
              <PhoneFrame
                src={everyDayShot}
                alt="Read's Every Day screen: a daily reading time at 9:30 PM for 20 minutes"
                className="w-full mt-10 sm:mt-16"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
