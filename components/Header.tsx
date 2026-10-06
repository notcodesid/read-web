"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Focus", href: "#focus" },
  { label: "Shelf", href: "#shelf" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto relative w-full max-w-[700px] flex items-center justify-between rounded-full bg-[#18181b]/90 backdrop-blur-md py-2 pl-4 sm:pl-5 pr-2 shadow-lg shadow-black/10 border border-white/10 transition-all">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-white text-[20px] tracking-tight font-normal select-none flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/icon.png"
            alt="Read"
            width={24}
            height={24}
            className="w-6 h-6 rounded-[6px] object-contain select-none shadow-sm"
          />
          <span>read</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-zinc-300 hover:text-white text-[13.5px] font-normal transition-colors duration-200 group"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://testflight.apple.com/join/cmbsq8e5"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 bg-[#f5f4ef] hover:bg-white text-[#111b14] pl-4 pr-1.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-200 shadow-sm"
            >
              <span>Get early access</span>
              <span className="w-7 h-7 rounded-[8px] bg-[#18181b] group-hover:bg-black text-white flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
