import { AppShell } from '@/components/layout/AppShell';
import { ContractCard } from '@/components/ui/ContractCard';
import { MetricCard } from '@/components/ui/MetricCard';
import { contracts } from '@/data/mock';

export default function Contracts() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="space-y-5">
        <div>
          <p className="text-sm text-muted">Все программы и договоры</p>
          <h2 className="text-2xl font-bold text-brand-900">Мои договоры</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <MetricCard label="Внесено" value={contract.paidAmount} hint="по активному договору" />
          <MetricCard label="Ближайший платёж" value={contract.premium} hint={`до ${contract.nextPaymentDate}`} />
          <MetricCard label="Защита" value={contract.insuredAmount} hint="сумма покрытия" />
          <MetricCard label="Статус" value="Активен" hint="без просрочек" />
        </div>
        <div className="grid gap-4">{contracts.map((item) => <ContractCard key={item.id} contract={item} />)}</div>
      </div>
    </AppShell>
  );
}
