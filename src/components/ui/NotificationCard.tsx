import { Bell } from 'lucide-react';
import { Card } from './Card';
import type { ElementType } from 'react';

export function NotificationCard({ title, text, type = 'Событие', date = 'Сегодня', status = 'Новое', icon: Icon = Bell }: { title: string; text: string; type?: string; date?: string; status?: string; icon?: ElementType }) {
  return (
    <Card className="flex gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-lavender text-brand-900"><Icon size={18} /></div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400"><span>{type}</span><span>·</span><span>{date}</span><span className="rounded-full bg-lavender px-2 py-0.5 font-bold text-brand-900">{status}</span></div>
        <b className="mt-1 block text-[15px] text-brand-900">{title}</b>
        <p className="mt-1 text-sm leading-5 text-slate-500">{text}</p>
      </div>
    </Card>
  );
}
