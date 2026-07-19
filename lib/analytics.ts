/* Google Analytics 4 helpers. The Measurement ID is public (it ships in the
   client bundle); NEXT_PUBLIC_GA_ID overrides the default below if needed.
   Analytics stays consent-gated (denied until accepted, see ConsentBanner). */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-TEYNSQDJTX";

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
