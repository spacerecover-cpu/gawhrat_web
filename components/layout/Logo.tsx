import { cn } from "@/lib/utils";

/* Brand mark: shield containing a gauge-style G (arc with entry bar) */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-auto", className)}
    >
      <path
        d="M22 2.5 40 9.4v13.2c0 11.6-7.5 19.6-18 22.9C11.5 42.2 4 34.2 4 22.6V9.4L22 2.5Z"
        fill="url(#lg-shield)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.2"
      />
      <path
        d="M30.6 27.2a9.4 9.4 0 1 1-.05-9.05"
        stroke="#2CC9BE"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path d="M31 22.9h-7" stroke="#2CC9BE" strokeWidth="3.2" strokeLinecap="round" />
      <defs>
        <linearGradient id="lg-shield" x1="4" y1="2" x2="40" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#16305E" />
          <stop offset="1" stopColor="#081630" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({
  caption = true,
  className,
}: {
  caption?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-bold tracking-[0.08em] text-white">
          GAWHRAT
        </span>
        {caption && (
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.3em] text-white/50">
            Jarnan Trad S.P.C
          </span>
        )}
      </span>
    </span>
  );
}
