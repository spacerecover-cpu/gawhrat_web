import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/layout/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy-950 text-white">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-xl px-6 py-32 text-center">
        <LogoMark className="mx-auto h-14" />
        <p className="mt-10 font-mono text-[13px] font-semibold uppercase tracking-[0.2em] text-accent-300">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          This route is off the map
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-white/60">
          The page you are looking for was moved, renamed or never existed. The fleet,
          however, is exactly where it should be.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-[14.5px] font-semibold text-navy-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-300 active:scale-[0.97]"
          >
            Back to home
            <span className="flex size-9 items-center justify-center rounded-full bg-navy-950/8">
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-4 text-[14.5px] font-medium leading-none text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
