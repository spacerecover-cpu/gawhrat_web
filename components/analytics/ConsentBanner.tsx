"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* Google Consent Mode v2 banner. Analytics starts denied (set in <Analytics>),
   so no analytics cookies are stored until the visitor accepts — the compliant
   default for Oman's PDPL and GDPR. Decline is given equal prominence (no dark
   pattern) and the choice is remembered. */

const STORAGE_KEY = "ga-consent";

function updateConsent(granted: boolean) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}

export function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage unavailable (private mode) — fall through to showing it */
    }
    if (stored === "granted") updateConsent(true);
    else if (stored === "denied") updateConsent(false);
    else setShow(true);
  }, []);

  const choose = (granted: boolean) => {
    updateConsent(granted);
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/95 px-5 py-4 shadow-[0_-12px_40px_-24px_rgba(8,22,48,0.3)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1040px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-steel">
          We use analytics cookies to understand how the site is used and improve it. Read our{" "}
          <Link
            href="/privacy"
            className="font-medium text-accent-700 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-2.5">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors duration-300 hover:border-ink/35"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-full bg-navy-900 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-navy-800"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
