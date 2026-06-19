export function StatusBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
      {children}
    </span>
  );
}
