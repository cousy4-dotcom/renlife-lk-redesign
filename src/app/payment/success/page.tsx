import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Success() {
  return (
    <AppShell hideMobileNav>
      <div className="mx-auto max-w-xl">
        <Card className="space-y-5 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-cta text-3xl font-black text-brand-900">✓</div>
          <div>
            <h2 className="text-3xl font-black text-brand-900">Платёж принят</h2>
            <p className="mt-3 leading-6 text-slate-500">
              Взнос 30 000 ₽ по договору «Выгодный старт» принят. Он будет отражён в договоре и истории платежей после обработки банком.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button href="/dashboard" className="w-full">Вернуться на главную</Button>
            <Button href="/contracts/contract-1" variant="ghost" className="w-full">Вернуться к договору</Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
