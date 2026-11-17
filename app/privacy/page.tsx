import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { privacySections, privacyUpdated } from "@/lib/info-content";

export const metadata: Metadata = { title: "Privacy Policy", description: "a clear look at what Read keeps, why it needs it, and the choices that stay yours.", alternates: { canonical: "/privacy" } };

export default function Page() {
  return (
    <InfoPage path="/privacy" eyebrow={privacyUpdated} title="your reading, your privacy."
      intro="a clear look at what Read keeps, why it needs it, and the choices that stay yours." sections={privacySections} />
  );
}
