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
      <div className="grid gap-4 sm:grid-cols-2">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </div>
    </PageContainer>
  );
}
