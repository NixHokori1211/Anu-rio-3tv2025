import { PersonCardData } from "@/lib/people";
import { PhotoFrame } from "@/components/PhotoFrame";
import { turma } from "@/data/turma";

const yearStamp = `'${String(turma.ano).slice(-2)}`;

export function PersonCard({ person }: { person: PersonCardData }) {
  return (
    <article className="group flex flex-col rounded-sm border border-line bg-surface transition-colors hover:border-gold-dim">
      <div className="p-3 pb-1">
        <PhotoFrame
          seed={person.id}
          label={person.name}
          photo={person.photo}
          className="aspect-[4/5] w-full"
          rotate
          stamp={yearStamp}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 pt-4">
        <p className="font-mono text-xs text-gold-dim">{person.role}</p>
        <h3 className="font-display text-xl text-ink">
          {person.name}
          {person.nickname && <span className="text-ink-muted"> &ldquo;{person.nickname}&rdquo;</span>}
        </h3>
        {person.description && (
          <p className="text-sm leading-relaxed text-ink-muted">{person.description}</p>
        )}
        {person.note && (
          <p className="mt-auto border-t border-line pt-3 font-display text-base italic leading-snug text-ink">
            &ldquo;{person.note}&rdquo;
          </p>
        )}
      </div>
    </article>
  );
}
