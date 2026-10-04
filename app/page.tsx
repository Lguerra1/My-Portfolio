import CopyEmail from "@/components/CopyEmail";
import { about, caseStudies, credentials, experience, invoiceDesk, profile, skills } from "@/content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#invoicedesk", label: "InvoiceDesk" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const label = "font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted";
const chip = "rounded-full border border-line px-2.5 py-1 font-mono text-[12.5px] text-muted";
const card = "rounded-xl border border-line bg-surface";

function External({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function SectionHead({ eyebrow, title, id, intro }: { eyebrow: string; title: string; id: string; intro?: string }) {
  return (
    <div className="grid gap-2">
      <span className={label}>{eyebrow}</span>
      <h2 id={id} className="text-[28px] font-bold leading-tight tracking-tight">{title}</h2>
      {intro && <p className="max-w-[62ch] text-muted">{intro}</p>}
    </div>
  );
}

const section = "grid gap-7 border-t border-line py-14";

export default function Home() {
  return (
    <div className="mx-auto max-w-[980px] px-5 pb-16">
      <nav aria-label="Main" className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-6">
        <span className="font-display text-lg font-bold">{profile.name}</span>
        <ul className="flex flex-wrap gap-5 text-sm">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-muted hover:text-fg">{n.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <header className="grid gap-6 py-16 sm:py-20">
          <span className={label}>{profile.title} · {profile.location}</span>
          <h1 className="text-[clamp(36px,6vw,60px)] font-bold leading-[1.05] tracking-tight">
            {profile.headline} <span className="text-accent">{profile.headlineAccent}</span>
          </h1>
          <p className="max-w-[62ch] text-[19px] text-muted">{profile.lede}</p>
          <ul className="flex flex-wrap gap-2" aria-label="Core technologies">
            {profile.chips.map((c) => <li key={c} className={chip}>{c}</li>)}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="rounded-lg border border-accent bg-accent px-[18px] py-[11px] font-semibold text-bg hover:brightness-110">See my work</a>
            <External href={profile.linkedin} className="rounded-lg border border-line px-[18px] py-[11px] font-semibold hover:border-accent">LinkedIn</External>
            <External href={profile.github} className="rounded-lg border border-line px-[18px] py-[11px] font-semibold hover:border-accent">GitHub</External>
          </div>
        </header>

        <section aria-labelledby="about-h" className={section}>
          <SectionHead eyebrow="About" title={about.heading} id="about-h" />
          <div className="grid max-w-[66ch] gap-4 text-[17px]">
            {about.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>
        </section>

        <section id="work" aria-labelledby="work-h" className={section}>
          <SectionHead
            eyebrow="Selected work"
            title="Production work in regulated FinTech"
            id="work-h"
            intro="This code is proprietary, so these are written summaries of what I built and how."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.title} className={`${card} grid min-w-0 content-start gap-3.5 p-6`}>
                <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-accent">{c.area}</span>
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="text-[15px] text-muted">{c.summary}</p>
                <dl className="grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-1.5 text-sm">
                  <dt className="pt-0.5 font-mono text-xs text-muted">Role</dt><dd>{c.role}</dd>
                  <dt className="pt-0.5 font-mono text-xs text-muted">Stack</dt><dd>{c.stack}</dd>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="invoicedesk" aria-labelledby="cap-h" className={section}>
          <SectionHead eyebrow="Featured project" title="InvoiceDesk" id="cap-h" />
          <div className={`${card} grid gap-8 p-6 md:grid-cols-[1.3fr_1fr] md:p-7`}>
            <div className="grid min-w-0 content-start gap-3.5">
              {invoiceDesk.summary.map((p) => <p key={p.slice(0, 24)} className="text-muted">{p}</p>)}
              <ul className="flex flex-wrap gap-2" aria-label="InvoiceDesk stack">
                {invoiceDesk.stack.map((s) => <li key={s} className={chip}>{s}</li>)}
              </ul>
              <p className="border-l-2 border-line pl-3 text-[13.5px] text-muted">{invoiceDesk.note}</p>
            </div>
            <figure className="m-0 grid min-w-0 content-start gap-2 font-mono text-[13px]" aria-label="InvoiceDesk architecture">
              {invoiceDesk.architecture.map((n, i) => (
                <div key={n.name} className="grid gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-center leading-none text-muted">↓</span>}
                  <div className="rounded-lg border border-line bg-accent/10 px-3 py-2.5">
                    <b className="font-medium">{n.name}</b>
                    <span className="block text-xs text-muted">{n.detail}</span>
                  </div>
                </div>
              ))}
              <div className="rounded-lg border border-dashed border-line px-3 py-2.5">
                <b className="font-medium">{invoiceDesk.deploy.name}</b>
                <span className="block text-xs text-muted">{invoiceDesk.deploy.detail}</span>
              </div>
            </figure>
          </div>
        </section>

        <section id="experience" aria-labelledby="exp-h" className={section}>
          <SectionHead eyebrow="Experience" title="Where I've worked" id="exp-h" />
          <ol className="grid">
            {experience.map((j) => (
              <li key={j.company} className="grid gap-1.5 border-b border-line py-5 first:pt-0 sm:grid-cols-[170px_1fr] sm:gap-5">
                <span className="font-mono text-[13px] tabular-nums text-muted">{j.when}</span>
                <div className="grid min-w-0 gap-2">
                  <h3 className="text-xl font-bold">{j.company}</h3>
                  <span className="text-[15px] text-muted">{j.role}</span>
                  <ul className="grid list-disc gap-1 pl-[18px] text-[15px] text-muted">
                    {j.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" aria-labelledby="skills-h" className={section}>
          <SectionHead eyebrow="Skills" title="What I work with" id="skills-h" />
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="grid min-w-0 gap-2">
                <h3 className="text-xl font-bold">{s.group}</h3>
                <p className="text-[15px] text-muted">{s.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="creds-h" className={section}>
          <SectionHead eyebrow="Education and certifications" title="Credentials" id="creds-h" />
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c.name} className="flex justify-between gap-4 border-b border-line py-3 text-[15px]">
                <span>{c.name}</span>
                <span className="whitespace-nowrap font-mono text-[13px] tabular-nums text-muted">{c.year}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-h" className={section}>
          <SectionHead eyebrow="Contact" title="Let's talk" id="contact-h" intro="I'm open to software engineering roles in Utah or remote." />
          <div className="grid gap-2.5 text-[17px]">
            <CopyEmail email={profile.email} />
            <External href={profile.linkedin} className="text-accent hover:underline">linkedin.com/in/larry-guerra</External>
            <External href={profile.github} className="text-accent hover:underline">github.com/Lguerra1</External>
          </div>
        </section>
      </main>

      <footer className="border-t border-line pt-8 text-[13px] text-muted">
        © 2026 {profile.name} · Built with Next.js, TypeScript, and Tailwind CSS · Tested with Playwright
      </footer>
    </div>
  );
}
