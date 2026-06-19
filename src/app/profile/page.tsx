import { AppShell } from '@/components/layout/AppShell';import { Card } from '@/components/ui/Card';import { client } from '@/data/mock';
export default function Profile(){return <AppShell><Card><h2 className="text-2xl font-black text-brand-900">Профиль</h2><p className="mt-4"><b>{client.name}</b></p><p className="text-slate-500">{client.city} · {client.loyalty}</p></Card></AppShell>}
