import { CheckCircle2, FileCheck2 } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Stepper } from '@/components/ui/Stepper';
import { contracts } from '@/data/mock';

export default function Success() {
  const contract = contracts[0];

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl space-y-5">
        <Stepper step={3} />
        <Card className="overflow-hidden p-0">
          <div className="bg-brand-900 px-5 py-7 text-center text-white sm:px-8 sm:py-9">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cta text-brand-900">
              <CheckCircle2 size={34} />
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Оплата прошла успешно</h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/70">
              {contract.premium} зачислены по договору «{contract.title}». Договор остаётся активным.
            </p>
          </div>
          <div className="space-y-4 p-5 sm:p-6">
            <div className="flex items-center gap-3 rounded-2xl bg-lavender p-3 text-sm text-muted">
              <FileCheck2 className="text-brand-900" size={20} />
              Чек появится в разделе «Документы» в течение нескольких минут.
            </div>
            <Button href={`/contracts/${contract.id}`} className="w-full py-3">
              Вернуться в договор
            </Button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
