import { ShieldCheck } from 'lucide-react';

import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Stepper } from '@/components/ui/Stepper';

export default function Payment() {
  return (
    <AppShell hideMobileNav>
      <div className="mx-auto max-w-3xl space-y-5">
        <Stepper step={2} />
        <Card className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[1.15rem] bg-cta text-brand-900">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[.14em] text-slate-400">Оплата без комиссии</p>
              <h2 className="mt-1 text-3xl font-black text-brand-900">Взнос по договору</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Проверьте сумму и договор. После подтверждения платёж будет принят и отразится в договоре после обработки банком.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_220px]">
            <div className="rounded-[1.7rem] bg-lavender p-5">
              <p className="text-slate-500">Договор «Выгодный старт»</p>
              <p className="mt-2 text-4xl font-black text-brand-900">30 000 ₽</p>
              <p className="text-sm text-slate-500">Оплатить до 25 июля</p>
            </div>
            <div className="rounded-[1.7rem] border border-brand-900/10 p-5">
              <p className="text-sm text-slate-500">Способ оплаты</p>
              <b className="mt-2 block text-brand-900">Банковская карта</b>
              <p className="mt-1 text-xs leading-5 text-slate-400">Зачисление появится в истории после банковской обработки.</p>
            </div>
          </div>

          <div className="rounded-[1.35rem] bg-brand-900/5 p-4 text-sm font-semibold leading-6 text-brand-900">
            Нажимая кнопку, вы подтверждаете оплату очередного взноса по договору № RL-ИСЖ-102938.
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <Button href="/payment/success" className="w-full">Подтвердить оплату 30 000 ₽</Button>
            <Button href="/contracts/contract-1" variant="ghost" className="w-full sm:w-auto">Вернуться к договору</Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
