import { LockKeyhole, Mail, MapPin, ShieldCheck, UserRound } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { client } from '@/data/mock';

const sections = [
  { title: 'Персональные данные', icon: UserRound, rows: [['Клиент', client.name], ['Город обслуживания', client.city], ['Статус', client.loyalty], ['Персональный менеджер', client.manager]] },
  { title: 'Контакты', icon: Mail, rows: [['Телефон', client.phone], ['Email', client.email], ['Предпочтительный канал', 'SMS и email']] },
  { title: 'Паспортные данные', icon: ShieldCheck, rows: [['Паспорт', '**** ******'], ['Проверка', 'Данные подтверждены'], ['Обновление', 'Через заявление']] },
  { title: 'Адрес', icon: MapPin, rows: [['Адрес регистрации', 'Москва, ********'], ['Адрес для писем', 'Совпадает с регистрацией']] },
  { title: 'Безопасность', icon: LockKeyhole, rows: [['Вход', 'Пароль и SMS-код'], ['Уведомления', 'Подключены'], ['Онлайн-подпись', 'Готова к использованию']] },
];

export default function Profile() {
  return <AppShell><div className="space-y-5 md:space-y-6"><header className="rounded-[1.8rem] bg-brand-900 p-5 text-white shadow-card md:p-7"><p className="text-xs font-semibold uppercase tracking-[.16em] text-white/50">Профиль</p><div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center"><div className="grid h-16 w-16 place-items-center rounded-[1.5rem] bg-cta text-2xl font-black text-brand-900">{client.initials}</div><div><h1 className="text-[28px] font-black leading-tight md:text-[38px]">{client.name}</h1><p className="mt-1 text-sm leading-6 text-white/72 md:text-base">Персональные данные, контакты и настройки безопасности для обслуживания договоров.</p></div></div></header><div className="grid gap-4 lg:grid-cols-2">{sections.map(({ title, rows, icon: Icon }) => <Card key={title}><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-[1rem] bg-lavender text-brand-900"><Icon size={18} /></div><h2 className="text-xl font-black text-brand-900">{title}</h2></div><div className="mt-5 space-y-3">{rows.map(([label, value]) => <div key={label} className="flex flex-col gap-1 border-b border-slate-100 pb-3 text-sm last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><span className="text-slate-500">{label}</span><b className="max-w-full break-words leading-5 text-brand-900 sm:max-w-[58%] sm:text-right">{value}</b></div>)}</div></Card>)}</div></div></AppShell>;
}
