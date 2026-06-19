import { Info, ReceiptText } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Stepper } from '@/components/ui/Stepper';
import { contracts } from '@/data/mock';

export default function Payment() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl space-y-5">
        <Stepper step={2} />
        <Card className="space-y-5 p-5 sm:p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Платёж</p>
            <h2 className="mt-2 text-2xl font-bold text-brand-900 sm:text-3xl">Оплата взноса</h2>
          </div>

          <section className="rounded-[1.5rem] bg-lavender/80 p-4">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-brand-900">
              <ReceiptText size={18} />
              Что оплачиваем
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <PaymentInfo label="Сумма" value={contract.premium} strong />
              <PaymentInfo label="Договор" value={contract.title} />
              <PaymentInfo label="Срок оплаты" value={`до ${contract.nextPaymentDate}`} />
            </div>
          </section>

          <div className="flex gap-3 rounded-2xl border border-brand-900/5 bg-white p-3 text-sm leading-6 text-muted">
            <Info className="mt-0.5 shrink-0 text-brand-700" size={18} />
            <p>После оплаты чек появится в документах, а статус договора обновится автоматически.</p>
          </div>

          <Button href="/payment/success" className="w-full py-3">
            Оплатить {contract.premium}
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}

function PaymentInfo({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="rounded-2xl bg-white p-3">
      <p className="text-xs text-muted">{label}</p>
      <p className={`mt-1 font-bold text-brand-900 ${strong ? 'text-2xl' : 'text-sm'}`}>{value}</p>
    </div>
  );
}
