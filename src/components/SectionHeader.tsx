type SectionHeaderProps = {
  kicker?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-10 max-w-2xl md:mb-14">
      {kicker && <p className="mb-3 font-mono text-sm text-gold-dim">{kicker}</p>}
      <h1 className="text-balance font-display text-4xl leading-[1.05] text-ink md:text-5xl">{title}</h1>
      {description && <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">{description}</p>}
    </header>
  );
}
