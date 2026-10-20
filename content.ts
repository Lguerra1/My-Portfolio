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

export const stats = [
  { value: "430+", label: "user stories delivered" },
  { value: "215+", label: "production bugs resolved" },
  { value: "15+", label: "product initiatives" },
  { value: "2", label: "products: Check City Online & Scryp" },
];

export type CaseStudy = { area: string; title: string; summary: string; role: string; stack: string };

export const caseStudies: CaseStudy[] = [
  {
    area: "Merchant tools",
    title: "Scryp merchant portal",
    summary:
      "Built the merchant experience from the ground up: multi-step onboarding, login, password reset, a cart builder with tax math and loan-term selection, refunds and returns, document uploads, and role-based permissions.",
    role: "Front end engineer",
    stack: "Angular, TypeScript, .NET WebAPI, SQL Server",
  },
  {
    area: "Lending",
    title: "Scryp customer application",
    summary:
      "Delivered the customer loan application end to end: personal and financial info, review, e-sign consent, a repeat-customer flow, Text-to-Apply, payment schedules, and the customer dashboard MVP.",
    role: "Front end engineer",
    stack: "Angular, TypeScript, .NET WebAPI",
  },
  {
    area: "Onboarding",
    title: "Identity verification with Jumio",
    summary:
      "Led the integration of Jumio ID verification into new and repeat customer flows on both products, with an embedded iFrame, failure handling, state and risk-based routing, and results fed back into the decision engine.",
    role: "Front end lead",
    stack: "Angular, ASP.NET Web Forms, .NET Core WebAPI, Jumio",
  },
  {
    area: "Lending",
    title: "Online title lending",
    summary:
      "Brought title loans online: vehicle photo and title uploads, VIN validation through Kelley Blue Book, a repeat-customer vehicle selector, and a title lead funnel with API validation and prefilled hand-off to the full application.",
    role: "Engineer",
    stack: "ASP.NET Web Forms, C#, .NET Core WebAPI",
  },
  {
    area: "Payments",
    title: "Real time payments: instant funding",
    summary:
      "Integrated a real time payments API so loans fund instantly across every application and refinance flow, with error handling and UX for in-flight transactions.",
    role: "Front end engineer",
    stack: "ASP.NET Web Forms, .NET Core WebAPI, Real-Time Payments API",
  },
  {
    area: "Platform",
    title: "Member dashboard redesign",
    summary:
      "Rebuilt the member dashboard on a new master-page framework with a responsive menu and card-based layout, including status-driven cards for active, pending, funding, default, and settlement states, rolled out behind feature flags.",
    role: "Engineer",
    stack: "ASP.NET Web Forms, C#, SQL Server",
  },
  {
    area: "Growth",
    title: "Online lead funnel and prescreen",
    summary:
      "Built a lead-generation application and prescreen approval flow with anti-bot protection, an invisible captcha, and source tracking.",
    role: "Development lead",
    stack: "ASP.NET Web Forms, JavaScript, HTMX",
  },
  {
    area: "Collections",
    title: "Multi-debt payment plans",
    summary:
      "Let customers combine several debts into one payment plan: debt selection, plan calculation, schedule generation, dashboard plan cards, and self-cure integration.",
    role: "Engineer",
    stack: "ASP.NET Web Forms, .NET Core WebAPI, SQL Server",
  },
  {
    area: "Platform",
    title: "Component library and design system",
    summary:
      "Built and standardized reusable Angular components and design system patterns, improving WCAG accessibility and visual consistency across the product suite.",
    role: "Engineer and maintainer",
    stack: "Angular, SASS, WCAG",
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
      "Own end to end feature delivery across two consumer lending products: Scryp, built in Angular and TypeScript, and Check City Online, built on ASP.NET Web Forms (C#) with a .NET Core Web API, both on SQL Server.",
      "Delivered 430+ user stories, resolved 215+ production bugs, and led 15+ product initiatives, including Jumio identity verification, real time payments, and online title lending.",
      "Built the Scryp merchant portal and customer loan application from the ground up, and led the Check City Online member dashboard redesign and profile page.",
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
  { group: "Front end", items: "Angular, TypeScript, JavaScript, React, Next.js, Redux, HTML, CSS, SASS, Bootstrap, HTMX, Tailwind CSS" },
  { group: "Back end and data", items: "C#, ASP.NET Web Forms, .NET Core, WebAPI, .NET MVC, Node.js, Express, SQL Server, EF Core, Dapper, PostgreSQL, REST" },
  { group: "UI and accessibility", items: "Design systems, reusable components, WCAG, responsive UI, Figma to UI" },
  { group: "Delivery and testing", items: "Git, GitHub Actions, Playwright, Docker, AWS ECS, Netlify, Raygun, Jira, Agile/Scrum, feature flags" },
  { group: "Integrations", items: "Jumio identity verification, Prove phone verification, real time payments, Kelley Blue Book VIN validation, Brevo, NeverBounce, Trustpilot, Zoom Chat, GrowSurf, Lottie" },
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
