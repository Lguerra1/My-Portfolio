// All site copy lives here so it can be edited without touching layout code.

export const profile = {
  name: "Larry Guerra",
  title: "Full stack software engineer",
  location: "Utah",
  email: "larryemanuelguerra@gmail.com",
  linkedin: "https://www.linkedin.com/in/larry-guerra",
  github: "https://github.com/Lguerra1",
  resume: "/Larry_Guerra_Resume.pdf",
  photo: "/larry-guerra.jpg",
  headline: "I build the customer side of",
  headlineAccent: "lending and payments software.",
  lede:
    "Seven plus years shipping production web applications in FinTech and SaaS. I lead features end to end in Angular, TypeScript, and .NET, from technical design through release, inside regulated financial workflows.",
  chips: ["Angular", "TypeScript", "C# / .NET", "React", "SQL Server", "PostgreSQL", "Web performance", "English / Spanish"],
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
  { value: "45%+", label: "lighter mobile pages" },
];

export type CaseStudy = { area: string; title: string; summary: string; role: string; stack: string; featured: boolean };

export const caseStudies: CaseStudy[] = [
  {
    area: "Performance",
    title: "Cutting page weight across the consumer sites",
    summary:
      "Replaced an always loaded third party chat SDK with click to load delivery through Google Tag Manager, cutting mobile page weight 45 to 60% and Total Blocking Time 53 to 62% across the consumer lending website and the members portal. I built a scripted Lighthouse benchmark first so the gain was measured rather than assumed, then locked the paid live agent chat to company domains and fixed broken header chat icons.",
    role: "Engineer",
    stack: "Google Tag Manager, Lighthouse, Core Web Vitals, JavaScript",
    featured: true,
  },
  {
    area: "Merchant tools",
    title: "Scryp merchant portal",
    summary:
      "Built the merchant experience from the ground up: multi-step onboarding, login, password reset, a cart builder with tax math and loan-term selection, refunds and returns, document uploads, and role-based permissions.",
    role: "Front end engineer",
    stack: "Angular, TypeScript, .NET WebAPI, SQL Server",
    featured: true,
  },
  {
    area: "Lending",
    title: "Scryp customer application",
    summary:
      "Delivered the customer loan application end to end: personal and financial info, review, e-sign consent, a repeat-customer flow, Text-to-Apply, payment schedules, and the customer dashboard MVP.",
    role: "Front end engineer",
    stack: "Angular, TypeScript, .NET WebAPI",
    featured: false,
  },
  {
    area: "Onboarding",
    title: "Identity verification with Jumio",
    summary:
      "Led the integration of Jumio ID verification into new and repeat customer flows on both products, with an embedded iFrame, failure handling, state and risk-based routing, and results fed back into the decision engine.",
    role: "Front end lead",
    stack: "Angular, ASP.NET Web Forms, .NET Core WebAPI, Jumio",
    featured: true,
  },
  {
    area: "Lending",
    title: "Online title lending",
    summary:
      "Brought title loans online: vehicle photo and title uploads, VIN validation through Kelley Blue Book, a repeat-customer vehicle selector, and a title lead funnel with API validation and prefilled hand-off to the full application.",
    role: "Engineer",
    stack: "ASP.NET Web Forms, C#, .NET Core WebAPI",
    featured: true,
  },
  {
    area: "Payments",
    title: "Real time payments: instant funding",
    summary:
      "Integrated a real time payments API so loans fund instantly across every application and refinance flow, with error handling and UX for in-flight transactions.",
    role: "Front end engineer",
    stack: "ASP.NET Web Forms, .NET Core WebAPI, Real-Time Payments API",
    featured: true,
  },
  {
    area: "Platform",
    title: "Member dashboard redesign",
    summary:
      "Rebuilt the member dashboard on a new master-page framework with a responsive menu and card-based layout, including status-driven cards for active, pending, funding, default, and settlement states, rolled out behind feature flags.",
    role: "Engineer",
    stack: "ASP.NET Web Forms, C#, SQL Server",
    featured: false,
  },
  {
    area: "Growth",
    title: "Online lead funnel and prescreen",
    summary:
      "Built a lead-generation application and prescreen approval flow with anti-bot protection, an invisible captcha, and source tracking.",
    role: "Development lead",
    stack: "ASP.NET Web Forms, JavaScript, HTMX",
    featured: false,
  },
  {
    area: "Collections",
    title: "Multi-debt payment plans",
    summary:
      "Let customers combine several debts into one payment plan: debt selection, plan calculation, schedule generation, dashboard plan cards, and self-cure integration.",
    role: "Engineer",
    stack: "ASP.NET Web Forms, .NET Core WebAPI, SQL Server",
    featured: false,
  },
  {
    area: "Platform",
    title: "Component library and design system",
    summary:
      "Built and standardized reusable Angular components and design system patterns, improving WCAG accessibility and visual consistency across the product suite.",
    role: "Engineer and maintainer",
    stack: "Angular, SASS, WCAG",
    featured: false,
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

export type SideProject = {
  name: string;
  eyebrow: string;
  summary: string;
  detail: string;
  stack: string[];
  live: string;
  repo: string;
};

export const sideProjects: SideProject[] = [
  {
    name: "Santaquin Seaside Retreat",
    eyebrow: "Live site",
    summary:
      "A marketing site for a short term rental, hand built with plain HTML, CSS, and JavaScript. No framework and no build step. Photo gallery, amenities, FAQ, a separate nearby attractions page, and booking hand off to the Airbnb listing.",
    detail:
      "Built as progressive enhancement: the mobile nav toggle drives aria-expanded, and scroll reveals run on IntersectionObserver with a fallback that shows every section when it isn't available, so the page still reads correctly with JavaScript off.",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    live: "https://staysantaquin.com",
    repo: "https://github.com/Lguerra1/santaquin-seaside-retreat",
  },
];

export type Job = { when: string; company: string; role: string; points: string[] };

export const experience: Job[] = [
  {
    when: "Mar 2021 to now",
    company: "Softwise · Lehi, UT",
    role: "Software Engineer",
    points: [
      "Own end to end feature delivery across two consumer lending products: Scryp, built in Angular and TypeScript, and Check City Online, built on ASP.NET Web Forms (C#) with a .NET Core Web API, both on SQL Server.",
      "Cut mobile page weight 45 to 60% and Total Blocking Time 53 to 62% across the consumer lending website and members portal by moving an always loaded third party chat SDK to click to load delivery through Google Tag Manager, proven with a scripted Lighthouse benchmark.",
      "Delivered 430+ user stories, resolved 215+ production bugs, and led 15+ product initiatives, including Jumio identity verification, real time payments, and online title lending.",
      "Built the Scryp merchant portal and customer loan application from the ground up, and led the Check City Online member dashboard redesign and profile page.",
      "Authored the architecture decisions for HTMX standards and Tailwind v4 adoption in a Web Forms to ASP.NET Core MVC migration, removing ~83,000 lines of vendored front end code and ~90 KB of jQuery.",
      "Diagnose and fix production issues with Raygun monitoring.",
      "Mentor junior developers through code review and pairing.",
    ],
  },
  {
    when: "Jan 2019 to Mar 2021",
    company: "BrightBridge Web · Provo, UT",
    role: "Software Engineer",
    points: [
      "Delivered full stack SaaS platforms for clients with React, .NET, and PostgreSQL.",
      "Built the complete Node.js and Express backend for a note taking app, using WebSockets for real time sync so a customer's session updated instantly on every device with the app open.",
      "Built the app's rich text (WYSIWYG) editor with the TinyMCE React library.",
      "Served as primary technical contact for client stakeholders.",
    ],
  },
];

export const skills = [
  { group: "Front end", items: "Angular, TypeScript, JavaScript, React, Next.js, Redux, HTML, CSS, SASS, Bootstrap, HTMX, Tailwind CSS, jQuery" },
  { group: "Back end and data", items: "C#, ASP.NET Web Forms, .NET Core, WebAPI, .NET MVC, Node.js, Express, SQL Server, T-SQL, EF Core, Dapper, PostgreSQL, REST, WebSockets" },
  { group: "UI and accessibility", items: "Design systems, reusable components, WCAG, responsive UI, cross browser compatibility, Material UI, Figma to UI" },
  { group: "Web performance", items: "Google Tag Manager, Lighthouse, Core Web Vitals, third party script optimization, page weight and blocking time analysis, SEO" },
  { group: "Delivery and testing", items: "Git, GitHub, Bitbucket, GitHub Actions, Playwright, Docker, AWS ECS, Netlify, Raygun, Postman, Jira, Confluence, Agile/Scrum, feature flags" },
  { group: "Integrations", items: "Jumio identity verification, Zions Bank real time payments, Kelley Blue Book VIN validation, banking partner APIs, Prove phone verification, Brevo, NeverBounce, Trustpilot, Zoom Chat, GrowSurf, Lottie" },
  { group: "AI assisted development", items: "Claude, ChatGPT, and Cursor for development, debugging, and code review" },
];

export const credentials = [
  { name: "B.S. Software Engineering, WGU · Honors Society", year: "2026" },
  { name: "ITIL 4 Foundation", year: "2025" },
  { name: "CompTIA Project+", year: "2025" },
  { name: "Certified Scrum Product Owner", year: "2024" },
  { name: "AWS Certified Cloud Practitioner", year: "2024" },
  { name: "Front End Developer Certificate, WGU", year: "2024" },
  { name: "Full Stack Web Development Bootcamp, DevMountain", year: "2018" },
];
