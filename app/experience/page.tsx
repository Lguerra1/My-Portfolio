import type { Metadata } from "next";
import { credentials, experience } from "@/content";
import { PageHead, SubHead } from "@/components/ui";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHead eyebrow="Experience" title="Where I've worked" />
      <ol className="grid">
        {experience.map((j) => (
          <li key={j.company} className="grid gap-1.5 border-b border-line py-5 first:pt-0 sm:grid-cols-[170px_1fr] sm:gap-5">
            <span className="font-mono text-[13px] tabular-nums text-muted">{j.when}</span>
            <div className="grid min-w-0 gap-2">
              <h2 className="text-xl font-bold">{j.company}</h2>
              <span className="text-[15px] text-muted">{j.role}</span>
              <ul className="grid list-disc gap-1 pl-[18px] text-[15px] text-muted">
                {j.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <section aria-labelledby="creds-h" className="grid gap-5 pt-14">
        <SubHead title="Education and certifications" id="creds-h" />
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {credentials.map((c) => (
            <li key={c.name} className="flex justify-between gap-4 border-b border-line py-3 text-[15px]">
              <span>{c.name}</span>
              <span className="whitespace-nowrap font-mono text-[13px] tabular-nums text-muted">{c.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
