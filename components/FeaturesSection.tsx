"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { Bookmark, BookOpen, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import notesImg from "@/public/notes.png";
import readImg from "@/public/read.png";
import collectImg from "@/public/device-mockup_1.5x_postspark_2026-10-06_01-02-35.png";

interface StepItem {
  step: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  description: string;
  image?: StaticImageData;
}

export default function FeaturesSection() {
  const steps: StepItem[] = [
    {
      step: "01",
      icon: Bookmark,
      title: "Collect",
      tag: "CAPTURE ANYWHERE",
      description:
        "Save any article or link in one tap. Your library builds automatically as you read.",
      image: collectImg,
    },
    {
      step: "02",
      icon: BookOpen,
      title: "Read",
      tag: "PAPERBACK CALM",
      description:
        "Paperback typography and offline reading. Zero ads, popups, or distractions.",
      image: readImg,
    },
    {
      step: "03",
      icon: Sparkles,
      title: "Retain",
      tag: "MEMORY & EXPORT",
      description:
        "Highlight key ideas and export notes directly to Notion or Obsidian.",
      image: notesImg,
    },
  ];

  return (
    <section id="features" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-3 pb-12 sm:pb-16"
        >
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#71717a] uppercase">
            <span>[01]</span>
            <span>/ HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal tracking-[-0.03em] text-[#111b14] leading-[1.14]">
            Everything you need for deep reading. Nothing you don’t.
          </h2>
        </motion.div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#edeae1] rounded-3xl p-8 flex flex-col justify-between border border-black/[0.04] transition-all hover:bg-[#e6e2d6] hover:shadow-sm"
              >
                <div className="space-y-6">
                  {item.image ? (
                    <div className="relative -mx-8 -mt-6 sm:-mt-8 border-b border-black/10 flex flex-col items-center">
                      <div className="w-full px-8 flex justify-center">
                        <Image
                          src={item.image}
                          alt="Notes & Highlights preview"
                          priority
                          className="w-full h-auto object-contain select-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#18181b] text-[#f5f4ef] flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-[12px] font-mono font-medium text-zinc-500">
                        {item.step}
                      </span>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-zinc-600 block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl font-normal text-[#111b14] tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[14.5px] text-[#52525b] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
