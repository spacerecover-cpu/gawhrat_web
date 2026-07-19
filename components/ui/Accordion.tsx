"use client";

import { useState, useId } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  dark,
}: {
  items: { q: string; a: string }[];
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border",
        dark ? "border-white/10 bg-white/5" : "border-line bg-white shadow-soft"
      )}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.q} className={cn(i > 0 && (dark ? "border-t border-white/10" : "border-t border-line"))}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className={cn(
                "flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-300 md:px-8",
                dark ? "hover:bg-white/5" : "hover:bg-mist/60"
              )}
            >
              <span
                className={cn(
                  "font-display text-[15px] font-medium tracking-tight md:text-[17px]",
                  dark ? "text-white" : "text-ink"
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  isOpen && "rotate-45",
                  dark ? "border-white/20 text-accent-300" : "border-line text-accent-600"
                )}
              >
                <Plus className="size-4" strokeWidth={1.75} />
              </span>
            </button>
            <div
              id={panelId}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "px-6 pb-6 text-[15px] leading-relaxed md:px-8",
                    dark ? "text-white/65" : "text-steel"
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
