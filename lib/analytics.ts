/* Google Analytics 4 helpers. Analytics only loads when NEXT_PUBLIC_GA_ID is
   set at build time (see .env.example); every helper no-ops otherwise, so the
   site works with or without measurement configured. */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type GaParams = Record<string, unknown>;

type GtagWindow = Window & {
  gtag?: (command: string, ...args: unknown[]) => void;
};

/** Fire a GA4 event if analytics is loaded; safe to call anywhere. */
export function gaEvent(name: string, params: GaParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  w.gtag?.("event", name, params);
}
