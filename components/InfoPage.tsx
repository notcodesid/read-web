import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type InfoSection = { id: string; title: string; content: ReactNode };
const pages = [
  { href: "/support", label: "support" },
  { href: "/privacy", label: "privacy" },
  { href: "/terms", label: "terms" },
  { href: "/delete-account", label: "delete account" },
];

export default function InfoPage({ path, eyebrow, title, intro, sections, children }: {
  path: string; eyebrow: string; title: string; intro: string;
  sections: InfoSection[]; children?: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="info-page px-6 sm:px-10 lg:px-14 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-[1120px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-950 mb-10">← back to read</Link>
          <div className="max-w-[760px] mb-12 sm:mb-16">
            <p className="text-xs font-mono tracking-widest text-zinc-600 mb-5">{eyebrow}</p>
            <h1 className="text-[42px] sm:text-[64px] font-normal tracking-[-0.045em] leading-[1.05] text-[#111b14]">{title}</h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-600 max-w-[660px]">{intro}</p>
          </div>
          {children}
          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-20 border-t border-black/10 pt-8 sm:pt-12">
            <aside>
              <div className="lg:sticky lg:top-28 space-y-8">
                <nav aria-label="help and legal pages" className="flex flex-wrap lg:flex-col gap-2">
                  {pages.map(page => <Link key={page.href} href={page.href} aria-current={page.href === path ? "page" : undefined}
                    className={`rounded-full lg:rounded-xl px-4 py-3 text-sm transition-colors ${page.href === path ? "bg-[#18181b] text-white" : "text-zinc-600 hover:bg-black/5"}`}>{page.label}</Link>)}
                </nav>
                <nav aria-label="on this page" className="hidden lg:block text-sm">
                  <p className="font-mono text-xs text-zinc-500 mb-3">on this page</p>
                  <ul className="space-y-3">{sections.map(section => <li key={section.id}><a className="text-zinc-600 hover:text-zinc-950" href={`#${section.id}`}>{section.title}</a></li>)}</ul>
                </nav>
              </div>
            </aside>
            <div className="min-w-0 max-w-[720px] divide-y divide-black/10">
              {sections.map(section => <section id={section.id} key={section.id} className="scroll-mt-28 first:pt-0 py-8 sm:py-10">
                <h2 className="text-2xl sm:text-[28px] font-normal tracking-tight mb-5">{section.title}</h2>
                <div className="info-copy text-base leading-[1.8] text-zinc-600 space-y-4">{section.content}</div>
              </section>)}
              <div className="pt-8 text-sm text-zinc-600">still have a question? <a href="mailto:notcodesid@gmail.com">write to us →</a></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
