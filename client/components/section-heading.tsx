export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">{description}</p>
    </div>
  );
}
