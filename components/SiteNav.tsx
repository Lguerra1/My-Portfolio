"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const pages = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav({ name }: { name: string }) {
  const path = usePathname()?.replace(/\/$/, "") || "/";
  return (
    <nav aria-label="Main" className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-6">
      <Link href="/" className="font-display text-lg font-bold text-fg" aria-current={path === "/" ? "page" : undefined}>
        {name}
      </Link>
      <ul className="flex flex-wrap gap-5 text-sm">
        {pages.map((p) => {
          const active = path === p.href;
          return (
            <li key={p.href}>
              <Link
                href={p.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-fg underline decoration-accent decoration-2 underline-offset-8" : "text-muted hover:text-fg"}
              >
                {p.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
