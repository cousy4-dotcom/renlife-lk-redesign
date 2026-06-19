import { AppShell } from '@/components/layout/AppShell';import { DocumentCard } from '@/components/ui/DocumentCard';import { documents } from '@/data/mock';
export default function Documents(){return <AppShell><h2 className="mb-4 text-2xl font-black text-brand-900">Документы</h2><div className="grid gap-4 sm:grid-cols-2">{documents.map(d=><DocumentCard key={d.id} {...d}/>)}</div></AppShell>}
