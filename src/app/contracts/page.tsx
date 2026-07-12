'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, CreditCard, FileDown, MessageCircle, SlidersHorizontal } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { ContractCard } from '@/components/ui/ContractCard';
import { contracts } from '@/data/mock';

const tabs = ['Все договоры', 'Действующие', 'Требуют оплаты', 'Завершённые'];
const actions = [
  { label: 'Оплатить очередной взнос', icon: CreditCard, href: '/payment' },
  { label: 'Скачать полис и график', icon: FileDown, href: '/documents' },
  { label: 'Подать заявление', icon: CheckCircle2, href: '/claims/new' },
  { label: 'Связаться с поддержкой', icon: MessageCircle, href: '/profile' },
];

export default function Contracts() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const filteredContracts = contracts.filter((contract) => {
    if (activeTab === 'Действующие') return contract.status.includes('действует');
    if (activeTab === 'Требуют оплаты') return Boolean(contract.nextPaymentDate);
    if (activeTab === 'Завершённые') return contract.status.includes('Заверш');
    return true;
  });

  return <AppShell><div className="space-y-4 md:space-y-5"><header className="rounded-[1.55rem] bg-white p-4 shadow-card md:rounded-[1.8rem] md:p-6"><p className="text-[11px] font-semibold uppercase tracking-[.16em] text-slate-400">Центр управления</p><h1 className="mt-2 text-[25px] font-black leading-tight text-brand-900 md:text-[34px]">Договоры и действия</h1><p className="mt-2 max-w-3xl text-sm leading-5 text-slate-500 md:text-[15px] md:leading-6">Фильтры, рабочие карточки договоров и быстрые действия без повторения главного экрана.</p></header><div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{tabs.map((tab) => <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`h-9 shrink-0 rounded-full px-3.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-cta active:scale-[.98] ${activeTab === tab ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card hover:bg-lavender'}`}>{tab}</button>)}</div><div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_300px]"><div className="grid gap-3">{filteredContracts.length ? filteredContracts.map((contract) => <ContractCard key={contract.id} contract={contract} />) : <Card><p className="font-bold text-brand-900">По этому фильтру договоров нет.</p></Card>}</div><Card className="h-fit"><div className="flex items-center gap-3"><SlidersHorizontal size={20} className="text-brand-900" /><div><h2 className="text-lg font-black text-brand-900 md:text-xl">Доступные действия</h2><p className="text-sm text-slate-500">По выбранному договору.</p></div></div><div className="mt-4 space-y-2">{actions.map(({ label, icon: Icon, href }) => <Link key={label} href={href} className="flex w-full items-center gap-2.5 rounded-[1rem] bg-lavender p-3 text-left text-sm font-bold text-brand-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cta active:scale-[.99]"><Icon size={17} />{label}</Link>)}</div></Card></div></div></AppShell>;
}
