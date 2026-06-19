export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 rounded-full bg-lavender">
      <div className="h-2 rounded-full bg-brand-700" style={{ width: `${value}%` }} />
    </div>
  );
}
