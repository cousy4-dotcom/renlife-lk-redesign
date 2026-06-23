import { FilePlus2 } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { claims } from '@/data/mock';

const scenarios = ['Страховой случай', 'Изменить данные', 'Получить налоговый вычет', 'Получить копию документа', 'Расторгнуть договор'];

export default function Claims() {
  return <AppShell><div className="space-y-5"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h1 className="text-[30px] font-black text-brand-900 md:text-4xl">Заявления</h1><p className="mt-2 text-[15px] text-slate-500">Сервисный центр обращений по договорам</p></div><Button href="/claims/new">Новое заявление</Button></div><Card><h2 className="text-2xl font-black text-brand-900">Популярные сценарии</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{scenarios.map((scenario) => <button key={scenario} className="flex min-h-12 items-center gap-3 rounded-2xl bg-lavender px-4 text-left text-sm font-bold text-brand-900"><FilePlus2 size={18} />{scenario}</button>)}</div></Card><Card><h2 className="text-2xl font-black text-brand-900">Мои обращения</h2><div className="mt-4 grid gap-3">{claims.map((claim) => <div key={claim.id} className="rounded-2xl bg-lavender p-4"><b className="text-brand-900">{claim.title}</b><p className="mt-1 text-sm text-slate-500"><span className="font-bold text-brand-900">{claim.status}</span> · {claim.date}</p></div>)}</div></Card></div></AppShell>;
}
