"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Focus", href: "#focus" },
    { label: "Shelf", href: "#shelf" },
    { label: "FAQ", href: "#faq" },
    { label: "TestFlight", href: "https://testflight.apple.com/join/cmbsq8e5", external: true },
    { label: "Contact", href: "mailto:notcodesid@gmail.com" },
  ];

  return (
    <footer className="w-full bg-[#18181b] text-[#f5f4ef] py-14 sm:py-16 px-6 sm:px-10 lg:px-14 border-t border-white/10">
      <div className="max-w-[1300px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-2">
            <Link
              href="/"
              className="text-white text-2xl tracking-tight font-normal select-none"
            >
              Read
            </Link>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-normal">
              Every essay you saved, finally read.
            </p>
          </div>

          {/* Nav & Social Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-300">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© 2026 Read. All rights reserved.</p>
          <p>IPHONE & IPAD · TESTFLIGHT BETA</p>
        </div>
      </div>
    </footer>
  );
}
