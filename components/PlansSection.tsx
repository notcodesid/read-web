import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function PlansSection() {
  return (
    <section id="plans" className="w-full px-6 sm:px-10 lg:px-14 py-16 sm:py-24 bg-[#edeae1]">
      <div className="max-w-[1300px] mx-auto">
        <p className="font-mono text-xs tracking-widest text-zinc-600 mb-4">/ room for a little more</p>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-20">
          <div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.035em] leading-[1.1]">start with a good read.<br />make it your own.</h2>
            <p className="text-zinc-600 mt-6 max-w-md leading-relaxed">The core reader is free. Read Pro brings a few more ways to make time for the words you love.</p>
            <Link href="/support#subscriptions" className="inline-flex items-center gap-2 text-sm mt-6 underline underline-offset-4">questions about subscriptions <ArrowUpRight size={15} /></Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Read", detail: "a quiet place to begin", items: ["save articles to your shelf", "fonts and display modes that suit you", "highlight passages and keep notes"] },
              { name: "Read Pro", detail: "monthly or annual", items: ["Reading Focus with app blocking", "cloud sync and expanded imports", "reading insights and Markdown exports"] },
            ].map((plan, index) => <div key={plan.name} className={`rounded-3xl p-7 sm:p-8 ${index ? "bg-[#18181b] text-[#f5f4ef]" : "bg-[#f5f4ef]"}`}>
              <p className={`text-xs font-mono mb-5 ${index ? "text-zinc-400" : "text-zinc-600"}`}>{plan.detail}</p>
              <h3 className="text-3xl tracking-tight mb-6">{plan.name}</h3>
              <ul className="space-y-4 text-sm leading-relaxed">{plan.items.map(item => <li key={item} className="flex gap-3"><Check size={17} className="shrink-0 mt-0.5" aria-hidden="true" />{item}</li>)}</ul>
            </div>)}
          </div>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed max-w-3xl mt-8">The app shows your local price and any eligible trial before you subscribe. Pro subscriptions renew automatically until cancelled in your Apple Account settings. TestFlight purchases are for testing and do not charge real money. <Link href="/terms#subscriptions" className="underline underline-offset-4">subscription details →</Link></p>
      </div>
    </section>
  );
}
