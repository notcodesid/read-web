import posthog from "posthog-js";

/**
 * A named event from page code. PostHog is set up in
 * `instrumentation-client.ts`; until then (or without a key, in local
 * development) this does nothing.
 */
export function track(event: string, properties?: Record<string, string | number | boolean>) {
  try {
    if (!posthog.__loaded) return;
    posthog.capture(event, properties);
  } catch {
    // Analytics must never break the page.
  }
}
