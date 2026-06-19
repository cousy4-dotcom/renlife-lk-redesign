import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  className?: string;
};

export function Button({ children, href, variant = 'primary', className = '' }: Props) {
  const styles = {
    primary: 'bg-cta text-brand-900 hover:bg-[#a8ef22]',
    secondary: 'bg-brand-900 text-white hover:bg-brand-800',
    ghost: 'bg-transparent text-brand-900 ring-1 ring-brand-900/10 hover:bg-brand-900/5',
    light: 'bg-white text-brand-900 shadow-card hover:bg-lavender',
  }[variant];
  const cls = `inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${styles} ${className}`;

  return href ? (
    <Link className={cls} href={href}>
      {children}
    </Link>
  ) : (
    <button className={cls}>{children}</button>
  );
}
