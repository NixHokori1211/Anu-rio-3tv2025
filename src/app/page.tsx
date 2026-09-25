import Link from "next/link";
import { turma } from "@/data/turma";
import { students } from "@/data/students";
import { PhotoFrame } from "@/components/PhotoFrame";
import { NAV_LINKS } from "@/lib/nav";

export default function HomePage() {
  const highlight = students.slice(0, 6);

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-14 pb-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12 md:px-10 md:pt-20 md:pb-24">
        <div>
          <p className="font-mono text-sm text-gold-dim">
            {turma.escola} · {turma.cidade}
          </p>
          <h1 className="mt-4 text-balance font-display text-5xl leading-[1.02] text-ink md:text-6xl">
            {turma.nomeTurma}
            <span className="text-gold">, {turma.ano}</span>
          </h1>
          <p className="mt-6 max-w-md text-balance font-display text-2xl italic leading-snug text-ink-muted md:text-3xl">
            &ldquo;{turma.manifesto}&rdquo;
          </p>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-ink-muted">{turma.introducao}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/pessoas"
              className="rounded-sm border border-gold bg-gold px-5 py-2.5 font-mono text-sm text-bg transition-opacity hover:opacity-90"
            >
              Abrir o anuário
            </Link>
            <Link
              href="/linha-do-tempo"
              className="rounded-sm border border-line-strong px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Nossa história
            </Link>
          </div>
        </div>

        <PhotoFrame
          seed="foto-oficial-turma"
          label={`Foto oficial da ${turma.nomeTurma}`}
          className="group aspect-[4/5] w-full max-w-sm justify-self-center md:justify-self-end"
          rotate
        />
      </section>

      <section aria-label="Retratos da turma" className="border-y border-line bg-surface/40">
        <div className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-5 py-7 md:px-10">
          {highlight.map((student) => (
            <PhotoFrame
              key={student.id}
              seed={student.id}
              label={student.name}
              className="group aspect-[4/5] w-24 shrink-0 md:w-32"
              rotate
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <p className="mb-8 font-mono text-sm text-gold-dim">Sumário</p>
        <ol className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {NAV_LINKS.filter((l) => l.href !== "/").map((link, i) => (
            <li key={link.href} className="group bg-bg">
              <Link
                href={link.href}
                className="flex items-baseline gap-4 px-6 py-6 transition-colors hover:bg-surface"
              >
                <span className="font-mono text-sm text-ink-faint transition-colors group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl text-ink">{link.label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
