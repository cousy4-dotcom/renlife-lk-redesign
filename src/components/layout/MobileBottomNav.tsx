'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/mock';

export function MobileBottomNav() {
  const pathname = usePathname();
  const items = navItems.filter((item) => ['/dashboard', '/contracts', '/documents', '/notifications', '/profile'].includes(item.href));

  return (
    <nav className="fixed inset-x-3 bottom-3 z-20 grid h-[74px] grid-cols-5 rounded-[1.35rem] border border-white/20 bg-brand-900/95 p-1 text-white shadow-card backdrop-blur lg:hidden">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={`flex min-w-0 flex-col items-center justify-center gap-0.5 rounded-[1.05rem] px-1 py-1.5 text-[10px] font-semibold leading-tight transition-colors ${
              active ? 'bg-cta text-brand-900' : 'text-white/68'
            }`}
          >
            <Icon size={17} strokeWidth={2.2} />
            <span className="truncate">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
