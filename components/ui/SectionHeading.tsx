import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark,
  center,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "mb-5 inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em]",
            dark
              ? "border-white/15 bg-white/5 text-accent-300"
              : "border-line bg-mist text-accent-700"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight text-balance md:text-[2.75rem] md:leading-[1.08]",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            dark ? "text-white/65" : "text-steel"
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
