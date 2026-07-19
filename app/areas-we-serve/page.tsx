import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, Truck, Wrench } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";
import { heroImages } from "@/lib/data";
import { site } from "@/lib/site";

const PATH = "/areas-we-serve";

export const metadata: Metadata = pageMeta({
  title: "Areas We Serve Across Oman",
  description:
    "Speed limiter installation and certification, IVMS and fleet management delivered on-site across Oman — Muscat, Sohar, Salalah, Duqm, Nizwa, Al Buraimi and everywhere between.",
  path: PATH,
});

/* Honest coverage descriptions — consistent with the site's stated nationwide,
   on-site service. These describe each region's fleet context, not specific
   clients or projects. */
const regions = [
  {
    name: "Muscat & Muscat Governorate",
    blurb:
      "Our home base and Oman's largest fleet hub — distribution, passenger, government and corporate fleets across the capital, Seeb, Bawshar and Al Amerat.",
  },
  {
    name: "Sohar & Al Batinah",
    blurb:
      "Oman's industrial and port heartland. Heavy logistics, construction and manufacturing fleets where uptime is everything — ideal for on-site batch rollouts.",
  },
  {
    name: "Salalah & Dhofar",
    blurb:
      "Port, logistics and passenger transport in the south, with heavy seasonal traffic during Khareef. We schedule installation around your peak.",
  },
  {
    name: "Duqm & Al Wusta",
    blurb:
      "The Special Economic Zone driving new construction and project-logistics fleets. Compliance and monitoring set up right from mobilisation.",
  },
  {
    name: "Nizwa & Ad Dakhiliyah",
    blurb:
      "Interior transport, quarrying and construction fleets. On-site limiting, certification and tracking without the drive to the coast.",
  },
  {
    name: "Al Buraimi, Ibri & Ad Dhahirah",
    blurb:
      "Border-trade, mining and long-haul logistics fleets across the north-west, kept compliant and visible end to end.",
  },
];

const onSite = [
  {
    icon: MapPin,
    title: "We come to you",
    blurb: "For fleets of any size we install at your yard or depot, anywhere in the Sultanate.",
  },
  {
    icon: Truck,
    title: "Batched around your routes",
    blurb: "Rollouts scheduled by route and rest day, so vehicles keep working while we fit them.",
  },
  {
    icon: Wrench,
    title: "Calibrated & certified on the spot",
    blurb: "Each vehicle leaves compliant — installed, calibrated, road-verified and documented.",
  },
  {
    icon: Building2,
    title: "Supported from Muscat",
    blurb: "One team, one platform and one number for support, wherever your vehicles run.",
  },
];

const services = [
  {
    title: "Speed limiter installation & certification",
    href: "/services/speed-limiter",
    guide: { label: "Oman regulations guide", href: "/services/speed-limiter/oman-regulations" },
  },
  {
    title: "IVMS to PDO & OPAL specifications",
    href: "/services/ivms",
    guide: { label: "PDO & OPAL requirements guide", href: "/services/ivms/pdo-opal-requirements" },
  },
  {
    title: "Fleet management & GPS tracking",
    href: "/services/fleet-management",
  },
];

export default function AreasWeServePage() {
  return (
    <>
      <PageHeader
        image={heroImages.industries}
        tone="teal"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve", href: PATH },
        ]}
        title="Fleet compliance and technology across Oman"
        lede="We are based in Muscat and install on-site anywhere in the Sultanate — from the Batinah coast to Dhofar and the interior. Wherever your vehicles run, we bring the workshop to them."
      />

      {/* Regions */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Nationwide coverage"
            title="Serving fleets in every governorate"
            lede="Speed limiters, IVMS and fleet tracking, delivered where your vehicles are based — not only in the capital."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.06} amount={0.2} className="h-full">
                <div className="h-full rounded-3xl border border-line bg-white p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent-600/25 hover:shadow-soft">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-700">
                    <MapPin className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-semibold tracking-tight text-ink">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-steel">{r.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How on-site service works */}
      <section className="bg-mist py-24 md:py-32">
        <Container>
          <SectionHeading
            title="How on-site service works across Oman"
            lede="Distance is a scheduling detail, not a barrier. Here is how a rollout runs whether you are in Muscat or Duqm."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {onSite.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.06} amount={0.25} className="h-full">
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-line">
                  <s.icon className="size-6 text-accent-600" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-[15px] font-semibold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-steel">{s.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services available everywhere */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            title="Every service, everywhere we operate"
            lede="The full range is available across Oman — with the same standards and the same team behind it."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <Reveal key={s.title} amount={0.2} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                  <h3 className="font-display text-[16px] font-semibold leading-snug tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <div className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                    <Link
                      href={s.href}
                      className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent-700 underline-offset-4 hover:underline"
                    >
                      View service
                      <ArrowUpRight
                        className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </Link>
                    {s.guide && (
                      <Link
                        href={s.guide.href}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-steel underline-offset-4 hover:text-accent-700 hover:underline"
                      >
                        {s.guide.label}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Tell us where your fleet is based"
        lede={`Wherever you operate in Oman, we will come to you. Call ${site.phone}, send your vehicle list and we will plan the visit around your routes.`}
      />

      <JsonLd data={localBusinessSchema} />
    </>
  );
}
