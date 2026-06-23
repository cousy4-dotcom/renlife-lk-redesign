import type { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { TopBar } from './TopBar';

export function AppShell({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="min-h-screen bg-lavender">
      <DesktopSidebar />
      <main className="px-4 pb-[128px] pt-3 sm:px-6 sm:pb-[136px] md:pb-[140px] lg:ml-[280px] lg:px-10 lg:py-8">
        <div className="mx-auto max-w-[1180px]">
          <TopBar />
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            <section>{children}</section>
            <aside className="hidden space-y-4 xl:block">{aside}</aside>
          </div>
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
