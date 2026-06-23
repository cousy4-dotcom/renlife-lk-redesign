import { AppShell } from '@/components/layout/AppShell';
import { NotificationCard } from '@/components/ui/NotificationCard';
import { notifications } from '@/data/mock';

export default function Notifications() {
  return <AppShell><div className="space-y-5"><header><h1 className="text-[30px] font-black text-brand-900 md:text-4xl">События</h1><p className="mt-2 text-[15px] text-slate-500">Важные обновления по договорам, платежам и документам</p></header><div className="grid gap-3">{notifications.map((notification) => <NotificationCard key={notification.id} {...notification} />)}</div></div></AppShell>;
}
