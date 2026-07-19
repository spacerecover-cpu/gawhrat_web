import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Satellite } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GaugeVisual } from "@/components/mockups/GaugeVisual";
import { FleetMap } from "@/components/mockups/FleetMap";
import { capabilities } from "@/lib/data";

const ivmsEvents = ["Overspeed", "Harsh braking", "Seatbelt", "Night driving", "Idling"];

export function ServicesBento() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Everything your fleet needs, under one roof"
            lede="Hardware, installation, certification and software from a single accountable team."
          />
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="group mb-1 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent-700 transition-colors hover:text-ink"
            >
              All services
              <ArrowUpRight
                className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </Reveal>
        </div>

        {/* Bento */}
        <div className="mt-14 grid gap-5 md:grid-cols-12">
          {/* Speed limiters, dark feature card */}
          <Reveal className="md:col-span-7" amount={0.2}>
            <Link
              href="/services/speed-limiter"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-navy-950 p-8 text-white shadow-lift transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 md:p-10"
            >
              <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
              <div
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-glow/12 blur-[90px]"
                aria-hidden="true"
              />
              <div className="relative grid items-center gap-8 sm:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-[1.7rem]">
                    Speed limiter installation & calibration
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-white/65">
                    Fitted by certified technicians, calibrated to your permitted limit and
                    certified for ROP registration and inspection. Single vehicles or full
                    fleet rollouts.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-accent-300">
                    Explore speed limiters
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </div>
                <GaugeVisual className="mx-auto max-w-[230px]" />
              </div>
            </Link>
          </Reveal>

          {/* IVMS */}
          <Reveal className="md:col-span-5" delay={0.08} amount={0.2}>
            <Link
              href="/services/ivms"
              className="group flex h-full flex-col justify-between rounded-3xl bg-mist p-8 ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft"
            >
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-600/10 text-accent-600">
                  <Satellite className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                  IVMS for contract compliance
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-steel">
                  In-vehicle monitoring aligned with PDO and OPAL specifications, with driver
                  scoring and audit-ready reports.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {ivmsEvents.map((e) => (
                  <span
                    key={e}
                    className="rounded-full bg-white px-3 py-1.5 text-[11.5px] font-medium text-steel ring-1 ring-line"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>

          {/* Certification */}
          <Reveal className="md:col-span-5" amount={0.2}>
            <Link
              href="/services/speed-limiter#certification"
              className="group flex h-full flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft"
            >
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-600/10 text-accent-600">
                  <BadgeCheck className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                  Certificates, same day
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-steel">
                  Official speed limiter certificates issued on completion, with expiry
                  tracking and renewal reminders handled for you.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl bg-mist px-4 py-3 ring-1 ring-line">
                <span className="font-mono text-[12px] font-medium text-ink">GJT-26-04871</span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent-700">
                  <BadgeCheck className="size-3.5" strokeWidth={2} />
                  Valid
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Fleet platform, wide */}
          <Reveal className="md:col-span-7" delay={0.08} amount={0.2}>
            <Link
              href="/services/fleet-management"
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white shadow-lift transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 md:p-10"
            >
              <div className="relative z-10 max-w-[30ch]">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  Fleet management platform
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                  Live tracking, trips, fuel, maintenance and geofencing in one clean
                  dashboard, on any device.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-accent-300">
                  See the platform
                  <ArrowUpRight
                    className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </span>
              </div>
              <FleetMap className="pointer-events-none absolute -right-10 bottom-0 hidden h-full w-[58%] opacity-80 sm:block" />
            </Link>
          </Reveal>
        </div>

        {/* Capability grid */}
        <Reveal delay={0.05}>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {capabilities.slice(4).map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent-600/30 hover:bg-mist"
              >
                <span className="relative size-9 shrink-0 overflow-hidden rounded-lg ring-1 ring-line">
                  <Image src={c.image} alt="" fill sizes="36px" className="object-cover" />
                </span>
                <span className="text-[13.5px] font-medium text-ink">{c.title}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
