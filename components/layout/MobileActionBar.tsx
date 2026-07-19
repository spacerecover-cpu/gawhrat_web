import Link from "next/link";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

/* Always-reachable conversion bar on mobile: Call · WhatsApp · Quote.
   Hidden on desktop, where the header CTAs and the WhatsApp float take over.
   Call/WhatsApp clicks are picked up as GA conversion events by the delegated
   listener in <Analytics>. */
export function MobileActionBar() {
  const item =
    "flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold text-ink transition-colors active:bg-mist";
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a href={`tel:${site.phoneHref}`} className={item}>
        <Phone className="size-5 text-accent-600" strokeWidth={1.75} />
        Call
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} border-x border-line`}
      >
        <MessageCircle className="size-5 text-whatsapp" strokeWidth={1.75} />
        WhatsApp
      </a>
      <Link href="/contact" className={item}>
        <FileText className="size-5 text-accent-600" strokeWidth={1.75} />
        Quote
      </Link>
    </nav>
  );
}
