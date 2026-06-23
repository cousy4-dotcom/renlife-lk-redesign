import { CalendarDays, CheckCircle2, ChevronRight, FileText, HeartHandshake, ShieldCheck, WalletCards } from 'lucide-react';

import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ContractCard } from '@/components/ui/ContractCard';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { contracts, documents, notifications, quickActions } from '@/data/mock';

const activeContract = contracts[0];
const protectionItems = [
  { label: 'Резерв', value: activeContract.reserve, hint: '64% к плану договора' },
  { label: 'Страховая защита', value: activeContract.insuredAmount, hint: 'активна при оплате' },
  { label: 'Доходность', value: activeContract.yield, hint: 'ориентир с начала года' },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-5 md:space-y-6">
        <section className="overflow-hidden rounded-[1.8rem] bg-brand-900 p-5 text-white shadow-card md:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-white/50">Главная</p>
              <h1 className="mt-2 text-[28px] font-black leading-tight md:text-[40px]">Анна, ваш договор под контролем</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72 md:text-base">Статус активен, ближайший платёж запланирован, документы и события собраны в одном личном кабинете.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[1.35rem] bg-white/10 p-4 ring-1 ring-white/10"><p className="text-sm text-white/60">Статус договора</p><b className="mt-1 block text-lg">Действует</b></div>
              <div className="rounded-[1.35rem] bg-cta p-4 text-brand-900"><p className="text-sm text-brand-900/60">Ближайший платёж</p><b className="mt-1 block text-lg">30 000 ₽ · 25 июля</b></div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.6rem] bg-white p-4 shadow-card md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[1.2rem] bg-lavender text-brand-900"><CalendarDays size={21} /></div>
              <div><h2 className="text-xl font-black leading-tight text-brand-900 md:text-2xl">Платёж 30 000 ₽ до 25 июля</h2><p className="mt-1 max-w-xl text-sm leading-5 text-slate-500">Оплатите взнос, чтобы страховая защита продолжала действовать без перерыва.</p></div>
            </div>
            <Button href="/contracts/contract-1/payment" className="h-11 w-full sm:w-auto">Оплатить взнос</Button>
          </div>
        </section>

        <ContractCard contract={activeContract} />

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="mb-4 flex items-center gap-3"><WalletCards className="text-brand-900" /><div><h2 className="text-xl font-black text-brand-900">Деньги и защита</h2><p className="text-sm text-slate-500">Ключевые показатели активного договора.</p></div></div>
            <div className="grid gap-3 sm:grid-cols-3">{protectionItems.map((item) => <div key={item.label} className="rounded-[1.2rem] bg-lavender p-4"><p className="text-xs font-semibold text-slate-400">{item.label}</p><p className="mt-1 text-xl font-black text-brand-900">{item.value}</p><p className="mt-1 text-sm text-slate-500">{item.hint}</p></div>)}</div>
          </Card>
          <Card><div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-black text-brand-900">Документы</h2><FileText className="text-slate-300" /></div><div className="space-y-3">{documents.slice(0, 2).map((document) => <DocumentCard key={document.id} {...document} />)}</div></Card>
          <Card><div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-black text-brand-900">События</h2><CheckCircle2 className="text-slate-300" /></div><div className="space-y-3">{notifications.slice(0, 3).map((notification) => <NotificationCard key={notification.id} {...notification} />)}</div></Card>
          <Card><div className="mb-4 flex items-center justify-between"><div><h2 className="text-xl font-black text-brand-900">Быстрые действия</h2><p className="text-sm text-slate-500">Частые сценарии без поиска.</p></div><HeartHandshake className="text-slate-300" /></div><div className="grid gap-3">{quickActions.map(({ label, icon: Icon }) => <button key={label} className="flex min-h-12 items-center justify-between rounded-[1.2rem] bg-lavender px-4 text-left text-sm font-bold text-brand-900"><span className="flex items-center gap-3"><Icon size={18} />{label}</span><ChevronRight size={16} /></button>)}</div></Card>
        </section>
      </div>
    </AppShell>
  );
}
