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
    ghost: 'bg-white text-brand-900 ring-1 ring-brand-900/10 hover:bg-lavender',
    light: 'bg-lavender text-brand-900 hover:bg-brand-900/5',
  }[variant];
  const cls = `inline-flex items-center justify-center rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${styles} ${className}`;

  return href ? (
    <Link className={cls} href={href}>
      {children}
    </Link>
  ) : (
    <button className={cls}>{children}</button>
  );
}
