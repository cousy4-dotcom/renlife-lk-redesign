import { Inbox } from 'lucide-react';import { Card } from './Card';
export function EmptyState({ title }: { title: string }) { return <Card className="grid place-items-center py-12 text-center text-slate-500"><Inbox/><b className="mt-3 text-brand-900">{title}</b><p>Здесь появится информация, когда она станет доступна.</p></Card>; }
