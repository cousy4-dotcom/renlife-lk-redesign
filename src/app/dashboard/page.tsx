import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight, Headphones, MessageCircle } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { ContractCard } from '@/components/ui/ContractCard';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { MetricCard } from '@/components/ui/MetricCard';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { contracts, documents, notifications, quickActions } from '@/data/mock';

export default function DashboardPage() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="mb-3 sm:mb-4">
        <p className="text-sm text-muted">Следующий взнос по договору “Выгодный старт” — до 25 июля</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(720px,860px)_320px] xl:items-start">
        <section className="space-y-4">
          <AlertBanner />

          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            <MetricCard label="Внесено" value="120 000 ₽" hint="по программе" />
            <MetricCard label="Следующий платёж" value={contract.premium} hint={`до ${contract.nextPaymentDate}`} />
            <MetricCard label="Защита" value={contract.insuredAmount} hint="активна" />
            <MetricCard label="Срок договора" value="18%" hint={contract.term} />
          </div>

          <ContractCard contract={contract} />

          <section className="rounded-[1.35rem] border border-brand-900/5 bg-white p-4 shadow-card">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-bold text-brand-900">Быстрые действия</h2>
              <span className="text-xs text-muted">4 действия</span>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {quickActions.map(({ label, href, icon: Icon, primary }) => (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center gap-2 rounded-2xl p-3 text-sm font-semibold transition ${
                    primary ? 'bg-cta text-brand-900' : 'bg-lavender text-brand-900 hover:bg-brand-900/5'
                  }`}
                >
                  <Icon size={17} />
                  {label}
                </Link>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <Panel title="Документы" href="/documents">
              {documents.map((document) => <DocumentCard key={document.id} {...document} />)}
            </Panel>
            <Panel title="Уведомления" href="/notifications">
              {notifications.map((item) => <NotificationCard key={item.id} title={item.title} text={item.text} />)}
            </Panel>
          </section>
        </section>

        <aside className="space-y-3">
          <section className="rounded-[1.35rem] border border-brand-900/5 bg-white p-4 shadow-card">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Следующий платёж</p>
            <p className="mt-2 text-2xl font-bold text-brand-900">{contract.premium}</p>
            <p className="mt-1 text-sm text-muted">до {contract.nextPaymentDate} · {contract.title}</p>
            <Link href="/payment" className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-cta px-3.5 py-2.5 text-sm font-semibold text-brand-900">
              Оплатить
              <ArrowUpRight className="ml-1.5" size={15} />
            </Link>
          </section>

          <section className="rounded-[1.35rem] border border-brand-900/5 bg-white p-4 shadow-card">
            <div className="flex items-center gap-2 text-brand-900">
              <Headphones size={18} />
              <h2 className="font-bold">Помощь</h2>
            </div>
            <p className="mt-2 text-sm leading-5 text-muted">Подскажем по графику платежей, документам и заявлениям.</p>
            <Link href="/claims/new" className="mt-3 inline-flex items-center text-sm font-semibold text-brand-700">
              Написать в поддержку <MessageCircle className="ml-1.5" size={15} />
            </Link>
          </section>

          <Panel title="Уведомления" href="/notifications" dense>
            {notifications.map((item) => <NotificationCard key={item.id} title={item.title} text={item.text} />)}
          </Panel>
        </aside>
      </div>
    </AppShell>
  );
}

function Panel({ title, href, children, dense = false }: { title: string; href: string; children: ReactNode; dense?: boolean }) {
  return (
    <section className={`rounded-[1.35rem] border border-brand-900/5 bg-white p-4 shadow-card ${dense ? 'hidden xl:block' : ''}`}>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-brand-900">{title}</h2>
        <Link className="text-sm font-semibold text-brand-700" href={href}>Все</Link>
      </div>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
