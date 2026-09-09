export type ProcessStep = { n: string; title: string; body: string };
export type Faq = { q: string; a: string };

export type ServiceData = {
  slug: string;
  navLabel: string;
  navBlurb: string;
  icon: string; // key into ServiceIcon map
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  heading: string;
  subheading: string;
  whoFor: string[];
  problems: string[];
  provide: string[];
  whyUs: string[];
  process: ProcessStep[];
  faqs: Faq[];
  related: string[]; // slugs
};

export const services: ServiceData[] = [
  {
    slug: "web-development",
    navLabel: "Web Development",
    navBlurb: "Business websites & web apps",
    icon: "web",
    metaTitle: "Website Development Company in Pune | CordIQ",
    metaDescription:
      "Business website development in Pune — fast, modern, SEO-ready websites that turn visitors into enquiries. Custom-built, mobile-first, and maintained.",
    breadcrumb: "Web Development",
    heading: "Website Development in Pune that brings you enquiries",
    subheading:
      "Modern, fast, mobile-first business websites — designed to rank on Google and convert visitors into leads, not just look pretty.",
    whoFor: [
      "SMEs and local businesses that need a credible, lead-generating website",
      "Startups launching a product or service",
      "Schools, clinics and firms replacing an outdated or DIY site",
      "Businesses that want SEO built in from day one",
    ],
    problems: [
      "Your current site is slow, dated, or doesn't show up on Google",
      "Visitors land and leave without enquiring",
      "It looks unprofessional next to competitors",
      "Nobody can update it and there's no analytics in place",
    ],
    provide: [
      "Custom, mobile-first website design and development",
      "On-page SEO: titles, meta, headings, schema, fast load",
      "Lead capture: enquiry forms, WhatsApp and call buttons",
      "Copywriting support and clear calls-to-action",
      "Google Analytics & Search Console setup",
      "Domain, business email and hosting if you need it",
    ],
    whyUs: [
      "SEO and speed built in — not bolted on later",
      "Clean code that loads in under 2 seconds",
      "We write for conversions, not just decoration",
      "Optional AMC to keep the site updated and secure",
    ],
    process: [
      { n: "01", title: "Discover", body: "We learn your business, audience and goals." },
      { n: "02", title: "Design", body: "Wireframe and visual design you approve before build." },
      { n: "03", title: "Build", body: "Fast, responsive, SEO-ready development." },
      { n: "04", title: "Launch & support", body: "Go live, hand over analytics, optional maintenance." },
    ],
    faqs: [
      {
        q: "How much does a business website cost in Pune?",
        a: "It depends on the number of pages and features. After a short call we send a written proposal with transparent pricing. Simple business sites are quick and affordable; larger sites with custom features cost more.",
      },
      {
        q: "Will my website rank on Google?",
        a: "We build every site SEO-ready — fast load, clean structure, schema, titles and meta — and set up Google Search Console. Ranking also depends on ongoing content and reviews, which we can help with.",
      },
      {
        q: "Do you also provide hosting and email?",
        a: "Yes. We can register your domain, set up professional business email and host the site on fast managed infrastructure, then maintain it under AMC.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Absolutely. We can redesign and modernise your current site, improve its speed and SEO, and migrate it without losing your existing content or rankings.",
      },
    ],
    related: ["ui-ux-design", "web-application-mvp", "domain-hosting"],
  },
  {
    slug: "web-application-mvp",
    navLabel: "Web Apps & MVPs",
    navBlurb: "Dashboards, internal tools",
    icon: "app",
    metaTitle: "Custom Web Application & MVP Development in Pune | CordIQ",
    metaDescription:
      "Custom web application and MVP development in Pune — dashboards, internal tools, SaaS products and startup MVPs built full-stack with AI integration.",
    breadcrumb: "Web Application / MVP Development",
    heading: "Custom Web Applications & MVP Development in Pune",
    subheading:
      "Dashboards, internal tools, SaaS products and startup MVPs — built full-stack, with optional AI integration and workflow automation.",
    whoFor: [
      "Startups that need an MVP to validate or raise",
      "Businesses drowning in spreadsheets that need an internal tool",
      "Companies wanting a customer portal, dashboard or admin panel",
      "Teams looking to automate repetitive workflows with software or AI",
    ],
    problems: [
      "Manual processes and spreadsheets are slowing your team down",
      "Off-the-shelf software doesn't fit how you actually work",
      "You need to launch an MVP quickly without over-spending",
      "Your data is scattered across tools with no single dashboard",
    ],
    provide: [
      "Full-stack web application development (React/modern stack)",
      "Startup MVPs scoped to launch fast and iterate",
      "Internal tools, admin panels and customer portals",
      "AI integration — document processing, chat, automation",
      "Workflow automation to remove repetitive manual work",
      "API integrations with the tools you already use",
    ],
    whyUs: [
      "We've delivered real products, including for international clients",
      "Pragmatic scoping — we build what moves the needle first",
      "Clean, maintainable code you're not locked out of",
      "Design + engineering under one roof",
    ],
    process: [
      { n: "01", title: "Scope", body: "Define the core problem and the smallest valuable build." },
      { n: "02", title: "Design", body: "UX flows and interface for the key screens." },
      { n: "03", title: "Build", body: "Iterative full-stack development with regular demos." },
      { n: "04", title: "Launch & iterate", body: "Ship, gather feedback, improve." },
    ],
    faqs: [
      {
        q: "What's the difference between a website and a web application?",
        a: "A website mainly presents information. A web application lets users do things — log in, manage data, run workflows. If you need dashboards, accounts, automation or internal tools, you need a web app.",
      },
      {
        q: "How quickly can you build an MVP?",
        a: "MVP timelines depend on scope, but we deliberately scope MVPs tight so you can launch and learn quickly. We'll give you a realistic timeline in the written proposal.",
      },
      {
        q: "Can you add AI to our product or workflow?",
        a: "Yes. We integrate AI for things like document understanding, search, summarisation and automation — as demonstrated in our AI-powered contract management work.",
      },
      {
        q: "Do we own the code?",
        a: "Yes. You own your application and its code. We build on standard, maintainable technology so you're never locked in.",
      },
    ],
    related: ["web-development", "ui-ux-design"],
  },
  {
    slug: "ui-ux-design",
    navLabel: "UI/UX Design",
    navBlurb: "Interfaces that convert",
    icon: "design",
    metaTitle: "UI/UX Design Services in Pune | CordIQ",
    metaDescription:
      "UI/UX design services in Pune for websites, web apps and internal tools. Clean, conversion-focused interfaces backed by real user-flow thinking.",
    breadcrumb: "UI/UX Design",
    heading: "UI/UX Design Services in Pune",
    subheading:
      "Clean, modern, conversion-focused interfaces for websites, applications and internal products — designed around how your users actually behave.",
    whoFor: [
      "Businesses whose website or app looks dated or confusing",
      "Startups that need a polished, investor-ready product",
      "Teams with a powerful tool that's hard to use",
      "Anyone losing customers at the point of sign-up or checkout",
    ],
    problems: [
      "Users get confused and drop off",
      "The design feels amateur and hurts trust",
      "The product works but feels clunky to use",
      "No consistency across screens and brand",
    ],
    provide: [
      "UX research and user-flow mapping",
      "Wireframes and interactive prototypes",
      "High-fidelity UI design and design systems",
      "Conversion-focused landing page design",
      "Mobile-first, accessible interfaces",
      "Design-to-development handoff (we can build it too)",
    ],
    whyUs: [
      "Design tied to business outcomes, not just aesthetics",
      "We also engineer — so designs are actually buildable",
      "Fast iteration with your feedback at each step",
      "Consistent, reusable design systems",
    ],
    process: [
      { n: "01", title: "Understand", body: "Goals, users and the key journeys." },
      { n: "02", title: "Wireframe", body: "Structure and flow before visuals." },
      { n: "03", title: "Design", body: "Polished UI and a reusable system." },
      { n: "04", title: "Handoff", body: "Specs ready for build — or we build it." },
    ],
    faqs: [
      {
        q: "Do you only design, or can you build it too?",
        a: "Both. We can deliver design only with a clean developer handoff, or design and build the website/app end to end as one team.",
      },
      {
        q: "Can you improve our existing product's UX?",
        a: "Yes. We run a UX review of your current site or app, identify where users drop off, and redesign the key flows to improve conversion and clarity.",
      },
      {
        q: "What deliverables do we get?",
        a: "Typically wireframes, high-fidelity designs, a prototype and a design system, depending on scope — all defined in the proposal.",
      },
    ],
    related: ["web-development", "web-application-mvp"],
  },
  {
    slug: "domain-hosting",
    navLabel: "Domain & Hosting",
    navBlurb: "Domains, email, hosting",
    icon: "domain",
    metaTitle: "Domain, Business Email & Hosting Services in Pune | CordIQ",
    metaDescription:
      "Domain registration, professional business email and fast managed hosting in Pune — set up correctly and maintained. End the downtime and DIY headaches.",
    breadcrumb: "Domain & Hosting",
    heading: "Domain, Business Email & Hosting in Pune",
    subheading:
      "Get your domain, professional email and fast managed hosting set up correctly the first time — and kept running, secure and backed up.",
    whoFor: [
      "Businesses tired of slow, unreliable hosting",
      "Anyone still using a personal Gmail for business",
      "New businesses setting up domain + email from scratch",
      "Companies who want one partner to manage it all",
    ],
    problems: [
      "Your site is slow or goes down and nobody owns the fix",
      "Email lands in spam or looks unprofessional",
      "Renewals get missed and the domain lapses",
      "DNS, SSL and email setup is confusing and risky",
    ],
    provide: [
      "Domain registration and DNS management",
      "Professional business email (yourname@yourcompany)",
      "Fast, managed website hosting with SSL",
      "Backups, uptime monitoring and renewals handled",
      "Email migration with zero data loss",
      "Ongoing support under AMC",
    ],
    whyUs: [
      "No missed renewals — we manage the calendar",
      "Proper SSL, SPF/DKIM so email actually delivers",
      "One number to call when something's wrong",
      "Bundled with website and AMC if you want",
    ],
    process: [
      { n: "01", title: "Assess", body: "Review your current domain, email and hosting." },
      { n: "02", title: "Set up", body: "Register/migrate, configure DNS, SSL and email." },
      { n: "03", title: "Secure", body: "Backups, monitoring and security in place." },
      { n: "04", title: "Maintain", body: "Renewals and support handled under AMC." },
    ],
    faqs: [
      {
        q: "Can you move us off our current host without downtime?",
        a: "Yes. We migrate your website and email carefully, test everything, then switch DNS so the transition is smooth with no data loss.",
      },
      {
        q: "Do you provide business email?",
        a: "Yes — professional email on your own domain, set up with proper SPF/DKIM so it lands in inboxes, not spam. We can use Google Workspace, Microsoft 365 or other providers as you prefer.",
      },
      {
        q: "Who owns the domain?",
        a: "You do. The domain is always registered in your business's name and ownership — we just manage it for you.",
      },
    ],
    related: ["web-development", "computer-amc-it-support"],
  },
  {
    slug: "cctv-installation",
    navLabel: "CCTV Installation",
    navBlurb: "Surveillance & monitoring",
    icon: "cctv",
    metaTitle: "CCTV Installation Services in Pune | Offices, Schools & Shops",
    metaDescription:
      "CCTV installation services in Pune for offices, schools, clinics and shops — HD & IP cameras with remote mobile monitoring, proper cabling and AMC.",
    breadcrumb: "CCTV Installation",
    heading: "CCTV Installation Services in Pune",
    subheading:
      "HD and IP surveillance with remote mobile monitoring — properly surveyed, neatly cabled and maintained, for offices, schools, clinics and retail.",
    whoFor: [
      "Offices and SMEs wanting to secure premises and assets",
      "Schools and colleges covering campuses, labs and entrances",
      "Clinics, labs and diagnostic centres",
      "Retail, warehouses and multi-site businesses",
    ],
    problems: [
      "Blind spots and cameras placed in the wrong spots",
      "Footage you can't access remotely when you need it",
      "Poor night vision or recordings that overwrite too soon",
      "Messy cabling and no one to maintain the system",
    ],
    provide: [
      "Free site survey and camera placement plan",
      "HD analog and IP/network camera installation",
      "DVR/NVR setup with right-sized storage",
      "Remote viewing on mobile and desktop",
      "Clean, structured cabling and labelling",
      "AMC for cleaning, health-checks and repairs",
    ],
    whyUs: [
      "Survey-first — cameras where they actually matter",
      "Right storage so you keep footage long enough",
      "Neat cabling, documented and labelled",
      "Local AMC so a dead camera gets fixed fast",
    ],
    process: [
      { n: "01", title: "Survey", body: "Free site visit to map coverage and blind spots." },
      { n: "02", title: "Propose", body: "Camera plan, storage sizing and written quote." },
      { n: "03", title: "Install", body: "Neat cabling, mounting, configuration and testing." },
      { n: "04", title: "Support", body: "Mobile access setup plus optional AMC." },
    ],
    faqs: [
      {
        q: "Can I view my CCTV cameras on my phone?",
        a: "Yes. We configure secure remote viewing so you can watch live and recorded footage from your phone or laptop, wherever you are.",
      },
      {
        q: "How many days of footage can be stored?",
        a: "It depends on camera count, resolution and recording mode. We size the DVR/NVR storage to your required retention — for example 15, 30 or more days — and confirm it in the proposal.",
      },
      {
        q: "Do you provide CCTV AMC?",
        a: "Yes. Our CCTV AMC covers periodic health-checks, lens cleaning, firmware updates, storage checks and quick repairs so your system stays reliable.",
      },
      {
        q: "Do you install CCTV for schools and clinics specifically?",
        a: "Yes. We regularly plan campus and clinic coverage — entrances, corridors, labs, reception and parking — with privacy-appropriate placement.",
      },
    ],
    related: ["it-networking", "office-it-setup", "computer-amc-it-support"],
  },
  {
    slug: "it-networking",
    navLabel: "IT Networking",
    navBlurb: "Cabling & Wi-Fi",
    icon: "network",
    metaTitle: "IT Networking & Structured Cabling Services in Pune | CordIQ",
    metaDescription:
      "IT networking services in Pune — structured network cabling, switches, routers, firewalls and business Wi-Fi for offices, schools and clinics.",
    breadcrumb: "IT Networking",
    heading: "IT Networking & Structured Cabling in Pune",
    subheading:
      "Structured cabling, switches, routers, firewalls and business Wi-Fi designed for reliability — so your network just works, every day.",
    whoFor: [
      "Offices setting up or relocating",
      "Schools and colleges wiring labs and campuses",
      "Clinics and labs connecting equipment and systems",
      "Businesses fighting dead zones and slow, dropping Wi-Fi",
    ],
    problems: [
      "Wi-Fi drops, dead zones and slow speeds",
      "Tangled, undocumented cabling no one understands",
      "No segmentation or security on the network",
      "Adding new desks or devices is a nightmare",
    ],
    provide: [
      "Structured network cabling (Cat6/Cat6A) and patching",
      "Switches, routers and firewall setup",
      "Business-grade Wi-Fi with full coverage planning",
      "Network segmentation and basic security",
      "Server and NAS connectivity",
      "Labelling, documentation and AMC support",
    ],
    whyUs: [
      "Designed for growth — easy to add to later",
      "Neat, labelled, documented cabling",
      "Coverage planned so Wi-Fi works everywhere",
      "Local support to keep it running",
    ],
    process: [
      { n: "01", title: "Assess", body: "Site survey, floor plan and requirements." },
      { n: "02", title: "Design", body: "Cabling layout, hardware and Wi-Fi coverage plan." },
      { n: "03", title: "Install", body: "Cabling, hardware, configuration and testing." },
      { n: "04", title: "Document", body: "Labelled, documented network plus support." },
    ],
    faqs: [
      {
        q: "What is structured cabling and why does it matter?",
        a: "Structured cabling is a planned, organised cabling system with proper patch panels and labelling. It makes your network reliable, easy to troubleshoot and simple to expand — unlike ad-hoc wiring that becomes a mess.",
      },
      {
        q: "Can you fix our Wi-Fi dead zones?",
        a: "Yes. We survey your space, identify dead zones and interference, and place business-grade access points so you get strong, consistent coverage everywhere it's needed.",
      },
      {
        q: "Do you set up secure networks for clinics and offices?",
        a: "Yes. We configure firewalls, segment guest and internal traffic, and apply sensible security so sensitive systems stay protected.",
      },
      {
        q: "Do you provide ongoing network support?",
        a: "Yes, under AMC — including monitoring, troubleshooting and changes as your team grows.",
      },
    ],
    related: ["cctv-installation", "office-it-setup", "computer-amc-it-support"],
  },
  {
    slug: "computer-amc-it-support",
    navLabel: "Computer AMC / IT Support",
    navBlurb: "Preventive & breakdown",
    icon: "amc",
    metaTitle: "Computer AMC & IT Support Services in Pune | CordIQ",
    metaDescription:
      "Computer AMC and IT support in Pune for offices, schools and clinics — covers desktops, laptops, printers, networking and servers with preventive maintenance and fast on-site support.",
    breadcrumb: "Computer AMC / IT Support",
    heading: "Computer AMC & IT Support in Pune",
    subheading:
      "Annual maintenance for desktops, laptops, printers, networks and servers — preventive visits plus fast on-call support, so your business never stops.",
    whoFor: [
      "Offices and SMEs that can't afford downtime",
      "Schools and colleges maintaining computer labs",
      "Clinics and labs needing high system uptime",
      "Any business tired of unreliable freelance 'computer guys'",
    ],
    problems: [
      "Things break and you scramble to find someone reliable",
      "No preventive care, so small issues become big ones",
      "Slow systems, virus problems and lost data",
      "No documentation, no inventory, no accountability",
    ],
    provide: [
      "Preventive maintenance visits on a fixed schedule",
      "Desktop, laptop and printer support and repair",
      "Network, router and basic server support",
      "Antivirus, updates and security hygiene",
      "Data backup setup and monitoring",
      "Vendor coordination and asset inventory",
      "On-call breakdown support with fast response",
    ],
    whyUs: [
      "Proactive AMC — we prevent downtime, not just react",
      "One accountable partner for all your IT",
      "Fixed annual cost, no surprise bills",
      "Local Pune team that actually shows up",
    ],
    process: [
      { n: "01", title: "Audit", body: "We inventory your systems and assess their health." },
      { n: "02", title: "Plan", body: "A tailored AMC scope and transparent annual price." },
      { n: "03", title: "Maintain", body: "Scheduled preventive visits and monitoring." },
      { n: "04", title: "Respond", body: "Fast on-call support when something breaks." },
    ],
    faqs: [
      {
        q: "What does a computer AMC cover?",
        a: "Our AMC typically covers desktops, laptops, printers and networking equipment, with basic server support available. It includes preventive maintenance, troubleshooting, antivirus, updates, backups and vendor coordination.",
      },
      {
        q: "How is AMC priced?",
        a: "Pricing is based on the number and type of devices and the level of cover you need. After a quick audit we give a fixed annual price, so you can budget with no surprises.",
      },
      {
        q: "How fast do you respond to a breakdown?",
        a: "AMC clients get priority on-call support with fast response across Pune and PCMC. Critical issues are prioritised, and many problems are resolved remotely within minutes.",
      },
      {
        q: "Do you provide AMC for schools and clinics?",
        a: "Yes. We maintain school computer labs and smart classrooms, and provide uptime-focused AMC for clinics and diagnostic labs where downtime directly affects patients.",
      },
      {
        q: "Can you take over from our current IT vendor?",
        a: "Yes. We start with an audit, document everything properly, and transition you smoothly onto a managed AMC with no gaps in support.",
      },
    ],
    related: ["it-networking", "office-it-setup", "cctv-installation"],
  },
  {
    slug: "office-it-setup",
    navLabel: "Office IT Setup",
    navBlurb: "New office, end to end",
    icon: "office",
    metaTitle: "Office IT Setup Services in Pune | New Office IT, End to End",
    metaDescription:
      "Office IT setup in Pune — workstations, structured networking, internet, Wi-Fi, CCTV, business email and support, set up end to end so your new office runs from day one.",
    breadcrumb: "Office IT Setup",
    heading: "Office IT Setup in Pune — ready from day one",
    subheading:
      "Moving into a new office or expanding? We handle workstations, networking, internet, Wi-Fi, CCTV and email end to end — so you walk in and start working.",
    whoFor: [
      "New offices and businesses fitting out a space",
      "Companies relocating or opening a second branch",
      "Startups scaling from a handful of desks",
      "Co-working graduates moving into a private office",
    ],
    problems: [
      "Coordinating five vendors for one office move",
      "Networking, internet and CCTV not ready on day one",
      "No structured plan — just cables run on the fly",
      "Nobody to support it all once you're in",
    ],
    provide: [
      "Workstation procurement, setup and configuration",
      "Structured network cabling and business Wi-Fi",
      "Internet line coordination and router/firewall setup",
      "CCTV installation and access control",
      "Domain, business email and shared drives",
      "Printers, peripherals and software setup",
      "Handover documentation plus ongoing AMC",
    ],
    whyUs: [
      "One partner for the entire fit-out — no finger-pointing",
      "Planned properly so it's ready on day one",
      "Everything documented and handed over",
      "Seamless transition into ongoing AMC support",
    ],
    process: [
      { n: "01", title: "Plan", body: "Site visit, headcount, layout and requirements." },
      { n: "02", title: "Propose", body: "Single written plan covering all IT, with pricing." },
      { n: "03", title: "Execute", body: "Cabling, network, workstations, CCTV and email." },
      { n: "04", title: "Handover", body: "Test, document, train and move to AMC." },
    ],
    faqs: [
      {
        q: "Can you set up our entire office IT before we move in?",
        a: "Yes — that's exactly what we do. We coordinate cabling, network, internet, workstations, CCTV and email so everything is tested and ready before your team arrives.",
      },
      {
        q: "Do you procure the hardware too?",
        a: "We can. We advise on the right workstations, networking gear and peripherals, procure them, and set everything up — or work with hardware you already have.",
      },
      {
        q: "What about ongoing support after setup?",
        a: "We transition you straight onto a Computer AMC so the same team that built your office IT keeps it running.",
      },
    ],
    related: ["it-networking", "cctv-installation", "computer-amc-it-support"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
