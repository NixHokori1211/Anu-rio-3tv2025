import { turma, classStats } from "@/data/turma";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";

export default function TurmaPage() {
  return (
    <PageContainer>
      <SectionHeader
        kicker={`Turma · ${turma.cidade}, ${turma.ano}`}
        title={turma.nomeTurma}
        description={turma.descricao}
      />

      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-4">
        {classStats.map((stat) => (
          <div key={stat.label} className="bg-bg px-5 py-6">
            <dt className="font-mono text-xs text-ink-faint">{stat.label}</dt>
            <dd className="mt-2 font-display text-3xl text-gold">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </PageContainer>
  );
}
