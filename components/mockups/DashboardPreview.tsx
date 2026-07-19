import { Bell, CircleGauge, Search } from "lucide-react";
import { LogoMark } from "@/components/layout/Logo";
import { FleetMap } from "./FleetMap";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "Vehicles", value: "128" },
  { label: "Active now", value: "96" },
  { label: "Trips today", value: "32" },
  { label: "Alerts", value: "12", alert: true },
];

const vehicles = [
  { plate: "4218 MB", driver: "S. Al Riyami", speed: "62", status: "Moving" },
  { plate: "7731 HD", driver: "A. Al Balushi", speed: "0", status: "Stopped" },
  { plate: "1904 RA", driver: "M. Al Habsi", speed: "88", status: "Moving" },
];

const fuelWeek = [82, 76, 71, 88, 84, 79, 74];

export function DashboardPreview({ className }: { className?: string }) {
  const fuelPoints = fuelWeek
    .map((v, i) => `${(i / (fuelWeek.length - 1)) * 160},${44 - (v - 65) * 1.6}`)
    .join(" ");

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-[1.375rem] bg-navy-900/95 text-white ring-1 ring-white/10",
        className
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-5" />
          <span className="font-display text-[12.5px] font-semibold tracking-wide">
            Fleet Overview
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-accent-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-300">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-accent-300" />
            Live
          </span>
          <span className="flex size-6 items-center justify-center rounded-full bg-white/6 text-white/50">
            <Search className="size-3" strokeWidth={2} />
          </span>
          <span className="flex size-6 items-center justify-center rounded-full bg-white/6 text-white/50">
            <Bell className="size-3" strokeWidth={2} />
          </span>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 divide-x divide-white/6 border-b border-white/8">
        {kpis.map((k) => (
          <div key={k.label} className="px-4 py-3">
            <p className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-white/40">
              {k.label}
            </p>
            <p
              className={cn(
                "mt-0.5 font-mono text-lg font-semibold tracking-tight",
                k.alert ? "text-amber-400" : "text-white"
              )}
            >
              {k.value}
            </p>
          </div>
        ))}
      </div>

      {/* Map + vehicle rail */}
      <div className="grid md:grid-cols-[1.55fr_1fr]">
        <div className="relative">
          <FleetMap className="h-full w-full" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-navy-950/85 px-3 py-2 ring-1 ring-white/10 backdrop-blur-sm">
            <CircleGauge className="size-3.5 text-accent-300" strokeWidth={1.75} />
            <span className="text-[10.5px] font-medium text-white/80">
              4218 MB, limited at 100 km/h
            </span>
          </div>
        </div>

        <div className="hidden border-l border-white/8 md:block">
          {vehicles.map((v) => (
            <div
              key={v.plate}
              className="flex items-center justify-between border-b border-white/6 px-4 py-[13px] last:border-0"
            >
              <div>
                <p className="font-mono text-[11.5px] font-semibold tracking-wide">{v.plate}</p>
                <p className="mt-0.5 text-[10px] text-white/45">{v.driver}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[11.5px] text-accent-300">
                  {v.speed}
                  <span className="text-white/40"> km/h</span>
                </p>
                <p
                  className={cn(
                    "mt-0.5 text-[9.5px] font-medium uppercase tracking-wider",
                    v.status === "Moving" ? "text-emerald-400/80" : "text-white/35"
                  )}
                >
                  {v.status}
                </p>
              </div>
            </div>
          ))}
          {/* Fuel sparkline */}
          <div className="px-4 pb-4 pt-3">
            <div className="flex items-baseline justify-between">
              <p className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-white/40">
                Fuel, this week
              </p>
              <p className="font-mono text-[11px] text-white/70">74%</p>
            </div>
            <svg viewBox="0 0 160 46" className="mt-2 h-11 w-full" aria-hidden="true">
              <defs>
                <linearGradient id="fuel-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2cc9be" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2cc9be" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={`0,46 ${fuelPoints} 160,46`} fill="url(#fuel-fill)" />
              <polyline
                points={fuelPoints}
                fill="none"
                stroke="#2cc9be"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
