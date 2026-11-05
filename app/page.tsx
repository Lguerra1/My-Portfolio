import Image from "next/image";
import Link from "next/link";
import { about, caseStudies, profile } from "@/content";
import { External, SubHead, button, card, chip, label, primaryButton } from "@/components/ui";

const next = [
  { href: "/work", title: "Work", text: `${caseStudies.length} production projects from regulated lending and payments.` },
  { href: "/projects", title: "Projects", text: "InvoiceDesk, a full stack app deployed with Docker on AWS." },
  { href: "/experience", title: "Experience", text: "Work history, education, and certifications." },
];

export default function Home() {
  return (
    <>
      <header className="grid items-center gap-8 py-16 sm:py-20 md:grid-cols-[1fr_auto] md:gap-12">
        <div className="grid gap-6">
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
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={button}>Resume (PDF)</a>
            <External href={profile.linkedin} className={button}>LinkedIn</External>
            <External href={profile.github} className={button}>GitHub</External>
          </div>
        </div>
        {/* Photo leads on narrow screens, sits beside the intro from md up. */}
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={400}
          height={400}
          priority
          className="order-first size-28 rounded-full border border-line object-cover sm:size-32 md:order-none md:size-44"
        />
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
