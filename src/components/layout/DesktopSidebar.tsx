'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/mock';

export function DesktopSidebar(){const p=usePathname();return <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col border-r border-white/10 bg-brand-900 p-5 text-white lg:flex"><div className="mb-8 rounded-[2rem] bg-white/8 p-5"><p className="text-xs uppercase tracking-[.28em] text-white/50">Личный кабинет</p><div className="mt-2 text-2xl font-black leading-tight">Ренессанс<br/><span className="text-cta">Жизнь</span></div></div><nav className="space-y-1.5">{navItems.map(({href,label,icon:Icon})=>{const active=p===href||p.startsWith(`${href}/`);return <Link key={href} href={href} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${active?'bg-white text-brand-900 shadow-card':'text-white/68 hover:bg-white/10 hover:text-white'}`}><Icon size={19}/>{label}</Link>})}</nav><div className="mt-auto rounded-[1.7rem] border border-white/10 bg-white/8 p-4 text-sm text-white/75"><b className="block text-white">Поддержка 24/7</b><span>Финансово-страховой центр клиента</span></div></aside>}
