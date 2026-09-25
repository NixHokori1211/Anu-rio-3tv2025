"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Move focus into the panel when it opens, so a keyboard user isn't left
  // behind on the (now visually replaced) toggle button.
  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    }
  }, [open]);

  // Escape closes the menu and returns focus to the toggle button, same as
  // clicking it would.
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-bg/95 px-5 py-4 backdrop-blur">
        <Link href="/" className="font-display text-lg text-ink" onClick={() => setOpen(false)}>
          Anuário <span className="text-gold">3º B</span>
        </Link>
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </header>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegação principal"
          className="fixed inset-x-0 top-[61px] bottom-0 z-30 overflow-y-auto bg-bg px-5 py-6"
        >
          <p className="mb-4 font-mono text-xs text-ink-faint">Sumário</p>
          <ol className="divide-y divide-line">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-display text-2xl text-ink"
                >
                  <span className="font-mono text-sm text-gold-dim">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
}
