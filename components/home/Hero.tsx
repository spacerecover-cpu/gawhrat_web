import Image from "next/image";
import { BadgeCheck, CircleGauge, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardPreview } from "@/components/mockups/DashboardPreview";
import { images } from "@/lib/data";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Photography backdrop with navy scrim */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/88 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 pb-20 pt-32 md:px-8 md:pt-36 lg:min-h-[100dvh] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24">
        {/* Copy */}
        <Reveal amount={0.1}>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-[4.4rem]">
            Smart fleets.
            <br />
            <span className="bg-gradient-to-r from-accent-300 to-glow bg-clip-text text-transparent">
              Safer roads.
            </span>
          </h1>
          <p className="mt-7 max-w-[46ch] text-base leading-relaxed text-white/70 md:text-lg">
            Speed limiter installation, IVMS and fleet management for Oman's commercial
            fleets. One team, from wiring to certificate.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="inverse">
              Request a Quote
            </Button>
            <Button href={site.whatsapp} external variant="ghost-dark" icon={MessageCircle}>
              WhatsApp Us
            </Button>
          </div>
        </Reveal>

        {/* Product preview */}
        <Reveal delay={0.15} amount={0.1} className="relative lg:pl-4">
          <div className="bezel-dark relative shadow-deep">
            <DashboardPreview />
          </div>

          {/* Floating status chips */}
          <div className="glass-dark absolute -left-4 -top-5 hidden animate-float items-center gap-2.5 rounded-2xl px-4 py-3 md:flex lg:-left-8">
            <span className="flex size-8 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
              <BadgeCheck className="size-4" strokeWidth={1.75} />
            </span>
            <span className="text-[12px] leading-tight">
              <span className="block font-semibold">Certificate issued</span>
              <span className="text-white/55">GJT-26-04871, same day</span>
            </span>
          </div>
          <div className="glass-dark absolute -bottom-6 right-2 hidden animate-float-late items-center gap-2.5 rounded-2xl px-4 py-3 md:flex lg:-right-4">
            <span className="flex size-8 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
              <CircleGauge className="size-4" strokeWidth={1.75} />
            </span>
            <span className="text-[12px] leading-tight">
              <span className="block font-semibold">Limiter calibrated</span>
              <span className="text-white/55">Heavy truck, 100 km/h</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
