import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-[1.6rem] border border-white/80 bg-white p-4 shadow-card md:rounded-[1.85rem] md:p-6 ${className}`}>{children}</section>;
}
