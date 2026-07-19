import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Speed Limiters, IVMS & Fleet Management in Oman`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "speed limiter Oman",
    "speed limiter installation Muscat",
    "speed limiter certificate Oman",
    "IVMS Oman",
    "PDO IVMS",
    "OPAL IVMS",
    "fleet management Oman",
    "GPS vehicle tracking Oman",
    "fleet tracking Muscat",
  ],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.shortName} | ${site.tagline}`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#050e20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
      </body>
    </html>
  );
}
