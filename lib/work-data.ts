export type Project = {
  n: string;
  type: string;
  title: string;
  body: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    n: "01",
    type: "AI · WEB APP",
    title: "Contract intelligence, turned into a working product.",
    body: "A central platform that organises contracts and surfaces key dates and clauses with AI — reducing manual tracking and making information searchable.",
    problem: "A client was tracking contracts manually across documents and spreadsheets, making it easy to miss renewal dates and key clauses.",
    solution: "We designed and built a central web application that stores contracts and uses AI to surface key dates, terms and clauses — with a clean, searchable interface.",
    outcome: "A single source of truth for contracts that reduces manual tracking effort and the risk of missed dates. (Specific metrics available on request.)",
    tags: ["Full-stack", "AI", "UI/UX"],
  },
  {
    n: "02",
    type: "INFRASTRUCTURE",
    title: "An office that was ready from day one.",
    body: "Workstations, structured networking, internet, CCTV and support brought together as one dependable setup instead of a collection of disconnected vendors.",
    problem: "A business needed its new office fully operational from day one — without coordinating multiple separate vendors.",
    solution: "We delivered the office IT end to end: workstations, structured network cabling, internet and connectivity, and ongoing support — planned, executed and documented.",
    outcome: "An office that was ready to operate on move-in day, with documented infrastructure and a single partner for ongoing support.",
    tags: ["Office IT Setup", "IT Networking", "Computer AMC"],
  },
  {
    n: "03",
    type: "PRODUCT · UK",
    title: "A people platform built around real workflows.",
    body: "A custom HRMS platform for an international client, covering core people-management workflows through a focused web experience.",
    problem: "An international client needed a custom HR management platform tailored to their people-management workflows.",
    solution: "We delivered a full-stack HRMS platform covering core HR workflows, with a clean, usable interface designed for everyday use by HR teams.",
    outcome: "A working HR platform delivered for an international client — demonstrating our ability to ship real products for demanding requirements.",
    tags: ["Web App / MVP", "Full-stack development", "UI/UX Design"],
  },
];
