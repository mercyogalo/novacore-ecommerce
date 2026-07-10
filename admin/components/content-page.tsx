export function AdminPageHeader({
  eyebrow,
  title,
  description,
  actions
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted-foreground)]">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold text-[var(--foreground)]">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">{description}</p>
      </div>
      {actions ? <div className="flex gap-3">{actions}</div> : null}
    </div>
  );
}

export function ContentPage({
  title,
  description,
  items,
  children
}: {
  title: string;
  description: string;
  items?: string[];
  children?: React.ReactNode;
}) {
  return (
    <main className="container py-10">
      <AdminPageHeader eyebrow="Admin" title={title} description={description} />
      {children}
      {items ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="card p-6 text-sm text-[var(--foreground)]">
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
