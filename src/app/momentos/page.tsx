import { moments } from "@/data/moments";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { MomentCard } from "@/components/MomentCard";

export default function MomentosPage() {
  return (
    <PageContainer>
      <SectionHeader
        kicker="Momentos"
        title="Os que ninguém esquece"
        description="Não são fotos soltas — são as histórias que a turma vai contar de novo daqui a dez anos."
      />
      <div className="flex flex-col gap-12">
        {moments.map((moment, i) => (
          <MomentCard key={moment.id} moment={moment} index={i + 1} reverse={i % 2 === 1} />
        ))}
      </div>
    </PageContainer>
  );
}
