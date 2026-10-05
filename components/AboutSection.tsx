"use client";

import React from "react";
import { BookOpen, Sparkles, WifiOff } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const cards = [
    {
      icon: BookOpen,
      tag: "PAPERBACK SOUL",
      title: "Paper-like Reading",
      description:
        "Emulating the serene texture of real paperback books. Thoughtfully curated serifs, adjustable line heights, and soft paper palettes (paper, sepia, dark).",
    },
    {
      icon: Sparkles,
      tag: "CURATED SIGNAL",
      title: "Timeless Thinkers",
      description:
        "Explore built-in curated archives from foundational thinkers like Paul Graham, Noah Smith, and independent essayists. No endless scroll—just high-signal depth.",
    },
    {
      icon: WifiOff,
      tag: "LOCAL-FIRST",
      title: "Offline by Default",
      description:
        "Every article you save or open is cached on your device. Read without a signal on the subway, in the air, or completely off the grid.",
    },
  ];

  return (
    <section id="about" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 border-t border-black/[0.06]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-black/[0.08]"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-[12px] font-mono tracking-widest text-[#788077] uppercase">
              <span>[001]</span>
              <span>/ A LITTLE ABOUT READ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#111b14] leading-[1.12]">
              Less noise. More presence.
              <br />
              A reader that feels like coming home.
            </h2>
          </div>
          <p className="text-[#536052] text-[14.5px] sm:text-[15.5px] max-w-md leading-relaxed font-normal">
            Start where you are. Pick a 10-minute essay that speaks to you, and let Read strip away notifications, banners, and algorithmic outrage.
          </p>
        </motion.div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-[#edeae1] rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-black/[0.04] shadow-sm hover:shadow-md transition-colors"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#263126] text-[#f5f4ef] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[10.5px] font-semibold tracking-[0.16em] uppercase text-[#50724d]">
                      {card.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-[#111b14] tracking-tight mt-1 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-[#536052] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="pt-8 text-[11px] font-mono text-[#788077]/80">
                  0{idx + 1} / 03
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
