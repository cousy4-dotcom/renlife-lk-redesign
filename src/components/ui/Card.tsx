import type { ReactNode } from 'react';
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) { return <section className={`rounded-[1.5rem] border border-white/70 bg-white p-4 shadow-card md:p-5 ${className}`}>{children}</section>; }
