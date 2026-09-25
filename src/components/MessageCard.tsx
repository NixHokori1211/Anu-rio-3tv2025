import { Message } from "@/lib/types";
import { PhotoFrame } from "@/components/PhotoFrame";

export function MessageCard({ message }: { message: Message }) {
  return (
    <article className="flex gap-4 rounded-sm border border-line bg-surface p-5">
      <PhotoFrame
        seed={message.author}
        label={message.author}
        photo={message.photo}
        className="h-14 w-14 shrink-0"
        shape="circle"
      />
      <div>
        <p className="text-sm leading-relaxed text-ink">&ldquo;{message.content}&rdquo;</p>
        <p className="mt-3 font-mono text-xs text-ink-faint">
          {message.author} · {message.relation}
        </p>
      </div>
    </article>
  );
}
