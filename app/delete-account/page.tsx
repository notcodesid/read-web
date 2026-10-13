import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { deletionSections, updated } from "@/lib/info-content";

export const metadata: Metadata = { title: "Delete Your Account — Read", description: "if it’s time to leave, here’s how to remove your account and keep anything you want to take with you." };

export default function Page() {
  return (
    <InfoPage path="/delete-account" eyebrow={updated} title="your account. your choice."
      intro="if it’s time to leave, here’s how to remove your account and keep anything you want to take with you." sections={deletionSections} />
  );
}
