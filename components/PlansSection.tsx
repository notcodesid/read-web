import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

/** Read is free: everything it does, with nothing to buy. */
export default function PlansSection() {
  return (
    <section id="plans" className="w-full px-6 sm:px-10 lg:px-14 py-16 sm:py-24 bg-[#edeae1]">
      <div className="max-w-[1300px] mx-auto">
        <p className="font-mono text-xs tracking-widest text-zinc-600 mb-4">/ no paywall, no ads</p>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-20">
          <div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.035em] leading-[1.1]">start with a good read.<br />all of it is free.</h2>
            <p className="text-zinc-600 mt-6 max-w-md leading-relaxed">Everything Read does is included. No subscription, no in-app purchases, and no ads between you and the words you love.</p>
            <Link href="/support#subscriptions" className="inline-flex items-center gap-2 text-sm mt-6 underline underline-offset-4">subscribed to Read Pro before? <ArrowUpRight size={15} /></Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "reading", detail: "a quiet place to begin", items: ["save articles, posts, and threads to your shelf", "fonts, themes, and pages that suit you", "highlight passages and keep notes"] },
              { name: "keeping", detail: "included too", items: ["Lock In with app pausing", "your library backed up across devices", "contents, search, bookmarks, and Markdown exports"] },
            ].map((plan, index) => <div key={plan.name} className={`rounded-3xl p-7 sm:p-8 ${index ? "bg-[#18181b] text-[#f5f4ef]" : "bg-[#f5f4ef]"}`}>
              <p className={`text-xs font-mono mb-5 ${index ? "text-zinc-400" : "text-zinc-600"}`}>{plan.detail}</p>
              <h3 className="text-3xl tracking-tight mb-6">{plan.name}</h3>
              <ul className="space-y-4 text-sm leading-relaxed">{plan.items.map(item => <li key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-0.5" aria-hidden="true" />{item}</li>)}</ul>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
