import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { supportSections, updated } from "@/lib/info-content";

export const metadata: Metadata = { title: "Support", description: "from your first saved essay to a question about your subscription, you’re in the right place.", alternates: { canonical: "/support" } };

export default function Page() {
  return (
    <InfoPage path="/support" eyebrow={updated} title="a little help, whenever you need it."
      intro="from your first saved essay to a question about your subscription, you’re in the right place." sections={supportSections} >
      <div className="grid sm:grid-cols-3 gap-3 mb-12">
        {[
          { href: "mailto:notcodesid@gmail.com", title: "write to us", text: "a real person, here to help →" },
          { href: "#subscriptions", title: "subscription help", text: "restore, cancel, or ask a question →" },
          { href: "/delete-account", title: "your account", text: "a clear guide to leaving Read →" },
        ].map(item => <a key={item.href} href={item.href} className="rounded-2xl bg-[#edeae1] p-6 border border-black/5 hover:bg-[#e6e2d6] transition-colors">
          <h2 className="text-lg mb-2">{item.title}</h2><p className="text-sm text-zinc-600 leading-relaxed">{item.text}</p>
        </a>)}
      </div>
    </InfoPage>
  );
}
