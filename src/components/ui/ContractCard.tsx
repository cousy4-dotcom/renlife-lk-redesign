import { ArrowUpRight, CreditCard, ShieldCheck } from 'lucide-react';
import type { Contract } from '@/data/mock';
import { Button } from './Button';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';
import { StatusBadge } from './StatusBadge';

export function ContractCard({ contract, compact = false }: { contract: Contract; compact?: boolean }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-brand-900/5 bg-white p-4">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-900 text-cta">
            <ShieldCheck size={22} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-brand-900 sm:text-xl">{contract.title}</h3>
              <StatusBadge>{contract.status}</StatusBadge>
            </div>
            <p className="mt-1 text-xs text-muted">{contract.number}</p>
            <p className="mt-2 text-sm leading-5 text-muted">Защита действует при своевременной оплате взносов.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Info label="Внесено" value={contract.paidAmount} />
          <Info label="Следующий" value={contract.premium} />
          <Info label="До" value={contract.nextPaymentDate} />
          <Info label="Защита" value={contract.insuredAmount} />
        </div>

        <div className="space-y-2 rounded-2xl bg-lavender/70 p-3">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Срок договора</span>
            <span>{contract.termProgress}%</span>
          </div>
          <ProgressBar value={contract.termProgress} />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button href="/payment">
            <CreditCard size={16} />
            <span className="ml-2">Оплатить</span>
          </Button>
          <Button href={`/contracts/${contract.id}`} variant="ghost">
            Открыть
            {!compact && <ArrowUpRight className="ml-1.5" size={15} />}
          </Button>
        </div>
      </div>
    </Card>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-lavender/75 p-3">
      <span className="block text-[11px] font-medium text-muted">{label}</span>
      <b className="mt-1 block truncate text-sm text-brand-900">{value}</b>
    </div>
  );
}
