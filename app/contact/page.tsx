import type { Metadata } from "next";
import CopyEmail from "@/components/CopyEmail";
import { profile } from "@/content";
import { External, PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHead eyebrow="Contact" title="Let's talk" intro="I'm open to software engineering roles in Utah or remote." />
      <div className="grid gap-3 text-[17px]">
        <CopyEmail email={profile.email} />
        <External href={profile.linkedin} className="text-accent hover:underline">linkedin.com/in/larry-guerra</External>
        <External href={profile.github} className="text-accent hover:underline">github.com/Lguerra1</External>
      </div>
    </>
  );
}
