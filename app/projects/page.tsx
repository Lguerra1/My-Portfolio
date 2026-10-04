import type { Metadata } from "next";
import { invoiceDesk } from "@/content";
import { PageHead, SubHead, card, chip, label } from "@/components/ui";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHead eyebrow="Projects" title="Things I've built on my own" intro="Personal and academic projects I designed, built, and deployed end to end." />
      <article aria-labelledby="invoicedesk-h" className={`${card} grid gap-8 p-6 md:grid-cols-[1.3fr_1fr] md:p-7`}>
        <div className="grid min-w-0 content-start gap-3.5">
          <span className={label}>Featured · WGU capstone</span>
          <SubHead title="InvoiceDesk" id="invoicedesk-h" />
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
      </article>
    </>
  );
}
