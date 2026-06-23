import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-[1.35rem] border border-white/70 bg-white p-3.5 shadow-card md:rounded-[1.5rem] md:p-5 ${className}`}>{children}</section>;
}
