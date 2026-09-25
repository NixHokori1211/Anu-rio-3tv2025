import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-line bg-bg/90 backdrop-blur md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          Anuário <span className="text-gold">3º B</span>
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-7 font-mono text-[13px] text-ink-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-gold hover:after:scale-x-100 focus-visible:text-gold focus-visible:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
