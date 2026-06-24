import type { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { TopBar } from './TopBar';

export function AppShell({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-lavender">
      <DesktopSidebar />
      <main className="px-4 pb-[calc(82px+env(safe-area-inset-bottom))] pt-3 sm:px-6 sm:pb-[calc(88px+env(safe-area-inset-bottom))] md:pt-4 md:pb-[calc(92px+env(safe-area-inset-bottom))] lg:ml-[280px] lg:px-8 lg:py-8 xl:px-10">
        <div className="mx-auto w-full max-w-[1180px]">
          <TopBar />
          <div className="grid min-w-0 gap-4 md:gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            <section className="min-w-0">{children}</section>
            <aside className="hidden space-y-4 xl:block">{aside}</aside>
          </div>
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
