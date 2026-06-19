import type { ReactNode } from 'react';
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) { return <section className={`rounded-[1.8rem] border border-white/70 bg-white p-5 shadow-card ${className}`}>{children}</section>; }
