import type { Metadata } from 'next';import type { ReactNode } from 'react';import './globals.css';
export const metadata: Metadata = { title: 'Ренессанс Жизнь — личный кабинет', description: 'Презентационный MVP личного кабинета' };
export default function RootLayout({children}:{children:ReactNode}){return <html lang="ru"><body>{children}</body></html>}
