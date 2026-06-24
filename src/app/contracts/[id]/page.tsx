import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  CreditCard,
  Download,
  FileCheck2,
  FileDown,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
} from 'lucide-react';

import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { client, contracts, documents } from '@/data/mock';

const contract = contracts[0];
const paymentHref = `/contracts/${contract.id}/payment`;

const moneyMetrics = [
  { label: 'Внесено', value: '360 000 ₽', hint: 'Сумма всех оплаченных взносов по договору.' },
  { label: 'Резерв', value: contract.reserve, hint: 'Расчётная сумма накоплений с учётом программы.' },
  { label: 'Страховая защита', value: contract.insuredAmount, hint: 'Размер защиты, которая действует при активном договоре.' },
  { label: 'Доходность', value: contract.yield, hint: 'Текущий ориентир результата инвестиционной части.' },
];

const contractDocuments = [
  documents[0],
  documents[1],
  documents[2],
  { id: 'doc-conditions', title: 'Условия страхования', date: '12.04.2023', type: 'PDF', category: 'Правила', size: '1,2 МБ', contract: '№ RL-ИСЖ-102938' },
];

const participants = [
  { role: 'Страхователь', name: contract.owner },
  { role: 'Застрахованный', name: contract.owner },
  { role: 'Выгодоприобретатель', name: 'по закону' },
  { role: 'Персональный менеджер', name: client.manager },
];

const paymentHistory = [
  { date: '25.06.2025', type: 'Взнос', amount: '30 000 ₽', status: 'Оплачен' },
  { date: '25.05.2025', type: 'Взнос', amount: '30 000 ₽', status: 'Оплачен' },
  { date: '25.04.2025', type: 'Взнос', amount: '30 000 ₽', status: 'Оплачен' },
  { date: '25.07.2025', type: 'Взнос', amount: '30 000 ₽', status: 'Ожидает оплаты' },
];

const quickActions = [
  { label: 'Оплатить очередной взнос', icon: CreditCard, href: paymentHref },
  { label: 'Скачать полис и график', icon: FileDown, href: '/documents' },
  { label: 'Подать заявление', icon: FileText, href: '/claims/new' },
  { label: 'Сообщить о страховом случае', icon: ShieldCheck, href: '/claims' },
  { label: 'Связаться с поддержкой', icon: MessageCircle, href: '/profile' },
];

