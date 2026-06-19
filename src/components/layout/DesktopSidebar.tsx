'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { navItems } from '@/data/mock';

export function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col bg-brand-900 p-6 text-white lg:flex">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cta text-brand-900">
          <ShieldCheck size={22} />
        </div>
        <div className="text-xl font-bold leading-tight">
          Ренессанс
          <br />
          <span className="text-white/70">Жизнь</span>
        </div>
      </div>
      <nav className="space-y-1.5">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                active ? 'bg-white text-brand-900' : 'text-white/68 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={19} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-[1.5rem] bg-white/[0.08] p-4 ring-1 ring-white/10">
        <p className="text-sm font-semibold">Центр управления защитой</p>
        <p className="mt-1 text-xs leading-5 text-white/58">Договоры, платежи, документы и заявления в одном кабинете.</p>
      </div>
    </aside>
  );
}
