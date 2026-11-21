"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/**
 * Records how far down a page people get: `section_viewed` once per
 * section (by its id) per page view, when at least 40% of it is on screen.
 * Renders nothing.
 */
export default function SectionViews() {
  const pathname = usePathname();
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (!entry.isIntersecting || seen.has(id)) continue;
          seen.add(id);
          track("section_viewed", { section: id, path: pathname });
        }
      },
      { threshold: 0.4 },
    );
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
