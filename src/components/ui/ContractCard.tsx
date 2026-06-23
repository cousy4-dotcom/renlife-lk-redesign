import { ShieldCheck } from 'lucide-react';
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
    <Card className="space-y-2.5 md:space-y-3.5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-2.5 md:gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-[1rem] bg-lavender text-brand-900 md:h-10 md:w-10"><ShieldCheck size={19} /></div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 md:gap-2"><h3 className="text-base font-black leading-tight text-brand-900 md:text-xl">{contract.title}</h3><StatusBadge>{contract.status}</StatusBadge></div>
            <p className="mt-0.5 text-xs leading-5 text-slate-500 md:text-sm">№ {contract.number}</p>
            <p className="text-xs leading-5 text-slate-500 md:text-sm">{contract.type}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {metrics.map(([label, value]) => <p key={label} className="rounded-2xl bg-lavender p-2 md:p-3"><span className="block text-[11px] font-semibold text-slate-400 md:text-xs">{label}</span><b className="text-sm text-brand-900 md:text-[15px]">{value}</b></p>)}
      </div>
      <div>
        <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-500"><span>Прогресс договора</span><span>{contract.paidPercent}%</span></div>
        <ProgressBar value={contract.paidPercent} />
      </div>
      <p className="text-xs leading-5 text-slate-500">Защита действует при своевременной оплате взносов.</p>
      <div className="flex flex-col gap-2 sm:flex-row"><Button href={`/contracts/${contract.id}`} className="py-2.5">Открыть договор</Button><Button href={`/contracts/${contract.id}/payment`} variant="ghost" className="py-2.5">Оплатить</Button></div>
    </Card>
  );
}
