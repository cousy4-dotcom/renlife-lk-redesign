import { Card } from './Card';
export function NotificationCard({ title, text }: { title: string; text: string }) { return <Card><b>{title}</b><p className="mt-1 text-sm text-slate-500">{text}</p></Card>; }
