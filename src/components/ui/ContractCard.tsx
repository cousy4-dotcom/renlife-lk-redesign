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
    <Card className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lavender text-brand-900"><ShieldCheck size={20} /></div>
          <div>
            <div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-black text-brand-900">{contract.title}</h3><StatusBadge>{contract.status}</StatusBadge></div>
            <p className="mt-1 text-sm text-slate-500">№ {contract.number}</p>
            <p className="text-sm text-slate-500">{contract.type}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-4">
        {metrics.map(([label, value]) => <p key={label} className="rounded-2xl bg-lavender p-3"><span className="block text-xs text-slate-400">{label}</span><b className="text-[15px] text-brand-900">{value}</b></p>)}
      </div>
      <div>
        <div className="mb-2 flex justify-between text-xs font-bold text-slate-500"><span>Прогресс договора</span><span>{contract.paidPercent}%</span></div>
        <ProgressBar value={contract.paidPercent} />
      </div>
      <p className="text-sm text-slate-500">Защита действует при своевременной оплате взносов.</p>
      <div className="flex flex-col gap-3 sm:flex-row"><Button href={`/contracts/${contract.id}`}>Открыть договор</Button><Button href={`/contracts/${contract.id}/payment`} variant="ghost">Оплатить</Button></div>
    </Card>
  );
}
