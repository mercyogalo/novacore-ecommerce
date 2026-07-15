export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">{description}</p> : null}
    </div>
  );
}
