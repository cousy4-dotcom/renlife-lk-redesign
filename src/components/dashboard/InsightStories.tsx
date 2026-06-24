import Link from 'next/link';
import { ArrowRight, BadgeCheck, CalendarClock, FileCheck2, HeartPulse, ReceiptText, ShieldQuestion } from 'lucide-react';

type Insight = {
  title: string;
  text: string;
  href?: string;
  icon: typeof CalendarClock;
  tone: 'action' | 'violet' | 'soft';
};

const insights: Insight[] = [
  {
    title: 'Оплатить до 25 июля',
    text: 'Сохраните защиту без перерыва',
    href: '/payment',
    icon: CalendarClock,
    tone: 'action',
  },
  {
    title: 'Как работает защита',
    text: 'Что покрывает ваш договор',
    icon: ShieldQuestion,
    tone: 'violet',
  },
  {
    title: 'Налоговый вычет',
    text: 'Можно вернуть часть взносов',
    icon: ReceiptText,
    tone: 'soft',
  },
  {
    title: 'Документы готовы',
    text: 'Полис и график доступны',
    href: '/documents',
    icon: FileCheck2,
    tone: 'violet',
  },
  {
    title: 'Страховой случай',
    text: 'Пошаговая инструкция',
    href: '/claims',
    icon: HeartPulse,
    tone: 'soft',
  },
  {
    title: 'Проверить данные',
    text: 'Важно для выплат и заявлений',
    href: '/profile',
    icon: BadgeCheck,
    tone: 'violet',
  },
];

const toneStyles = {
  action: {
    card: 'bg-brand-900 text-white ring-brand-900/5',
    icon: 'bg-cta text-brand-900',
    text: 'text-white/68',
    arrow: 'text-cta',
    glow: 'bg-cta/30',
  },
  violet: {
    card: 'bg-white text-brand-900 ring-white/80',
    icon: 'bg-lavender text-brand-900',
    text: 'text-slate-500',
    arrow: 'text-brand-900/35',
    glow: 'bg-lavender',
  },
  soft: {
    card: 'bg-[#f7f2ff] text-brand-900 ring-white/70',
    icon: 'bg-white text-brand-900',
    text: 'text-slate-500',
    arrow: 'text-brand-900/35',
    glow: 'bg-white',
  },
} satisfies Record<Insight['tone'], Record<'card' | 'icon' | 'text' | 'arrow' | 'glow', string>>;

function InsightCard({ insight }: { insight: Insight }) {
  const Icon = insight.icon;
  const styles = toneStyles[insight.tone];
  const content = (
    <>
      <span className={`absolute -right-5 -top-8 h-20 w-20 rounded-full blur-xl ${styles.glow}`} aria-hidden="true" />
      <span className="relative flex items-start justify-between gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-[1rem] shadow-sm ${styles.icon}`}>
          <Icon size={18} strokeWidth={2.25} />
        </span>
        <ArrowRight className={`mt-1 shrink-0 ${styles.arrow}`} size={17} />
      </span>
      <span className="relative mt-4 block">
        <span className="block text-[15px] font-black leading-5 md:text-base">{insight.title}</span>
        <span className={`mt-1.5 block text-[13px] font-semibold leading-5 ${styles.text}`}>{insight.text}</span>
      </span>
    </>
  );
  const className = `group relative flex min-h-[9.25rem] w-[13.75rem] shrink-0 overflow-hidden rounded-[1.35rem] p-4 text-left shadow-card ring-1 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl md:w-auto md:min-w-0 ${styles.card}`;

  if (insight.href) {
    return (
      <Link href={insight.href} className={className}>
        <span className="flex w-full flex-col justify-between">{content}</span>
      </Link>
    );
  }

  return (
    <article className={className}>
      <span className="flex w-full flex-col justify-between">{content}</span>
    </article>
  );
}

export function InsightStories() {
  return (
    <section className="overflow-hidden rounded-[1.35rem] bg-white/70 p-3.5 shadow-card ring-1 ring-white/80 md:rounded-[1.65rem] md:p-5">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-brand-900/35">Инсайты</p>
          <h2 className="mt-1 text-lg font-black leading-tight text-brand-900 md:text-xl">Полезное для вас</h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm font-medium leading-5 text-slate-500 md:block">Короткие подсказки по договору, оплате и документам.</p>
      </div>
      <div className="-mx-3.5 flex snap-x gap-3 overflow-x-auto px-3.5 pb-1 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:px-0 lg:grid-cols-6 [&::-webkit-scrollbar]:hidden">
        {insights.map((insight) => (
          <div key={insight.title} className="snap-start md:min-w-0">
            <InsightCard insight={insight} />
          </div>
        ))}
      </div>
    </section>
  );
}