function PaymentStatusChip({ status }: { status: string }) {
  const isPaid = status === 'Оплачен';
  return (
    <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-extrabold ${isPaid ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100' : 'bg-amber-50 text-amber-700 ring-1 ring-amber-100'}`}>
      {status}
    </span>
  );
}

export default function ContractDetail() {
  return (
    <AppShell>
      <div className="space-y-5 pb-4 md:space-y-6 lg:pb-0">
        <Button href="/contracts" variant="ghost" className="w-full sm:w-auto">
          <ArrowLeft size={16} /> Вернуться к договорам
        </Button>

        <section className="overflow-hidden rounded-[2rem] bg-white shadow-card">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="space-y-6 p-5 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <p className="rounded-full bg-lavender px-3 py-1 text-[11px] font-black uppercase tracking-[.18em] text-brand-900">Договор</p>
                <StatusBadge>{contract.status}</StatusBadge>
              </div>
              <div>
                <h1 className="text-[34px] font-black leading-none text-brand-900 md:text-[52px]">{contract.title}</h1>
                <p className="mt-3 text-base font-semibold text-slate-500 md:text-lg">{contract.type}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.35rem] bg-lavender p-4"><p className="text-xs font-bold text-slate-400">Номер договора</p><b className="mt-1 block text-brand-900">№ {contract.number}</b></div>
                <div className="rounded-[1.35rem] bg-lavender p-4"><p className="text-xs font-bold text-slate-400">Срок</p><b className="mt-1 block text-brand-900">12.04.2023 — 12.04.2033</b></div>
                <div className="rounded-[1.35rem] bg-lavender p-4"><p className="text-xs font-bold text-slate-400">Клиент</p><b className="mt-1 block text-brand-900">{contract.owner}</b></div>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-brand-900 p-5 text-white md:p-7">
              <div>
                <Sparkles className="text-cta" size={28} />
                <p className="mt-5 text-sm leading-6 text-white/70">Договор активен. Ближайший взнос — 30 000 ₽ до 25 июля, документы и история платежей доступны ниже.</p>
              </div>
              <div className="mt-7 grid gap-3">
                <Button href={paymentHref} className="w-full">Оплатить взнос</Button>
                <Button href="/documents" variant="ghost" className="w-full bg-white/10 text-white ring-white/15 hover:bg-white/15"><Download size={16} /> Скачать полис</Button>
              </div>
            </div>
          </div>
        </section>

        <Card className="border border-amber-100 bg-white">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[1.15rem] bg-amber-50 text-amber-600"><CalendarDays size={22} /></div>
              <div><div className="flex flex-wrap items-center gap-2"><h2 className="text-2xl font-black text-brand-900">Что важно сейчас</h2><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold text-amber-700">Требует внимания</span></div><p className="mt-3 text-xl font-black text-brand-900 md:text-2xl">Следующий взнос 30 000 ₽ до 25 июля</p><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">Оплатите взнос вовремя, чтобы страховая защита продолжала действовать без перерыва.</p></div>
            </div>
            <Button href={paymentHref} className="w-full lg:w-auto">Оплатить</Button>
          </div>
        </Card>

        <section><div className="mb-3 flex items-center gap-3"><WalletCards className="text-brand-900" /><h2 className="text-2xl font-black text-brand-900">Деньги и защита</h2></div><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{moneyMetrics.map((item) => <Card key={item.label} className="p-5"><p className="text-sm font-bold text-slate-400">{item.label}</p><p className="mt-2 text-2xl font-black text-brand-900 md:text-3xl">{item.value}</p><p className="mt-3 text-sm leading-5 text-slate-500">{item.hint}</p></Card>)}</div></section>

        <Card><div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-2xl font-black text-brand-900">Прогресс накоплений</h2><p className="mt-1 text-sm text-slate-500">Вы выполнили 64% плана по договору</p></div><b className="text-3xl font-black text-brand-900">64%</b></div><ProgressBar value={64} /><p className="mt-4 rounded-[1.15rem] bg-lavender p-4 text-sm font-semibold leading-6 text-brand-900">При своевременной оплате взносов договор продолжает действовать, а защита сохраняется.</p></Card>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,.85fr)]">
          <Card><h2 className="text-2xl font-black text-brand-900">Документы договора</h2><div className="mt-4 grid gap-3">{contractDocuments.map((document) => <div key={document.id} className="flex flex-col gap-3 rounded-[1.25rem] bg-lavender p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-3"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-[1rem] bg-white text-brand-900"><FileCheck2 size={20} /></div><div><p className="font-black text-brand-900">{document.title}</p><p className="mt-1 text-sm text-slate-500">{document.category} · {document.date} · {document.size}</p></div></div><Button href="/documents" variant="secondary" className="w-full sm:w-auto"><Download size={16} />Скачать</Button></div>)}</div></Card>
          <Card><h2 className="text-2xl font-black text-brand-900">Участники договора</h2><div className="mt-4 grid gap-3">{participants.map((item) => <div key={item.role} className="flex items-center gap-3 rounded-[1.2rem] bg-lavender p-4"><UserRound size={18} className="text-brand-900" /><div><p className="text-sm text-slate-500">{item.role}</p><p className="font-black text-brand-900">{item.name}</p></div></div>)}</div></Card>
        </section>

        <Card><h2 className="text-2xl font-black text-brand-900">История платежей</h2><div className="mt-4 overflow-hidden rounded-[1.35rem] border border-slate-100"><div className="hidden grid-cols-[1fr_1fr_1fr_1fr] bg-lavender px-4 py-3 text-xs font-black uppercase tracking-[.12em] text-slate-400 md:grid"><span>Дата</span><span>Операция</span><span>Сумма</span><span>Статус</span></div>{paymentHistory.map((item) => <div key={`${item.date}-${item.status}`} className="grid gap-2 border-t border-slate-100 bg-white p-4 first:border-t-0 md:grid-cols-[1fr_1fr_1fr_1fr] md:items-center"><p className="font-black text-brand-900">{item.date}</p><p className="text-sm font-semibold text-slate-500">{item.type}</p><p className="text-lg font-black text-brand-900 md:text-base">{item.amount}</p><PaymentStatusChip status={item.status} /></div>)}</div></Card>

        <Card><h2 className="text-2xl font-black text-brand-900">Что можно сделать</h2><div className="mt-4 grid gap-3 md:grid-cols-2">{quickActions.map(({ label, icon: Icon, href }) => <Button key={label} href={href} variant="ghost" className="min-h-14 w-full justify-between px-4"><span className="flex items-center gap-3"><Icon size={18} />{label}</span><ChevronRight size={16} /></Button>)}</div></Card>
      </div>
    </AppShell>
  );
}
