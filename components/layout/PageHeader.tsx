import Link from "next/link";
import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroBackdrop } from "@/components/layout/HeroBackdrop";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href: string };

export function PageHeader({
  title,
  lede,
  crumbs,
  children,
  compact,
}: {
  title: React.ReactNode;
  lede?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <HeroBackdrop />
      <Container className={cn("relative pt-32 md:pt-40", compact ? "pb-14" : "pb-16 md:pb-24")}>
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-white/45">
              {crumbs.map((c, i) => (
                <Fragment key={c.href}>
                  {i > 0 && (
                    <li aria-hidden="true" className="text-white/25">
                      /
                    </li>
                  )}
                  <li>
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page" className="text-accent-300">
                        {c.label}
                      </span>
                    ) : (
                      <Link href={c.href} className="transition-colors hover:text-white">
                        {c.label}
                      </Link>
                    )}
                  </li>
                </Fragment>
              ))}
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              {lede}
            </p>
          )}
        </Reveal>
        {children}
      </Container>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </section>
  );
}
