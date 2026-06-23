import { AppShell } from '@/components/layout/AppShell';
import { DocumentCard } from '@/components/ui/DocumentCard';
import { documents } from '@/data/mock';

const filters = ['Все', 'Полисы', 'Платежи', 'Справки', 'Заявления'];

export default function Documents() {
  return <AppShell><div className="space-y-4 md:space-y-5"><header><h1 className="text-[27px] font-black leading-tight text-brand-900 md:text-[34px]">Документы</h1><p className="mt-1.5 text-[15px] leading-5 text-slate-500">Полисы, графики платежей, чеки и справки по вашим договорам</p></header><div className="flex gap-2 overflow-x-auto">{filters.map((filter, index) => <button key={filter} className={`h-9 rounded-full px-4 text-sm font-bold ${index === 0 ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card'}`}>{filter}</button>)}</div><div className="grid gap-3">{documents.map((document) => <DocumentCard key={document.id} {...document} />)}</div></div></AppShell>;
}
