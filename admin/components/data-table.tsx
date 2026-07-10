export function DataTable({ headers, rows }: { headers: string[]; rows: (string | number)[][] }) {
  return (
    <div className="data-table overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-[var(--border)] bg-[var(--muted)]/50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-5 py-4 font-medium text-[var(--muted-foreground)]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-[var(--border)] last:border-0">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-5 py-4 text-[var(--foreground)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
