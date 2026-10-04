// All site copy lives here so it can be edited without touching layout code.

export const profile = {
  name: "Larry Guerra",
  title: "Full stack software engineer",
  location: "Utah",
  email: "larryemanuelguerra@gmail.com",
  linkedin: "https://www.linkedin.com/in/larry-guerra",
  github: "https://github.com/Lguerra1",
  headline: "I build the customer side of",
  headlineAccent: "lending and payments software.",
  lede:
    "Seven plus years shipping production web applications in FinTech and SaaS. I lead features end to end in Angular, TypeScript, and .NET, from technical design through release, inside regulated financial workflows.",
  chips: ["Angular", "TypeScript", "C# / .NET", "React", "SQL Server", "PostgreSQL", "English / Spanish"],
};

export const about = {
  heading: "From the fields to the sales floor to software",
  paragraphs: [
    "I grew up working in agriculture, spent seven years in sales where I coached multiple sales teams, and have been building websites since I was fifteen. In 2018 I went through a coding bootcamp and turned that hobby into a career.",
    "Today I work on lending and payments products at Softwise in Lehi. The sales years still show up in how I work: I like talking with stakeholders, translating between product and engineering, and mentoring the developers around me. I'm a bilingual first generation Mexican American, and I finished my B.S. in Software Engineering at WGU in 2026.",
  ],
};

export type CaseStudy = { area: string; title: string; summary: string; role: string; stack: string };

export const caseStudies: CaseStudy[] = [
  {
    area: "Onboarding",
    title: "Identity verification",
    summary:
      "Led the front end integration of Jumio, adding automated document and biometric identity checks to the customer onboarding flow.",
    role: "Front end lead",
    stack: "Angular, TypeScript, .NET WebAPI",
  },
  {
    area: "Payments",
    title: "Real time payments",
    summary:
      "Built the front end for real time payment processing in partnership with Zions Bank, giving customers instant transaction handling inside the platform.",
    role: "Front end engineer",
    stack: "Angular, TypeScript, banking partner APIs",
  },
  {
    area: "Platform",
    title: "Component library and design system",
    summary:
      "Built and standardized reusable Angular components and design system patterns, improving WCAG accessibility and visual consistency across the product suite.",
    role: "Engineer and maintainer",
    stack: "Angular, SASS, WCAG",
  },
  {
    area: "Lending",
    title: "Consumer lending site rebuild",
    summary:
      "Rebuilding a consumer lending website page by page with a strangler fig migration onto .NET MVC and Tailwind CSS, with new pages going live alongside the old site.",
    role: "Engineer",
    stack: ".NET MVC, Tailwind CSS",
  },
  {
    area: "Lending",
    title: "Lead ingestion funnel",
    summary:
      "Led development of a funnel that captures, validates, and routes prospective borrower data straight into the loan application pipeline.",
    role: "Development lead",
    stack: "Angular, .NET WebAPI, SQL Server",
  },
  {
    area: "Lending",
    title: "Title loan product",
    summary:
      "Delivered the complete front end flow for a new title loan product, from application intake through submission.",
    role: "Front end engineer",
    stack: "Angular, TypeScript",
  },
];

export const invoiceDesk = {
  summary: [
    "A full stack invoicing and expense management app for freelancers and small businesses who are outgrowing spreadsheets. I built it as my capstone for the B.S. in Software Engineering at WGU.",
    "I planned it in five Agile sprints, containerized it with Docker, and deployed it to AWS ECS.",
  ],
  stack: ["Angular", "C# / .NET", "PostgreSQL", "Docker", "AWS ECS"],
  note: "The live deployment is offline to avoid hosting costs. A demo video and screenshots are coming soon.",
  architecture: [
    { name: "Angular client", detail: "Invoices, expenses, dashboards" },
    { name: ".NET Web API", detail: "Business logic and auth" },
    { name: "PostgreSQL", detail: "Relational data store" },
  ],
  deploy: { name: "Docker → AWS ECS", detail: "Containerized deployment" },
};

export type Job = { when: string; company: string; role: string; points: string[] };

export const experience: Job[] = [
  {
    when: "Mar 2021 to now",
    company: "Softwise · Lehi, UT",
    role: "Software Engineer (2023 to now) · Frontend Developer (2021 to 2023)",
    points: [
      "Own end to end feature delivery for FinTech apps on Angular and .NET WebAPI with SQL Server.",
      "Led the front end for the new customer dashboard and profile page.",
      "Diagnose and fix production issues with Raygun monitoring.",
      "Mentor junior developers through code review and pairing.",
    ],
  },
  {
    when: "Jan 2019 to Mar 2021",
    company: "BrightBridge Web · Provo, UT",
    role: "Software Engineer / Project Manager",
    points: [
      "Delivered full stack SaaS platforms for clients with React, .NET, and PostgreSQL.",
      "Built the complete Node.js and Express backend for a note taking app.",
      "Served as primary technical contact for client stakeholders.",
    ],
  },
  {
    when: "2010 to 2017",
    company: "Progrexion · Provo, UT",
    role: "Sales Coach · Sales Representative · Customer Service",
    points: ["Coached multiple remote and in office sales teams."],
  },
];

export const skills = [
  { group: "Front end", items: "Angular, TypeScript, JavaScript, React, Next.js, Redux, HTML, CSS, SASS, Tailwind CSS" },
  { group: "Back end and data", items: "C#, .NET Core, WebAPI, .NET MVC, Node.js, Express, SQL Server, EF Core, Dapper, PostgreSQL, REST" },
  { group: "UI and accessibility", items: "Design systems, reusable components, WCAG, responsive UI, Figma to UI" },
  { group: "Delivery and testing", items: "Git, GitHub Actions, Playwright, Docker, AWS ECS, Netlify, Raygun, Jira, Agile/Scrum" },
  { group: "Integrations", items: "Jumio identity verification, real time payments, banking partner APIs" },
  { group: "AI assisted development", items: "Claude, ChatGPT, and Cursor for development, debugging, and code review" },
];

export const credentials = [
  { name: "B.S. Software Engineering, WGU · Honors Society", year: "2026" },
  { name: "ITIL 4 Foundation", year: "2025" },
  { name: "CompTIA Project+", year: "2025" },
  { name: "Certified Scrum Product Owner", year: "2024" },
  { name: "AWS Certified Cloud Practitioner", year: "2024" },
  { name: "Front End Developer Certificate, WGU", year: "2024" },
];
