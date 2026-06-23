import { BellRing } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { notifications } from '@/data/mock';

const filters = ['Все', 'Важно', 'Новое', 'Готово'];

export default function Events() {
  return <AppShell><div className="space-y-5 md:space-y-6"><header className="rounded-[1.8rem] bg-white p-5 shadow-card md:p-7"><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">События</p><h1 className="mt-2 text-[28px] font-black leading-tight text-brand-900 md:text-[38px]">Уведомления по кабинету</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500 md:text-base">Важные платежи, новые документы и готовые операции отмечены понятными статусами.</p></header><div className="grid gap-3 sm:grid-cols-3">{filters.slice(1).map((status) => <Card key={status} className="flex items-center justify-between"><div><p className="text-sm text-slate-500">Статус</p><b className="text-lg text-brand-900">{status}</b></div><BellRing className="text-brand-900" /></Card>)}</div><div className="flex gap-2 overflow-x-auto pb-1">{filters.map((filter, index) => <button key={filter} className={`h-10 shrink-0 rounded-full px-4 text-sm font-bold ${index === 0 ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card'}`}>{filter}</button>)}</div><div className="grid gap-3">{notifications.map((notification) => <NotificationCard key={notification.id} {...notification} />)}</div></div></AppShell>;
}
