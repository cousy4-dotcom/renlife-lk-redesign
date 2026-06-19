import { AlertBanner } from '@/components/ui/AlertBanner';
import { ContractCard } from '@/components/ui/ContractCard';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { MetricCard } from '@/components/ui/MetricCard';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { AppShell } from '@/components/layout/AppShell';
import { contracts, documents, notifications, quickActions } from '@/data/mock';

export default function DashboardPage(){return <AppShell><div className="grid gap-6 xl:grid-cols-[1fr_360px]"><section className="space-y-6"><AlertBanner/><div className="grid gap-4 sm:grid-cols-3"><MetricCard label="Активы под защитой" value="1 500 000 ₽" hint="по активным договорам"/><MetricCard label="Ближайший платёж" value="30 000 ₽" hint="до 25 июля"/><MetricCard label="Накоплено" value="64%" hint="по программе"/></div><ContractCard contract={contracts[0]}/><div className="rounded-4xl bg-white/70 p-5 shadow-card"><h2 className="mb-4 text-xl font-black text-brand-900">Быстрые действия</h2><div className="grid gap-3 sm:grid-cols-3">{quickActions.map(({label,icon:Icon})=><button key={label} className="flex items-center gap-3 rounded-3xl bg-lavender p-4 text-left font-bold text-brand-900"><Icon/>{label}</button>)}</div></div></section><aside className="space-y-6"><div><h2 className="mb-3 text-xl font-black text-brand-900">Уведомления</h2><div className="space-y-3">{notifications.map(n=><NotificationCard key={n.id} title={n.title} text={n.text}/>)}</div></div><div><h2 className="mb-3 text-xl font-black text-brand-900">Документы</h2><div className="space-y-3">{documents.map(d=><DocumentCard key={d.id} {...d}/>)}</div></div></aside></div></AppShell>}
