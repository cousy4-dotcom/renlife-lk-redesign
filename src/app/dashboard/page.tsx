import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { ContractCard } from '@/components/ui/ContractCard';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { MetricCard } from '@/components/ui/MetricCard';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { contracts, documents, notifications, protectionItems, quickActions } from '@/data/mock';

export default function DashboardPage() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <section className="space-y-5">
          <AlertBanner />

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <MetricCard label="Внесено" value={contract.paidAmount} hint="64% программы" />
            <MetricCard label="Следующий платёж" value={contract.premium} hint={`до ${contract.nextPaymentDate}`} />
            <MetricCard label="Страховая защита" value={contract.insuredAmount} hint="активна" />
            <MetricCard label="Срок договора" value={contract.term} hint="долгосрочная цель" />
          </div>

          <ContractCard contract={contract} />

          <section className="rounded-[1.5rem] bg-white/72 p-4 shadow-card sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold text-brand-900">Быстрые действия</h2>
              <span className="text-xs text-muted">Самое нужное</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
              {quickActions.map(({ label, href, icon: Icon, primary }) => (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center gap-2 rounded-2xl p-3 text-sm font-semibold transition ${
                    primary ? 'bg-cta text-brand-900' : 'bg-lavender text-brand-900 hover:bg-brand-900/5'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold text-brand-900">Документы</h2>
                <Link className="text-sm font-semibold text-brand-700" href="/documents">Все</Link>
              </div>
              <div className="space-y-2.5">{documents.map((document) => <DocumentCard key={document.id} {...document} />)}</div>
            </div>
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-bold text-brand-900">Уведомления</h2>
                <Link className="text-sm font-semibold text-brand-700" href="/notifications">Все</Link>
              </div>
              <div className="space-y-2.5">{notifications.map((item) => <NotificationCard key={item.id} title={item.title} text={item.text} />)}</div>
            </div>
          </section>
        </section>

        <aside className="space-y-4">
          <section className="rounded-[1.5rem] bg-white p-4 shadow-card">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Контекст</p>
            <h2 className="mt-2 text-lg font-bold text-brand-900">Платёж в фокусе</h2>
            <p className="mt-3 text-3xl font-bold text-brand-900">{contract.premium}</p>
            <p className="mt-1 text-sm text-muted">по договору «{contract.title}» до {contract.nextPaymentDate}</p>
            <Link href="/payment" className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-cta px-4 py-2.5 text-sm font-semibold text-brand-900">
              Оплатить сейчас
              <ArrowUpRight className="ml-2" size={16} />
            </Link>
          </section>

          <section className="rounded-[1.5rem] bg-white p-4 shadow-card">
            <h2 className="text-lg font-bold text-brand-900">Защита</h2>
            <div className="mt-3 space-y-3">
              {protectionItems.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-lavender/75 p-3">
                  <Icon className="text-brand-900" size={19} />
                  <div>
                    <p className="text-sm font-semibold text-brand-900">{label}</p>
                    <p className="text-xs text-muted">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </AppShell>
  );
}
