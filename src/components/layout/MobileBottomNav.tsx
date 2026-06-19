'use client';
import Link from 'next/link';import { usePathname } from 'next/navigation';import { navItems } from '@/data/mock';
export function MobileBottomNav(){const p=usePathname();return <nav className="fixed inset-x-3 bottom-3 z-20 grid grid-cols-5 rounded-3xl bg-brand-900 p-2 text-white shadow-soft lg:hidden">{navItems.map(({href,label,icon:Icon})=><Link key={href} href={href} className={`flex flex-col items-center gap-1 rounded-2xl py-2 text-[10px] ${p.startsWith(href)?'bg-cta text-brand-900':'text-white/70'}`}><Icon size={18}/>{label}</Link>)}</nav>}
