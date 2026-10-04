export const label = "font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted";
export const chip = "rounded-full border border-line px-2.5 py-1 font-mono text-[12.5px] text-muted";
export const card = "rounded-xl border border-line bg-surface";
export const button = "inline-block rounded-lg border border-line px-[18px] py-[11px] font-semibold hover:border-accent";
export const primaryButton = "inline-block rounded-lg border border-accent bg-accent px-[18px] py-[11px] font-semibold text-bg hover:brightness-110";

export function External({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

/** Page header: eyebrow label, the page's single h1, and an optional intro line. */
export function PageHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="grid gap-3 pb-10 pt-14 sm:pt-16">
      <span className={label}>{eyebrow}</span>
      <h1 className="text-[clamp(32px,5vw,44px)] font-bold leading-tight tracking-tight">{title}</h1>
      {intro && <p className="max-w-[62ch] text-[17px] text-muted">{intro}</p>}
    </header>
  );
}

export function SubHead({ title, id }: { title: string; id: string }) {
  return <h2 id={id} className="text-2xl font-bold tracking-tight">{title}</h2>;
}
