import { CalendarDays, CreditCard, ShieldCheck } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { contracts } from '@/data/mock';

export default function ContractDetail() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="space-y-5 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <StatusBadge>{contract.status}</StatusBadge>
              <h2 className="mt-3 text-2xl font-bold text-brand-900 sm:text-3xl">{contract.title}</h2>
              <p className="mt-1 text-sm text-muted">{contract.number} · {contract.type}</p>
            </div>
            <Button href="/payment">
              <CreditCard size={17} />
              <span className="ml-2">Оплатить</span>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <Detail label="Внесено" value={contract.paidAmount} />
            <Detail label="Следующий платёж" value={contract.premium} />
            <Detail label="Оплатить до" value={contract.nextPaymentDate} />
            <Detail label="Страховая защита" value={contract.insuredAmount} />
          </div>

          <div className="space-y-3 rounded-[1.5rem] bg-lavender/80 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-brand-900">Прогресс срока договора</span>
              <span className="text-muted">{contract.termProgress}% · {contract.term}</span>
            </div>
            <ProgressBar value={contract.termProgress} />
          </div>
        </Card>

        <aside className="space-y-4">
          <Card className="space-y-3">
            <CalendarDays className="text-brand-900" />
            <h3 className="text-lg font-bold text-brand-900">Ближайшее действие</h3>
            <p className="text-sm leading-6 text-muted">Внесите {contract.premium} до {contract.nextPaymentDate}, чтобы сохранить график программы.</p>
            <Button href="/payment" className="w-full">Оплатить взнос</Button>
          </Card>
          <Card className="space-y-3">
            <ShieldCheck className="text-brand-900" />
            <h3 className="text-lg font-bold text-brand-900">Защита активна</h3>
            <p className="text-sm leading-6 text-muted">Покрытие {contract.insuredAmount} действует при соблюдении графика платежей.</p>
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-lavender/70 p-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-bold text-brand-900">{value}</p>
    </div>
  );
}
