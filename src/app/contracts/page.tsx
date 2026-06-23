import { CheckCircle2, CreditCard, FileDown, MessageCircle, SlidersHorizontal } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { ContractCard } from '@/components/ui/ContractCard';
import { contracts } from '@/data/mock';

const tabs = ['Все договоры', 'Действующие', 'Требуют оплаты', 'Завершённые'];
const actions = [
  { label: 'Оплатить очередной взнос', icon: CreditCard },
  { label: 'Скачать полис и график', icon: FileDown },
  { label: 'Подать заявление', icon: CheckCircle2 },
  { label: 'Связаться с поддержкой', icon: MessageCircle },
];

export default function Contracts() {
  return <AppShell><div className="space-y-5 md:space-y-6"><header className="rounded-[1.8rem] bg-white p-5 shadow-card md:p-7"><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Мои договоры</p><h1 className="mt-2 text-[28px] font-black leading-tight text-brand-900 md:text-[38px]">Договоры и страховая защита</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500 md:text-base">Фильтруйте договоры по статусу, отслеживайте платежи и открывайте нужные действия из карточки.</p></header><div className="flex gap-2 overflow-x-auto pb-1">{tabs.map((tab, index) => <button key={tab} className={`h-10 shrink-0 rounded-full px-4 text-sm font-bold ${index === 0 ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card'}`}>{tab}</button>)}</div><div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]"><div className="grid gap-4">{contracts.map((contract) => <ContractCard key={contract.id} contract={contract} />)}</div><Card className="h-fit"><div className="flex items-center gap-3"><SlidersHorizontal className="text-brand-900" /><div><h2 className="text-xl font-black text-brand-900">Действия</h2><p className="text-sm text-slate-500">Всё важное по договору.</p></div></div><div className="mt-5 space-y-3">{actions.map(({ label, icon: Icon }) => <button key={label} className="flex w-full items-center gap-3 rounded-[1.15rem] bg-lavender p-3 text-left text-sm font-bold text-brand-900"><Icon size={18} />{label}</button>)}</div></Card></div></div></AppShell>;
}
