"use client";

import React from "react";
import { RotateCcw, Plus, BookOpen, Bookmark, MessageSquareQuote, User } from "lucide-react";

export default function IPhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[310px] md:w-[330px] select-none">
      {/* Outer Phone Shell */}
      <div className="relative aspect-[9/18.5] w-full rounded-[50px] bg-[#1a1a1c] p-[10px] shadow-[0_30px_70px_rgba(0,0,0,0.22),0_10px_24px_rgba(0,0,0,0.1)] ring-1 ring-white/15">
        {/* Subtle metallic bezel inner edge */}
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[40px] bg-[#f9f8f4] text-[#111b14]">
          {/* Dynamic Island & Status Bar */}
          <div className="relative z-20 flex w-full items-center justify-between px-6 pt-3 pb-1">
            <span className="text-[12.5px] font-semibold tracking-tight text-black">
              3:39
            </span>

            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2.5 h-[24px] w-[86px] -translate-x-1/2 rounded-full bg-black flex items-center justify-end pr-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#1c1c1e] ring-1 ring-white/10" />
            </div>

            {/* Status Icons: Signal & Battery */}
            <div className="flex items-center gap-1.5 text-black">
              {/* 5G Bars */}
              <div className="flex items-end gap-[1.5px] h-2.5">
                <span className="w-[2.5px] h-1 bg-black rounded-full" />
                <span className="w-[2.5px] h-1.5 bg-black rounded-full" />
                <span className="w-[2.5px] h-2 bg-black rounded-full" />
                <span className="w-[2.5px] h-2.5 bg-black rounded-full" />
              </div>
              <span className="text-[10px] font-bold tracking-tighter">5G+</span>
              {/* Battery */}
              <div className="relative w-5 h-2.5 rounded-[4px] border border-black p-[1px] flex items-center">
                <div className="h-full w-[80%] bg-black rounded-[2px]" />
                <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1 bg-black rounded-r-full" />
              </div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 flex flex-col justify-between px-5 pt-3 pb-2 overflow-hidden">
            {/* Header: "I AM READING" + Action Icons */}
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block text-lg font-light leading-none text-black">|</span>
                <h2 className="text-[20px] font-bold leading-[1.05] tracking-tight text-[#111b14] mt-0.5">
                  AM<br />READING
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  aria-label="History"
                  className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-black stroke-[2.2]" />
                </button>
                <button
                  type="button"
                  aria-label="Add article"
                  className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4 text-black stroke-[2.2]" />
                </button>
              </div>
            </div>

            {/* Central Book Card with Peeking Edges */}
            <div className="relative my-auto py-2">
              {/* Left peeking card */}
              <div className="absolute -left-10 top-2 bottom-2 w-12 bg-[#efe8dc] rounded-2xl opacity-60 border border-black/5" />
              {/* Right peeking card */}
              <div className="absolute -right-10 top-2 bottom-2 w-12 bg-[#efe8dc] rounded-2xl opacity-60 border border-black/5" />

              {/* Main Active Card */}
              <div className="relative w-full aspect-[1/1.22] rounded-2xl bg-[#e6d3cd] p-5 flex flex-col justify-between shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-black/5 transition-transform hover:scale-[1.01]">
                <div>
                  <span className="block text-[8px] font-semibold tracking-[0.18em] uppercase text-black/60">
                    Innovation, Technology & AI
                  </span>
                  <h3 className="mt-8 text-[21px] font-serif font-bold text-[#111b14] leading-[1.18] tracking-tight">
                    AI-Driven Media<br />Revolution
                  </h3>
                </div>
                <span className="text-[10px] font-medium text-black/70">
                  Noah Zender
                </span>
              </div>
            </div>

            {/* Article Details Below Card */}
            <div className="text-center space-y-0.5 my-1">
              <h4 className="text-[13px] font-semibold text-[#111b14] tracking-tight">
                AI-Driven Media Revolution
              </h4>
              <p className="text-[11px] text-black/60">
                Noah Zender
              </p>
              <p className="text-[9.5px] text-black/40">
                More on Innovation, Technology & AI
              </p>
            </div>

            {/* Floating Bottom Dock */}
            <div className="relative mt-2 mb-1 w-full rounded-full bg-[#3c3a38]/85 backdrop-blur-xl px-2.5 py-1.5 flex items-center justify-between text-white shadow-md border border-white/10">
              {/* Home (Active) */}
              <div className="flex items-center gap-1.5 bg-[#d4be72] text-[#111b14] px-2.5 py-1 rounded-full font-semibold text-[10px]">
                <BookOpen className="w-3 h-3 fill-current stroke-[1.5]" />
                <span>Home</span>
              </div>

              {/* Collection */}
              <div className="flex flex-col items-center gap-0.5 text-white/70 hover:text-white px-2 py-0.5 transition-colors cursor-pointer">
                <Bookmark className="w-3.5 h-3.5" />
                <span className="text-[8px] font-medium">Collection</span>
              </div>

              {/* Notes */}
              <div className="flex flex-col items-center gap-0.5 text-white/70 hover:text-white px-2 py-0.5 transition-colors cursor-pointer">
                <MessageSquareQuote className="w-3.5 h-3.5" />
                <span className="text-[8px] font-medium">Notes</span>
              </div>

              {/* Profile */}
              <div className="flex flex-col items-center gap-0.5 text-white/70 hover:text-white px-2 py-0.5 transition-colors cursor-pointer">
                <User className="w-3.5 h-3.5" />
                <span className="text-[8px] font-medium">Profile</span>
              </div>
            </div>
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="w-full flex justify-center pb-1.5 pt-0.5">
            <div className="h-[3.5px] w-28 rounded-full bg-black/60" />
          </div>
        </div>
      </div>
    </div>
  );
}
