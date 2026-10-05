"use client";

import React, { useState } from "react";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  const plans = [
    {
      name: "Free",
      tag: "GET STARTED",
      price: "$0",
      period: "forever",
      subprice: "Free during beta · 1 device",
      description: "Full reader, unlimited highlights & notes, daily pick and streaks. 50-piece shelf, one device.",
      features: [
        "Full paper-like reader",
        "Unlimited highlights & notes",
        "Daily pick & reading streaks",
        "50-piece shelf capacity",
        "One active device",
      ],
      cta: "Get early access",
      href: "#early-access",
      popular: false,
    },
    {
      name: "Pro",
      tag: "14-DAY FREE TRIAL",
      price: billingCycle === "annual" ? "$54.99" : "$6.99",
      period: billingCycle === "annual" ? "/ year" : "/ month",
      subprice:
        billingCycle === "annual"
          ? "$4.58/mo · 14-day free trial included"
          : "$6.99 billed monthly · 14-day free trial",
      description: "Unlimited shelf, sync across devices, Focus Lock, and deep retention tools.",
      features: [
        "Unlimited shelf capacity",
        "Sync across devices (iPhone & iPad)",
        "Unlimited web & newsletter imports",
        "Telegram bot integration",
        "Apple Screen Time Focus Lock",
        "Spaced-repetition review",
        "Reading stats & telemetry",
        "Notion & Obsidian export",
      ],
      cta: "Get early access",
      href: "#early-access",
      popular: true,
    },
    {
      name: "Founding member",
      tag: "ONLY 500 SPOTS",
      price: "$79",
      period: "once",
      subprice: "Yours forever · Only 500 spots available",
      description: "$79 once, yours forever. Support quiet software and lock in lifetime access.",
      features: [
        "Everything in Pro, forever",
        "One-time payment of $79",
        "All future updates & releases",
        "Reserved Founding Member badge",
        "Direct founder feedback line",
      ],
      cta: "Claim a founding spot",
      href: "#early-access",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative w-full bg-[#f5f4ef] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 border-t border-black/[0.06]">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-black/[0.08]"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#71717a] uppercase">
              <span>[03]</span>
              <span>/ PRICING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#111b14] leading-[1.12]">
              Pricing — Free to start. Pro when you’re serious.
            </h2>
          </div>

          {/* Billing Switcher for Pro */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#71717a] uppercase tracking-wider hidden sm:inline">
              PRO BILLING:
            </span>
            <div className="relative flex items-center p-1 bg-[#e4e1d7] rounded-full">
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  billingCycle === "annual" ? "text-white" : "text-[#52525b] hover:text-[#111b14]"
                }`}
              >
                {billingCycle === "annual" && (
                  <motion.div
                    layoutId="active-billing"
                    className="absolute inset-0 bg-[#18181b] rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                Annual ($54.99/yr)
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  billingCycle === "monthly" ? "text-white" : "text-[#52525b] hover:text-[#111b14]"
                }`}
              >
                {billingCycle === "monthly" && (
                  <motion.div
                    layoutId="active-billing"
                    className="absolute inset-0 bg-[#18181b] rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                Monthly ($6.99/mo)
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-[#18181b] text-[#f5f4ef] shadow-xl md:-translate-y-2 border border-white/10"
                  : "bg-[#edeae1] text-[#111b14] border border-black/[0.04] hover:bg-[#e6e2d6]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-[#18181b] text-[10px] font-bold tracking-widest uppercase rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>RECOMMENDED</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span
                    className={`text-[10px] font-semibold tracking-widest uppercase ${
                      plan.popular ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    {plan.tag}
                  </span>
                  <h3 className="text-2xl font-normal mt-1 tracking-tight">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      plan.popular ? "text-zinc-400" : "text-[#52525b]"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className={`py-4 border-y ${plan.popular ? "border-white/10" : "border-black/[0.06]"}`}>
                  <div className="flex items-baseline gap-1.5">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={plan.price}
                        initial={{ y: 6, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -6, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl sm:text-5xl font-light tracking-tight"
                      >
                        {plan.price}
                      </motion.span>
                    </AnimatePresence>
                    <span
                      className={`text-xs font-mono ${
                        plan.popular ? "text-zinc-400" : "text-[#71717a]"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  {plan.subprice && (
                    <p
                      className={`text-[11px] mt-1.5 ${
                        plan.popular ? "text-zinc-300" : "text-[#52525b]"
                      }`}
                    >
                      {plan.subprice}
                    </p>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-[13.5px]">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? "text-white" : "text-[#18181b]"
                        }`}
                      />
                      <span className={plan.popular ? "text-zinc-200" : "text-[#27272a]"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={plan.href}
                    className={`group w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-medium transition-all shadow-sm ${
                      plan.popular
                        ? "bg-[#f5f4ef] hover:bg-white text-[#18181b]"
                        : "bg-[#18181b] hover:bg-black text-[#f5f4ef]"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
