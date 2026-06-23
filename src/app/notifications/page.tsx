import { AppShell } from '@/components/layout/AppShell';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { notifications } from '@/data/mock';

const filters = ['Все', 'Важные', 'Документы', 'Платежи'];

export default function Notifications() {
  return (
    <AppShell>
      <div className="space-y-3 md:space-y-4">
        <header>
          <h1 className="text-[24px] font-black leading-tight text-brand-900 md:text-[32px]">События</h1>
          <p className="mt-1 text-sm leading-5 text-slate-500 md:text-[15px]">Важные обновления по договорам, платежам и документам</p>
        </header>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter, index) => <button key={filter} className={`h-8 shrink-0 rounded-full px-3.5 text-sm font-bold md:h-9 md:px-4 ${index === 0 ? 'bg-brand-900 text-white' : 'bg-white text-brand-900 shadow-card'}`}>{filter}</button>)}
        </div>

        <div className="grid gap-2.5 md:gap-3">{notifications.map((notification) => <NotificationCard key={notification.id} {...notification} />)}</div>
      </div>
    </AppShell>
  );
}
