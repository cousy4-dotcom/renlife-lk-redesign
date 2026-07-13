import { ArrowUpRight, Info } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import type { FinancialProgress as FinancialProgressData } from '@/data/mock';

export function FinancialProgress({ data, variant = 'compact' }: { data: FinancialProgressData; variant?: 'compact' | 'expanded' }) {
  const isExpanded = variant === 'expanded';
  const metrics = isExpanded
    ? [
        ['Внесено', data.contributed],
        ['Текущая расчётная сумма', data.currentValue],
        ['Накопленный результат', data.result],
        ['Прогноз к окончанию договора', data.forecast],
      ]
    : [
        ['Внесено', data.contributed],
        ['Текущая сумма', data.currentValue],
        ['Прогноз', data.forecast],
      ];

  return (
    <section className={`rounded-[1.45rem] bg-white shadow-card ${isExpanded ? 'p-5 md:p-6' : 'p-4 md:p-5'}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[.16em] text-brand-900/35">Финансовый прогресс</p>
          <h2 className="mt-1 text-xl font-black leading-tight text-brand-900 md:text-2xl">Накопительное страхование жизни</h2>
        </div>
        <div className="rounded-full bg-lavender px-3 py-1 text-sm font-black text-brand-900">{data.termProgress}% срока</div>
      </div>

      <div className={`mt-4 grid gap-2 ${isExpanded ? 'sm:grid-cols-2 xl:grid-cols-4' : 'sm:grid-cols-3'}`}>
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-[1.05rem] bg-lavender p-3">
            <p className="text-xs font-bold text-slate-400">{label}</p>
            <p className="mt-1 text-lg font-black text-brand-900 md:text-xl">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="mb-2 flex justify-between gap-3 text-xs font-bold text-slate-500"><span>Срок договора {data.term}</span><span>{data.termProgress}%</span></div>
        <ProgressBar value={data.termProgress} />
      </div>

      {isExpanded && (
        <div className="mt-4 grid gap-3 rounded-[1.15rem] bg-brand-900 p-4 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex gap-3"><Info className="mt-0.5 shrink-0 text-cta" size={18} /><p className="text-sm font-semibold leading-6 text-white/75">Прогноз носит информационный характер и зависит от своевременности взносов и условий договора.</p></div>
          <div className="inline-flex items-center gap-2 text-sm font-black text-cta"><ArrowUpRight size={16} /> {data.result} результат</div>
        </div>
      )}
      {!isExpanded && <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">Прогноз носит информационный характер.</p>}
    </section>
  );
}
