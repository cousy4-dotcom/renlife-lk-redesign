import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-[1.5rem] bg-white p-4 shadow-card sm:p-5 ${className}`}>{children}</section>;
}
