import { CalendarDays, CreditCard } from 'lucide-react';
import { Button } from './Button';

export function AlertBanner() {
  return (
    <section className="rounded-[1.35rem] bg-brand-900 p-3.5 text-white shadow-card sm:p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-cta">
          <CalendarDays size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-white/62">Следующий взнос</p>
          <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">30 000 ₽</h2>
            <span className="text-sm text-white/72">до 25 июля</span>
          </div>
        </div>
        <Button href="/payment" className="hidden sm:inline-flex">
          <CreditCard size={17} />
          <span className="ml-2">Оплатить</span>
        </Button>
      </div>
      <Button href="/payment" className="mt-3 w-full sm:hidden">Оплатить</Button>
    </section>
  );
}
