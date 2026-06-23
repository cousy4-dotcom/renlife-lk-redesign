import Link from 'next/link';
import { ArrowRight, BellRing, CalendarDays, CheckCircle2, ChevronRight, CreditCard, FileText, HelpCircle, ShieldCheck } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { contracts, dashboardMoney, documents, importantActions, notifications, quickActions } from '@/data/mock';

const contract = contracts[0];
const paymentHref = '/contracts/contract-1/payment';
const contractHref = '/contracts/contract-1';

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return <div><h3 className="text-lg font-black tracking-tight text-brand-900 sm:text-xl">{title}</h3>{subtitle ? <p className="mt-1 text-sm leading-5 text-slate-500">{subtitle}</p> : null}</div>;
}

function DashboardHeader() {
  return <header className="flex items-start justify-between gap-4 rounded-[1.6rem] bg-white/75 p-4 shadow-card backdrop-blur sm:p-5 xl:bg-transparent xl:p-0 xl:shadow-none"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-400">Личный кабинет</p><h1 className="mt-1 text-2xl font-black tracking-tight text-brand-900 sm:text-4xl">Анна, всё под контролем</h1><p className="mt-2 max-w-2xl text-sm leading-5 text-slate-500 sm:text-base">Следующий взнос по договору “Выгодный старт” — до 25 июля</p></div><div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-900 text-sm font-black text-cta xl:hidden">АС</div></header>;
}

function ActionBanner() {
  return <section className="overflow-hidden rounded-[1.8rem] bg-brand-900 p-5 text-white shadow-card sm:p-6"><div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div className="flex gap-4"><div className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-cta sm:grid"><CalendarDays size={22}/></div><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-white/50">Что нужно сделать сейчас</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Платёж 30 000 ₽ до 25 июля</h2><p className="mt-2 max-w-xl text-sm leading-5 text-white/70 sm:text-base">Оплатите взнос, чтобы договор продолжал действовать без перерыва</p></div></div><div className="flex flex-col gap-2 sm:flex-row sm:items-center"><Button href={paymentHref}>Оплатить</Button><Link href={contractHref} className="rounded-2xl px-4 py-3 text-center text-sm font-extrabold text-white/78 transition hover:bg-white/10 hover:text-white">Как работает взнос?</Link></div></div></section>;
}

function MetricTile({ label, value }: { label: string; value: string }) {
  return <div className="rounded-3xl border border-brand-900/5 bg-lavender/70 p-4"><p className="text-[11px] font-extrabold uppercase tracking-[.12em] text-slate-400">{label}</p><p className="mt-1 text-lg font-black text-brand-900">{value}</p></div>;
}

function ActiveContract() {
  const metrics = [
    { label: 'Следующий взнос', value: contract.premium },
    { label: 'Оплатить до', value: contract.nextPaymentDate },
    { label: 'Страховая защита', value: contract.insuredAmount },
    { label: 'Внесено', value: contract.paidAmount },
    { label: 'Резерв', value: contract.reserve },
    { label: 'Прогресс программы', value: `${contract.paidPercent}%` },
  ];

  return <Card className="space-y-5"><div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"><div className="flex gap-3"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-900 text-cta"><ShieldCheck size={23}/></div><div><div className="flex flex-wrap items-center gap-2"><h2 className="text-2xl font-black tracking-tight text-brand-900">{contract.title}</h2><StatusBadge>{contract.status}</StatusBadge></div><p className="mt-1 text-sm text-slate-500">№ {contract.number}</p><p className="text-sm text-slate-500">{contract.type}</p></div></div><div className="grid grid-cols-2 gap-2 sm:flex"><Button href={contractHref} variant="ghost">Открыть договор</Button><Button href={paymentHref}>Оплатить</Button></div></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{metrics.map((metric)=><MetricTile key={metric.label} {...metric}/>)}</div><div className="rounded-3xl border border-brand-900/5 bg-white p-4"><div className="mb-2 flex justify-between text-xs font-bold text-slate-500"><span>Прогресс программы</span><span>{contract.paidPercent}%</span></div><ProgressBar value={contract.paidPercent}/><p className="mt-3 text-sm leading-5 text-slate-500">Защита действует при своевременной оплате взносов</p></div></Card>;
}

