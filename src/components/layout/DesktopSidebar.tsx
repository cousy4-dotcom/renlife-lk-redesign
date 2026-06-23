'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/mock';

export function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-[280px] flex-col bg-brand-900 px-5 py-6 text-white lg:flex">
      <div className="mb-7 px-2">
        <p className="text-[11px] font-semibold tracking-[.18em] text-white/45">Личный кабинет</p>
        <div className="mt-2 text-[22px] font-black leading-[1.05] tracking-tight">
          Ренессанс <span className="text-cta">Жизнь</span>
        </div>
      </div>
      <nav className="space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`flex h-11 items-center gap-3 rounded-full px-4 text-[15px] font-semibold transition ${
                active ? 'bg-white text-brand-900 shadow-card' : 'text-white/68 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-3xl border border-white/10 bg-white/7 p-4 text-sm text-white/70">
        <b className="block text-[15px] text-white">Поддержка</b>
        <span>Чат и линия клиента 24/7</span>
      </div>
    </aside>
  );
}
