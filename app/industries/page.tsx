import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Fleet compliance and telematics for logistics, oil and gas, construction, schools, government, transport, delivery and rental fleets across Oman.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ]}
        title="Different fleets, the same discipline"
        lede="Eight sectors, each with its own regulations, contracts and pressure points. This is how our services map to yours."
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            title="Find your fleet below"
            lede="Every engagement starts with your requirements: the vehicles you run, the contracts you hold and the rules that apply to them."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 2) * 0.08} amount={0.15} className="h-full">
                <article
                  id={ind.slug}
                  className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative h-56 overflow-hidden bg-navy-950">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className="object-cover opacity-80 transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                    <span className="absolute bottom-5 left-6 flex size-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
                      <ind.icon className="size-5 text-accent-300" strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {ind.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-steel">{ind.detail}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {ind.needs.map((n) => (
                        <span
                          key={n}
                          className="rounded-full bg-mist px-3.5 py-1.5 text-[12px] font-medium text-ink/75 ring-1 ring-line"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Your sector has rules. We know them."
        lede="Tell us what you operate and which contracts you serve. We will map the exact requirements and quote against them."
      />
    </>
  );
}