function MoneyAndProtection() {
  return <section className="space-y-3"><SectionTitle title="Деньги и защита" subtitle="Ключевые суммы по активному договору"/><div className="grid gap-3 md:grid-cols-3">{dashboardMoney.map((item)=><Card key={item.label} className="min-h-32 border-brand-900/5"><p className="text-xs font-extrabold uppercase tracking-[.12em] text-slate-400">{item.label}</p><p className="mt-3 text-2xl font-black text-brand-900">{item.value}</p><p className="mt-2 text-sm leading-5 text-slate-500">{item.hint}</p></Card>)}</div></section>;
}

function QuickActions() {
  return <section className="grid gap-3 sm:grid-cols-2 lg:hidden">{quickActions.slice(0,3).map(({label,href,icon:Icon})=><Link key={label} href={href} className="flex items-center justify-between rounded-3xl bg-white p-4 text-sm font-extrabold text-brand-900 shadow-card"><span className="flex items-center gap-3"><Icon size={20}/>{label}</span><ArrowRight size={17}/></Link>)}</section>;
}

function DocumentsBlock() {
  return <Card><div className="mb-4 flex items-center justify-between gap-3"><SectionTitle title="Документы по договору" subtitle="Полис, график и памятка доступны в кабинете"/><Button href="/documents" variant="ghost" className="hidden sm:inline-flex">Все документы</Button></div><div className="grid gap-3 md:grid-cols-3">{documents.map((doc)=><Link key={doc.id} href="/documents" className="group flex items-center gap-3 rounded-3xl border border-brand-900/5 bg-lavender/70 p-4 transition hover:bg-white hover:shadow-card"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-brand-900"><FileText size={20}/></span><span><b className="block text-sm text-brand-900">{doc.title}</b><span className="text-xs text-slate-500">{doc.type} · {doc.date}</span></span><ChevronRight className="ml-auto hidden text-slate-300 transition group-hover:text-brand-900 sm:block" size={18}/></Link>)}</div><Button href="/documents" variant="ghost" className="mt-3 w-full sm:hidden">Все документы</Button></Card>;
}

function EventsBlock() {
  return <Card><div className="mb-4"><SectionTitle title="Последние события" subtitle="История событий по активному договору"/></div><div className="space-y-3">{notifications.map((event,index)=><div key={event.id} className="flex gap-3 rounded-3xl border border-brand-900/5 bg-lavender/60 p-4"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-white text-brand-900">{index===2?<BellRing size={18}/>:<CheckCircle2 size={18}/>}</div><div><b className="text-brand-900">{event.title}</b><p className="mt-1 text-sm leading-5 text-slate-500">{event.text}</p></div><span className="ml-auto hidden text-xs font-bold text-slate-400 sm:block">0{index+1}</span></div>)}</div></Card>;
}

function DashboardAside() {
  return <><Card className="space-y-4"><div className="flex items-center justify-between"><p className="text-sm font-bold uppercase tracking-[.14em] text-slate-400">Следующий платёж</p><CreditCard className="text-brand-900" size={20}/></div><div><p className="text-3xl font-black text-brand-900">30 000 ₽</p><p className="text-sm text-slate-500">до 25 июля</p></div><Button href={paymentHref} className="w-full">Оплатить</Button></Card><Card><h3 className="text-lg font-black text-brand-900">Что важно сейчас</h3><ul className="mt-4 space-y-3">{importantActions.map((action)=><li key={action} className="flex gap-3 text-sm leading-5 text-slate-600"><CheckCircle2 className="mt-0.5 text-cta" size={18}/><span>{action}</span></li>)}</ul></Card><Card className="space-y-4"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-2xl bg-lavender text-brand-900"><HelpCircle size={20}/></div><h3 className="text-lg font-black text-brand-900">Помощь по договору</h3></div><p className="text-sm leading-5 text-slate-500">Мы поможем разобраться с платежом, документами или условиями договора</p><Button href="/claims" variant="secondary" className="w-full">Написать в поддержку</Button></Card></>;
}

export default function DashboardPage() {
  return <AppShell aside={<DashboardAside/>} showTopBar={false}><div className="space-y-5"><DashboardHeader/><ActionBanner/><ActiveContract/><MoneyAndProtection/><QuickActions/><DocumentsBlock/><EventsBlock/></div></AppShell>;
}
