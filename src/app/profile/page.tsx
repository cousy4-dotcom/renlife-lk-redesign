import { AppShell } from '@/components/layout/AppShell';
import { Card } from '@/components/ui/Card';
import { client } from '@/data/mock';

const sections = [
  { title: 'Персональные данные', rows: [['Клиент', client.name], ['Город обслуживания', client.city], ['Статус', client.loyalty]] },
  { title: 'Контакты', rows: [['Телефон', '+7 999 *** ** 45'], ['Email', 'a***@mail.ru']] },
  { title: 'Паспортные данные', rows: [['Паспорт', '**** ******'], ['Проверка', 'Данные подтверждены']] },
  { title: 'Адрес', rows: [['Адрес регистрации', 'Москва, ********'], ['Адрес для писем', 'Совпадает с регистрацией']] },
  { title: 'Безопасность', rows: [['Вход', 'Пароль и SMS-код'], ['Уведомления', 'Подключены']] },
  { title: 'Подпись для онлайн-заявлений', rows: [['Статус', 'Готова к использованию'], ['Подтверждение', 'Через SMS-код']] },
];

export default function Profile() {
  return <AppShell><div className="space-y-4 md:space-y-5"><header><h1 className="text-[27px] font-black leading-tight text-brand-900 md:text-[34px]">Профиль</h1><p className="mt-1.5 text-[15px] leading-5 text-slate-500">Данные клиента и настройки безопасного обслуживания</p></header><div className="grid gap-3 md:gap-4 lg:grid-cols-2">{sections.map((section) => <Card key={section.title}><h2 className="text-xl font-black text-brand-900">{section.title}</h2><div className="mt-4 space-y-3">{section.rows.map(([label, value]) => <div key={label} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 text-sm last:border-0 last:pb-0"><span className="text-slate-500">{label}</span><b className="text-right text-brand-900">{value}</b></div>)}</div></Card>)}</div></div></AppShell>;
}
