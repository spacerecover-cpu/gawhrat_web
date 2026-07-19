import { Headset, Satellite, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "ROP-compliant certification",
    blurb: "Speed limiters fitted, calibrated and certified for registration and inspection.",
  },
  {
    icon: Satellite,
    title: "PDO & OPAL-aligned IVMS",
    blurb: "Monitoring configured to operator specifications, ready for audit.",
  },
  {
    icon: Headset,
    title: "Local support that answers",
    blurb: "Muscat-based team on phone and WhatsApp, Sunday to Thursday.",
  },
];

export function ComplianceStrip() {
  return (
    <section className="border-b border-line bg-white">
      <Container>
        <h2 className="sr-only">Why fleets across Oman choose GAWHRAT</h2>
        <div className="grid gap-8 py-12 md:grid-cols-3 md:gap-12">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent-600/8 text-accent-600">
                  <item.icon className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-steel">{item.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
