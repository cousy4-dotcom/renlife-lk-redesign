import { Card } from './Card';

export function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <Card className="p-3">
      <p className="text-[11px] font-medium text-muted">{label}</p>
      <p className="mt-1 text-base font-bold tracking-tight text-brand-900 sm:text-lg">{value}</p>
      <p className="mt-0.5 text-[11px] text-muted/80">{hint}</p>
    </Card>
  );
}
