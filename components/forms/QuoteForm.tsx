"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Loader2, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { gaEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/* Leads submit to Web3Forms (set NEXT_PUBLIC_WEB3FORMS_KEY, see .env.example)
   which emails them to sales@gawhrat.com and records them. If the key is not
   configured, or the request fails, the form falls back to a pre-filled
   WhatsApp chat so an enquiry is never lost. */

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const services = [
  "Speed limiter installation",
  "Speed limiter certification or renewal",
  "IVMS installation",
  "Fleet management platform",
  "GPS tracking",
  "Something else",
];

const fleetSizes = ["1 to 5 vehicles", "6 to 25 vehicles", "26 to 100 vehicles", "Over 100 vehicles"];

type Errors = Partial<Record<"name" | "phone" | "email", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-steel-soft/70 transition-all duration-300 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/25";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-accent-600">*</span>}
      </label>
      {children}
      {error && <p className="text-[12.5px] font-medium text-red-600">{error}</p>}
    </div>
  );
}

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [waHref, setWaHref] = useState<string>(site.whatsapp);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    /* Honeypot: bots fill this hidden field. Silently succeed without sending. */
    if (get("botcheck")) {
      setStatus("success");
      return;
    }

    const next: Errors = {};
    if (!get("name")) next.name = "Please enter your name.";
    if (!get("phone")) next.phone = "Please enter a phone number.";
    if (!get("email")) next.email = "Please enter an email address.";
    else if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "That email address looks incomplete.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    /* Pre-filled WhatsApp message, used as the fallback and the "continue on
       WhatsApp" action on the success screen. */
    const summary = [
      `New quote request from ${get("name")}`,
      get("company") && `Company: ${get("company")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Service: ${get("service")}`,
      `Fleet size: ${get("fleet")}`,
      get("message") && `Details: ${get("message")}`,
    ]
      .filter(Boolean)
      .join("\n");
    const wa = `${site.whatsapp}?text=${encodeURIComponent(summary)}`;
    setWaHref(wa);

    /* No backend key configured → WhatsApp is the primary capture path. */
    if (!WEB3FORMS_KEY) {
      gaEvent("generate_lead", { method: "whatsapp" });
      window.open(wa, "_blank", "noopener");
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Quote request from ${get("name")} — ${get("service")}`,
          from_name: "GAWHRAT Website",
          name: get("name"),
          company: get("company") || "Not provided",
          phone: get("phone"),
          email: get("email"),
          service: get("service"),
          fleet_size: get("fleet"),
          message: get("message") || "No additional details.",
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (json.success) {
        gaEvent("generate_lead", { method: "form", currency: "OMR", value: 1 });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center ring-1 ring-line">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent-600/10 text-accent-600">
          <Check className="size-7" strokeWidth={2} />
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
          Thank you — request received
        </h3>
        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-steel">
          Our team will reply within one working day. Prefer to talk now? Continue on WhatsApp
          or call us and we will help straight away.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
          >
            <MessageCircle className="size-4" strokeWidth={1.75} />
            Continue on WhatsApp
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-[14px] font-semibold text-ink transition-colors duration-300 hover:border-ink/35"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-line md:p-9">
      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">Request a quote</h3>
      <p className="mt-2 text-[13.5px] text-steel">
        Tell us about your fleet. We reply within one working day.
      </p>

      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input name="name" autoComplete="name" placeholder="Ahmed Al Balushi" className={cn(inputCls, errors.name && "border-red-400")} />
        </Field>
        <Field label="Company">
          <input name="company" autoComplete="organization" placeholder="Company name" className={inputCls} />
        </Field>
        <Field label="Phone" required error={errors.phone}>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+968 9XXX XXXX" className={cn(inputCls, errors.phone && "border-red-400")} />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" className={cn(inputCls, errors.email && "border-red-400")} />
        </Field>
        <Field label="Service needed">
          <select name="service" className={inputCls} defaultValue={services[0]}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Fleet size">
          <select name="fleet" className={inputCls} defaultValue={fleetSizes[1]}>
            {fleetSizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea
            name="message"
            rows={4}
            placeholder="Vehicle types, locations, timelines, anything that helps us quote accurately."
            className={cn(inputCls, "resize-none")}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-[13px] font-medium text-red-700">
          Something went wrong sending your request. Please{" "}
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="underline">
            message us on WhatsApp
          </a>{" "}
          or call {site.phone} — we will sort it straight away.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-navy-900 py-1.5 pl-6 pr-1.5 text-[15px] font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-navy-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send request"}
        <span className="flex size-9 items-center justify-center rounded-full bg-white/12 transition-transform duration-500 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
          {status === "submitting" ? (
            <Loader2 className="size-4 animate-spin" strokeWidth={2} />
          ) : (
            <ArrowUpRight className="size-4" strokeWidth={2} />
          )}
        </span>
      </button>
      <p className="mt-4 text-[12px] leading-relaxed text-steel-soft">
        We reply within one working day and never share your details. Prefer chat?{" "}
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-accent-700 underline-offset-2 hover:underline">
          Message us on WhatsApp
        </a>
        .
      </p>
    </form>
  );
}
