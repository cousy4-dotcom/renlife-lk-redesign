import type { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { TopBar } from './TopBar';

export function AppShell({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="min-h-screen bg-lavender">
      <DesktopSidebar />
      <main className="px-4 pb-[calc(86px+env(safe-area-inset-bottom))] pt-3 sm:px-6 sm:pb-[calc(92px+env(safe-area-inset-bottom))] md:pb-[calc(96px+env(safe-area-inset-bottom))] lg:ml-[280px] lg:px-8 lg:py-7">
        <div className="mx-auto max-w-[1040px]">
          <TopBar />
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
            <section>{children}</section>
            <aside className="hidden space-y-4 xl:block">{aside}</aside>
          </div>
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
