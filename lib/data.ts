import {
  Activity,
  BadgeCheck,
  Bell,
  Bus,
  ChartColumn,
  CircleGauge,
  Clock,
  Cloud,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  Headset,
  KeyRound,
  Landmark,
  LayoutDashboard,
  MapPin,
  Package,
  Radius,
  Route,
  Satellite,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  UserCheck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Imagery (Unsplash CDN, free license; replace with brand photography
   when available)                                                     */
/* ------------------------------------------------------------------ */

const u = (id: string, w = 1600, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  hero: u("1519003722824-194d4455a60c", 2200, 62),
  about: u("1601584115197-04ecc0da31d7"),
  logistics: u("1578575437130-527eed3abbec", 1200),
  oilgas: u("1516216628859-9bccecab13ca", 1200),
  construction: u("1541888946425-d81bb19240f5", 1200),
  schools: u("1557223562-6c77ef16210f", 1200),
  government: u("1523292562811-8fa7962a78c8", 1200),
  transport: u("1570125909232-eb263c188f7e", 1200),
  delivery: u("1600320254374-ce2d293c324e", 1200),
  rental: u("1449965408869-eaa3f722e40d", 1200),
  code: u("1461749280684-dccba630e2f6", 1200),
} as const;

/* Brand hero photography (local, in /public/heroes). Dark-navy scenes with a
   glowing GPS/network overlay, optimised to WebP. Used as page hero backdrops. */
export const heroImages = {
  services: "/heroes/services.webp",
  speedLimiter: "/heroes/speed-limiter.webp",
  ivms: "/heroes/ivms.webp",
  fleetManagement: "/heroes/fleet-management.webp",
  industries: "/heroes/industries.webp",
  projects: "/heroes/projects.webp",
  blog: "/heroes/blog.webp",
  about: "/heroes/about.webp",
  contact: "/heroes/contact.webp",
  faq: "/heroes/faq.webp",
  privacy: "/heroes/privacy.webp",
  terms: "/heroes/terms.webp",
} as const;

/* ------------------------------------------------------------------ */
/* Core service pillars                                                */
/* ------------------------------------------------------------------ */

export type Pillar = {
  slug: string;
  href: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  points: string[];
};

export const pillars: Pillar[] = [
  {
    slug: "speed-limiter",
    href: "/services/speed-limiter",
    icon: CircleGauge,
    title: "Speed Limiters",
    short: "Installation, calibration and certification",
    description:
      "Professional speed limiter installation and calibration for trucks and buses, with official certificates accepted for ROP registration and inspection.",
    points: [
      "Fitted to ROP and GCC requirements",
      "Calibrated to your permitted speed",
      "Certificate issued the same day",
      "Renewal and re-inspection service",
    ],
  },
  {
    slug: "ivms",
    href: "/services/ivms",
    icon: Satellite,
    title: "IVMS",
    short: "In-vehicle monitoring for contract compliance",
    description:
      "In-Vehicle Monitoring Systems installed and configured to PDO and OPAL specifications: driver behaviour, violations, scoring and audit-ready reports.",
    points: [
      "Aligned with PDO and OPAL specs",
      "Harsh driving and speeding events",
      "Driver scoring and league tables",
      "Audit-ready compliance reports",
    ],
  },
  {
    slug: "fleet-management",
    href: "/services/fleet-management",
    icon: LayoutDashboard,
    title: "Fleet Management",
    short: "One cloud platform for your whole fleet",
    description:
      "Live GPS tracking, trips, fuel, maintenance, geofencing and analytics in one modern cloud platform, on desktop and mobile.",
    points: [
      "Live tracking with 10-second updates",
      "Fuel, maintenance and trip modules",
      "Geofences with instant alerts",
      "Scheduled reports to your inbox",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Full capability grid                                                */
/* ------------------------------------------------------------------ */

export type Capability = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  href: string;
  image: string;
};

export const capabilities: Capability[] = [
  {
    icon: CircleGauge,
    title: "Speed Limiter Installation",
    blurb: "Supply and fitting for trucks, buses and light vehicles.",
    href: "/services/speed-limiter",
    image: "/cards/speed-limiter-installation.webp",
  },
  {
    icon: SlidersHorizontal,
    title: "Calibration",
    blurb: "Set and verified to your permitted limit.",
    href: "/services/speed-limiter",
    image: "/cards/calibration.webp",
  },
  {
    icon: BadgeCheck,
    title: "Certification",
    blurb: "Official certificates for registration and inspection.",
    href: "/services/speed-limiter#certification",
    image: "/cards/certification.webp",
  },
  {
    icon: Satellite,
    title: "IVMS",
    blurb: "PDO and OPAL-aligned in-vehicle monitoring.",
    href: "/services/ivms",
    image: "/cards/ivms.webp",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    blurb: "Live positions, history and replay for every vehicle.",
    href: "/services/fleet-management#modules",
    image: "/cards/gps-tracking.webp",
  },
  {
    icon: Users,
    title: "Driver Management",
    blurb: "Profiles, licences, scoring and behaviour coaching.",
    href: "/services/fleet-management#modules",
    image: "/cards/driver-management.webp",
  },
  {
    icon: Route,
    title: "Trip Management",
    blurb: "Journeys, stops, idling and route history.",
    href: "/services/fleet-management#modules",
    image: "/cards/trip-management.webp",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    blurb: "Service schedules, reminders and cost records.",
    href: "/services/fleet-management#modules",
    image: "/cards/maintenance.webp",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    blurb: "Consumption trends, refills and loss alerts.",
    href: "/services/fleet-management#modules",
    image: "/cards/fuel-monitoring.webp",
  },
  {
    icon: Radius,
    title: "Geofencing",
    blurb: "Zones with entry, exit and after-hours alerts.",
    href: "/services/fleet-management#modules",
    image: "/cards/geofencing.webp",
  },
  {
    icon: ChartColumn,
    title: "Reports & Analytics",
    blurb: "Scheduled reports and dashboards that stay readable.",
    href: "/services/fleet-management#modules",
    image: "/cards/reports-analytics.webp",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    blurb: "ROP, PDO and OPAL requirements handled end to end.",
    href: "/services/ivms",
    image: "/cards/compliance.webp",
  },
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */

export const whyUs = [
  {
    icon: UserCheck,
    title: "Certified technicians",
    blurb: "Trained installers who work on trucks, buses and light fleets every day.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance first",
    blurb: "Installations documented to ROP, PDO and OPAL requirements from day one.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    blurb: "Most single-vehicle installations are fitted, calibrated and certified in one visit.",
  },
  {
    icon: Cloud,
    title: "Modern cloud platform",
    blurb: "A fleet platform your team will actually use, on desktop and mobile.",
  },
  {
    icon: Headset,
    title: "Local support",
    blurb: "An Oman-based team on phone and WhatsApp during working hours.",
  },
  {
    icon: Settings2,
    title: "After-sales service",
    blurb: "Repairs, recalibration and renewals handled without chasing.",
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export type Industry = {
  slug: string;
  icon: LucideIcon;
  title: string;
  blurb: string;
  detail: string;
  needs: string[];
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "logistics",
    icon: Truck,
    title: "Logistics & Distribution",
    blurb: "Visibility and compliance across line-haul and last-mile fleets.",
    detail:
      "Keep certificates current across a mixed fleet, watch utilisation in real time and give dispatchers one live map instead of phone calls.",
    needs: ["Speed limiter certification", "Live tracking", "Trip and fuel reports"],
    image: images.logistics,
  },
  {
    slug: "oil-gas",
    icon: Factory,
    title: "Oil & Gas",
    blurb: "IVMS that passes PDO and OPAL audits without drama.",
    detail:
      "Contractors working on concession roads need IVMS evidence, driver scoring and violation follow-up. We configure it to spec and keep it audit-ready.",
    needs: ["PDO and OPAL-aligned IVMS", "Driver scoring", "Violation reports"],
    image: images.oilgas,
  },
  {
    slug: "construction",
    icon: HardHat,
    title: "Construction",
    blurb: "Control of vehicles and heavy equipment across scattered sites.",
    detail:
      "Geofence every site, log equipment hours, catch after-hours movement and keep maintenance ahead of breakdowns.",
    needs: ["Geofencing", "Equipment hours", "Maintenance schedules"],
    image: images.construction,
  },
  {
    slug: "schools",
    icon: GraduationCap,
    title: "Schools & Universities",
    blurb: "Safer student transport with live visibility for operators.",
    detail:
      "Track every bus on route, enforce speed compliance and answer parent questions with data instead of guesses.",
    needs: ["Speed limiters", "Route tracking", "Driver behaviour alerts"],
    image: images.schools,
  },
  {
    slug: "government",
    icon: Landmark,
    title: "Government",
    blurb: "Accountable, auditable fleets for public sector operations.",
    detail:
      "Usage logs, geofenced zones and consolidated reporting bring clarity to departmental fleets of any size.",
    needs: ["Usage reporting", "Geofenced zones", "Central dashboards"],
    image: images.government,
  },
  {
    slug: "transport",
    icon: Bus,
    title: "Transport & Bus Operators",
    blurb: "Passenger fleets that run on time and within the rules.",
    detail:
      "Certified speed limiters, live headway visibility and driver scoring keep intercity and staff transport services safe and punctual.",
    needs: ["Certified speed limiters", "Live fleet map", "Driver scoring"],
    image: images.transport,
  },
  {
    slug: "delivery",
    icon: Package,
    title: "Delivery Companies",
    blurb: "Faster routes, verified stops, lower fuel bills.",
    detail:
      "See every van live, verify deliveries with stop history and cut idling that burns fuel margin.",
    needs: ["Live tracking", "Stop verification", "Idling alerts"],
    image: images.delivery,
  },
  {
    slug: "rental",
    icon: KeyRound,
    title: "Rental & Leasing",
    blurb: "Protect assets you hand to someone else every day.",
    detail:
      "Recover vehicles fast, flag abuse with speed and geofence alerts and settle disputes with trip evidence.",
    needs: ["Recovery tracking", "Abuse alerts", "Trip evidence"],
    image: images.rental,
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    icon: Headset,
    title: "Consultation",
    blurb: "We review your fleet, contracts and compliance requirements, then quote clearly.",
  },
  {
    icon: Wrench,
    title: "Installation",
    blurb: "Certified technicians fit the hardware at our workshop or your site.",
  },
  {
    icon: SlidersHorizontal,
    title: "Calibration",
    blurb: "Devices are set to your permitted limits and road-verified.",
  },
  {
    icon: BadgeCheck,
    title: "Certification",
    blurb: "You receive official certificates ready for registration and inspection.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    blurb: "Vehicles go live on the platform with alerts and scheduled reports.",
  },
  {
    icon: Bell,
    title: "Support",
    blurb: "Renewals, recalibration and repairs handled by our local team.",
  },
];

/* ------------------------------------------------------------------ */
/* Statistics (sample figures; confirm final numbers with GAWHRAT)     */
/* ------------------------------------------------------------------ */

export const stats = [
  { value: 4600, suffix: "+", label: "Vehicles installed" },
  { value: 3900, suffix: "+", label: "Certificates issued" },
  { value: 320, suffix: "+", label: "Corporate clients" },
  { value: 10, suffix: "+", label: "Years of experience" },
];

/* ------------------------------------------------------------------ */
/* Testimonials (sample reviews; replace with client-approved quotes)  */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    quote:
      "They fitted and certified 42 trucks in under two weeks and every certificate passed inspection first time. The dashboard is the part my dispatchers refuse to give up.",
    name: "Salim Al Riyami",
    role: "Fleet Supervisor, Barka Logistics",
    initials: "SR",
    stars: 5,
  },
  {
    quote:
      "Our school buses are tracked on every route and parents get honest answers about arrival times. Installation was done over one weekend without disrupting classes.",
    name: "Fatma Al Zadjali",
    role: "Operations Manager, Al Noor Education Group",
    initials: "FZ",
    stars: 5,
  },
  {
    quote:
      "We passed our PDO IVMS audit with zero findings. The violation reports and driver league table did most of the work for our HSE team.",
    name: "Khalid Al Harthy",
    role: "HSE Lead, Interior Contracting Co.",
    initials: "KH",
    stars: 5,
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export type Faq = { q: string; a: string; category: string };

export const faqs: Faq[] = [
  {
    category: "General",
    q: "What does GAWHRAT JARNAN TRAD do?",
    a: "We are an Oman-based fleet technology company. We install, calibrate and certify speed limiters, install IVMS to PDO and OPAL specifications, and provide a cloud fleet management platform with GPS tracking, fuel, maintenance and reporting modules.",
  },
  {
    category: "General",
    q: "Where do you operate?",
    a: "We are based in Muscat and serve fleets across the Sultanate of Oman. For larger fleets we install on site at your premises, anywhere in the country.",
  },
  {
    category: "Speed Limiters",
    q: "Which vehicles need speed limiters in Oman?",
    a: "ROP regulations require speed limiters on commercial vehicle categories such as heavy trucks and buses, with limits depending on vehicle type. Requirements are updated from time to time, so we confirm the current rules for your exact vehicle class before installation.",
  },
  {
    category: "Speed Limiters",
    q: "How long does a speed limiter installation take?",
    a: "A typical single vehicle is fitted, calibrated and certified in one visit, usually within a few hours. Fleet rollouts are scheduled in batches so your vehicles keep working while we install.",
  },
  {
    category: "Speed Limiters",
    q: "What certificate do I receive?",
    a: "After installation and calibration you receive an official speed limiter certificate recording the vehicle, device and calibrated limit. It is the document used for registration, renewal and roadside or inspection checks.",
  },
  {
    category: "Speed Limiters",
    q: "Do speed limiter certificates expire?",
    a: "Yes, certificates are valid for a fixed period and must be renewed. We track expiry dates for our clients and remind you before renewal is due.",
  },
  {
    category: "IVMS",
    q: "What is IVMS?",
    a: "An In-Vehicle Monitoring System records how a vehicle is driven: speed, harsh acceleration and braking, seatbelt use, night driving and route history. It is standard equipment for contractors working with oil and gas operators in Oman.",
  },
  {
    category: "IVMS",
    q: "Is IVMS mandatory for PDO or OPAL contracts?",
    a: "Most oil and gas operators in Oman, including PDO, require contractors to run IVMS that meets their published specification. We install and configure systems aligned with those specifications and prepare the reports auditors ask for.",
  },
  {
    category: "IVMS",
    q: "Which driving events does IVMS monitor?",
    a: "Typical monitored events include over-speeding, harsh acceleration, harsh braking, harsh cornering, seatbelt violations, excessive idling and driving outside permitted hours. Each event is logged with time, location and driver.",
  },
  {
    category: "Platform",
    q: "Can I track my vehicles from my phone?",
    a: "Yes. The platform works in any modern browser and on mobile, so owners and supervisors can see live positions, trips and alerts from anywhere.",
  },
  {
    category: "Platform",
    q: "How does fuel monitoring work?",
    a: "Depending on the vehicle we use CAN-bus data or dedicated fuel sensors to record consumption, refills and sudden drops. The platform turns that into trends per vehicle and alerts for suspected loss.",
  },
  {
    category: "Platform",
    q: "Who owns the tracking data?",
    a: "You do. Your fleet data belongs to your company, is stored securely and can be exported at any time. We do not share it with third parties.",
  },
  {
    category: "Platform",
    q: "What support and warranty do you provide?",
    a: "Hardware carries a manufacturer warranty and our own workmanship guarantee. Support runs Sunday to Thursday on phone, WhatsApp and email, with site visits when a device needs attention.",
  },
];

export const homeFaqs = [faqs[0], faqs[2], faqs[4], faqs[7], faqs[9], faqs[11]];

/* ------------------------------------------------------------------ */
/* Projects (representative engagements; anonymised sample data)       */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  scope: { label: string; value: string }[];
  outcome: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "logistics-fleet-rollout",
    sector: "Logistics",
    title: "Speed limiter rollout for a national distribution fleet",
    summary:
      "A distribution company needed 120 trucks limited, certified and back on the road without breaking delivery schedules.",
    scope: [
      { label: "Vehicles", value: "120 trucks" },
      { label: "Duration", value: "3 weeks" },
      { label: "Location", value: "Muscat & Sohar" },
    ],
    outcome: "All vehicles certified on schedule with zero failed inspections.",
    image: images.logistics,
  },
  {
    slug: "school-bus-tracking",
    sector: "Education",
    title: "Live tracking and speed compliance for a school group",
    summary:
      "A private education group wanted every bus visible on route, with speed compliance parents could trust.",
    scope: [
      { label: "Vehicles", value: "45 buses" },
      { label: "Duration", value: "1 weekend" },
      { label: "Location", value: "Muscat" },
    ],
    outcome: "Full fleet live within two days, installed without disrupting school runs.",
    image: images.schools,
  },
  {
    slug: "oil-gas-ivms-compliance",
    sector: "Oil & Gas",
    title: "IVMS compliance for an interior contracting company",
    summary:
      "A contractor mobilising for concession-road work needed IVMS aligned to operator specifications, with scoring and audit reports.",
    scope: [
      { label: "Vehicles", value: "200 mixed" },
      { label: "Duration", value: "6 weeks" },
      { label: "Location", value: "Interior concessions" },
    ],
    outcome: "Passed the operator IVMS audit with zero findings.",
    image: images.oilgas,
  },
  {
    slug: "delivery-fleet-visibility",
    sector: "Delivery",
    title: "Live visibility for a last-mile delivery fleet",
    summary:
      "A courier operation was losing hours to phone check-ins. Dispatch needed one live map, stop history and idling alerts.",
    scope: [
      { label: "Vehicles", value: "80 vans" },
      { label: "Duration", value: "2 weeks" },
      { label: "Location", value: "Muscat & Salalah" },
    ],
    outcome: "Idling time down by roughly a third within the first two months.",
    image: images.delivery,
  },
  {
    slug: "intercity-coach-operator",
    sector: "Transport",
    title: "Certified limiters and tracking for an intercity coach operator",
    summary:
      "A passenger operator combined certified speed limiters with live tracking and driver scoring across its coach fleet.",
    scope: [
      { label: "Vehicles", value: "35 coaches" },
      { label: "Duration", value: "10 days" },
      { label: "Location", value: "Muscat, Nizwa, Salalah routes" },
    ],
    outcome: "Certified fleet with measurably smoother driving scores by quarter end.",
    image: images.transport,
  },
  {
    slug: "construction-fleet-control",
    sector: "Construction",
    title: "Site geofencing for a construction and plant fleet",
    summary:
      "A contractor needed after-hours movement alerts and equipment-hour logging across scattered project sites.",
    scope: [
      { label: "Assets", value: "150 vehicles & plant" },
      { label: "Duration", value: "4 weeks" },
      { label: "Location", value: "Multiple sites" },
    ],
    outcome: "After-hours movement incidents effectively eliminated.",
    image: images.construction,
  },
];
