import type { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { TopBar } from './TopBar';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <DesktopSidebar />
      <main className="min-h-screen px-3 pb-28 pt-3 sm:px-5 lg:ml-[260px] lg:px-6 lg:py-5 xl:px-8">
        <div className="mx-auto w-full max-w-[1220px]">
          <TopBar />
          {children}
        </div>
      </main>
      <MobileBottomNav />
    </>
  );
}
