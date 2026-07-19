"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Fuel, Map, TriangleAlert, Wrench, ChartColumn, Check } from "lucide-react";
import { FleetMap } from "@/components/mockups/FleetMap";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "map", label: "Live map", icon: Map },
  { id: "analytics", label: "Analytics", icon: ChartColumn },
  { id: "fuel", label: "Fuel", icon: Fuel },
  { id: "maintenance", label: "Maintenance", icon: Wrench },
] as const;

type TabId = (typeof tabs)[number]["id"];

const kmPerDay = [420, 510, 465, 590, 540, 610, 385];
const days = ["S", "M", "T", "W", "T", "F", "S"];
const fuelWeek = [82, 76, 71, 88, 84, 79, 74];

function MapView() {
  return (
    <div className="relative h-full min-h-[300px]">
      <FleetMap className="h-full w-full" />
      <div className="absolute left-4 top-4 flex flex-col gap-2">
        {[
          { plate: "4218 MB", speed: "62 km/h", ok: true },
          { plate: "1904 RA", speed: "88 km/h", ok: true },
          { plate: "7731 HD", speed: "Stopped", ok: false },
        ].map((v) => (
          <div
            key={v.plate}
            className="flex items-center gap-3 rounded-xl bg-navy-950/85 px-3.5 py-2 ring-1 ring-white/10 backdrop-blur-sm"
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                v.ok ? "bg-emerald-400" : "bg-white/30"
              )}
            />
            <span className="font-mono text-[11px] font-semibold text-white">{v.plate}</span>
            <span className="text-[10.5px] text-white/55">{v.speed}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsView() {
  const max = Math.max(...kmPerDay);
  return (
    <div className="flex h-full min-h-[300px] flex-col justify-between p-6 md:p-8">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Distance, 7 days", value: "3,520 km" },
          { label: "Utilisation", value: "78%" },
          { label: "Violations", value: "14" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/8">
            <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-white/45">
              {s.label}
            </p>
            <p className="mt-1 font-mono text-lg font-semibold text-white">{s.value}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="mb-3 text-[10.5px] font-medium uppercase tracking-[0.13em] text-white/45">
          Kilometres per day
        </p>
        <div className="flex h-36 items-end gap-3">
          {kmPerDay.map((v, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={cn(
                  "w-full rounded-t-lg",
                  i === 5
                    ? "bg-gradient-to-t from-accent-600 to-glow"
                    : "bg-white/12"
                )}
                style={{ height: `${(v / max) * 100}%` }}
              />
              <span className="font-mono text-[9.5px] text-white/40">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FuelView() {
  const points = fuelWeek
    .map((v, i) => `${(i / (fuelWeek.length - 1)) * 400},${110 - (v - 65) * 4}`)
    .join(" ");
  return (
    <div className="flex h-full min-h-[300px] flex-col justify-between p-6 md:p-8">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10.5px] font-medium uppercase tracking-[0.13em] text-white/45">
            Fleet fuel level trend
          </p>
          <p className="mt-1 font-mono text-2xl font-semibold text-white">
            74<span className="text-sm text-white/40">% avg</span>
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1.5 text-[11px] font-medium text-amber-300 ring-1 ring-amber-400/20">
          <TriangleAlert className="size-3.5" strokeWidth={1.75} />1 loss alert reviewed
        </span>
      </div>
      <svg viewBox="0 0 400 120" className="h-32 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="fuel-view-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2cc9be" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2cc9be" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,120 ${points} 400,120`} fill="url(#fuel-view-fill)" />
        <polyline
          points={points}
          fill="none"
          stroke="#2cc9be"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="grid grid-cols-2 gap-3">
        {[
          { plate: "4218 MB", detail: "Refuelled 58 L, Barka station" },
          { plate: "1904 RA", detail: "Consumption up 6% this week" },
        ].map((r) => (
          <div key={r.plate} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/8">
            <Fuel className="size-4 shrink-0 text-accent-300" strokeWidth={1.5} />
            <div>
              <p className="font-mono text-[11.5px] font-semibold text-white">{r.plate}</p>
              <p className="text-[10.5px] text-white/50">{r.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaintenanceView() {
  const rows = [
    { title: "Engine service", plate: "4218 MB", due: "Due in 1,200 km", tone: "amber" },
    { title: "Tyre rotation", plate: "7731 HD", due: "Due this week", tone: "amber" },
    { title: "Insurance renewal", plate: "1904 RA", due: "Due 28 Aug", tone: "white" },
    { title: "Brake inspection", plate: "5527 KL", due: "Completed", tone: "ok" },
  ];
  return (
    <div className="flex h-full min-h-[300px] flex-col justify-center gap-3 p-6 md:p-8">
      {rows.map((r) => (
        <div
          key={r.title + r.plate}
          className="flex items-center justify-between rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/8"
        >
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "flex size-9 items-center justify-center rounded-xl",
                r.tone === "ok"
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-white/6 text-white/60"
              )}
            >
              {r.tone === "ok" ? (
                <Check className="size-4" strokeWidth={2} />
              ) : (
                <Wrench className="size-4" strokeWidth={1.5} />
              )}
            </span>
            <div>
              <p className="text-[13px] font-medium text-white">{r.title}</p>
              <p className="font-mono text-[10.5px] text-white/45">{r.plate}</p>
            </div>
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[10.5px] font-medium",
              r.tone === "amber" && "bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20",
              r.tone === "white" && "bg-white/6 text-white/60 ring-1 ring-white/10",
              r.tone === "ok" && "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20"
            )}
          >
            {r.due}
          </span>
        </div>
      ))}
    </div>
  );
}

const views: Record<TabId, React.ComponentType> = {
  map: MapView,
  analytics: AnalyticsView,
  fuel: FuelView,
  maintenance: MaintenanceView,
};

export function PlatformTabs() {
  const [active, setActive] = useState<TabId>("map");
  const reduce = useReducedMotion();
  const View = views[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Platform modules"
        className="flex flex-wrap gap-2"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4.5 py-2.5 text-[13.5px] font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]",
              active === t.id
                ? "bg-white text-navy-950 shadow-soft"
                : "border border-white/15 bg-white/5 text-white/65 hover:bg-white/10 hover:text-white"
            )}
          >
            <t.icon className="size-4" strokeWidth={1.5} />
            {t.label}
          </button>
        ))}
      </div>

      <div className="glass-dark mt-6 overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }
          >
            <View />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
