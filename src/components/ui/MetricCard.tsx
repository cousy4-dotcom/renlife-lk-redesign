import { Card } from './Card';
export function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) { return <Card className="min-h-32"><p className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">{label}</p><p className="mt-3 text-2xl font-black text-brand-900">{value}</p><p className="mt-1 text-sm text-slate-500">{hint}</p></Card>; }
