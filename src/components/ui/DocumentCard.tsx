import { FileText } from 'lucide-react';
import { Card } from './Card';

export function DocumentCard({ title, date, type }: { title: string; date: string; type: string }) {
  return (
    <Card className="flex items-center gap-3 p-3.5">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-lavender text-brand-900">
        <FileText size={19} />
      </div>
      <div className="min-w-0">
        <b className="block truncate text-sm text-brand-900">{title}</b>
        <p className="text-xs text-muted">{type} · {date}</p>
      </div>
    </Card>
  );
}
