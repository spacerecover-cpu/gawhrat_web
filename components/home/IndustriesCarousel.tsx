"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/data";
import { cn } from "@/lib/utils";

export function IndustriesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-8 flex justify-end gap-2.5">
        {[
          { dir: -1 as const, icon: ArrowLeft, enabled: canPrev, label: "Previous industries" },
          { dir: 1 as const, icon: ArrowRight, enabled: canNext, label: "Next industries" },
        ].map((b) => (
          <button
            key={b.label}
            type="button"
            aria-label={b.label}
            disabled={!b.enabled}
            onClick={() => scrollBy(b.dir)}
            className={cn(
              "flex size-11 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95",
              b.enabled
                ? "border-ink/15 text-ink hover:border-ink/40 hover:bg-mist"
                : "cursor-default border-line text-ink/25"
            )}
          >
            <b.icon className="size-4.5" strokeWidth={1.75} />
          </button>
        ))}
      </div>

      <div
        ref={trackRef}
        className="snap-row -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:-mx-8 md:px-8"
      >
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries#${ind.slug}`}
            className="group relative h-[380px] w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl bg-navy-950 shadow-soft md:w-[300px]"
          >
            <Image
              src={ind.image}
              alt={ind.title}
              fill
              sizes="300px"
              className="object-cover opacity-70 transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-navy-950/15" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/15">
                <ind.icon className="size-5 text-accent-300" strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                {ind.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/65">{ind.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-accent-300 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100">
                Explore
                <ArrowUpRight className="size-3.5" strokeWidth={2} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
