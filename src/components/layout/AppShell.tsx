import type { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { TopBar } from './TopBar';

type AppShellProps = {
  children: ReactNode;
  aside?: ReactNode;
  showTopBar?: boolean;
};

export function AppShell({ children, aside, showTopBar = true }: AppShellProps) {
  return (
    <>
      <DesktopSidebar />
      <main className="min-h-screen px-4 pb-36 pt-4 sm:px-8 lg:ml-72 lg:px-10 lg:py-8">
        {showTopBar ? <TopBar /> : null}
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <section>{children}</section>
          {aside ? <aside className="hidden space-y-5 xl:block">{aside}</aside> : null}
        </div>
      </main>
      <MobileBottomNav />
    </>
  );
}
