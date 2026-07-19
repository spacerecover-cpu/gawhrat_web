"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";
import { ChevronDown, Phone, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { pillars } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  /* Close overlays on route change */
  useEffect(() => {
    setDrawerOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [drawerOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
        scrolled || drawerOpen
          ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="GAWHRAT JARNAN TRAD, home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={item.href}
                  aria-expanded={megaOpen}
                  onFocus={() => setMegaOpen(true)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-300",
                    isActive(item.href) ? "text-white" : "text-white/65 hover:text-white"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-300",
                      megaOpen && "rotate-180"
                    )}
                    strokeWidth={2}
                  />
                </Link>

                {/* Mega menu */}
                <div
                  className={cn(
                    "absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    megaOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  )}
                >
                  <div className="glass-dark overflow-hidden rounded-3xl p-2">
                    <div className="grid grid-cols-3 gap-2">
                      {pillars.map((p) => (
                        <Link
                          key={p.slug}
                          href={p.href}
                          onClick={() => setMegaOpen(false)}
                          className="group rounded-2xl p-5 transition-colors duration-300 hover:bg-white/8"
                        >
                          <span className="flex size-10 items-center justify-center rounded-xl bg-accent-400/12 text-accent-300">
                            <p.icon className="size-5" strokeWidth={1.5} />
                          </span>
                          <span className="mt-4 block font-display text-[15px] font-semibold text-white">
                            {p.title}
                          </span>
                          <span className="mt-1.5 block text-[12.5px] leading-relaxed text-white/55">
                            {p.short}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setMegaOpen(false)}
                      className="mt-2 flex items-center justify-between rounded-2xl bg-white/5 px-5 py-3.5 text-[13px] font-medium text-white/75 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                    >
                      View all 12 services
                      <ArrowUpRight className="size-4 text-accent-300" strokeWidth={1.75} />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-300",
                  isActive(item.href) ? "text-white" : "text-white/65 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden items-center gap-2 text-[13.5px] font-medium text-white/70 transition-colors hover:text-white xl:flex"
          >
            <Phone className="size-4 text-accent-300" strokeWidth={1.5} />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="hidden rounded-full bg-white py-2.5 pl-5 pr-2 text-[13.5px] font-semibold text-navy-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-300 active:scale-[0.97] lg:flex lg:items-center lg:gap-2"
          >
            Request a Quote
            <span className="flex size-7 items-center justify-center rounded-full bg-navy-950/8">
              <ArrowUpRight className="size-3.5" strokeWidth={2} />
            </span>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="relative flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md lg:hidden"
          >
            <span
              className={cn(
                "absolute h-[1.5px] w-[18px] bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                drawerOpen ? "rotate-45" : "-translate-y-[3.5px]"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.5px] w-[18px] bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                drawerOpen ? "-rotate-45" : "translate-y-[3.5px]"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-30 overflow-y-auto bg-navy-950/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden",
          drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-6 pb-10 pt-6">
          {nav.map((item, i) => (
            <div
              key={item.label}
              style={{ transitionDelay: drawerOpen ? `${80 + i * 45}ms` : "0ms" }}
              className={cn(
                "border-b border-white/8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                drawerOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              <Link
                href={item.href}
                className="flex items-center justify-between py-4 font-display text-xl font-medium text-white"
              >
                {item.label}
                <ArrowUpRight className="size-5 text-accent-300" strokeWidth={1.5} />
              </Link>
              {"children" in item && (
                <div className="flex flex-col gap-1 pb-4">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="rounded-xl px-3 py-2 text-[15px] text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div
            style={{ transitionDelay: drawerOpen ? "420ms" : "0ms" }}
            className={cn(
              "mt-8 flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              drawerOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[15px] font-semibold text-navy-950"
            >
              Request a Quote
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-[15px] font-medium text-white"
            >
              <Phone className="size-4 text-accent-300" strokeWidth={1.5} />
              {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
