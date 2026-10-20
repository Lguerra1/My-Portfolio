import type { Metadata } from "next";
import { caseStudies, stats } from "@/content";
import { PageHead, SubHead, card } from "@/components/ui";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  const featured = caseStudies.filter((c) => c.featured);
  const more = caseStudies.filter((c) => !c.featured);

  return (
    <>
      <PageHead
        eyebrow="Selected work"
        title="Production work in regulated FinTech"
        intro="This code is proprietary, so these are written summaries of what I built and how."
      />
      <dl className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Delivery stats">
        {stats.map((s) => (
          <div key={s.label} className={`${card} grid gap-1 p-5`}>
            <dt className="order-2 text-[13px] text-muted">{s.label}</dt>
            <dd className="order-1 text-2xl font-bold tracking-tight">{s.value}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="featured-h" className="grid gap-5">
        <SubHead title="Featured" id="featured-h" />
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((c) => (
            <article key={c.title} className={`${card} grid min-w-0 content-start gap-3.5 p-6`}>
              <span className="font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-accent">{c.area}</span>
              <h2 className="text-xl font-bold">{c.title}</h2>
              <p className="text-[15px] text-muted">{c.summary}</p>
              <dl className="grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-1.5 text-sm">
                <dt className="pt-0.5 font-mono text-xs text-muted">Role</dt><dd>{c.role}</dd>
                <dt className="pt-0.5 font-mono text-xs text-muted">Stack</dt><dd>{c.stack}</dd>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="more-h" className="grid gap-5 pt-14">
        <SubHead title="Also shipped" id="more-h" />
        <ul className="grid">
          {more.map((c) => (
            <li key={c.title} className="grid gap-1.5 border-b border-line py-5 first:pt-0 sm:grid-cols-[1fr_220px] sm:gap-5">
              <div className="grid min-w-0 gap-1.5">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent">{c.area}</span>
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="text-[14.5px] text-muted">{c.summary}</p>
              </div>
              <span className="font-mono text-[12.5px] text-muted sm:pt-6 sm:text-right">{c.stack}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
