import type { Metadata } from "next";
import { caseStudies } from "@/content";
import { PageHead, card } from "@/components/ui";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHead
        eyebrow="Selected work"
        title="Production work in regulated FinTech"
        intro="This code is proprietary, so these are written summaries of what I built and how."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c) => (
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
    </>
  );
}
