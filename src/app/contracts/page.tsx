import { AppShell } from '@/components/layout/AppShell';
import { ContractCard } from '@/components/ui/ContractCard';
import { MetricCard } from '@/components/ui/MetricCard';
import { contracts } from '@/data/mock';

export default function Contracts() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="grid gap-4 xl:grid-cols-[minmax(720px,860px)_320px] xl:items-start">
        <section className="space-y-4">
          <div>
            <p className="text-sm text-muted">Все программы и договоры</p>
            <h2 className="text-2xl font-bold text-brand-900">Мои договоры</h2>
          </div>
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            <MetricCard label="Внесено" value={contract.paidAmount} hint="по активному договору" />
            <MetricCard label="Ближайший платёж" value={contract.premium} hint={`до ${contract.nextPaymentDate}`} />
            <MetricCard label="Защита" value={contract.insuredAmount} hint="сумма покрытия" />
            <MetricCard label="Срок" value={`${contract.termProgress}%`} hint={contract.term} />
          </div>
          <div className="grid gap-4">{contracts.map((item) => <ContractCard key={item.id} contract={item} />)}</div>
        </section>
        <aside className="space-y-3">
          <div className="rounded-[1.35rem] border border-brand-900/5 bg-white p-4 shadow-card">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Фокус</p>
            <p className="mt-2 text-lg font-bold text-brand-900">Следующий взнос</p>
            <p className="mt-1 text-2xl font-bold text-brand-900">{contract.premium}</p>
            <p className="text-sm text-muted">до {contract.nextPaymentDate}</p>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
