'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/mock';

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-3 bottom-3 z-20 grid h-[76px] grid-cols-5 rounded-[1.25rem] border border-white/10 bg-brand-900/96 p-1.5 text-white shadow-soft backdrop-blur lg:hidden">
      {navItems.map(({ href, label, icon: Icon }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-1 text-[10px] font-medium transition ${
              active ? 'bg-white text-brand-900' : 'text-white/64'
            }`}
          >
            <Icon size={16} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
