import type { ReactNode } from 'react';
import { CheckCircle2, Download, FileCheck2, ShieldCheck } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Stepper } from '@/components/ui/Stepper';
import { contracts } from '@/data/mock';

export default function Success() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="mx-auto max-w-[760px] space-y-4">
        <Stepper step={3} />
        <Card className="overflow-hidden p-0">
          <div className="bg-brand-900 px-5 py-8 text-center text-white sm:px-8 sm:py-10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cta text-brand-900">
              <CheckCircle2 size={34} />
            </div>
            <p className="mt-4 text-sm text-white/65">Оплата зачислена</p>
            <h2 className="mt-1 text-4xl font-bold tracking-tight">{contract.premium}</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/72">Договор «{contract.title}» остаётся активным. Чек скоро появится в документах.</p>
          </div>

          <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
            <SuccessFact icon={<ShieldCheck size={18} />} label="Договор" value={contract.title} />
            <SuccessFact icon={<FileCheck2 size={18} />} label="Чек" value="Будет в документах" />
            <SuccessFact icon={<Download size={18} />} label="Операция" value="Оплата взноса" />
          </div>

          <div className="grid gap-2 border-t border-brand-900/5 p-4 sm:grid-cols-2 sm:p-5">
            <Button href={`/contracts/${contract.id}`} className="w-full py-3">Вернуться в договор</Button>
            <Button href="/documents" variant="ghost" className="w-full py-3">
              <Download size={16} />
              <span className="ml-2">Скачать чек</span>
            </Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

function SuccessFact({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-lavender/75 p-3">
      <div className="flex items-center gap-2 text-brand-900">
        {icon}
        <p className="text-[11px] font-medium text-muted">{label}</p>
      </div>
      <p className="mt-2 text-sm font-semibold text-brand-900">{value}</p>
    </div>
  );
}
