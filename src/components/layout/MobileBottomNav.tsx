'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/mock';

export function MobileBottomNav() {
  const pathname = usePathname();
  const items = navItems.filter((item) => ['/dashboard', '/contracts', '/documents', '/events', '/profile'].includes(item.href));

  return (
    <nav className="fixed inset-x-3 bottom-[calc(8px+env(safe-area-inset-bottom))] z-20 mx-auto grid h-[64px] max-w-[640px] grid-cols-5 rounded-[1.25rem] border border-white/25 bg-brand-900/95 p-1.5 text-white shadow-card backdrop-blur lg:hidden">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`) || (href === '/events' && pathname.startsWith('/notifications'));
        return (
          <Link
            key={href}
            href={href}
            className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-[0.95rem] px-1 py-1 text-[10px] font-bold leading-none transition-colors ${
              active ? 'bg-cta text-brand-900 shadow-sm' : 'text-white/70 hover:text-white'
            }`}
          >
            <Icon size={16} strokeWidth={2.15} />
            <span className="max-w-full truncate">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
