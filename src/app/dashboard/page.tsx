import Link from 'next/link';
import { CalendarDays, CheckCircle2, ChevronRight, HeartHandshake, ShieldCheck } from 'lucide-react';

import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FinancialProgress } from '@/components/ui/FinancialProgress';
import { InsightStories } from '@/components/dashboard/InsightStories';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { contracts, financialProgress, notifications, quickActions } from '@/data/mock';

const activeContract = contracts[0];
const actionHrefs: Record<string, string> = { 'Связаться с менеджером': '/profile', 'Оплатить взнос': '/payment', 'Открыть договор': `/contracts/${activeContract.id}` };

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-6xl space-y-4 pb-6 md:space-y-5 lg:pb-0">
        <section className="rounded-[1.45rem] bg-brand-900 p-4 text-white shadow-card md:p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-white/50">Главная</p>
              <h1 className="mt-2 text-[25px] font-black leading-tight md:text-[34px]">Анна, главное по договору</h1>
              <p className="mt-2 max-w-2xl text-sm leading-5 text-white/72">Активный полис, ближайшее действие и прогресс накоплений без лишнего дублирования.</p>
            </div>
            <Button href="/payment" className="w-full md:w-auto">Оплатить взнос</Button>
          </div>
        </section>

        <section className="rounded-[1.35rem] bg-white p-4 shadow-card md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[1.05rem] bg-amber-50 text-amber-600"><CalendarDays size={20} /></div>
              <div>
                <p className="text-xs font-black uppercase tracking-[.16em] text-amber-600">Ближайшее действие</p>
                <h2 className="mt-1 text-2xl font-black leading-tight text-brand-900">Оплатить взнос до {financialProgress.nextPaymentDate}</h2>
                <p className="mt-1 text-sm leading-5 text-slate-500">Сумма к оплате — {financialProgress.nextPayment}. Это сохранит действие договора без перерыва.</p>
              </div>
            </div>
            <Button href="/payment" className="w-full shrink-0 md:w-auto">Оплатить взнос</Button>
          </div>
        </section>

        <InsightStories />

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Card className="p-4 md:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[1.05rem] bg-lavender text-brand-900"><ShieldCheck size={20} /></div>
                <div>
                  <div className="flex flex-wrap items-center gap-2"><h2 className="text-2xl font-black leading-tight text-brand-900">{activeContract.title}</h2><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Действует</span></div>
                  <p className="mt-1 text-sm font-semibold text-slate-500">№ {activeContract.number} · {activeContract.type}</p>
                  <p className="mt-1 text-sm text-slate-500">Срок {activeContract.term} · защита {activeContract.insuredAmount}</p>
                </div>
              </div>
              <Button href={`/contracts/${activeContract.id}`} variant="ghost" className="w-full md:w-auto">Открыть договор</Button>
            </div>
          </Card>

          <Card className="p-4 md:p-5">
            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[1.05rem] bg-lavender text-brand-900"><CalendarDays size={19} /></div>
              <div>
                <h2 className="text-lg font-black leading-tight text-brand-900">График и срок</h2>
                <p className="mt-1 text-sm leading-5 text-slate-500">Договор рассчитан на {financialProgress.term}. Следующие даты удобно сверять в графике платежей.</p>
                <Button href="/documents" variant="ghost" className="mt-4 w-full">Открыть документы</Button>
              </div>
            </div>
          </Card>
        </section>

        <FinancialProgress data={financialProgress} />

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Card><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-black text-brand-900 md:text-xl">Последние события</h2><CheckCircle2 size={20} className="text-slate-300" /></div><div className="space-y-2">{notifications.slice(0, 3).map((notification) => <NotificationCard key={notification.id} {...notification} />)}</div><Button href="/events" variant="secondary" className="mt-3 w-full">Все события</Button></Card>
          <Card><div className="mb-3 flex items-center justify-between"><div><h2 className="text-lg font-black text-brand-900 md:text-xl">Быстрые действия</h2><p className="text-sm text-slate-500">Три главных сценария.</p></div><HeartHandshake size={20} className="text-slate-300" /></div><div className="grid gap-2">{quickActions.map(({ label, icon: Icon }) => <Link key={label} href={actionHrefs[label]} className="flex min-h-11 items-center justify-between rounded-[1rem] bg-lavender px-3 text-left text-sm font-bold text-brand-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cta active:scale-[.99]"><span className="flex items-center gap-2.5"><Icon size={17} />{label}</span><ChevronRight size={15} /></Link>)}</div></Card>
        </section>
      </div>
    </AppShell>
  );
}
