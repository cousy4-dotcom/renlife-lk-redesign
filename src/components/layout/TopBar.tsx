import { Bell, Search } from 'lucide-react';
import { client } from '@/data/mock';

export function TopBar() {
  return (
    <header className="mb-3 flex items-center justify-between gap-3 sm:mb-5">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Ренессанс Жизнь</p>
        <h1 className="mt-0.5 truncate text-xl font-bold tracking-tight text-brand-900 sm:text-2xl">{client.firstName}, всё под контролем</h1>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button className="hidden rounded-2xl border border-brand-900/5 bg-white p-2.5 text-brand-900 shadow-card sm:block" aria-label="Поиск">
          <Search size={18} />
        </button>
        <button className="rounded-2xl border border-brand-900/5 bg-white p-2.5 text-brand-900 shadow-card" aria-label="Уведомления">
          <Bell size={18} />
        </button>
        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-brand-900 text-xs font-bold text-cta sm:h-10 sm:w-10">
          {client.initials}
        </div>
      </div>
    </header>
  );
}
