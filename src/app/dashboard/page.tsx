import { CalendarDays, CheckCircle2, ChevronRight, FileText, HeartHandshake, WalletCards } from 'lucide-react';

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
  { label: 'Защита', value: activeContract.insuredAmount, hint: 'при оплате взносов' },
  { label: 'Доходность', value: activeContract.yield, hint: 'ориентир с начала года' },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-4 md:space-y-5">
        <section className="rounded-[1.4rem] bg-white p-4 shadow-card md:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[.14em] text-slate-400">Главная</p>
              <h1 className="mt-1.5 text-[27px] font-black leading-tight text-brand-900 md:text-[34px]">Анна, всё под контролем</h1>
              <p className="mt-1.5 max-w-2xl text-[15px] leading-5 text-slate-500">Договор действует. Следующий взнос — 30 000 ₽ до 25 июля.</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:w-[360px]">
              <div className="rounded-2xl bg-lavender p-2.5"><p className="text-sm text-slate-500">Статус</p><b className="text-brand-900">Договор действует</b></div>
              <div className="rounded-2xl bg-lavender p-2.5"><p className="text-sm text-slate-500">Договор</p><b className="text-brand-900">№ {activeContract.number}</b></div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.4rem] bg-brand-900 p-4 text-white shadow-card md:p-5">
          <div className="flex min-h-[132px] flex-col justify-between gap-3 sm:min-h-[112px] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cta text-brand-900"><CalendarDays size={20} /></div>
              <div><h2 className="text-xl font-black leading-tight md:text-2xl">Платёж 30 000 ₽ до 25 июля</h2><p className="mt-1 max-w-xl text-sm leading-5 text-white/72">Оплатите взнос, чтобы страховая защита продолжала действовать без перерыва.</p></div>
            </div>
            <Button href="/contracts/contract-1/payment" className="h-11 w-full sm:w-auto">Оплатить</Button>
          </div>
        </section>

        <ContractCard contract={activeContract} />

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="mb-3 flex items-center gap-3"><WalletCards className="text-brand-900" /><div><h2 className="text-lg font-black text-brand-900 md:text-2xl">Деньги и защита</h2><p className="text-sm text-slate-500">Ключевые показатели договора.</p></div></div>
            <div className="grid gap-2 sm:grid-cols-3">{protectionItems.map((item) => <div key={item.label} className="rounded-2xl bg-lavender p-2.5"><p className="text-xs text-slate-400">{item.label}</p><p className="mt-1 text-lg font-black text-brand-900">{item.value}</p><p className="text-sm text-slate-500">{item.hint}</p></div>)}</div>
          </Card>
          <Card>
            <div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-black text-brand-900 md:text-2xl">Документы по договору</h2><FileText className="text-slate-300" /></div>
            <div className="space-y-3">{documents.slice(0, 2).map((document) => <DocumentCard key={document.id} {...document} />)}</div>
          </Card>
          <Card>
            <div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-black text-brand-900 md:text-2xl">Последние события</h2><CheckCircle2 className="text-slate-300" /></div>
            <div className="space-y-3">{notifications.slice(0, 2).map((notification) => <NotificationCard key={notification.id} {...notification} />)}</div>
          </Card>
          <Card>
            <div className="mb-3 flex items-center justify-between"><div><h2 className="text-lg font-black text-brand-900 md:text-2xl">Быстрые действия</h2><p className="text-sm text-slate-500">Частые сценарии без поиска.</p></div><HeartHandshake className="text-slate-300" /></div>
            <div className="grid gap-3">{quickActions.map(({ label, icon: Icon }) => <button key={label} className="flex min-h-11 items-center justify-between rounded-2xl bg-lavender px-3 text-left text-sm font-bold text-brand-900"><span className="flex items-center gap-3"><Icon size={18} />{label}</span><ChevronRight size={16} /></button>)}</div>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}
