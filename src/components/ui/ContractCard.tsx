import { ArrowUpRight, CreditCard, ShieldCheck } from 'lucide-react';
import type { Contract } from '@/data/mock';
import { Button } from './Button';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';
import { StatusBadge } from './StatusBadge';

export function ContractCard({ contract, compact = false }: { contract: Contract; compact?: boolean }) {
  return (
    <Card className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-lavender text-brand-900">
            <ShieldCheck size={22} />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-brand-900 sm:text-xl">{contract.title}</h3>
              <StatusBadge>{contract.status}</StatusBadge>
            </div>
            <p className="mt-1 text-xs text-muted">{contract.number} · {contract.type}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Info label="Следующий платёж" value={contract.premium} />
        <Info label="Оплатить до" value={contract.nextPaymentDate} />
        <Info label="Защита" value={contract.insuredAmount} />
        <Info label="Срок" value={contract.term} />
      </div>

      <div className="space-y-2 rounded-2xl bg-lavender/70 p-3">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Прогресс срока договора</span>
          <span>{contract.termProgress}%</span>
        </div>
        <ProgressBar value={contract.termProgress} />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button href="/payment" className="sm:w-auto">
          <CreditCard size={17} />
          <span className="ml-2">Оплатить</span>
        </Button>
        <Button href={`/contracts/${contract.id}`} variant="ghost">
          Открыть договор
          {!compact && <ArrowUpRight className="ml-2" size={16} />}
        </Button>
      </div>
    </Card>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-brand-900/5 bg-white/70 p-3">
      <span className="block text-[11px] font-medium text-muted">{label}</span>
      <b className="mt-1 block text-sm text-brand-900">{value}</b>
    </div>
  );
}
