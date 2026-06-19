import { Card } from './Card';
export function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) { return <Card><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-2xl font-black text-brand-900">{value}</p><p className="mt-1 text-xs text-slate-400">{hint}</p></Card>; }
