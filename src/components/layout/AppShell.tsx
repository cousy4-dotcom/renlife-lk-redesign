import type { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { TopBar } from './TopBar';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <DesktopSidebar />
      <main className="min-h-screen px-4 pb-24 pt-4 sm:px-6 lg:ml-72 lg:px-8 lg:py-6 xl:px-10">
        <TopBar />
        {children}
      </main>
      <MobileBottomNav />
    </>
  );
}
