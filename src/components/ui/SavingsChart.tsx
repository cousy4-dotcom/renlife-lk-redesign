import type { FinancialPoint } from '@/data/mock';

const width = 720;
const height = 260;
const padding = { top: 20, right: 22, bottom: 34, left: 58 };

function pathFor(points: FinancialPoint[], key: 'contributed' | 'value', max: number) {
  return points.map((point, index) => {
    const x = padding.left + (index / (points.length - 1)) * (width - padding.left - padding.right);
    const y = padding.top + (1 - point[key] / max) * (height - padding.top - padding.bottom);
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
}

export function SavingsChart({ points }: { points: FinancialPoint[] }) {
  const max = Math.max(...points.flatMap((point) => [point.contributed, point.value]));
  const currentIndex = points.findIndex((point) => point.actual === false) - 1;
  const safeCurrentIndex = currentIndex >= 0 ? currentIndex : points.length - 1;
  const currentX = padding.left + (safeCurrentIndex / (points.length - 1)) * (width - padding.left - padding.right);
  const yTicks = [0, Math.round(max / 2), max];

  return (
    <section className="rounded-[1.45rem] bg-white p-5 shadow-card md:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div><h2 className="text-2xl font-black text-brand-900">График накоплений</h2><p className="mt-1 text-sm text-slate-500">Фактическая часть отделена от прогнозной пунктиром.</p></div>
        <div className="flex flex-wrap gap-3 text-xs font-bold text-slate-500"><span className="inline-flex items-center gap-1.5"><i className="h-2 w-5 rounded-full bg-brand-900" />Внесено</span><span className="inline-flex items-center gap-1.5"><i className="h-2 w-5 rounded-full bg-cta" />Текущая стоимость</span><span className="inline-flex items-center gap-1.5"><i className="h-2 w-5 rounded-full border border-dashed border-cta" />Прогноз</span></div>
      </div>
      <div className="mt-4 overflow-hidden rounded-[1.2rem] bg-lavender p-2">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label="График взносов, текущей стоимости и прогноза по годам">
          {yTicks.map((tick) => {
            const y = padding.top + (1 - tick / max) * (height - padding.top - padding.bottom);
            return <g key={tick}><line x1={padding.left} x2={width - padding.right} y1={y} y2={y} stroke="#ffffff" strokeWidth="1" /><text x="10" y={y + 4} className="fill-slate-400 text-[11px] font-bold">{Math.round(tick / 1000)} тыс.</text></g>;
          })}
          <rect x={currentX} y={padding.top} width={width - padding.right - currentX} height={height - padding.top - padding.bottom} fill="#fff" opacity="0.45" />
          <line x1={currentX} x2={currentX} y1={padding.top} y2={height - padding.bottom} stroke="#33205f" strokeDasharray="5 5" />
          <path d={pathFor(points, 'contributed', max)} fill="none" stroke="#33205f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d={pathFor(points, 'value', max)} fill="none" stroke="#b7f51f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((point, index) => {
            const x = padding.left + (index / (points.length - 1)) * (width - padding.left - padding.right);
            return <text key={point.year} x={x} y={height - 10} textAnchor="middle" className="fill-slate-500 text-[11px] font-black">{point.year}</text>;
          })}
          <text x={currentX + 8} y={padding.top + 14} className="fill-brand-900 text-[12px] font-black">сейчас</text>
        </svg>
      </div>
    </section>
  );
}
