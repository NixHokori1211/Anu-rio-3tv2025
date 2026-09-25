import { students } from "@/data/students";
import { teachers } from "@/data/teachers";
import { studentToPersonCard, teacherToPersonCard } from "@/lib/people";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { PersonCard } from "@/components/PersonCard";

export default function PessoasPage() {
  return (
    <PageContainer>
      <SectionHeader
        kicker="Pessoas"
        title="Quem fez parte disso"
        description="Alunos e professores que passaram três anos na mesma sala — ou perto dela."
      />

      <section aria-labelledby="alunos-heading" className="mb-20">
        <h2 id="alunos-heading" className="mb-6 font-mono text-sm text-gold-dim">
          Alunos
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <PersonCard key={student.id} person={studentToPersonCard(student)} />
          ))}
        </div>
      </section>

      <section aria-labelledby="professores-heading">
        <h2 id="professores-heading" className="mb-6 font-mono text-sm text-gold-dim">
          Professores
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <PersonCard key={teacher.id} person={teacherToPersonCard(teacher)} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
