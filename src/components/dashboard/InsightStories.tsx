'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, BadgeCheck, CalendarClock, FileCheck2, HeartPulse, ReceiptText, ShieldQuestion, X } from 'lucide-react';

const insights = [
  { title: 'Оплатить до 25 июля', text: 'Сохраните защиту без перерыва', detail: 'Ближайший взнос уже запланирован. Оплата вовремя помогает сохранить действие страховой защиты без паузы.', href: '/payment', cta: 'Перейти к оплате', icon: CalendarClock, tone: 'action', fresh: true },
  { title: 'Как работает страховая защита', text: 'Что покрывает ваш договор', detail: 'Коротко объясняем, какие условия договора отвечают за защиту и где проверить основные параметры программы.', href: '/contracts/contract-1', cta: 'Открыть договор', icon: ShieldQuestion, tone: 'violet', fresh: false },
  { title: 'Налоговый вычет', text: 'Можно вернуть часть взносов', detail: 'Документы по договору пригодятся для подготовки декларации и подтверждения платежей.', href: '/documents', cta: 'Смотреть документы', icon: ReceiptText, tone: 'soft', fresh: true },
  { title: 'Документы готовы', text: 'Полис и график доступны', detail: 'Полис, график платежей и памятка клиента собраны в разделе документов.', href: '/documents', cta: 'Открыть документы', icon: FileCheck2, tone: 'violet', fresh: false },
  { title: 'Что делать при страховом случае', text: 'Пошаговая инструкция', detail: 'Начните с заявления: кабинет подскажет дальнейшие действия и список необходимых документов.', href: '/claims', cta: 'Перейти к заявлениям', icon: HeartPulse, tone: 'soft', fresh: true },
  { title: 'Проверить персональные данные', text: 'Важно для выплат и заявлений', detail: 'Актуальные контакты и паспортные данные помогают быстрее обработать заявления и выплаты.', href: '/profile', cta: 'Проверить профиль', icon: BadgeCheck, tone: 'violet', fresh: false },
] as const;

type Insight = (typeof insights)[number];

const toneStyles = {
  action: { card: 'bg-brand-900 text-white ring-brand-900/5', icon: 'bg-cta text-brand-900', text: 'text-white/70', arrow: 'text-cta', glow: 'bg-cta/30', status: 'bg-cta text-brand-900' },
  violet: { card: 'bg-white text-brand-900 ring-white/80', icon: 'bg-lavender text-brand-900', text: 'text-slate-500', arrow: 'text-brand-900/35', glow: 'bg-lavender', status: 'bg-brand-900/10 text-brand-900' },
  soft: { card: 'bg-[#f7f2ff] text-brand-900 ring-white/70', icon: 'bg-white text-brand-900', text: 'text-slate-500', arrow: 'text-brand-900/35', glow: 'bg-white', status: 'bg-white text-brand-900' },
};

export function InsightStories() {
  const [selected, setSelected] = useState<Insight | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section className="overflow-hidden rounded-[1.35rem] bg-white/70 p-3.5 shadow-card ring-1 ring-white/80 md:rounded-[1.65rem] md:p-5">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-brand-900/35">Инсайты</p>
          <h2 className="mt-1 text-lg font-black leading-tight text-brand-900 md:text-xl">Полезное для вас</h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm font-medium leading-5 text-slate-500 md:block">Нажмите карточку, чтобы открыть подсказку и перейти к действию.</p>
      </div>
      <div className="-mx-3.5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3.5 pb-1 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 md:grid-cols-3 xl:flex xl:overflow-x-visible [&::-webkit-scrollbar]:hidden">
        {insights.map((insight) => {
          const Icon = insight.icon;
          const styles = toneStyles[insight.tone];
          return (
            <button key={insight.title} type="button" onClick={() => setSelected(insight)} className={`group relative flex min-h-[9.5rem] w-[13.75rem] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[1.35rem] p-4 text-left shadow-card ring-1 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cta active:scale-[.98] sm:w-auto xl:flex-1 ${styles.card} ${insight.fresh ? '' : 'opacity-80 saturate-[.85]'}`}>
              <span className={`absolute -right-5 -top-8 h-20 w-20 rounded-full blur-xl ${styles.glow}`} aria-hidden="true" />
              <span className="relative flex items-start justify-between gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-[1rem] shadow-sm ${styles.icon}`}><Icon size={18} strokeWidth={2.25} /></span>
                <span className={`rounded-full px-2 py-1 text-[10px] font-black ${styles.status}`}>{insight.fresh ? 'Новое' : 'Просмотрено'}</span>
              </span>
              <span className="relative mt-4 block">
                <span className="block text-[15px] font-black leading-5 md:text-base">{insight.title}</span>
                <span className={`mt-1.5 block text-[13px] font-semibold leading-5 ${styles.text}`}>{insight.text}</span>
                <span className={`mt-3 inline-flex items-center gap-1 text-xs font-black ${styles.arrow}`}>Открыть <ArrowRight size={14} /></span>
              </span>
            </button>
          );
        })}
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-brand-900/45 p-3 backdrop-blur-sm md:items-center" onMouseDown={() => setSelected(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="story-title" className="w-full max-w-md rounded-[1.75rem] bg-white p-5 shadow-2xl md:p-6" onMouseDown={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4"><h3 id="story-title" className="text-2xl font-black leading-tight text-brand-900">{selected.title}</h3><button type="button" onClick={() => setSelected(null)} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lavender text-brand-900 hover:bg-brand-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-cta"><X size={18} /></button></div>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-500">{selected.detail}</p>
            <Link href={selected.href} className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-cta px-5 py-3 text-sm font-extrabold text-brand-900 transition hover:bg-[#aaf021] focus:outline-none focus:ring-2 focus:ring-brand-900">{selected.cta}<ArrowRight size={16} /></Link>
          </div>
        </div>
      )}
    </section>
  );
}
