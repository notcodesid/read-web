import posthog from "posthog-js";

/**
 * Anonymous website analytics, in the same PostHog project as the app, so
 * visits, TestFlight clicks and app usage can be read side by side.
 *
 * - No cookies and nothing in local storage (`persistence: "memory"`): a
 *   visitor is counted for one visit and forgotten on reload, so the site
 *   needs no cookie banner and the privacy policy stays true.
 * - No person profiles and no session recording.
 * - Page views (including navigation inside the site), time on page,
 *   clicks (for heatmaps), Core Web Vitals, and a few named events:
 *   `testflight_clicked`, `section_viewed`, `faq_opened`.
 *
 * Without a key (local development) nothing is sent.
 */
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  try {
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      defaults: "latest",
      persistence: "memory",
      person_profiles: "never",
      capture_pageview: "history_change",
      capture_pageleave: true,
      autocapture: true,
      enable_heatmaps: true,
      capture_performance: { web_vitals: true, network_timing: false },
      disable_session_recording: true,
      disable_surveys: true,
      respect_dnt: true,
    });
    posthog.register({ surface: "website" });

    // Every link to the TestFlight invite, wherever it sits on the page.
    document.addEventListener(
      "click",
      (event) => {
        const link = (event.target as Element | null)?.closest?.('a[href*="testflight.apple.com"]');
        if (!link) return;
        const section = link.closest("section");
        const where = link.closest("header") ? "header"
          : link.closest("footer") ? "footer"
          : section?.id || (section ? "hero" : "page");
        posthog.capture("testflight_clicked", { location: where, path: window.location.pathname });
      },
      { capture: true },
    );
  } catch {
    // Analytics must never break the page.
  }
}
