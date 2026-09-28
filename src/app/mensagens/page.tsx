import { messages } from "@/data/messages";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { MessageCard } from "@/components/MessageCard";

export default function MensagensPage() {
  return (
    <PageContainer>
      <SectionHeader
        kicker="Mensagens"
        title="O que ficou por dizer"
        description="Recados de quem estava lá — alunos e professores."
      />
      {messages.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {messages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </div>
      ) : (
        <p className="max-w-md font-display text-xl italic leading-snug text-ink-muted">
          Os recados da turma estão a caminho.
        </p>
      )}
    </PageContainer>
  );
}
