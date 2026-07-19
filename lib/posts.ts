import { images } from "./data";

export type PostSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  category: string;
  cover: string;
  hero: string;
  sections: PostSection[];
  /** Optional pillar/cluster page this post should point readers up to. */
  furtherReading?: { label: string; href: string };
};

export const posts: Post[] = [
  {
    slug: "speed-limiter-rules-oman-fleet-guide",
    title: "Speed Limiter Rules in Oman: A Practical Guide for Fleet Operators",
    excerpt:
      "Which vehicles need speed limiters, how certification works at registration and inspection, and how to run a fleet rollout without taking trucks off the road.",
    date: "2026-06-14",
    readMins: 6,
    category: "Compliance",
    cover: images.about,
    hero: "/heroes/blog-speed-limiter.webp",
    furtherReading: {
      label: "Speed limiter regulations in Oman: the full reference",
      href: "/services/speed-limiter/oman-regulations",
    },
    sections: [
      {
        paragraphs: [
          "Speed limiters are one of the most effective road safety tools available to commercial fleets, and in Oman they are also a legal requirement for many vehicle categories. For operators, the question is rarely whether to fit them. It is how to fit, calibrate and certify an entire fleet without losing working days.",
          "This guide summarises how the requirement works in practice and what a well-run rollout looks like.",
        ],
      },
      {
        heading: "Which vehicles are covered",
        paragraphs: [
          "Royal Oman Police (ROP) regulations require speed limiting devices on commercial categories such as heavy goods vehicles and buses, with permitted limits that depend on the vehicle class. The rules have been extended and refined over the years, so the safe assumption for any operator of trucks or passenger vehicles is that at least part of the fleet is in scope.",
          "Because categories and limits are updated from time to time, we verify the current requirement for each vehicle class before installation rather than relying on last year's summary. A reputable installer should always do this for you.",
        ],
      },
      {
        heading: "How certification works",
        paragraphs: [
          "Fitting the device is only half the job. After installation, the limiter is calibrated to the permitted speed for the vehicle class and then tested. The installer issues a certificate recording the vehicle, the device and the calibrated limit.",
          "That certificate is what matters at vehicle registration, renewal and inspection. If the paperwork is missing, expired or does not match the vehicle, the fleet loses time. Certificates are valid for a fixed period, so renewals need to be tracked the same way insurance renewals are.",
        ],
      },
      {
        heading: "Running a rollout without downtime",
        paragraphs: [
          "For a fleet of any size, the difference between a painful rollout and an invisible one is scheduling. The approach we use with distribution and transport clients is simple:",
        ],
        bullets: [
          "Batch vehicles by route and rest day so installations never collide with deliveries",
          "Install at the operator's yard where possible, overnight or between shifts",
          "Calibrate and certify on the spot, so each vehicle leaves compliant",
          "Load every certificate and expiry date into the fleet platform for automatic renewal reminders",
        ],
      },
      {
        heading: "The payoff beyond compliance",
        paragraphs: [
          "Operators usually fit limiters because they must. They keep them well maintained because of what happens next: fewer severe speeding events, calmer driving, lower fuel burn and fewer arguments after incidents. Combined with IVMS or GPS tracking, the limiter becomes part of a measurable safety programme rather than a box on an inspection checklist.",
          "If you operate trucks or buses in Oman and want a clear answer on what your fleet needs, our team will review your vehicle list and confirm requirements, timelines and pricing.",
        ],
      },
    ],
  },
  {
    slug: "pdo-opal-ivms-requirements-explained",
    title: "PDO and OPAL IVMS Requirements Explained for Contractors",
    excerpt:
      "What operators actually expect from an In-Vehicle Monitoring System, which driving events must be recorded, and how to arrive at your next audit with zero findings.",
    date: "2026-05-20",
    readMins: 7,
    category: "IVMS",
    cover: images.oilgas,
    hero: "/heroes/blog-ivms.webp",
    sections: [
      {
        paragraphs: [
          "If your company is bidding for oil and gas work in Oman, an In-Vehicle Monitoring System (IVMS) is not optional. Operators such as PDO require contractors to monitor how their vehicles are driven, and OPAL road safety standards set expectations across the sector's supply chain.",
          "The requirement trips up many contractors not because the technology is exotic, but because the system is installed without being configured, managed and reported the way auditors expect.",
        ],
      },
      {
        heading: "What IVMS must record",
        paragraphs: [
          "Specifications differ in detail between operators, but the core monitored events are consistent:",
        ],
        bullets: [
          "Over-speeding against posted or contractual limits",
          "Harsh acceleration, harsh braking and harsh cornering",
          "Seatbelt violations",
          "Excessive idling",
          "Driving outside permitted hours, including night driving restrictions",
          "Trip logs with time, location and driver identification",
        ],
      },
      {
        heading: "Recording is not enough",
        paragraphs: [
          "The most common audit finding is not a missing device. It is a system that records violations nobody reviews. Operator standards expect a working process: violations reviewed on a defined schedule, drivers ranked and coached, repeat offenders escalated and all of it documented.",
          "This is why driver scoring and league tables matter. They convert thousands of raw events into a short list of names a supervisor can act on, and they produce the paper trail an auditor wants to see.",
        ],
      },
      {
        heading: "How we prepare contractors for audit",
        paragraphs: [
          "When we deploy IVMS for oil and gas clients, the installation is the first week. The rest is configuration and routine:",
        ],
        bullets: [
          "Devices installed and tested against the operator's published specification",
          "Speed zones and permitted hours configured for concession roads",
          "Driver ID enforced, so events attach to people rather than plates",
          "Weekly violation and scoring reports scheduled to HSE automatically",
          "An evidence pack maintained so audit day is a download, not a scramble",
        ],

      },
      {
        heading: "Start before the contract does",
        paragraphs: [
          "IVMS is often left until mobilisation week, which turns it into an emergency. The better path is to install and stabilise the system while paperwork is still in progress, so drivers are used to it and the first report an operator sees is already clean.",
          "We install and manage IVMS aligned with PDO and OPAL specifications across Oman. If you have a contract coming up, talk to us early and mobilise with confidence.",
        ],
      },
    ],
  },
  {
    slug: "cut-fleet-fuel-costs-telematics",
    title: "Seven Ways Fleet Telematics Cuts Fuel Costs",
    excerpt:
      "Fuel is the biggest controllable cost in most fleets. Here is where telematics data finds the savings, with the practical steps behind each one.",
    date: "2026-04-08",
    readMins: 6,
    category: "Fleet Management",
    cover: images.hero,
    hero: "/heroes/blog-fuel.webp",
    sections: [
      {
        paragraphs: [
          "For most commercial fleets in Oman, fuel sits alongside salaries as the largest operating cost, and it is the one leaking money quietly. Telematics does not save fuel by itself. It shows you exactly where the fuel goes, which is what makes the saving possible.",
          "These are the seven levers we see deliver results for real fleets, roughly in order of speed.",
        ],
      },
      {
        heading: "1. Kill excessive idling",
        paragraphs: [
          "An idling engine burns fuel to move nothing. Across a fleet of vans or trucks, hours of daily idling add up to a serious monthly number. Idling alerts and a simple driver policy typically produce the first visible saving within weeks.",
        ],
      },
      {
        heading: "2. Calm the right foot",
        paragraphs: [
          "Harsh acceleration and heavy braking are fuel burned twice. Driver scoring makes the pattern visible per driver, and league tables create gentle competition. Fleets that coach their bottom five drivers usually see consumption drop without a single route change.",
        ],
      },
      {
        heading: "3. Enforce sensible speeds",
        paragraphs: [
          "Fuel consumption climbs steeply above highway cruising speeds. Speed limiters cap the extreme, and speed-band reports show how much distance is driven in the expensive zone.",
        ],
      },
      {
        heading: "4. Tighten routes and stops",
        paragraphs: [
          "Trip history exposes detours, duplicate journeys and stops that take three times longer than planned. Fixing routes is slower work than fixing idling, but it compounds forever.",
        ],
      },
      {
        heading: "5. Catch fuel loss early",
        paragraphs: [
          "Fuel sensors and CAN-bus data reveal sudden drops that do not match distance travelled. Whether the cause is a leak or theft, an alert on the day beats a mystery at month end.",
        ],
      },
      {
        heading: "6. Keep maintenance ahead of consumption",
        paragraphs: [
          "Tired engines, dragging brakes and under-inflated tyres all drink extra fuel. Odometer-based service reminders keep vehicles in their efficient window instead of drifting out of it.",
        ],
      },
      {
        heading: "7. Measure, then repeat",
        paragraphs: [
          "The fleets that save the most treat fuel as a weekly number per vehicle, not a monthly invoice total. A scheduled report to one accountable person is enough to keep all six levers above from sliding back.",
          "Want to know what your fleet's number could look like? We will walk you through the fuel module with your own vehicles on the map.",
        ],
      },
    ],
  },
  {
    slug: "choosing-gps-tracking-provider-oman",
    title: "Choosing a GPS Tracking Provider in Oman: A Buyer's Checklist",
    excerpt:
      "Hardware, platform, support and contracts. The questions that separate a tracking partner from a box seller, before you sign anything.",
    date: "2026-03-11",
    readMins: 5,
    category: "Buying Guide",
    cover: images.code,
    hero: "/heroes/blog-gps.webp",
    sections: [
      {
        paragraphs: [
          "GPS tracking looks like a commodity until the first week of real use. Then the differences appear: positions that lag by minutes, reports nobody can read, devices that die in summer heat and support that answers in another timezone.",
          "If you are comparing providers in Oman, this is the checklist we would use on ourselves.",
        ],
      },
      {
        heading: "Hardware questions",
        paragraphs: ["The device decides your data quality before software touches it."],
        bullets: [
          "Is the hardware rated for Gulf summer temperatures in a parked cab?",
          "How often does it report while moving, and does it buffer positions offline?",
          "Does it support the extras you may need later: driver ID, fuel sensors, CAN-bus data?",
          "Who installs it, and is the workmanship guaranteed in writing?",
        ],
      },
      {
        heading: "Platform questions",
        paragraphs: ["Software is where your team will live every day, so make them try it."],
        bullets: [
          "Can a dispatcher find a vehicle, replay a trip and export a report without training?",
          "Do alerts arrive fast enough to act on, or only appear in tomorrow's report?",
          "Are geofencing, maintenance, fuel and driver scoring included or priced as add-ons?",
          "Does it work well on a phone in the yard, not just a desktop in the office?",
        ],
      },
      {
        heading: "Support and contract questions",
        paragraphs: ["The cheapest quote is often the most expensive relationship."],
        bullets: [
          "Is support local, in your working hours, reachable by phone and WhatsApp?",
          "What is the response time when a device fails on a working vehicle?",
          "Who owns the data, and can you export it if you ever leave?",
          "Are renewals, SIM fees and platform fees spelled out for year two, not just year one?",
        ],
      },
      {
        heading: "The simplest test",
        paragraphs: [
          "Ask for a live demo with your own use case: your routes, your vehicle types, your reports. A provider confident in their platform will show you real screens and real data, and give you references from fleets like yours in Oman.",
          "That is a test we are always happy to take. Book a demo and bring your hardest questions.",
        ],
      },
    ],
  },
  {
    slug: "school-bus-safety-technology-oman",
    title: "School Bus Safety in Oman: What Tracking and Geofencing Change",
    excerpt:
      "How schools and bus operators use live tracking, speed compliance and geofenced routes to protect students and answer parents with facts.",
    date: "2026-02-17",
    readMins: 5,
    category: "Safety",
    cover: images.schools,
    hero: "/heroes/blog-school-bus.webp",
    sections: [
      {
        paragraphs: [
          "Few fleets carry a more valuable cargo than a school bus, and few face a tougher audience than parents at pickup time. Schools and transport operators across Oman are quietly modernising their fleets with the same technology used by logistics companies, applied to a different goal: every student home safely, every day, with proof.",
        ],
      },
      {
        heading: "Live visibility ends the guessing",
        paragraphs: [
          "With GPS tracking on every bus, the transport office sees the whole morning run on one map. When a parent calls about a late bus, the answer is a fact with a location, not a guess. Route replay also settles questions about missed stops or timing disputes in minutes.",
        ],
      },
      {
        heading: "Speed compliance you can prove",
        paragraphs: [
          "Speed limiters cap what the vehicle can do, and monitoring records what the driver actually did. Together they give schools something valuable: evidence of a working safety policy, not just a written one. Weekly driver reports keep standards steady across the fleet, including contracted operators.",
        ],
      },
      {
        heading: "Geofences around what matters",
        paragraphs: [
          "Geofencing draws virtual boundaries around schools, approved routes and depots. The system can then alert the office when a bus deviates from its route, arrives at school, or moves outside operating hours. Some operators share arrival notifications with parents, turning anxiety at the gate into a predictable routine.",
        ],
      },
      {
        heading: "What implementation actually involves",
        paragraphs: [
          "A typical school fleet is installed over a weekend or holiday so lessons and routes are never disrupted. Each bus gets a tracking device, optional speed limiter certification where required, and configuration of routes and geofences. The transport team gets a live dashboard and a short training session, and the first weekly report arrives before parents ever notice the change.",
          "If you manage student transport, we can survey your fleet and show you exactly what the platform looks like with your routes on it.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
