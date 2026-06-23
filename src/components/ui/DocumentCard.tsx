import { Download, FileText } from 'lucide-react';
import { Card } from './Card';

export function DocumentCard({ title, date, type, contract, category, size }: { title: string; date: string; type: string; contract?: string; category?: string; size?: string }) {
  return (
    <Card className="flex items-center justify-between gap-3 py-3.5 md:py-4">
      <div className="flex min-w-0 items-center gap-3 md:gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[1.15rem] bg-lavender text-brand-900"><FileText size={19} /></div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {category ? <span className="rounded-full bg-lime-100 px-2 py-0.5 text-[11px] font-extrabold text-brand-900 ring-1 ring-lime-200">{category}</span> : null}
            <span className="text-xs font-semibold text-slate-400">{type}{size ? ` · ${size}` : ''}</span>
          </div>
          <b className="mt-1 block truncate text-[15px] font-extrabold text-brand-900 md:text-base">{title}</b>
          <p className="truncate text-xs leading-5 text-slate-500 md:text-sm">{date}{contract ? ` · ${contract}` : ''}</p>
        </div>
      </div>
      <button className="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-brand-900 px-3 text-xs font-bold text-white transition hover:bg-brand-900/90 md:h-10 md:px-4"><Download size={14} />Скачать</button>
    </Card>
  );
}
