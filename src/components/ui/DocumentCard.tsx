import { Download, FileText } from 'lucide-react';
import { Card } from './Card';

export function DocumentCard({ title, date, type, contract, category, size }: { title: string; date: string; type: string; contract?: string; category?: string; size?: string }) {
  return (
    <Card className="flex flex-col gap-3 py-3.5 sm:flex-row sm:items-center sm:justify-between md:py-4">
      <div className="flex min-w-0 items-start gap-3 md:items-center md:gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[1.05rem] bg-lavender text-brand-900 md:h-11 md:w-11 md:rounded-[1.15rem]"><FileText size={19} /></div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {category ? <span className="rounded-full bg-lime-100 px-2 py-0.5 text-[11px] font-extrabold text-brand-900 ring-1 ring-lime-200">{category}</span> : null}
            <span className="text-xs font-semibold text-slate-400">{type}{size ? ` · ${size}` : ''}</span>
          </div>
          <b className="mt-1 block overflow-hidden text-ellipsis text-[15px] font-extrabold leading-5 text-brand-900 md:text-base">{title}</b>
          <p className="text-xs leading-5 text-slate-500 md:text-sm">{date}{contract ? ` · ${contract}` : ''}</p>
        </div>
      </div>
      <button className="flex min-h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-2xl bg-brand-900 px-4 text-xs font-bold text-white transition hover:bg-brand-900/90 sm:w-auto"><Download size={14} />Скачать</button>
    </Card>
  );
}
