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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffffff_0,#f6f1fb_34%,#efeaf7_100%)]">
      <DesktopSidebar />
      <main className="px-4 pb-36 pt-4 sm:px-6 lg:ml-72 lg:px-8 lg:py-7">
        {showTopBar ? <TopBar /> : null}
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <section>{children}</section>
          {aside ? <aside className="hidden space-y-5 xl:block">{aside}</aside> : null}
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
