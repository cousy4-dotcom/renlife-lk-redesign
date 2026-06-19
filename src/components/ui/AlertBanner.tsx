import { CalendarDays, CreditCard } from 'lucide-react';
import { Button } from './Button';

export function AlertBanner() {
  return (
    <section className="overflow-hidden rounded-[1.75rem] bg-brand-900 p-4 text-white shadow-soft sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-white/10 p-2.5 text-cta">
            <CalendarDays size={22} />
          </div>
          <div>
            <p className="text-sm text-white/65">Следующий платёж</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">30 000 ₽ до 25 июля</h2>
            <p className="mt-1 max-w-xl text-sm text-white/70">Договор «Выгодный старт» действует. Оплата займёт меньше минуты.</p>
          </div>
        </div>
        <Button href="/payment" className="w-full sm:w-auto">
          <CreditCard size={18} />
          <span className="ml-2">Оплатить</span>
        </Button>
      </div>
    </section>
  );
}
