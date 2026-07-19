import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { PhonePreview } from "@/components/mockups/PhonePreview";
import { PlatformTabs } from "./PlatformTabs";
import { stats } from "@/lib/data";

const checks = [
  "Positions refresh every few seconds",
  "Alerts by app, email and WhatsApp",
  "Scheduled reports to your inbox",
  "Works on desktop, tablet and mobile",
];

export function PlatformShowcase() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-accent-600/12 blur-[140px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          dark
          eyebrow="The platform"
          title="One dashboard for every vehicle you run"
          lede="The same live view your operations team, HSE lead and finance manager can all trust, without exporting a single spreadsheet."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal amount={0.15}>
            <PlatformTabs />
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.1} className="hidden justify-center lg:flex">
              <PhonePreview className="rotate-2 animate-float" />
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="space-y-3.5">
                {checks.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[14.5px] text-white/75">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-400/12 text-accent-300">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Figures are representative; confirm final numbers with GAWHRAT */}
        <Reveal>
          <dl className="mt-20 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-12 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <dd className="font-mono text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-[13px] font-medium uppercase tracking-[0.14em] text-white/45">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
