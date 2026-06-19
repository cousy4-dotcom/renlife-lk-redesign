import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-[1.35rem] border border-brand-900/5 bg-white p-4 shadow-card ${className}`}>{children}</section>;
}
