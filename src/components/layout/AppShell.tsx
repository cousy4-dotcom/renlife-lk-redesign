import type { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { TopBar } from './TopBar';

export function AppShell({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffffff_0,#f6f1fb_34%,#efeaf7_100%)]"><DesktopSidebar/><main className="px-4 pb-28 pt-4 sm:px-6 lg:ml-72 lg:px-8 lg:py-7"><TopBar/><div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]"><section>{children}</section><aside className="hidden space-y-5 xl:block">{aside}</aside></div></main><MobileBottomNav/></div>;
}
