export function MetricCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-sm)]">
      <p className="text-sm text-[var(--muted-foreground)]">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <h3 className="text-3xl font-semibold text-[var(--foreground)]">{value}</h3>
        <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">{delta}</span>
      </div>
    </article>
  );
}
