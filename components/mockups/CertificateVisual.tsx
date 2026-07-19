import { BadgeCheck } from "lucide-react";
import { LogoMark } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

/* Representation of the certificate document issued after calibration */
export function CertificateVisual({ className }: { className?: string }) {
  const fields = [
    { label: "Vehicle No.", value: "4218 MB" },
    { label: "Vehicle type", value: "Heavy truck" },
    { label: "Calibrated limit", value: "100 km/h" },
    { label: "Issue date", value: "12 / 03 / 2026" },
    { label: "Certificate No.", value: "GJT-26-04871" },
  ];

  return (
    <div
      className={cn(
        "relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-7 text-ink shadow-lift ring-1 ring-line",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent-600 to-glow" />
      <div className="flex items-center justify-between">
        <LogoMark className="h-8" />
        <span className="flex items-center gap-1.5 rounded-full bg-accent-600/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-700">
          <BadgeCheck className="size-3.5" strokeWidth={2} />
          Official
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
        Speed Limiter Certificate
      </h3>
      <p className="mt-1 text-[12px] text-steel">
        Certifies installation and calibration in accordance with applicable requirements.
      </p>
      <dl className="mt-5 space-y-2.5">
        {fields.map((f) => (
          <div key={f.label} className="flex items-center justify-between gap-4">
            <dt className="text-[12px] text-steel-soft">{f.label}</dt>
            <dd className="border-b border-dashed border-line font-mono text-[12.5px] font-medium">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex items-end justify-between">
        <div>
          <div className="h-7 w-28 rounded bg-[repeating-linear-gradient(90deg,#0c1a2e_0px,#0c1a2e_2px,transparent_2px,transparent_5px)] opacity-80" />
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-steel-soft">
            Verification code
          </p>
        </div>
        <div className="flex size-14 items-center justify-center rounded-full border-2 border-accent-600/30 bg-accent-600/5">
          <BadgeCheck className="size-6 text-accent-600" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
