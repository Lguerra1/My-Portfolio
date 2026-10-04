import Link from "next/link";
import { about, profile } from "@/content";
import { External, SubHead, button, card, chip, label, primaryButton } from "@/components/ui";

const next = [
  { href: "/work", title: "Work", text: "Six production projects from regulated lending and payments." },
  { href: "/projects", title: "Projects", text: "InvoiceDesk, a full stack app deployed with Docker on AWS." },
  { href: "/experience", title: "Experience", text: "Work history, education, and certifications." },
];

export default function Home() {
  return (
    <>
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
          <Link href="/work" className={primaryButton}>See my work</Link>
          <External href={profile.linkedin} className={button}>LinkedIn</External>
          <External href={profile.github} className={button}>GitHub</External>
        </div>
      </header>

      <section aria-labelledby="about-h" className="grid gap-6 border-t border-line py-14">
        <div className="grid gap-2">
          <span className={label}>About</span>
          <SubHead title={about.heading} id="about-h" />
        </div>
        <div className="grid max-w-[66ch] gap-4 text-[17px]">
          {about.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        </div>
      </section>

      <section aria-labelledby="next-h" className="grid gap-6 border-t border-line pt-14">
        <SubHead title="Explore" id="next-h" />
        <ul className="grid gap-4 sm:grid-cols-3">
          {next.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className={`${card} grid h-full gap-2 p-5 hover:border-accent`}>
                <span className="font-display text-lg font-bold">{n.title} <span aria-hidden="true" className="text-accent">→</span></span>
                <span className="text-[15px] text-muted">{n.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
