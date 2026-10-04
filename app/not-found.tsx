import Link from "next/link";
import { PageHead, primaryButton } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHead eyebrow="404" title="This page doesn't exist" intro="The link may be old or mistyped." />
      <Link href="/" className={primaryButton}>Go to the home page</Link>
    </>
  );
}
