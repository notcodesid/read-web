"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

export default function PhilosophySection() {
  const testimonials = [
    {
      quote:
        "Fifteen minutes on Read has completely replaced doomscrolling before bed. The paper typography makes it feel like holding an actual book.",
      author: "Maya Lin",
      role: "Software Engineer & Writer",
      story: "MEMBER STORY 01",
    },
    {
      quote:
        "The Screen Time focus lock is the only thing that actually stops me from switching tabs mid-sentence. My reading retention has tripled.",
      author: "Alex Rivera",
      role: "AI Researcher",
      story: "MEMBER STORY 02",
    },
    {
      quote:
        "Exporting clean Markdown straight into my Obsidian second brain without weird HTML artifacts has turned Read into my primary study companion.",
      author: "David Vance",
      role: "Architect & Designer",
      story: "MEMBER STORY 03",
    },
  ];

  return (
    <section id="philosophy" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 border-t border-black/[0.06]">
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
              <span>[005]</span>
              <span>/ PHILOSOPHY & STORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#111b14] leading-[1.12]">
              More than an app.
              <br />
              A kinder way to read online.
            </h2>
          </div>
          <p className="text-[#536052] text-[14.5px] sm:text-[15.5px] max-w-md leading-relaxed font-normal">
            You don’t have to conquer 100 books a year. Just give yourself a few minutes of quiet presence with an author’s mind every day.
          </p>
        </motion.div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.author}
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
                <Quote className="w-8 h-8 text-[#50724d] opacity-50" />
                <p className="text-[15.5px] sm:text-[16px] text-[#111b14] font-serif leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-8 border-t border-black/[0.06] mt-6">
                <h4 className="text-[14px] font-semibold text-[#111b14]">
                  {item.author}
                </h4>
                <p className="text-xs text-[#536052] mt-0.5">
                  {item.role}
                </p>
                <span className="block text-[10px] font-mono uppercase text-[#788077] tracking-wider mt-2">
                  {item.story}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
