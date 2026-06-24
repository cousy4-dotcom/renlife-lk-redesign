import { CalendarDays, CheckCircle2, ChevronRight, FileText, HeartHandshake, ShieldCheck, WalletCards } from 'lucide-react';

import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ContractCard } from '@/components/ui/ContractCard';
import { InsightStories } from '@/components/dashboard/InsightStories';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { contracts, documents, notifications, quickActions } from '@/data/mock';

const activeContract = contracts[0];
const protectionItems = [
  { label: 'Резерв', value: activeContract.reserve, hint: '64% к плану' },
  { label: 'Защита', value: activeContract.insuredAmount, hint: 'активна' },
  { label: 'Доходность', value: activeContract.yield, hint: 'с начала года' },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-4 md:space-y-5">
        <section className="overflow-hidden rounded-[1.55rem] bg-brand-900 p-4 text-white shadow-card md:rounded-[1.8rem] md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-white/50">Главная</p>
              <h1 className="mt-2 text-[25px] font-black leading-tight md:text-[34px] lg:text-[40px]">Анна, договор под контролем</h1>
              <p className="mt-2 max-w-2xl text-sm leading-5 text-white/72 md:text-[15px] md:leading-6">Статус активен, документы готовы, важные события собраны в одном кабинете.</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[1.15rem] bg-white/10 p-3 ring-1 ring-white/10"><p className="text-xs text-white/60">Статус договора</p><b className="mt-1 block text-base">Действует</b></div>
              <div className="rounded-[1.15rem] bg-white/10 p-3 ring-1 ring-white/10"><p className="text-xs text-white/60">Документы</p><b className="mt-1 block text-base">Актуальны</b></div>
            </div>
          </div>
        </section>

        <InsightStories />

        <section className="rounded-[1.35rem] bg-white p-3.5 shadow-card md:rounded-[1.6rem] md:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[1.05rem] bg-lavender text-brand-900"><CalendarDays size={19} /></div>
              <div><h2 className="text-lg font-black leading-tight text-brand-900 md:text-xl">Платёж 30 000 ₽ до 25 июля</h2><p className="mt-1 max-w-xl text-sm leading-5 text-slate-500">Отдельное действие для продления страховой защиты без перерыва.</p></div>
            </div>
            <Button href="/contracts/contract-1/payment" className="h-10 w-full sm:w-auto">Оплатить взнос</Button>
          </div>
        </section>

        <ContractCard contract={activeContract} />

        <section className="grid gap-3 lg:grid-cols-2">
          <Card>
            <div className="mb-3 flex items-center gap-3"><WalletCards size={20} className="text-brand-900" /><div><h2 className="text-lg font-black text-brand-900 md:text-xl">Деньги и защита</h2><p className="text-sm text-slate-500">Ключевые показатели договора.</p></div></div>
            <div className="grid gap-2 sm:grid-cols-3">{protectionItems.map((item) => <div key={item.label} className="rounded-[1rem] bg-lavender p-3"><p className="text-xs font-semibold text-slate-400">{item.label}</p><p className="mt-1 text-lg font-black text-brand-900">{item.value}</p><p className="mt-0.5 text-xs text-slate-500">{item.hint}</p></div>)}</div>
          </Card>
          <Card><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-black text-brand-900 md:text-xl">Документы</h2><FileText size={20} className="text-slate-300" /></div><div className="space-y-2">{documents.slice(0, 2).map((document) => <DocumentCard key={document.id} {...document} />)}</div></Card>
          <Card><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-black text-brand-900 md:text-xl">События</h2><CheckCircle2 size={20} className="text-slate-300" /></div><div className="space-y-2">{notifications.slice(0, 3).map((notification) => <NotificationCard key={notification.id} {...notification} />)}</div></Card>
          <Card><div className="mb-3 flex items-center justify-between"><div><h2 className="text-lg font-black text-brand-900 md:text-xl">Быстрые действия</h2><p className="text-sm text-slate-500">Частые сценарии.</p></div><HeartHandshake size={20} className="text-slate-300" /></div><div className="grid gap-2">{quickActions.map(({ label, icon: Icon }) => <button key={label} className="flex min-h-11 items-center justify-between rounded-[1rem] bg-lavender px-3 text-left text-sm font-bold text-brand-900"><span className="flex items-center gap-2.5"><Icon size={17} />{label}</span><ChevronRight size={15} /></button>)}</div></Card>
        </section>
      </div>
    </AppShell>
  );
}
