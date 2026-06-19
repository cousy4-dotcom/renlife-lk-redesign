'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/mock';

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-4 bottom-3 z-20 grid grid-cols-5 rounded-[1.35rem] bg-brand-900/96 p-1.5 text-white shadow-soft backdrop-blur lg:hidden">
      {navItems.map(({ href, label, icon: Icon }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 rounded-2xl px-1 py-1.5 text-[10px] font-medium transition ${
              active ? 'bg-white text-brand-900' : 'text-white/65'
            }`}
          >
            <Icon size={17} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
