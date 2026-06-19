import Link from 'next/link';
import type { ReactNode } from 'react';
import { CalendarDays, CreditCard, Download, FileText, Headphones, ReceiptText, ShieldCheck } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { contracts, documents } from '@/data/mock';

export default function ContractDetail() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="grid gap-4 xl:grid-cols-[minmax(720px,860px)_320px] xl:items-start">
        <section className="space-y-4">
          <Card className="overflow-hidden p-0">
            <div className="bg-brand-900 p-5 text-white sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <StatusBadge>{contract.status}</StatusBadge>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{contract.title}</h2>
                  <p className="mt-1 text-sm text-white/66">{contract.number} · {contract.type}</p>
                </div>
                <Button href="/payment">
                  <CreditCard size={17} />
                  <span className="ml-2">Оплатить</span>
                </Button>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                <HeroMetric label="Внесено" value={contract.paidAmount} />
                <HeroMetric label="Следующий взнос" value={contract.premium} />
                <HeroMetric label="Оплатить до" value={contract.nextPaymentDate} />
                <HeroMetric label="Защита" value={contract.insuredAmount} />
              </div>
            </div>
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-brand-900">Срок договора</span>
                <span className="text-muted">{contract.termProgress}% · {contract.term}</span>
              </div>
              <ProgressBar value={contract.termProgress} />
            </div>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <InfoBlock icon={<CalendarDays size={19} />} title="Что важно сейчас">
              <p>До {contract.nextPaymentDate} нужно внести {contract.premium}, чтобы договор оставался в графике.</p>
              <Button href="/payment" className="mt-3">Оплатить взнос</Button>
            </InfoBlock>
            <InfoBlock icon={<ReceiptText size={19} />} title="Деньги и платежи">
              <dl className="space-y-2 text-sm">
                <Row label="Внесено" value={contract.paidAmount} />
                <Row label="Следующий платёж" value={contract.premium} />
                <Row label="Статус" value="Ожидает оплаты" />
              </dl>
            </InfoBlock>
            <InfoBlock icon={<ShieldCheck size={19} />} title="Страховая защита">
              <p>Покрытие {contract.insuredAmount} действует при своевременной оплате взносов.</p>
            </InfoBlock>
            <InfoBlock icon={<FileText size={19} />} title="Документы договора">
              <div className="mt-3 space-y-2">{documents.map((document) => <DocumentCard key={document.id} {...document} />)}</div>
            </InfoBlock>
          </div>

          <Card>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-bold text-brand-900">История операций</h3>
              <Link href="/documents" className="text-sm font-semibold text-brand-700">Документы</Link>
            </div>
            <div className="space-y-2">
              <Operation title="Плановый взнос" amount="30 000 ₽" date="25 июля" status="Ожидает оплаты" />
              <Operation title="Взнос по договору" amount="30 000 ₽" date="25 апреля" status="Зачислен" />
              <Operation title="Взнос по договору" amount="30 000 ₽" date="25 января" status="Зачислен" />
            </div>
          </Card>
        </section>

        <aside className="space-y-3">
          <Card>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Действие</p>
            <h3 className="mt-2 text-xl font-bold text-brand-900">Оплатить {contract.premium}</h3>
            <p className="mt-1 text-sm text-muted">Срок — до {contract.nextPaymentDate}</p>
            <Button href="/payment" className="mt-3 w-full">Оплатить</Button>
          </Card>
          <Card>
            <Headphones className="text-brand-900" size={20} />
            <h3 className="mt-2 font-bold text-brand-900">Помощь по договору</h3>
            <p className="mt-1 text-sm leading-5 text-muted">Ответим на вопросы по условиям, взносам и документам.</p>
            <Button href="/claims/new" variant="ghost" className="mt-3 w-full">Задать вопрос</Button>
          </Card>
          <Card>
            <Download className="text-brand-900" size={20} />
            <h3 className="mt-2 font-bold text-brand-900">Скачать пакет</h3>
            <p className="mt-1 text-sm text-muted">Полис и график платежей.</p>
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10">
      <p className="text-[11px] text-white/62">{label}</p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

function InfoBlock({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <Card>
      <div className="flex items-center gap-2 text-brand-900">
        {icon}
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="mt-2 text-sm leading-6 text-muted">{children}</div>
    </Card>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex justify-between gap-3"><dt className="text-muted">{label}</dt><dd className="font-semibold text-brand-900">{value}</dd></div>;
}

function Operation({ title, amount, date, status }: { title: string; amount: string; date: string; status: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-lavender/65 p-3 text-sm">
      <div>
        <p className="font-semibold text-brand-900">{title}</p>
        <p className="text-xs text-muted">{date} · {status}</p>
      </div>
      <b className="text-brand-900">{amount}</b>
    </div>
  );
}
