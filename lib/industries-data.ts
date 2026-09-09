export type ProvideItem = { title: string; body: string; relatedSlug: string };
export type Faq = { q: string; a: string };

export type IndustryData = {
  slug: string;
  navLabel: string;
  tag: string;
  teaserBody: string;
  icon: string; // key into IndustryIcon map
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  heading: string;
  subheading: string;
  challenge: string;
  painPoints: string[];
  provide: ProvideItem[];
  faqs: Faq[];
};

const whyUs = [
  "On-site support in Pune",
  "Written proposal upfront",
  "Preventive AMC",
  "Software + hardware in-house",
];

export const industryWhyUs = whyUs;

export const industries: IndustryData[] = [
  {
    slug: "schools-colleges",
    navLabel: "Schools & Colleges",
    tag: "Education",
    teaserBody: "Computer labs, smart classrooms, CCTV, campus networking, websites and AMC.",
    icon: "school",
    metaTitle: "IT Solutions for Schools & Colleges in Pune | Labs, CCTV, AMC",
    metaDescription:
      "IT solutions for schools and colleges in Pune — computer labs, smart classrooms, CCTV, campus networking, websites, email and AMC. One reliable education IT partner.",
    breadcrumb: "Schools & Colleges",
    heading: "IT Solutions for Schools & Colleges in Pune",
    subheading:
      "Computer labs, smart classrooms, CCTV, campus networking, websites and AMC — one accountable partner for your institution's entire technology.",
    challenge:
      "Schools and colleges run on technology that has to work every single day — for students, teachers and administration. But most institutions juggle separate vendors for labs, cameras, networking and the website, with no one owning uptime. We bring it all together.",
    painPoints: [
      "Lab computers down right before practicals or exams",
      "Multiple vendors with no single point of accountability",
      "CCTV blind spots around campus and entrances",
      "Slow or patchy Wi-Fi across blocks",
      "An outdated website that parents can't rely on for information",
    ],
    provide: [
      { title: "Computer Labs & AMC", body: "Set up, maintain and repair lab computers with scheduled AMC so labs are always class-ready.", relatedSlug: "computer-amc-it-support" },
      { title: "Smart Classrooms", body: "Displays, projectors, audio and connectivity set up reliably for digital teaching.", relatedSlug: "office-it-setup" },
      { title: "Campus CCTV", body: "Cover entrances, corridors, labs, grounds and parking with remote monitoring for safety.", relatedSlug: "cctv-installation" },
      { title: "Campus Networking & Wi-Fi", body: "Structured cabling and Wi-Fi across blocks, labs and admin offices.", relatedSlug: "it-networking" },
      { title: "School Website", body: "A modern website for admissions, notices and parent communication.", relatedSlug: "web-development" },
      { title: "Domain & Official Email", body: "Professional email for staff and departments on your institution's domain.", relatedSlug: "domain-hosting" },
    ],
    faqs: [
      { q: "Do you provide AMC for school and college computer labs?", a: "Yes. We maintain computer labs with scheduled preventive visits and on-call support, so machines are always ready for classes and practicals. AMC covers desktops, printers, networking and basic servers." },
      { q: "Can you handle CCTV, networking and labs together?", a: "Yes — that's our advantage. One partner handles labs, smart classrooms, CCTV, campus networking and the website, so nothing falls between vendors and you have a single number to call." },
      { q: "Do you work with government and aided institutions?", a: "We work with private schools and colleges directly, and can supply and support institutions that procure via tenders. Talk to us about your procurement process." },
      { q: "Can you set up the school website and official email?", a: "Yes. We build admissions-ready school websites and set up professional email on your institution's domain for staff and departments." },
    ],
  },
  {
    slug: "clinics-labs",
    navLabel: "Clinics & Diagnostic Labs",
    tag: "Healthcare",
    teaserBody: "Reliable workstations, secure systems, lab equipment networks and uptime-first AMC.",
    icon: "clinic",
    metaTitle: "IT Solutions for Clinics & Diagnostic Labs in Pune | CordIQ",
    metaDescription:
      "IT solutions for clinics and diagnostic labs in Pune — reliable workstations, secure systems, equipment networking, CCTV and uptime-focused AMC. Keep patients moving.",
    breadcrumb: "Clinics & Diagnostic Labs",
    heading: "IT Solutions for Clinics & Diagnostic Labs in Pune",
    subheading:
      "Reliable workstations, secure systems, equipment networking, CCTV and uptime-first AMC — because in healthcare, downtime means patients waiting.",
    challenge:
      "Clinics and diagnostic labs depend on systems being up and data being secure. A frozen reception PC or a disconnected machine means patients wait and revenue stalls. We keep your front desk, equipment and records running — and protected.",
    painPoints: [
      "Reception or billing PC freezing during patient hours",
      "Diagnostic equipment losing network connection",
      "No reliable backups for sensitive patient data",
      "Security gaps around records and systems",
      "No single vendor who understands the whole setup",
    ],
    provide: [
      { title: "Reliable Workstations & AMC", body: "Reception, doctor and lab PCs maintained for maximum uptime with fast support.", relatedSlug: "computer-amc-it-support" },
      { title: "Equipment & Systems Networking", body: "Connect diagnostic equipment, billing and record systems on a stable, secure network.", relatedSlug: "it-networking" },
      { title: "Secure Systems & Backups", body: "Antivirus, updates, access control and reliable backups for sensitive records.", relatedSlug: "computer-amc-it-support" },
      { title: "Clinic CCTV", body: "Cover reception, waiting areas, entrances and storage with remote monitoring.", relatedSlug: "cctv-installation" },
      { title: "Vendor Coordination", body: "We coordinate with your software/equipment vendors so issues don't bounce around.", relatedSlug: "computer-amc-it-support" },
      { title: "Website & Online Presence", body: "A trustworthy website with appointment enquiries and services.", relatedSlug: "web-development" },
    ],
    faqs: [
      { q: "Why is uptime so important for clinics and labs?", a: "Because every minute of downtime means patients waiting and revenue lost. Our AMC focuses on preventing failures and responding fast when they happen, so your front desk and equipment stay online." },
      { q: "Can you keep our patient data secure and backed up?", a: "Yes. We set up antivirus, system updates, access control and reliable, monitored backups so sensitive records are protected and recoverable." },
      { q: "Do you coordinate with our medical software or equipment vendors?", a: "Yes. We act as your single IT point of contact and coordinate with your software and equipment vendors so problems get resolved instead of bounced between parties." },
      { q: "Do you install CCTV for clinics?", a: "Yes — reception, waiting areas, entrances and storage, with privacy-appropriate placement and remote viewing on your phone." },
    ],
  },
  {
    slug: "offices-smes",
    navLabel: "Offices & SMEs",
    tag: "Business",
    teaserBody: "Workstations, networking, internet, CCTV, websites and dependable support.",
    icon: "office",
    metaTitle: "IT Solutions for Offices & SMEs in Pune | Setup, Support, AMC",
    metaDescription:
      "IT solutions for offices and SMEs in Pune — workstations, networking, internet, CCTV, websites, hosting and dependable AMC support. One partner for all your IT.",
    breadcrumb: "Offices & SMEs",
    heading: "IT Solutions for Offices & SMEs in Pune",
    subheading:
      "Workstations, networking, internet, CCTV, websites and dependable support — the complete IT backbone for a growing business, from one partner.",
    challenge:
      "Growing businesses shouldn't need an in-house IT department to keep the lights on. From setting up your office to keeping it running, we're your outsourced IT team — covering hardware, network, security, web and support under one roof.",
    painPoints: [
      "No in-house IT, so every issue derails your day",
      "Multiple vendors and no single accountability",
      "Slow Wi-Fi and network problems hurting productivity",
      "An unprofessional or invisible website",
      "No preventive maintenance, just firefighting",
    ],
    provide: [
      { title: "Office IT Setup", body: "Workstations, network, internet and email set up end to end for new or expanding offices.", relatedSlug: "office-it-setup" },
      { title: "Networking & Wi-Fi", body: "Structured cabling and business Wi-Fi that stays fast and reliable.", relatedSlug: "it-networking" },
      { title: "Computer AMC & Support", body: "Preventive maintenance and fast on-call support for all your devices.", relatedSlug: "computer-amc-it-support" },
      { title: "Office CCTV", body: "Secure your premises and assets with remote-viewable cameras.", relatedSlug: "cctv-installation" },
      { title: "Website & Hosting", body: "A lead-generating website with domain, business email and hosting.", relatedSlug: "web-development" },
      { title: "Web Apps & Automation", body: "Internal tools and automation to make your team more productive.", relatedSlug: "web-application-mvp" },
    ],
    faqs: [
      { q: "We're a small business with no IT team — can you be our IT department?", a: "Yes. That's exactly who we serve. Under AMC we act as your outsourced IT team — preventive maintenance, fast support, and one number for hardware, network, web and security." },
      { q: "Can you do everything from office setup to the website?", a: "Yes. We can set up your office IT, run your network and CCTV, provide ongoing support, and build and host your website — all from one partner." },
      { q: "How does AMC pricing work for a small office?", a: "We price based on your number of devices and required cover, then give a fixed annual cost so you can budget with no surprises." },
    ],
  },
  {
    slug: "real-estate-facilities",
    navLabel: "Real Estate & Facilities",
    tag: "Property",
    teaserBody: "Multi-site CCTV, networking, vendor coordination and maintenance across locations.",
    icon: "building",
    metaTitle: "IT, CCTV & Networking for Real Estate & Facilities in Pune",
    metaDescription:
      "IT, CCTV and networking solutions for real estate and facility teams in Pune — multi-site surveillance, networking, vendor coordination and maintenance across locations.",
    breadcrumb: "Real Estate & Facilities",
    heading: "IT & CCTV Solutions for Real Estate & Facility Teams in Pune",
    subheading:
      "Multi-site CCTV, networking, vendor coordination and maintenance — managed consistently across every office, project site and property you run.",
    challenge:
      "Real estate and facility teams manage technology across many locations — sales offices, sites, properties and common areas. Coordinating cameras, networks and maintenance site by site is chaos. We standardise and manage it across all your locations.",
    painPoints: [
      "Different camera and network setups at every location",
      "No central view of CCTV across sites",
      "Maintenance handled ad-hoc, site by site",
      "Slow IT setup when opening a new office",
      "No single partner accountable across locations",
    ],
    provide: [
      { title: "Multi-Site CCTV", body: "Consistent surveillance across offices, sites and common areas, viewable centrally and on mobile.", relatedSlug: "cctv-installation" },
      { title: "Site & Office Networking", body: "Networking and Wi-Fi for sales offices, sample flats and site cabins.", relatedSlug: "it-networking" },
      { title: "Maintenance & AMC", body: "One AMC covering IT and CCTV across all your locations.", relatedSlug: "computer-amc-it-support" },
      { title: "Vendor & Asset Coordination", body: "We coordinate vendors and track IT/CCTV assets across sites.", relatedSlug: "computer-amc-it-support" },
      { title: "New Office Setup", body: "Fast IT setup when you open a new sales office or branch.", relatedSlug: "office-it-setup" },
      { title: "Website & Project Microsites", body: "Project websites and lead-capture microsites that perform.", relatedSlug: "web-development" },
    ],
    faqs: [
      { q: "Can you manage CCTV and IT across multiple sites?", a: "Yes. We standardise CCTV and networking across your locations and bring them under one AMC, so you get consistent setups and a single point of accountability." },
      { q: "Can we view all our sites' cameras in one place?", a: "Yes. We can configure centralised and mobile viewing so your team can monitor multiple sites from one dashboard or phone." },
      { q: "How quickly can you set up IT at a new sales office?", a: "We mobilise quickly to set up networking, internet, workstations and CCTV at new offices or site cabins, so your team is operational fast." },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
