import { CalendarDays, CheckCircle2, ChevronRight, FileText, HeartHandshake, ShieldCheck, WalletCards } from 'lucide-react';

import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ContractCard } from '@/components/ui/ContractCard';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { contracts, documents, notifications, quickActions } from '@/data/mock';

const activeContract = contracts[0];

const protectionItems = [
  { label: 'Накоплено в резерве', value: activeContract.reserve, hint: '64% к плану договора' },
  { label: 'Страховая защита', value: activeContract.insuredAmount, hint: 'действует весь срок' },
  { label: 'Доходность портфеля', value: activeContract.yield, hint: 'ориентир с начала года' },
];

export default function DashboardPage() {
  const aside = (
    <>
      <Card className="bg-brand-900 text-white">
        <p className="text-sm font-bold text-white/60">Фокус на июль</p>
        <h2 className="mt-2 text-2xl font-black">План защиты стабилен</h2>
        <p className="mt-2 text-sm text-white/70">
          Один активный договор, ближайшее действие — внести платёж 30 000 ₽ до 25 июля.
        </p>
        <div className="mt-5 rounded-3xl bg-white/10 p-4">
          <div className="mb-2 flex justify-between text-xs font-bold text-white/65">
            <span>Накоплено</span>
            <span>{activeContract.paidPercent}%</span>
          </div>
          <ProgressBar value={activeContract.paidPercent} />
        </div>
      </Card>

      <div>
        <h2 className="mb-3 text-lg font-black text-brand-900">Документы по договору</h2>
        <div className="space-y-3">
          {documents.slice(0, 3).map((document) => (
            <DocumentCard key={document.id} {...document} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-black text-brand-900">Последние события</h2>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} title={notification.title} text={notification.text} />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <AppShell aside={aside}>
      <div className="space-y-4 md:space-y-5">
        <section className="rounded-[2rem] bg-white/80 p-5 shadow-card ring-1 ring-white/70 md:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.16em] text-slate-400">Главная</p>
              <h1 className="mt-2 text-3xl font-black text-brand-900 md:text-4xl">Анна, всё под контролем</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
                Договор активен, документы доступны в кабинете, а ближайший платёж уже подготовлен к оплате.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 rounded-3xl bg-lavender p-3 text-sm sm:min-w-72">
              <div className="rounded-2xl bg-white p-3">
                <p className="text-slate-400">Статус</p>
                <b className="text-brand-900">Активен</b>
              </div>
              <div className="rounded-2xl bg-white p-3">
                <p className="text-slate-400">Договор</p>
                <b className="text-brand-900">№ {activeContract.number}</b>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-brand-900 p-5 text-white shadow-soft md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cta text-brand-900">
                <CalendarDays />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-white/50">Нужно действие</p>
                <h2 className="mt-1 text-xl font-black md:text-2xl">Платёж 30 000 ₽ до 25 июля</h2>
                <p className="mt-1 text-sm text-white/70">Оплатите взнос по программе «Выгодный старт», чтобы защита продолжала действовать без пауз.</p>
              </div>
            </div>
            <Button href="/contracts/contract-1/payment" className="w-full sm:w-auto">Оплатить сейчас</Button>
          </div>
        </section>

        <ContractCard contract={activeContract} />

        <section className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-lavender text-brand-900"><WalletCards /></div>
              <div>
                <h2 className="text-xl font-black text-brand-900">Деньги и защита</h2>
                <p className="text-sm text-slate-500">Ключевые показатели по активному договору.</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {protectionItems.map((item) => (
                <div key={item.label} className="rounded-3xl bg-lavender p-4">
                  <p className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-2xl font-black text-brand-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.hint}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-lavender text-brand-900"><ShieldCheck /></div>
              <div>
                <h2 className="text-xl font-black text-brand-900">Выгодный старт</h2>
                <p className="text-sm text-slate-500">{activeContract.term}</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between"><span className="text-slate-500">Тип</span><b className="text-brand-900">ИСЖ</b></div>
              <div className="flex items-center justify-between"><span className="text-slate-500">Взнос</span><b className="text-brand-900">{activeContract.premium}</b></div>
              <div className="flex items-center justify-between"><span className="text-slate-500">Следующая дата</span><b className="text-brand-900">{activeContract.nextPaymentDate}</b></div>
            </div>
            <Button href="/contracts/contract-1" variant="ghost" className="mt-5 w-full">Подробнее</Button>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-2 xl:hidden">
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-brand-900">Документы по договору</h2>
              <FileText className="text-slate-300" />
            </div>
            <div className="space-y-3">
              {documents.slice(0, 3).map((document) => (
                <DocumentCard key={document.id} {...document} />
              ))}
            </div>
          </Card>

          <Card>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-black text-brand-900">Последние события</h2>
              <CheckCircle2 className="text-slate-300" />
            </div>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <NotificationCard key={notification.id} title={notification.title} text={notification.text} />
              ))}
            </div>
          </Card>
        </section>

        <Card>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-brand-900">Быстрые действия</h2>
              <p className="text-sm text-slate-500">Частые сценарии без поиска по меню.</p>
            </div>
            <HeartHandshake className="text-slate-300" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {quickActions.map(({ label, icon: Icon }) => (
              <button key={label} className="flex items-center justify-between rounded-3xl bg-lavender p-4 text-left text-sm font-extrabold text-brand-900 transition hover:bg-white">
                <span className="flex items-center gap-3"><Icon size={20} />{label}</span>
                <ChevronRight size={18} className="text-slate-300" />
              </button>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
