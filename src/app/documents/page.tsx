import { FolderOpen } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { documents } from '@/data/mock';

const filters = ['Все', 'Полисы', 'Платежи', 'Справки', 'Заявления'];
const categories = filters.slice(1).map((name) => ({ name, count: documents.filter((doc) => doc.category === name).length }));

export default function Documents() {
  return <AppShell><div className="space-y-4 md:space-y-5"><header className="rounded-[1.55rem] bg-white p-4 shadow-card md:rounded-[1.8rem] md:p-6"><p className="text-[11px] font-semibold uppercase tracking-[.16em] text-slate-400">Документы</p><h1 className="mt-2 text-[25px] font-black leading-tight text-brand-900 md:text-[34px]">Полисы, платежи и справки</h1><p className="mt-2 max-w-3xl text-sm leading-5 text-slate-500 md:text-[15px] md:leading-6">Категории помогают быстро найти полис, чек, справку или заявление.</p></header><div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">{categories.map((category) => <Card key={category.name} className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-[0.95rem] bg-lavender text-brand-900"><FolderOpen size={17} /></div><div><b className="text-brand-900">{category.name}</b><p className="text-sm text-slate-500">{category.count} документа</p></div></Card>)}</div><div className="flex gap-2 overflow-x-auto pb-1">{filters.map((filter, index) => <button key={filter} className={`h-9 shrink-0 rounded-full px-3.5 text-sm font-bold ${index === 0 ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card'}`}>{filter}</button>)}</div><div className="grid gap-2">{documents.map((document) => <DocumentCard key={document.id} {...document} />)}</div></div></AppShell>;
}
