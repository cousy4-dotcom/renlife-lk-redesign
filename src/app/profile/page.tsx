import { LockKeyhole, Mail, MapPin, ShieldCheck, UserRound } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { client } from '@/data/mock';

const sections = [
  { title: 'Персональные данные', action: 'Изменить данные', icon: UserRound, rows: [['Клиент', client.name], ['Город обслуживания', client.city], ['Статус', client.loyalty], ['Персональный менеджер', client.manager]] },
  { title: 'Контакты', action: 'Настроить уведомления', icon: Mail, rows: [['Телефон', client.phone], ['Email', client.email], ['Предпочтительный канал', 'SMS и email']] },
  { title: 'Паспортные данные', action: 'Подтвердить актуальность', icon: ShieldCheck, rows: [['Паспорт', '**** ******'], ['Проверка', 'Данные подтверждены'], ['Обновление', 'Через заявление']] },
  { title: 'Адрес', action: 'Изменить данные', icon: MapPin, rows: [['Адрес регистрации', 'Москва, ********'], ['Адрес для писем', 'Совпадает с регистрацией']] },
  { title: 'Безопасность', action: 'Настроить уведомления', icon: LockKeyhole, rows: [['Вход', 'Пароль и SMS-код'], ['Уведомления', 'Подключены'], ['Онлайн-подпись', 'Готова к использованию']] },
];

export default function Profile() {
  return <AppShell><div className="space-y-4 md:space-y-5"><header className="rounded-[1.55rem] bg-brand-900 p-4 text-white shadow-card md:rounded-[1.8rem] md:p-6"><p className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/50">Профиль</p><div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center"><div className="grid h-14 w-14 place-items-center rounded-[1.25rem] bg-cta text-xl font-black text-brand-900">{client.initials}</div><div><h1 className="text-[25px] font-black leading-tight md:text-[34px]">{client.name}</h1><p className="mt-1 text-sm leading-5 text-white/72 md:text-[15px] md:leading-6">Управляйте данными, контактами и настройками обслуживания договоров.</p></div></div></header><div className="grid gap-3 lg:grid-cols-2">{sections.map(({ title, rows, icon: Icon, action }) => <Card key={title}><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-[0.95rem] bg-lavender text-brand-900"><Icon size={17} /></div><h2 className="text-lg font-black text-brand-900 md:text-xl">{title}</h2></div><button className="shrink-0 rounded-full bg-lavender px-3 py-1.5 text-xs font-extrabold text-brand-900">{action}</button></div><div className="mt-4 space-y-2.5">{rows.map(([label, value]) => <div key={label} className="flex flex-col gap-1 border-b border-slate-100 pb-2.5 text-sm last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"><span className="text-slate-500">{label}</span><b className="max-w-full break-words leading-5 text-brand-900 sm:max-w-[58%] sm:text-right">{value}</b></div>)}</div></Card>)}</div></div></AppShell>;
}
