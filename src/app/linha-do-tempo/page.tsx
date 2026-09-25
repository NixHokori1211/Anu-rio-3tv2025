import { timeline } from "@/data/timeline";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { TimelineItem } from "@/components/TimelineItem";

function yearOf(date: string): string {
  return date.trim().split(" ").pop() ?? date;
}

export default function LinhaDoTempoPage() {
  const years = Array.from(new Set(timeline.map((event) => yearOf(event.date))));
  // Computed once, defensively — an empty timeline yields `null` instead of
  // indexing a non-existent last element, so nothing downstream needs to
  // assume the array is non-empty. For real data this is exactly the same
  // event as before, just resolved a single time instead of on every item.
  const lastEventId = timeline.length > 0 ? timeline[timeline.length - 1].id : null;

  return (
    <PageContainer>
      <SectionHeader
        kicker="Linha do tempo"
        title="Como chegamos até aqui"
        description="Do primeiro dia até a formatura."
      />

      <div className="flex max-w-2xl flex-col gap-14">
        {years.map((year) => {
          const events = timeline.filter((event) => yearOf(event.date) === year);
          return (
            <section key={year} aria-labelledby={`year-${year}`}>
              <h2 id={`year-${year}`} className="mb-6 font-mono text-sm text-ink-faint">
                {year}
              </h2>
              <ol>
                {events.map((event, i) => (
                  <TimelineItem
                    key={event.id}
                    event={event}
                    isLast={i === events.length - 1}
                    milestone={lastEventId !== null && event.id === lastEventId}
                  />
                ))}
              </ol>
            </section>
          );
        })}
      </div>
    </PageContainer>
  );
}
