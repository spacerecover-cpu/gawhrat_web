import { Hero } from "@/components/home/Hero";
import { ComplianceStrip } from "@/components/home/ComplianceStrip";
import { ServicesBento } from "@/components/home/ServicesBento";
import { WhyUs } from "@/components/home/WhyUs";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { Industries } from "@/components/home/Industries";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeFaq } from "@/components/home/HomeFaq";
import { ContactSection } from "@/components/home/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComplianceStrip />
      <ServicesBento />
      <WhyUs />
      <PlatformShowcase />
      <Industries />
      <ProcessTimeline />
      <Testimonials />
      <HomeFaq />
      <ContactSection />
      <JsonLd data={localBusinessSchema} />
    </>
  );
}
