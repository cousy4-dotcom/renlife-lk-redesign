'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BadgePercent, BookOpenCheck, Check, ChevronLeft, ChevronRight, FileText, LineChart, PieChart, ShieldCheck, X } from 'lucide-react';

type StorySlide = {
  eyebrow?: string;
  title: string;
  text?: string;
  bullets?: string[];
  compare?: { label: string; nsj: string; dsj: string }[];
  steps?: string[];
  note?: string;
  cta?: { label: string; href: string };
};

type Story = {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof ShieldCheck;
  accent: string;
  iconClass: string;
  slides: StorySlide[];
};

const stories: Story[] = [
  {
    id: 'nsj-dsj',
    title: 'НСЖ или ДСЖ: что может быть доходнее?',
    subtitle: 'Сравниваем потенциал, гарантии и уровень риска',
    icon: LineChart,
    accent: 'bg-brand-900 text-white',
    iconClass: 'bg-cta text-brand-900',
    slides: [
      { title: 'Два разных подхода', text: 'Накопительное страхование жизни (НСЖ) помогает регулярно формировать сумму к сроку и сохраняет страховую защиту. Долевое страхование жизни (ДСЖ) связано с инвестиционными активами.' },
      { title: 'Ключевые отличия', compare: [
        { label: 'Доход', nsj: 'более предсказуемый', dsj: 'зависит от активов' },
        { label: 'Риск', nsj: 'обычно ниже', dsj: 'может быть выше' },
        { label: 'Гарантии', nsj: 'важная часть продукта', dsj: 'условия зависят от программы' },
        { label: 'Горизонт', nsj: 'долгосрочный', dsj: 'долгосрочный' },
        { label: 'Выход раньше срока', nsj: 'по условиям договора', dsj: 'по условиям договора и рынка' },
      ] },
      { title: 'Как выбрать', text: 'Универсально более выгодного варианта нет. НСЖ подходит, если важнее предсказуемость и страховая защита. ДСЖ может иметь больший инвестиционный потенциал, но результат зависит от стоимости активов.' },
    ],
  },
  {
    id: 'tax-benefits',
    title: 'Налоговые льготы по НСЖ',
    subtitle: 'Когда договор помогает вернуть часть НДФЛ',
    icon: BadgePercent,
    accent: 'bg-lavender text-brand-900',
    iconClass: 'bg-white text-brand-900',
    slides: [
      { title: 'Что такое вычет', text: 'Социальный налоговый вычет позволяет учесть часть расходов по договору при расчёте возврата налога на доходы физических лиц (НДФЛ).' },
      { title: 'От чего зависит право', bullets: ['срок договора', 'состав застрахованных лиц', 'наличие дохода, облагаемого НДФЛ', 'действующее законодательство'] },
      { title: 'Без обещаний', text: 'При наличии права на вычет часть расходов по договору можно учитывать при расчёте возврата НДФЛ.', note: 'Точные условия зависят от параметров договора и налогового статуса клиента.' },
    ],
  },
  {
    id: 'tax-process',
    title: 'Как оформить налоговый вычет',
    subtitle: 'Понятный путь от документов до возврата',
    icon: FileText,
    accent: 'bg-white text-brand-900',
    iconClass: 'bg-cta/80 text-brand-900',
    slides: [
      { title: 'Четыре шага', steps: ['Получить необходимые документы по договору.', 'Проверить право на налоговый вычет.', 'Подать сведения через личный кабинет ФНС или работодателя.', 'Дождаться проверки и решения.'], cta: { label: 'Посмотреть документы', href: '/documents' } },
      { title: 'Где начать', text: 'В разделе документов собраны полис накопительного страхования жизни, график платежей и подтверждения, которые могут понадобиться для подготовки сведений.', cta: { label: 'Посмотреть документы', href: '/documents' } },
    ],
  },
  {
    id: 'funds',
    title: 'ПИФы: в чём преимущества',
    subtitle: 'Готовый портфель под управлением профессионалов',
    icon: PieChart,
    accent: 'bg-[#f7fbef] text-brand-900',
    iconClass: 'bg-brand-900 text-white',
    slides: [
      { title: 'Что такое ПИФ', text: 'Паевой инвестиционный фонд объединяет средства инвесторов в общий портфель. Клиент владеет паями фонда.' },
      { title: 'Что может быть удобно', bullets: ['диверсификация', 'профессиональное управление', 'возможность начать с относительно небольшой суммы', 'понятная структура владения паями'] },
      { title: 'Важно помнить о рисках', bullets: ['стоимость паёв может расти и снижаться', 'прошлые результаты не гарантируют будущую доходность', 'ликвидность и комиссии зависят от конкретного фонда'], cta: { label: 'Узнать подробнее', href: '/contracts/contract-1' } },
    ],
  },
];

