import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-30 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 active:scale-95 lg:flex"
    >
      <MessageCircle className="size-6" strokeWidth={1.75} />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-navy-950 px-4 py-2 text-[13px] font-medium text-white opacity-0 shadow-soft transition-all duration-300 group-hover:opacity-100">
        WhatsApp us
      </span>
    </a>
  );
}
