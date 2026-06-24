import { Bell } from 'lucide-react';
import { Card } from './Card';
import type { ElementType } from 'react';

const statusStyles: Record<string, string> = {
  Важно: 'bg-amber-50 text-amber-800 ring-1 ring-amber-100',
  Новое: 'bg-lavender text-brand-900 ring-1 ring-brand-900/5',
  Готово: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
};

export function NotificationCard({ title, text, type = 'Событие', date = 'Сегодня', status = 'Новое', icon: Icon = Bell }: { title: string; text: string; type?: string; date?: string; status?: string; icon?: ElementType }) {
  const important = status === 'Важно';

  return (
    <Card className={`relative flex gap-2.5 ${important ? 'border-amber-100 bg-amber-50/45' : ''}`}>
      <div className={`mt-1 h-full w-0.5 rounded-full ${important ? 'bg-amber-300' : 'bg-brand-900/15'}`} />
      <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-[0.95rem] ${important ? 'bg-white text-amber-700' : 'bg-lavender text-brand-900'}`}><Icon size={16} /></div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400"><span>{type}</span><span>·</span><span>{date}</span><span className={`rounded-full px-2 py-0.5 font-extrabold ${statusStyles[status] ?? statusStyles['Новое']}`}>{status}</span></div>
        <b className="mt-1 block text-sm font-extrabold text-brand-900 md:text-[15px]">{title}</b>
        <p className="mt-0.5 text-sm leading-5 text-slate-500">{text}</p>
      </div>
    </Card>
  );
}
