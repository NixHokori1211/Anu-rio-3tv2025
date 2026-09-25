import { turma } from "@/data/turma";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-ink-faint md:flex-row md:items-center md:justify-between">
        <p className="font-mono">
          {turma.escola} — {turma.nomeTurma} · {turma.ano}
        </p>
        <p>Feito pela turma, para a turma.</p>
      </div>
    </footer>
  );
}
