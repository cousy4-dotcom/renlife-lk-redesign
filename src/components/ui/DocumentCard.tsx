import { Download, FileText } from 'lucide-react';
import { Card } from './Card';

export function DocumentCard({ title, date, type, contract }: { title: string; date: string; type: string; contract?: string }) {
  return (
    <Card className="flex items-center justify-between gap-3 py-3 md:py-3.5">
      <div className="flex min-w-0 items-center gap-2.5 md:gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-[1rem] bg-lavender text-brand-900 md:h-10 md:w-10"><FileText size={18} /></div>
        <div className="min-w-0">
          <b className="block truncate text-sm font-extrabold text-brand-900 md:text-[15px]">{title}</b>
          <p className="truncate text-xs leading-5 text-slate-500 md:text-sm">{type} · {date}{contract ? ` · ${contract}` : ''}</p>
        </div>
      </div>
      <button className="flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-lavender px-2.5 text-xs font-bold text-brand-900 transition hover:bg-white md:h-9 md:px-3"><Download size={14} />Скачать</button>
    </Card>
  );
}
