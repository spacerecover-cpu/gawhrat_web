import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "inverse" | "ghost" | "ghost-dark" | "whatsapp";

const base =
  "group inline-flex items-center gap-3 rounded-full font-medium text-[15px] leading-none transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] focus-visible:outline-2 select-none";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-soft",
  inverse: "bg-white text-navy-950 hover:bg-accent-300/90 shadow-deep",
  ghost: "border border-ink/15 text-ink hover:border-ink/35 hover:bg-ink/[0.03]",
  "ghost-dark":
    "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/35",
  whatsapp: "bg-whatsapp text-white hover:brightness-110 shadow-soft",
};

const circleVariants: Record<Variant, string> = {
  primary: "bg-white/12 text-white",
  inverse: "bg-navy-950/8 text-navy-950",
  ghost: "bg-ink/6 text-ink",
  "ghost-dark": "bg-white/12 text-white",
  whatsapp: "bg-white/18 text-white",
};

export function Button({
  href,
  variant = "primary",
  icon: Icon = ArrowUpRight,
  showIcon = true,
  external,
  className,
  children,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  icon?: LucideIcon;
  showIcon?: boolean;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const inner = (
    <>
      <span className={cn(showIcon ? "pl-6 py-[9px]" : "px-6 py-4")}>{children}</span>
      {showIcon && (
        <span
          className={cn(
            "mr-[7px] flex size-9 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:scale-105",
            circleVariants[variant]
          )}
        >
          <Icon className="size-4" strokeWidth={2} />
        </span>
      )}
    </>
  );

  const cls = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
