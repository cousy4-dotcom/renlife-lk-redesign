import { Bell, Search } from 'lucide-react';
import { client } from '@/data/mock';

export function TopBar() {
  return (
    <header className="mb-4 flex min-h-[64px] items-center justify-between gap-3 rounded-[1.35rem] bg-white/85 px-4 py-2.5 shadow-card backdrop-blur md:min-h-[68px] md:px-5">
      <div>
        <p className="text-[11px] font-semibold tracking-[.16em] text-slate-400">Ренессанс Жизнь</p>
        <h1 className="text-lg font-black text-brand-900 md:text-2xl">{client.name}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="hidden h-10 w-10 place-items-center rounded-2xl bg-lavender text-brand-900 sm:grid" aria-label="Поиск">
          <Search size={18} />
        </button>
        <button className="grid h-10 w-10 place-items-center rounded-2xl bg-lavender text-brand-900" aria-label="Уведомления">
          <Bell size={18} />
        </button>
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-900 text-sm font-black text-cta">{client.initials}</div>
      </div>
    </header>
  );
}
