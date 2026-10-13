import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { termsSections, updated } from "@/lib/info-content";

export const metadata: Metadata = { title: "Terms of Use — Read", description: "the practical details of using Read, bringing your own articles, and choosing Read Pro." };

export default function Page() {
  return (
    <InfoPage path="/terms" eyebrow={updated} title="a few things to know."
      intro="the practical details of using Read, bringing your own articles, and choosing Read Pro." sections={termsSections} />
  );
}
