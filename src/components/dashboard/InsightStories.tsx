'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, FileCheck2, PiggyBank, ReceiptText, ShieldCheck, ShieldQuestion, X } from 'lucide-react';

const insights = [
  { title: 'Ваш договор', detail: 'Кратко о статусе, сроке и доступных действиях по полису.', href: '/contracts/contract-1', cta: 'Открыть договор', icon: ShieldCheck, tone: 'action' },
  { title: 'Как работает доход', detail: 'Показываем разницу между внесёнными взносами, текущей расчётной суммой и прогнозом.', href: '/contracts/contract-1', cta: 'Смотреть прогресс', icon: PiggyBank, tone: 'violet' },
  { title: 'Страховая защита', detail: 'Проверьте параметры защиты и условия действия накопительного страхования жизни.', href: '/contracts/contract-1', cta: 'Открыть условия', icon: ShieldQuestion, tone: 'soft' },
  { title: 'Налоговый вычет', detail: 'Документы по договору пригодятся для подготовки декларации и подтверждения платежей.', href: '/documents', cta: 'Смотреть документы', icon: ReceiptText, tone: 'violet' },
  { title: 'Полезные документы', detail: 'Полис, график платежей и памятка клиента собраны в разделе документов.', href: '/documents', cta: 'Открыть документы', icon: FileCheck2, tone: 'soft' },
] as const;

type Insight = (typeof insights)[number];
const toneStyles = { action: 'bg-brand-900 text-white', violet: 'bg-white text-brand-900', soft: 'bg-[#f7f2ff] text-brand-900' };
const iconStyles = { action: 'bg-cta text-brand-900', violet: 'bg-lavender text-brand-900', soft: 'bg-white text-brand-900' };

export function InsightStories() {
  const [selected, setSelected] = useState<Insight | null>(null);
  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section className="rounded-[1.25rem] bg-white/70 p-3 shadow-card ring-1 ring-white/80 md:rounded-[1.45rem]">
      <div className="flex snap-x gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {insights.map((insight) => {
          const Icon = insight.icon;
          return <button key={insight.title} type="button" onClick={() => setSelected(insight)} className={`flex h-[6.75rem] w-[7.5rem] shrink-0 snap-start flex-col justify-between rounded-[1.05rem] p-3 text-left shadow-sm ring-1 ring-white/80 transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cta sm:w-[8.5rem] md:w-[9.5rem] lg:w-[10.5rem] ${toneStyles[insight.tone]}`}><span className={`grid h-8 w-8 place-items-center rounded-[.8rem] ${iconStyles[insight.tone]}`}><Icon size={16} /></span><span className="text-[13px] font-black leading-4 md:text-sm">{insight.title}</span></button>;
        })}
      </div>
      {selected && <div className="fixed inset-0 z-50 flex items-end justify-center bg-brand-900/45 p-3 backdrop-blur-sm md:items-center" onMouseDown={() => setSelected(null)}><div role="dialog" aria-modal="true" className="w-full max-w-md rounded-[1.75rem] bg-white p-5 shadow-2xl" onMouseDown={(event) => event.stopPropagation()}><div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-black leading-tight text-brand-900">{selected.title}</h3><button type="button" onClick={() => setSelected(null)} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lavender text-brand-900"><X size={18} /></button></div><p className="mt-3 text-sm font-semibold leading-6 text-slate-500">{selected.detail}</p><Link href={selected.href} className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-cta px-5 py-3 text-sm font-extrabold text-brand-900">{selected.cta}<ArrowRight size={16} /></Link></div></div>}
    </section>
  );
}
