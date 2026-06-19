import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; href?: string; variant?: 'primary' | 'secondary' | 'ghost'; className?: string };
export function Button({ children, href, variant = 'primary', className = '' }: Props) {
  const styles = { primary: 'bg-cta text-brand-900 shadow-lg shadow-lime-200/70 hover:scale-[1.01]', secondary: 'bg-brand-900 text-white hover:bg-brand-800', ghost: 'bg-white/70 text-brand-900 ring-1 ring-brand-900/10' }[variant];
  const cls = `inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition ${styles} ${className}`;
  return href ? <Link className={cls} href={href}>{children}</Link> : <button className={cls}>{children}</button>;
}
