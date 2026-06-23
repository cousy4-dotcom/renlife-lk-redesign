import { Bell, CheckCircle2, ShieldCheck } from 'lucide-react';
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

const statusCards = [
  { title: 'Данные подтверждены', text: 'Профиль проверен', icon: CheckCircle2 },
  { title: 'Подпись активна', text: 'Готова для заявлений', icon: ShieldCheck },
  { title: 'Уведомления подключены', text: 'SMS и email активны', icon: Bell },
];

export default function Profile() {
  return (
    <AppShell>
      <div className="space-y-3 md:space-y-4">
        <header>
          <h1 className="text-[24px] font-black leading-tight text-brand-900 md:text-[32px]">Профиль</h1>
          <p className="mt-1 text-sm leading-5 text-slate-500 md:text-[15px]">Данные клиента и настройки безопасного обслуживания</p>
        </header>

        <div className="grid gap-2.5 md:grid-cols-3 md:gap-3">
          {statusCards.map(({ title, text, icon: Icon }) => (
            <Card key={title} className="flex items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-[1rem] bg-cta text-brand-900"><Icon size={18} /></div>
              <div className="min-w-0">
                <p className="truncate text-sm font-black text-brand-900">{title}</p>
                <p className="text-xs leading-5 text-slate-500">{text}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-2.5 md:gap-4 lg:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-black text-brand-900 md:text-xl">{section.title}</h2>
                <span className="rounded-full bg-lavender px-2.5 py-1 text-xs font-extrabold text-brand-900">Проверено</span>
              </div>
              <div className="mt-3 space-y-2.5 md:mt-4 md:space-y-3">
                {section.rows.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2.5 text-sm last:border-0 last:pb-0">
                    <span className="text-slate-500">{label}</span>
                    <b className="text-right text-brand-900">{value}</b>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
