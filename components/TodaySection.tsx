"use client";

import React from "react";
import { Clock, LayoutGrid, BellRing } from "lucide-react";
import { motion } from "motion/react";
import PhoneFrame from "@/components/PhoneFrame";
import homeShot from "@/public/app/home.webp";
import widgetShot from "@/public/app/widget.webp";

export default function TodaySection() {
  const shelfFeatures = [
    {
      name: "For the time you have",
      icon: Clock,
      description:
        "Tell Read you have 5, 15 or 30 minutes. It picks one piece from your own shelf that you can finish, starting with the one you're already halfway through.",
    },
    {
      name: "On your Home Screen",
      icon: LayoutGrid,
      description:
        "The Today's read widget shows what's next and how long it takes, on your Home Screen and Lock Screen. One tap and you're reading.",
    },
    {
      name: "A daily reading time",
      icon: BellRing,
      description:
        "Choose a time and a length. Every day, Read reminds you then, and can pause your distracting apps by itself.",
    },
  ];

  return (
    <section id="today" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#71717a] uppercase">
              <span>[02]</span>
              <span>/ TODAY’S READ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#111b14] leading-[1.12]">
              One good read a day, picked for the time you have.
            </h2>
          </div>
          <p className="text-[#52525b] text-[15px] sm:text-[16px] max-w-md leading-relaxed font-normal">
            No feed and no endless queue. Each day Read hands you a single piece from the shelf you built, so saving finally turns into reading.
          </p>
        </motion.div>

        {/* Real screens from the app */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-4 sm:gap-8 max-w-[640px] mx-auto pb-12 sm:pb-16"
        >
          <PhoneFrame src={homeShot} alt="Read's Home: I have 5, 15 or 30 min, and Today's read picked to fit" crop={0.62} className="w-full" />
          <PhoneFrame src={widgetShot} alt="The Today's read widget on the iPhone Home Screen, in medium and small sizes" crop={0.62} className="w-full sm:mt-12" />
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shelfFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#edeae1] rounded-3xl p-8 flex flex-col justify-between border border-black/[0.04] transition-all hover:bg-[#e6e2d6] hover:shadow-sm"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-normal text-[#111b14] tracking-tight">
                      {item.name}
                    </h3>
                    <div className="w-10 h-10 rounded-2xl bg-[#18181b] text-[#f5f4ef] flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>

                  <p className="text-[14.5px] text-[#52525b] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
