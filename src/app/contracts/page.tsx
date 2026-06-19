import { AppShell } from '@/components/layout/AppShell';import { ContractCard } from '@/components/ui/ContractCard';import { contracts } from '@/data/mock';
export default function Contracts(){return <AppShell><h2 className="mb-4 text-2xl font-black text-brand-900">Мои договоры</h2><div className="grid gap-4">{contracts.map(c=><ContractCard key={c.id} contract={c}/>)}</div></AppShell>}
