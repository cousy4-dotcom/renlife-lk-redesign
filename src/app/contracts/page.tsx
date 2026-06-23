import { CheckCircle2 } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { ContractCard } from '@/components/ui/ContractCard';
import { contracts } from '@/data/mock';

const tabs = ['Все', 'Действующие', 'Завершённые'];
const actions = ['оплатить взнос', 'скачать документы', 'подать заявление', 'обратиться в поддержку'];

export default function Contracts() {
  return <AppShell><div className="space-y-3.5 md:space-y-4"><header><h1 className="text-[24px] font-black leading-tight text-brand-900 md:text-[32px]">Мои договоры</h1><p className="mt-1 text-sm leading-5 text-slate-500 md:text-[15px]">Все действующие и завершённые договоры в одном месте</p></header><div className="flex gap-2 overflow-x-auto">{tabs.map((tab, index) => <button key={tab} className={`h-8 rounded-full px-3.5 text-sm font-bold md:h-9 md:px-4 ${index === 0 ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card'}`}>{tab}</button>)}</div><div className="grid gap-2.5 md:gap-4 xl:grid-cols-[minmax(0,1fr)_300px]"><div className="grid gap-2.5 md:gap-4">{contracts.map((contract) => <ContractCard key={contract.id} contract={contract} />)}</div><Card><h2 className="text-lg font-black text-brand-900 md:text-xl">Что можно сделать с договором</h2><div className="mt-3 space-y-2.5 md:mt-4 md:space-y-3">{actions.map((action) => <div key={action} className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 size={18} className="text-cta" /><span>{action}</span></div>)}</div></Card></div></div></AppShell>;
}
