import type { Metadata } from "next";
import { skills } from "@/content";
import { PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <>
      <PageHead eyebrow="Skills" title="What I work with" />
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <section key={s.group} className="grid min-w-0 content-start gap-2">
            <h2 className="text-xl font-bold">{s.group}</h2>
            <p className="text-[15px] text-muted">{s.items}</p>
          </section>
        ))}
      </div>
    </>
  );
}
