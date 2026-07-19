"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, gaEvent } from "@/lib/analytics";

/* Loads GA4 (only when NEXT_PUBLIC_GA_ID is set) and tracks the conversions
   that matter for this business — every call and WhatsApp click, anywhere on
   the site — via one delegated listener, so no individual link needs editing.
   The form fires its own `generate_lead` event on a successful submission. */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        gaEvent("contact_call", { method: "phone" });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        gaEvent("contact_whatsapp", { method: "whatsapp" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
