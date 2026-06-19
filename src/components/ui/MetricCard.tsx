import { Card } from './Card';

export function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <Card className="p-3.5 sm:p-4">
      <p className="text-xs font-medium text-muted">{label}</p>
      <p className="mt-1.5 text-lg font-bold tracking-tight text-brand-900 sm:text-xl">{value}</p>
      <p className="mt-1 text-xs text-muted/80">{hint}</p>
    </Card>
  );
}
