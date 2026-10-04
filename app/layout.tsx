import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import { profile } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Larry Guerra | Full Stack Software Engineer", template: "%s | Larry Guerra" },
  description:
    "Full stack software engineer building lending and payments software with Angular, TypeScript, and .NET.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <div className="mx-auto flex min-h-dvh max-w-[980px] flex-col px-5 pb-12">
          <SiteNav name={profile.name} />
          <main className="flex-1 pb-14">{children}</main>
          <footer className="border-t border-line pt-8 text-[13px] text-muted">
            © 2026 {profile.name} · Built with Next.js, TypeScript, and Tailwind CSS · Tested with Playwright
          </footer>
        </div>
      </body>
    </html>
  );
}
