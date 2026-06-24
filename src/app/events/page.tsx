import { BellRing } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { notifications } from '@/data/mock';

const filters = ['Все', 'Важно', 'Новое', 'Готово'];

export default function Events() {
  return <AppShell><div className="space-y-4 md:space-y-5"><header className="rounded-[1.55rem] bg-white p-4 shadow-card md:rounded-[1.8rem] md:p-6"><p className="text-[11px] font-semibold uppercase tracking-[.16em] text-slate-400">События</p><h1 className="mt-2 text-[25px] font-black leading-tight text-brand-900 md:text-[34px]">Центр уведомлений</h1><p className="mt-2 max-w-3xl text-sm leading-5 text-slate-500 md:text-[15px] md:leading-6">Timeline платежей, документов и операций с аккуратными статусами.</p></header><div className="grid gap-2 sm:grid-cols-3">{filters.slice(1).map((status) => <Card key={status} className="flex items-center justify-between"><div><p className="text-sm text-slate-500">Статус</p><b className="text-base text-brand-900">{status}</b></div><BellRing size={20} className="text-brand-900" /></Card>)}</div><div className="flex gap-2 overflow-x-auto pb-1">{filters.map((filter, index) => <button key={filter} className={`h-9 shrink-0 rounded-full px-3.5 text-sm font-bold ${index === 0 ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card'}`}>{filter}</button>)}</div><div className="relative grid gap-2 before:absolute before:bottom-4 before:left-[18px] before:top-4 before:w-px before:bg-brand-900/10">{notifications.map((notification) => <NotificationCard key={notification.id} {...notification} />)}</div></div></AppShell>;
}
