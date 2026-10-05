"use client";

import React from "react";
import { Link2, Rss, FileText, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function ImportSection() {
  const importSteps = [
    {
      num: "01",
      icon: Link2,
      tag: "ONE-TAP EXTRACTION",
      title: "Public URLs & Articles",
      description:
        "Found a piece you want to read later? Copy the link and open Add in Read. Our server-side extractor parses clean typography, stripping away ads, banners, and cookie popups.",
    },
    {
      num: "02",
      icon: Rss,
      tag: "NEWSLETTERS & FEEDS",
      title: "Substack, Medium & RSS",
      description:
        "Connect the authors you love. Read fetches public posts and newsletters into your personal queue so you can enjoy them without inbox clutter.",
    },
    {
      num: "03",
      icon: FileText,
      tag: "SECOND BRAIN INTEGRATION",
      title: "Markdown & Obsidian Export",
      description:
        "Every highlight and marginal note you capture stays yours. Export your thoughts into clean Markdown files ready to import directly into Notion, Obsidian, or Bear.",
    },
  ];

  return (
    <section id="import" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 border-t border-black/[0.06]">
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
              <span>[003]</span>
              <span>/ YOUR READING INBOX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#111b14] leading-[1.12]">
              Import from anywhere.
              <br />
              One quiet home for every essay.
            </h2>
          </div>
          <p className="text-[#536052] text-[14.5px] sm:text-[15.5px] max-w-md leading-relaxed font-normal">
            No more lost browser tabs or unread bookmarks. Gather the long-form ideas that matter into a single, beautiful sanctuary designed for deep contemplation.
          </p>
        </motion.div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {importSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#edeae1] rounded-3xl p-8 sm:p-9 flex flex-col justify-between border border-black/[0.04] transition-colors hover:bg-[#e6e2d6] shadow-sm hover:shadow-md"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-light text-[#788077]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#263126] text-white flex items-center justify-center">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#50724d]">
                      {step.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-[#111b14] tracking-tight mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#536052] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex items-center gap-1.5 text-xs font-medium text-[#263126]">
                  <span>Built into Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
