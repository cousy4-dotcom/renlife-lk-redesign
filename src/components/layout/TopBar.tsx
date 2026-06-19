import { Bell, Search } from 'lucide-react';
import { client } from '@/data/mock';

export function TopBar() {
  return (
    <header className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Личный кабинет</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">{client.firstName}, всё под контролем</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="hidden rounded-2xl bg-white p-2.5 text-brand-900 shadow-card sm:block" aria-label="Поиск">
          <Search size={19} />
        </button>
        <button className="rounded-2xl bg-white p-2.5 text-brand-900 shadow-card" aria-label="Уведомления">
          <Bell size={19} />
        </button>
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-900 text-sm font-bold text-cta sm:h-11 sm:w-11">
          {client.initials}
        </div>
      </div>
    </header>
  );
}
