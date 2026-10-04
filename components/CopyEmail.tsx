"use client";

import { useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy email");
  const ref = useRef<HTMLElement>(null);

  function flash(text: string) {
    setLabel(text);
    setTimeout(() => setLabel("Copy email"), 1800);
  }

  function selectText() {
    if (!ref.current) return;
    const range = document.createRange();
    range.selectNodeContents(ref.current);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    flash("Selected");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      flash("Copied");
    } catch {
      selectText();
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <code ref={ref} className="font-mono text-[15px] select-all">{email}</code>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="rounded-lg border border-line px-3 py-1.5 text-sm font-semibold hover:border-accent"
      >
        {label}
      </button>
    </div>
  );
}
