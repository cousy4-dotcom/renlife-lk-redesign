import { FileText } from 'lucide-react';import { Card } from './Card';
export function DocumentCard({ title, date, type }: { title: string; date: string; type: string }) { return <Card className="flex items-center gap-3"><FileText className="text-brand-900"/><div><b>{title}</b><p className="text-sm text-slate-500">{type} · {date}</p></div></Card>; }
