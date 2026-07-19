import type { Metadata } from "next";
import Image from "next/image";
import { Check, FileSpreadsheet, Plug, Send } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { DashboardPreview } from "@/components/mockups/DashboardPreview";
import { PhonePreview } from "@/components/mockups/PhonePreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { capabilities, faqs, heroImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fleet Management Software & GPS Tracking in Oman",
  description:
    "Cloud fleet management platform for Oman: live GPS tracking, trips, fuel monitoring, maintenance, geofencing, driver management and scheduled reports on desktop and mobile.",
};

const modules = capabilities.slice(4);
const platformFaqs = faqs.filter((f) => f.category === "Platform");

const exports_ = [
  {
    icon: FileSpreadsheet,
    title: "Exports that finance accepts",
    blurb: "Every report downloads to Excel or CSV with clean columns, ready for month-end.",
  },
  {
    icon: Send,
    title: "Alerts where you already are",
    blurb: "Geofence, speed and maintenance alerts by app, email or WhatsApp.",
  },
  {
    icon: Plug,
    title: "Integration on request",
    blurb: "Data access for ERP and operations systems when your workflow needs it.",
  },
];

export default function FleetManagementPage() {
  return (
    <>
      <PageHeader
        image={heroImages.fleetManagement}
        tone="cyan"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Fleet Management", href: "/services/fleet-management" },
        ]}
        title="The platform your whole fleet runs on"
        lede="Live tracking, trips, fuel, maintenance, geofencing and reporting in one clean cloud dashboard. Built for dispatchers, HSE leads and owners alike."
      >
        <Reveal delay={0.15} amount={0.1}>
          <div className="bezel-dark mt-14 shadow-deep">
            <DashboardPreview />
          </div>
        </Reveal>
      </PageHeader>

      {/* Modules */}
      <section id="modules" className="bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            title="Eight modules, zero spreadsheets"
            lede="Each module answers a question you currently answer by phone, memory or Excel."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m, i) => (
              <Reveal key={m.title} delay={(i % 4) * 0.05} amount={0.25} className="h-full">
                <div className="group h-full rounded-3xl bg-mist p-7 ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                  <div className="relative size-16 overflow-hidden rounded-2xl ring-1 ring-line transition-transform duration-500 group-hover:scale-105">
                    <Image src={m.image} alt="" fill sizes="64px" className="object-cover" />
                  </div>
                  <h3 className="mt-5 font-display text-[16px] font-semibold tracking-tight text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-steel">{m.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mobile */}
      <section className="overflow-hidden bg-mist py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <SectionHeading
                title="The yard, the road and the office see the same truth"
                lede="No installs, no version chaos. The platform runs in any modern browser and adapts to whatever screen your team is holding."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "Owners check the fleet from a phone in seconds",
                  "Dispatchers work the live map on a big screen",
                  "Supervisors verify trips from the yard",
                  "Finance pulls reports without asking anyone",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-ink/85">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-600/10 text-accent-700">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.12} amount={0.15} className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-10 rounded-full bg-accent-400/12 blur-[80px]"
                  aria-hidden="true"
                />
                <PhonePreview className="relative rotate-2" />
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-5 md:grid-cols-3">
            {exports_.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.07} amount={0.3} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-line">
                  <e.icon className="size-6 text-accent-600" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-[16px] font-semibold tracking-tight text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-steel">{e.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <SectionHeading
              title="Platform questions"
              lede="Access, data ownership, support and what happens after go-live."
            />
            <Reveal amount={0.15}>
              <Accordion items={platformFaqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="See the platform with your fleet on it"
        lede="Book a demo and we will load your routes and vehicle types, so you judge it on your reality, not ours."
      />

      <JsonLd
        data={serviceSchema(
          "Fleet Management Software & GPS Tracking",
          metadata.description as string,
          "/services/fleet-management"
        )}
      />
      <JsonLd data={faqSchema(platformFaqs)} />
    </>
  );
}
