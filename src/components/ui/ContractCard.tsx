import { ArrowUpRight, CreditCard, FileText, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';
import { StatusBadge } from './StatusBadge';
import type { Contract } from '@/data/mock';

export function ContractCard({ contract }: { contract: Contract }) {
  const metrics = [
    ['Взнос', contract.premium],
    ['Оплатить до', contract.nextPaymentDate],
    ['Защита', contract.insuredAmount],
    ['Резерв', contract.reserve],
  ];

  return (
    <Card className="space-y-3 md:space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-0 gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[1.05rem] bg-lavender text-brand-900"><ShieldCheck size={19} /></div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2"><h3 className="min-w-0 text-lg font-black leading-tight text-brand-900 md:text-xl">{contract.title}</h3><StatusBadge>{contract.status}</StatusBadge></div>
            <p className="mt-1 text-sm leading-5 text-slate-500">№ {contract.number} · {contract.type}</p>
            <p className="text-sm leading-5 text-slate-500">Срок: {contract.term} · Клиент: {contract.owner}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          <Button href={`/contracts/${contract.id}/payment`} className="w-full py-2 sm:w-auto"><CreditCard size={15} />Оплатить</Button>
          <Button href={`/contracts/${contract.id}`} variant="ghost" className="w-full py-2 sm:w-auto"><ArrowUpRight size={15} />Открыть</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4">
        {metrics.map(([label, value]) => <p key={label} className="rounded-[1rem] bg-lavender p-3"><span className="block text-xs font-semibold text-slate-400">{label}</span><b className="mt-1 block break-words text-[15px] text-brand-900 md:text-base">{value}</b></p>)}
      </div>
      <div>
        <div className="mb-2 flex flex-wrap justify-between gap-2 text-xs font-bold text-slate-500"><span>Прогресс накоплений и защиты</span><span>{contract.paidPercent}%</span></div>
        <ProgressBar value={contract.paidPercent} />
      </div>
      <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>Защита действует при своевременной оплате взносов.</span>
        <span className="inline-flex items-center gap-2 font-bold text-brand-900"><FileText size={15} /> Документы готовы</span>
      </div>
    </Card>
  );
}
