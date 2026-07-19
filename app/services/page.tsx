import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { GaugeVisual } from "@/components/mockups/GaugeVisual";
import { capabilities, heroImages, pillars } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Speed limiter installation, calibration and certification, IVMS aligned with PDO and OPAL specifications, GPS tracking and cloud fleet management for commercial fleets in Oman.",
  path: "/services",
});

export default function ServicesPage() {
  const [speedLimiter, ivms, fleet] = pillars;

  return (
    <>
      <PageHeader
        image={heroImages.services}
        tone="cyan"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        title="Hardware, certification and software, delivered as one service"
        lede="Three core services carry everything we do. Behind them sit twelve capabilities your fleet can switch on as it grows."
      />

      {/* Featured: speed limiters */}
      <section className="bg-white pb-6 pt-24 md:pt-32">
        <Container>
          <Reveal amount={0.15}>
            <Link
              href={speedLimiter.href}
              className="group relative block overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-lift transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 md:p-14"
            >
              <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent-400/12 text-accent-300">
                    <speedLimiter.icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    {speedLimiter.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
                    {speedLimiter.description}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {speedLimiter.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[13.5px] text-white/80">
                        <Check className="size-4 shrink-0 text-accent-300" strokeWidth={2.5} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent-300">
                    Explore speed limiters
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </div>
                <GaugeVisual className="mx-auto hidden max-w-[280px] lg:block" />
              </div>
            </Link>
          </Reveal>

          {/* IVMS + Fleet management */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {[ivms, fleet].map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} amount={0.2} className="h-full">
                <Link
                  href={p.href}
                  className="group flex h-full flex-col justify-between rounded-[2rem] bg-mist p-8 ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft md:p-10"
                >
                  <div>
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-navy-950 text-accent-300">
                      <p.icon className="size-6" strokeWidth={1.5} />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-steel">{p.description}</p>
                    <ul className="mt-6 space-y-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 text-[13.5px] text-ink/85">
                          <Check className="size-4 shrink-0 text-accent-600" strokeWidth={2.5} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent-700">
                    Explore {p.title.toLowerCase()}
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Capability grid */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            title="Twelve capabilities, one accountable partner"
            lede="Start with what your contracts demand today and switch on the rest when you need it. Everything runs on the same platform and the same support team."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06} amount={0.25} className="h-full">
                <Link
                  href={c.href}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent-600/25 hover:shadow-soft"
                >
                  <div className="relative size-16 overflow-hidden rounded-2xl ring-1 ring-line transition-transform duration-500 group-hover:scale-105">
                    <Image src={c.image} alt="" fill sizes="64px" className="object-cover" />
                  </div>
                  <h3 className="mt-4 font-display text-[16px] font-semibold tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-steel">{c.blurb}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
