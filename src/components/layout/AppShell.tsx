import type { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { TopBar } from './TopBar';

export function AppShell({
  children,
  aside,
  hideMobileNav = false,
}: {
  children: ReactNode;
  aside?: ReactNode;
  hideMobileNav?: boolean;
}) {
  const mobileBottomPadding = hideMobileNav
    ? 'pb-8 sm:pb-10 md:pb-12'
    : 'pb-[calc(112px+env(safe-area-inset-bottom))] sm:pb-[calc(120px+env(safe-area-inset-bottom))] md:pb-[calc(128px+env(safe-area-inset-bottom))]';

  return (
    <div className="min-h-screen overflow-x-clip bg-lavender">
      <DesktopSidebar />
      <main className={`px-4 pt-3 sm:px-6 md:pt-4 lg:ml-[280px] lg:px-8 lg:py-8 xl:px-10 ${mobileBottomPadding}`}>
        <div className="mx-auto w-full max-w-[1180px]">
          <TopBar />
          <div className="grid min-w-0 gap-4 md:gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            <section className="min-w-0">{children}</section>
            <aside className="hidden space-y-4 xl:block">{aside}</aside>
          </div>
        </div>
      </main>
      {!hideMobileNav && <MobileBottomNav />}
    </div>
  );
}
