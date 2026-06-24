import { ArrowLeft, CalendarDays, ChevronRight, CreditCard, Download, FileDown, FileText, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { contracts, documents, notifications, payments } from '@/data/mock';

const contract = contracts[0];
const payment = payments[0];

const summaryCards = [
  { label: 'Следующий взнос', value: contract.premium },
  { label: 'Оплатить до', value: contract.nextPaymentDate },
  { label: 'Страховая защита', value: contract.insuredAmount },
  { label: 'Резерв', value: contract.reserve },
];

const paymentHistory = [
  { date: '12.04.2025', amount: '30 000 ₽', status: 'Оплачен' },
  { date: '12.04.2024', amount: '30 000 ₽', status: 'Оплачен' },
  { date: '12.04.2023', amount: '30 000 ₽', status: 'Оплачен' },
];

const protectionRows = [
  { title: 'Дожитие с возвратом взносов', amount: '31 200 ₽', note: 'Выплата при завершении программы' },
  { title: 'Смерть в результате ДТП', amount: '3 000 ₽', note: 'Дополнительная выплата по риску' },
  { title: 'Основная защита по договору', amount: contract.insuredAmount, note: 'Ключевая сумма страховой защиты' },
];

const contractDocuments = [
  documents[0],
  documents[1],
  documents[2],
  { id: 'doc-conditions', title: 'Условия страхования', date: '12.04.2023', type: 'PDF' },
];

const quickActions = [
  { label: 'Оплатить очередной взнос', icon: CreditCard, href: `/contracts/${contract.id}/payment` },
  { label: 'Подать заявление', icon: FileText, href: '/claims/new' },
  { label: 'Скачать документы', icon: FileDown, href: '/documents' },
  { label: 'Сообщить о страховом случае', icon: ShieldCheck, href: '/claims' },
  { label: 'Связаться с менеджером', icon: HeartHandshake, href: '/profile' },
];

export default function ContractDetail() {
  return (
    <AppShell>
      <div className="space-y-5 md:space-y-6">
        <Button href="/contracts" variant="ghost" className="w-full sm:w-auto">
          <ArrowLeft size={16} /> Вернуться к договорам
        </Button>

        <section className="overflow-hidden rounded-[2rem] bg-white p-5 shadow-card md:p-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-stretch">
            <div className="min-w-0 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge>{contract.status}</StatusBadge>
                <span className="rounded-full bg-lavender px-3 py-1 text-xs font-extrabold text-brand-900">Срок {contract.term}</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Центр управления договором</p>
                <h1 className="mt-2 text-[32px] font-black leading-tight text-brand-900 md:text-[46px]">{contract.title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 md:text-base">{contract.type} · № {contract.number}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.35rem] bg-lavender p-4"><p className="text-sm text-slate-500">Клиент</p><b className="mt-1 block text-lg text-brand-900">{contract.owner}</b></div>
                <div className="rounded-[1.35rem] bg-lavender p-4"><p className="text-sm text-slate-500">Ближайшее действие</p><b className="mt-1 block text-lg text-brand-900">Взнос до {contract.nextPaymentDate}</b></div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[1.7rem] bg-brand-900 p-5 text-white">
              <div>
                <Sparkles className="text-cta" />
                <p className="mt-4 text-sm text-white/60">Всё важное собрано на одном экране: платежи, защита, накопления, документы и события.</p>
              </div>
              <div className="mt-6 grid gap-3">
                <Button href={`/contracts/${contract.id}/payment`} className="w-full">Оплатить взнос</Button>
                <Button href="/documents" variant="ghost" className="w-full bg-white/10 text-white ring-white/15 hover:bg-white/15"><Download size={16} /> Скачать полис</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {summaryCards.map((item) => <Card key={item.label} className="p-4 md:p-5"><p className="text-xs font-semibold text-slate-400">{item.label}</p><p className="mt-2 break-words text-xl font-black text-brand-900 md:text-2xl">{item.value}</p></Card>)}
        </section>

        <Card>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-2xl font-black text-brand-900">Прогресс программы</h2><p className="mt-1 text-sm text-slate-500">{contract.reserve} накоплено из планового резерва</p></div><b className="text-3xl font-black text-brand-900">{contract.paidPercent}%</b></div>
          <ProgressBar value={contract.paidPercent} />
          <p className="mt-4 rounded-[1.15rem] bg-lavender p-4 text-sm font-semibold text-brand-900">Защита действует при своевременной оплате взносов.</p>
        </Card>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)]">
          <Card className="space-y-4"><div className="flex items-center gap-3"><CalendarDays className="text-brand-900" /><h2 className="text-2xl font-black text-brand-900">Платежи</h2></div><div className="rounded-[1.4rem] bg-lavender p-4"><p className="text-sm text-slate-500">Ближайший платёж</p><div className="mt-2 flex flex-wrap items-center justify-between gap-3"><b className="text-2xl text-brand-900">{payment.amount}</b><StatusBadge>{payment.status}</StatusBadge></div><p className="mt-2 text-sm font-bold text-brand-900">Дата: {payment.dueDate}</p><Button href={`/contracts/${contract.id}/payment`} className="mt-4 w-full">Оплатить</Button></div><div className="space-y-2">{paymentHistory.map((item) => <div key={item.date} className="flex min-h-12 flex-wrap items-center justify-between gap-2 rounded-[1rem] border border-slate-100 px-4 py-3 text-sm"><span className="font-bold text-brand-900">{item.date}</span><span className="text-slate-500">{item.amount}</span><span className="font-bold text-emerald-600">{item.status}</span></div>)}</div></Card>

          <Card className="space-y-4"><div className="flex items-center gap-3"><ShieldCheck className="text-brand-900" /><h2 className="text-2xl font-black text-brand-900">Страховая защита</h2></div>{protectionRows.map((item) => <div key={item.title} className="rounded-[1.2rem] bg-lavender p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-black text-brand-900">{item.title}</h3><p className="mt-1 text-sm text-slate-500">{item.note}</p></div><b className="text-lg text-brand-900">{item.amount}</b></div></div>)}</Card>
        </section>

        <section className="grid gap-5 xl:grid-cols-2">
          <Card><h2 className="text-2xl font-black text-brand-900">Документы договора</h2><div className="mt-4 grid gap-3">{contractDocuments.map((document) => <div key={document.id} className="flex flex-col gap-3 rounded-[1.2rem] bg-lavender p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-black text-brand-900">{document.title}</p><p className="mt-1 text-sm text-slate-500">{document.type} · {document.date}</p></div><Button href="/documents" variant="secondary" className="w-full sm:w-auto"><Download size={16} />Скачать</Button></div>)}</div></Card>
          <Card><h2 className="text-2xl font-black text-brand-900">Действия по договору</h2><div className="mt-4 grid gap-3">{quickActions.map(({ label, icon: Icon, href }) => <Button key={label} href={href} variant="ghost" className="min-h-12 w-full justify-between px-4"><span className="flex items-center gap-3"><Icon size={18} />{label}</span><ChevronRight size={16} /></Button>)}</div></Card>
        </section>

        <Card><h2 className="text-2xl font-black text-brand-900">Последние события</h2><div className="mt-4 grid gap-3 md:grid-cols-3">{notifications.slice(0, 3).map((event) => <div key={event.id} className="rounded-[1.2rem] bg-lavender p-4"><div className="flex items-center justify-between gap-3"><event.icon className="text-brand-900" size={20} /><StatusBadge>{event.status}</StatusBadge></div><h3 className="mt-4 font-black text-brand-900">{event.title}</h3><p className="mt-1 text-sm leading-5 text-slate-500">{event.text}</p></div>)}</div></Card>
      </div>
    </AppShell>
  );
}
