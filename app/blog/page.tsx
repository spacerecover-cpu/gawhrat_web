import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { posts } from "@/lib/posts";
import { heroImages } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = pageMeta({
  title: "Blog | Fleet Compliance & Telematics Insights",
  description:
    "Practical guides on speed limiter rules, PDO and OPAL IVMS requirements, fuel savings and fleet technology for operators in Oman.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        image={heroImages.blog}
        tone="sky"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        title="Notes from the compliance side of the road"
        lede="Guides written for the people who run fleets in Oman: regulations, audits, fuel and the technology that holds it together."
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          {/* Featured article */}
          <Reveal amount={0.15}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lift lg:grid-cols-2"
            >
              <div className="relative min-h-[260px] overflow-hidden bg-navy-950 lg:min-h-[380px]">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 92vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-9 md:p-12">
                <div className="flex items-center gap-3 text-[12px] font-medium text-steel-soft">
                  <span className="rounded-full bg-accent-600/8 px-3 py-1 font-semibold text-accent-700">
                    {featured.category}
                  </span>
                  <span>{formatDate(featured.date)}</span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-steel">{featured.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-accent-700">
                  Read the guide
                  <ArrowUpRight
                    className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <h2 className="mb-6 mt-16 font-display text-2xl font-semibold tracking-tight text-ink">
            More guides
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 2) * 0.08} amount={0.2} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative h-52 overflow-hidden bg-navy-950">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-center gap-3 text-[11.5px] font-medium text-steel-soft">
                      <span className="rounded-full bg-accent-600/8 px-3 py-1 font-semibold text-accent-700">
                        {post.category}
                      </span>
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readMins} min read</span>
                    </div>
                    <h3 className="mt-4 flex-1 font-display text-[19px] font-semibold leading-snug tracking-tight text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-steel">{post.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
