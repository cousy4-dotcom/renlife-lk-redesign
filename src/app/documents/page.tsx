import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { contracts, documents } from '@/data/mock';

const filters = ['Все', 'Полисы', 'Платежи', 'Справки', 'Заявления'];
const activeContract = contracts[0];

export default function Documents() {
  return (
    <AppShell>
      <div className="space-y-3 md:space-y-4">
        <header>
          <h1 className="text-[24px] font-black leading-tight text-brand-900 md:text-[32px]">Документы</h1>
          <p className="mt-1 text-sm leading-5 text-slate-500 md:text-[15px]">Полисы, графики платежей, чеки и справки по вашим договорам</p>
        </header>

        <Card className="grid gap-2.5 md:grid-cols-3">
          <div className="rounded-2xl bg-lavender p-3">
            <p className="text-xs font-semibold uppercase tracking-[.12em] text-slate-400">Доступно</p>
            <p className="mt-1 text-xl font-black text-brand-900">{documents.length} документа</p>
          </div>
          <div className="rounded-2xl bg-lavender p-3">
            <p className="text-xs font-semibold uppercase tracking-[.12em] text-slate-400">Обновлено</p>
            <p className="mt-1 text-xl font-black text-brand-900">25.06.2025</p>
          </div>
          <div className="rounded-2xl bg-lavender p-3">
            <p className="text-xs font-semibold uppercase tracking-[.12em] text-slate-400">По договору</p>
            <p className="mt-1 truncate text-base font-black text-brand-900">№ {activeContract.number}</p>
          </div>
        </Card>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter, index) => <button key={filter} className={`h-8 shrink-0 rounded-full px-3.5 text-sm font-bold md:h-9 md:px-4 ${index === 0 ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card'}`}>{filter}</button>)}
        </div>

        <div className="grid gap-2.5 md:gap-3">{documents.map((document) => <DocumentCard key={document.id} {...document} />)}</div>
      </div>
    </AppShell>
  );
}
