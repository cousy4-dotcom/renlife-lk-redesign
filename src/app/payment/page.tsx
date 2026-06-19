import type { ReactNode } from 'react';
import { CreditCard, Info, Mail, ReceiptText, ShieldCheck } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Stepper } from '@/components/ui/Stepper';
import { contracts } from '@/data/mock';

export default function Payment() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="mx-auto grid max-w-[960px] gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="space-y-4">
          <Stepper step={2} />
          <Card className="space-y-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Платёж</p>
              <h2 className="mt-1 text-2xl font-bold text-brand-900">Оплата взноса</h2>
              <p className="mt-1 text-sm text-muted">Проверьте детали перед оплатой.</p>
            </div>

            <section className="rounded-[1.35rem] bg-lavender/75 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-900">
                <ReceiptText size={18} />
                Что оплачиваем
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                <PaymentInfo label="Сумма" value={contract.premium} strong />
                <PaymentInfo label="Договор" value={contract.title} />
                <PaymentInfo label="Срок" value={`до ${contract.nextPaymentDate}`} />
              </div>
            </section>

            <div className="grid gap-3 sm:grid-cols-2">
              <DetailCard icon={<Mail size={18} />} title="Email для чека" value="anna.smirnova@mail.ru" />
              <DetailCard icon={<CreditCard size={18} />} title="Способ оплаты" value="Банковская карта · моментально" />
            </div>

            <div className="flex gap-3 rounded-2xl border border-brand-900/5 bg-white p-3 text-sm leading-6 text-muted">
              <Info className="mt-0.5 shrink-0 text-brand-700" size={18} />
              <p>После оплаты чек появится в документах, а статус договора обновится автоматически.</p>
            </div>

            <Button href="/payment/success" className="w-full py-3">
              Оплатить {contract.premium}
            </Button>
          </Card>
        </section>

        <aside className="space-y-3">
          <Card>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">К оплате</p>
            <p className="mt-2 text-3xl font-bold text-brand-900">{contract.premium}</p>
            <p className="mt-1 text-sm text-muted">Договор {contract.number}</p>
          </Card>
          <Card>
            <ShieldCheck className="text-brand-900" size={20} />
            <h3 className="mt-2 font-bold text-brand-900">Безопасная оплата</h3>
            <p className="mt-1 text-sm leading-5 text-muted">Данные карты защищены, подтверждение платежа появится в документах.</p>
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}

function PaymentInfo({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="rounded-2xl bg-white p-3">
      <p className="text-[11px] text-muted">{label}</p>
      <p className={`mt-1 font-bold text-brand-900 ${strong ? 'text-2xl' : 'text-sm'}`}>{value}</p>
    </div>
  );
}

function DetailCard({ icon, title, value }: { icon: ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-brand-900/5 bg-white p-3">
      <div className="flex items-center gap-2 text-brand-900">
        {icon}
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <p className="mt-2 text-sm text-muted">{value}</p>
    </div>
  );
}
