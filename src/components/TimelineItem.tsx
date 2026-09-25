import { TimelineEvent } from "@/lib/types";

export function TimelineItem({
  event,
  isLast,
  milestone,
}: {
  event: TimelineEvent;
  isLast?: boolean;
  milestone?: boolean;
}) {
  return (
    <li className="relative flex gap-5 pb-10 pl-2 last:pb-0">
      {!isLast && <span className="absolute left-[7px] top-5 h-full w-px bg-line-strong" aria-hidden />}
      <span
        className={`relative mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 ${
          milestone ? "border-gold bg-gold" : "border-gold bg-bg"
        }`}
        aria-hidden
      />
      <div>
        <p className="font-mono text-xs text-gold-dim">{event.date}</p>
        <h3
          className={`mt-1 font-display leading-snug text-ink ${
            milestone ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {event.title}
        </h3>
        <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-muted">{event.description}</p>
      </div>
    </li>
  );
}
