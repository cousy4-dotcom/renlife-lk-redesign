import { Download, FileText } from 'lucide-react';
import { Card } from './Card';

export function DocumentCard({ title, date, type, contract }: { title: string; date: string; type: string; contract?: string }) {
  return (
    <Card className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lavender text-brand-900"><FileText size={20} /></div>
        <div className="min-w-0">
          <b className="block truncate text-[15px] text-brand-900">{title}</b>
          <p className="text-sm text-slate-500">{type} · {date}{contract ? ` · ${contract}` : ''}</p>
        </div>
      </div>
      <button className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-lavender px-3 text-sm font-bold text-brand-900"><Download size={16} />Скачать</button>
    </Card>
  );
}