export function InsightStories() {
  const [storyIndex, setStoryIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const story = storyIndex === null ? null : stories[storyIndex];
  const slide = story?.slides[slideIndex];
  const progress = useMemo(() => story ? ((slideIndex + 1) / story.slides.length) * 100 : 0, [slideIndex, story]);

  const close = () => setStoryIndex(null);
  const open = (index: number) => { setStoryIndex(index); setSlideIndex(0); };
  const next = () => {
    if (!story || storyIndex === null) return;
    if (slideIndex < story.slides.length - 1) setSlideIndex((value) => value + 1);
    else if (storyIndex < stories.length - 1) open(storyIndex + 1);
    else close();
  };
  const prev = () => {
    if (!story || storyIndex === null) return;
    if (slideIndex > 0) setSlideIndex((value) => value - 1);
    else if (storyIndex > 0) { setStoryIndex(storyIndex - 1); setSlideIndex(stories[storyIndex - 1].slides.length - 1); }
  };

  useEffect(() => {
    if (!story) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  });

  return (
    <section className="rounded-[1.35rem] bg-white/80 p-3 shadow-card ring-1 ring-white/80 md:p-4">
      <div className="mb-3 flex items-end justify-between gap-3 px-1">
        <div>
          <h2 className="text-lg font-black text-brand-900 md:text-xl">Полезно знать</h2>
          <p className="mt-0.5 text-sm font-semibold text-slate-500">Коротко о страховании, налогах и инвестициях</p>
        </div>
        <BookOpenCheck className="hidden text-slate-300 sm:block" size={22} />
      </div>
      <div className="grid auto-cols-[78%] grid-flow-col gap-3 overflow-x-auto pb-1 pr-8 [scrollbar-width:none] sm:auto-cols-[45%] md:grid-flow-row md:grid-cols-4 md:overflow-visible md:pr-0 [&::-webkit-scrollbar]:hidden">
        {stories.map((item, index) => {
          const Icon = item.icon;
          return <button key={item.id} type="button" onClick={() => open(index)} className={`group flex h-[128px] flex-col justify-between rounded-[1rem] p-3.5 text-left shadow-sm ring-1 ring-brand-900/5 transition hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-cta active:scale-[.99] ${item.accent}`}><span className={`grid h-10 w-10 place-items-center rounded-[.9rem] ${item.iconClass}`}><Icon size={19} /></span><span><span className="line-clamp-2 text-[15px] font-black leading-[1.15]">{item.title}</span><span className="mt-1.5 line-clamp-2 block text-xs font-semibold leading-4 opacity-70">{item.subtitle}</span></span></button>;
        })}
      </div>

      {story && slide && <div className="fixed inset-0 z-50 flex items-end justify-center bg-brand-900/65 p-3 backdrop-blur-sm md:items-center" onMouseDown={close}>
        <div role="dialog" aria-modal="true" aria-label={story.title} className="w-full max-w-[560px] rounded-[1.75rem] bg-white p-4 shadow-2xl md:p-5" onMouseDown={(event) => event.stopPropagation()} onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => { if (touchStart === null) return; const delta = event.changedTouches[0].clientX - touchStart; if (Math.abs(delta) > 45) delta < 0 ? next() : prev(); setTouchStart(null); }}>
          <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-lavender"><div className="h-full rounded-full bg-cta transition-all" style={{ width: `${progress}%` }} /></div>
          <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[.16em] text-slate-400">{story.title}</p><h3 className="mt-2 text-2xl font-black leading-tight text-brand-900 md:text-3xl">{slide.title}</h3></div><button type="button" aria-label="Закрыть сторис" onClick={close} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lavender text-brand-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cta"><X size={19} /></button></div>
          <div className="mt-5 min-h-[260px] text-sm leading-6 text-slate-600 md:text-base">
            {slide.text && <p>{slide.text}</p>}
            {slide.bullets && <ul className="space-y-2">{slide.bullets.map((item) => <li key={item} className="flex gap-2"><Check className="mt-1 shrink-0 text-emerald-600" size={16} /><span>{item}</span></li>)}</ul>}
            {slide.steps && <ol className="space-y-3">{slide.steps.map((item, index) => <li key={item} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lavender text-sm font-black text-brand-900">{index + 1}</span><span>{item}</span></li>)}</ol>}
            {slide.compare && <div className="space-y-2">{slide.compare.map((row) => <div key={row.label} className="grid grid-cols-[88px_1fr_1fr] gap-2 rounded-2xl bg-slate-50 p-2 text-xs md:text-sm"><b className="text-brand-900">{row.label}</b><span>{row.nsj}</span><span>{row.dsj}</span></div>)}</div>}
            {slide.note && <p className="mt-4 rounded-2xl bg-lavender p-3 text-sm font-semibold text-brand-900">{slide.note}</p>}
          </div>
          {slide.cta && <Link href={slide.cta.href} className="mb-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-cta px-5 py-3 text-sm font-extrabold text-brand-900 transition hover:bg-[#aaf021] focus:outline-none focus:ring-2 focus:ring-brand-900" onClick={close}>{slide.cta.label}<ArrowRight size={16} /></Link>}
          <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4"><button type="button" onClick={prev} disabled={storyIndex === 0 && slideIndex === 0} className="inline-flex min-h-11 items-center gap-2 rounded-2xl px-4 text-sm font-black text-brand-900 transition hover:bg-lavender focus:outline-none focus:ring-2 focus:ring-cta disabled:cursor-not-allowed disabled:opacity-35"><ChevronLeft size={18} />Назад</button><button type="button" onClick={next} className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-brand-900 px-5 text-sm font-black text-white transition hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-cta">{storyIndex === stories.length - 1 && slideIndex === story.slides.length - 1 ? 'Готово' : 'Далее'}<ChevronRight size={18} /></button></div>
        </div>
      </div>}
    </section>
  );
}
