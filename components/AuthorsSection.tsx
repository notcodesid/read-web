"use client";

import React from "react";
import { BookMarked, Sparkles, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function AuthorsSection() {
  const shelfFeatures = [
    {
      name: "Clean slate",
      icon: Sparkles,
      description:
        "No feeds or algorithmic noise. You start with a quiet, blank canvas that belongs entirely to you.",
    },
    {
      name: "Author shelves",
      icon: BookMarked,
      description:
        "Save pieces from your favorite writers. Read automatically organizes them into dedicated shelves.",
    },
    {
      name: "Bring your canon",
      icon: Globe,
      description:
        "Import from Safari, X, or Substack in one tap. Offline-ready with one-tap export anytime.",
    },
  ];

  return (
    <section id="shelf" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
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
              <span>[03]</span>
              <span>/ YOUR PERSONAL SHELF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#111b14] leading-[1.12]">
              Your personal shelf — Built around the thinkers you choose.
            </h2>
          </div>
          <p className="text-[#52525b] text-[15px] sm:text-[16px] max-w-md leading-relaxed font-normal">
            Start with a clean slate. Your library and author shelves build automatically as you save.
          </p>
        </motion.div>

        {/* 3 Shelf Cards */}
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
