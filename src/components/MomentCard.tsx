import { Moment } from "@/lib/types";
import { PhotoFrame } from "@/components/PhotoFrame";

export function MomentCard({ moment, index, reverse }: { moment: Moment; index: number; reverse?: boolean }) {
  return (
    <article
      className={`group grid items-center gap-6 border-b border-line pb-12 last:border-none last:pb-0 sm:grid-cols-[1fr_200px] ${
        reverse ? "sm:[&>*:first-child]:order-2 sm:[&>*:last-child]:order-1" : ""
      }`}
    >
      <div>
        <p className="font-mono text-xs text-gold-dim">
          {String(index).padStart(2, "0")} · {moment.date}
        </p>
        <h3 className="mt-2 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          {moment.title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">{moment.description}</p>
      </div>
      <PhotoFrame seed={moment.id} label={moment.title} className="aspect-[4/3] w-full" rotate />
    </article>
  );
}
