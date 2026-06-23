import { Bell } from 'lucide-react';
import { Card } from './Card';
import type { ElementType } from 'react';

const statusStyles: Record<string, string> = {
  Важно: 'bg-rose-50 text-rose-700 ring-1 ring-rose-100',
  Новое: 'bg-lavender text-brand-900 ring-1 ring-brand-900/5',
  Готово: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
};

export function NotificationCard({ title, text, type = 'Событие', date = 'Сегодня', status = 'Новое', icon: Icon = Bell }: { title: string; text: string; type?: string; date?: string; status?: string; icon?: ElementType }) {
  return (
    <Card className="flex gap-2.5 md:gap-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-[1rem] bg-lavender text-brand-900 md:h-10 md:w-10"><Icon size={17} /></div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400"><span>{type}</span><span>·</span><span>{date}</span><span className={`rounded-full px-2 py-0.5 font-extrabold ${statusStyles[status] ?? statusStyles['Новое']}`}>{status}</span></div>
        <b className="mt-1 block text-sm font-extrabold text-brand-900 md:text-[15px]">{title}</b>
        <p className="mt-0.5 text-sm leading-5 text-slate-500">{text}</p>
      </div>
    </Card>
  );
}
