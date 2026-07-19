import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/schema";
import { getPost, posts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.cover }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        compact
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
        title={post.title}
        lede={post.excerpt}
      >
        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center gap-4 text-[13px] font-medium text-white/55">
            <span className="rounded-full bg-accent-400/12 px-3.5 py-1.5 font-semibold text-accent-300">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readMins} min read</span>
          </div>
        </Reveal>
      </PageHeader>

      <article className="bg-white py-20 md:py-24">
        <Container>
          <Reveal amount={0.1}>
            <div className="bezel mx-auto max-w-4xl shadow-lift">
              <div className="relative aspect-[2/1]">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 56rem, 92vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="mx-auto mt-16 max-w-2xl">
            {post.sections.map((section, i) => (
              <section key={i} className="mb-10 last:mb-0">
                {section.heading && (
                  <h2 className="mb-4 mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mb-4 text-[15.5px] leading-[1.8] text-steel">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mb-4 space-y-3 rounded-2xl bg-mist p-6 ring-1 ring-line">
                    {section.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink/85">
                        <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Related */}
          <div className="mx-auto mt-20 max-w-4xl border-t border-line pt-14">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
              Keep reading
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-3xl bg-mist p-7 ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                >
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-accent-700">
                    {r.category}
                  </span>
                  <h3 className="mt-3 font-display text-[16.5px] font-semibold leading-snug tracking-tight text-ink">
                    {r.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-700">
                    Read
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </article>

      <CtaBand
        title="Want this handled for your fleet?"
        lede="Reading about compliance is free. So is the conversation that gets it off your desk."
      />
      <JsonLd data={articleSchema(post)} />
    </>
  );
}
