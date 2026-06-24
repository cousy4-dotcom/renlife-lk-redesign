import { Download, FileText } from 'lucide-react';
import { Card } from './Card';

const categoryStyles: Record<string, string> = {
  Полисы: 'bg-brand-900 text-white ring-brand-900/10',
  Платежи: 'bg-lime-100 text-brand-900 ring-lime-200',
  Справки: 'bg-sky-50 text-sky-700 ring-sky-100',
  Заявления: 'bg-violet-50 text-violet-700 ring-violet-100',
};

export function DocumentCard({ title, date, type, contract, category, size }: { title: string; date: string; type: string; contract?: string; category?: string; size?: string }) {
  const categoryClass = category ? (categoryStyles[category] ?? 'bg-lavender text-brand-900 ring-brand-900/5') : '';

  return (
    <Card className="flex flex-col gap-2.5 py-3 sm:flex-row sm:items-center sm:justify-between md:py-3">
      <div className="flex min-w-0 items-start gap-3 md:items-center">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-[0.95rem] bg-lavender text-brand-900"><FileText size={17} /></div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {category ? <span className={`rounded-full px-2 py-0.5 text-[10.5px] font-extrabold ring-1 ${categoryClass}`}>{category}</span> : null}
            <span className="text-xs font-semibold text-slate-400">{type}{size ? ` · ${size}` : ''}</span>
          </div>
          <b className="mt-1 block overflow-hidden text-ellipsis text-[15px] font-extrabold leading-5 text-brand-900">{title}</b>
          <p className="text-xs leading-5 text-slate-500">{date}{contract ? ` · ${contract}` : ''}</p>
        </div>
      </div>
      <button className="flex min-h-9 w-full shrink-0 items-center justify-center gap-1.5 rounded-xl border border-brand-900/10 bg-lavender px-3 text-xs font-bold text-brand-900 transition hover:bg-brand-900 hover:text-white sm:w-auto"><Download size={13} />Скачать</button>
    </Card>
  );
}
