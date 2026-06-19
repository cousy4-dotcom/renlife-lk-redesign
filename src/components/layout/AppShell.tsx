import type { ReactNode } from 'react';import { DesktopSidebar } from './DesktopSidebar';import { MobileBottomNav } from './MobileBottomNav';import { TopBar } from './TopBar';
export function AppShell({children}:{children:ReactNode}){return <><DesktopSidebar/><main className="min-h-screen px-4 pb-28 pt-5 sm:px-8 lg:ml-72 lg:px-10 lg:py-8"><TopBar/>{children}</main><MobileBottomNav/></>}
