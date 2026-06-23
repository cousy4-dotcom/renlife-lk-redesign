import { AlertCircle } from 'lucide-react';
import { Button } from './Button';
export function AlertBanner() { return <div className="flex flex-col gap-4 rounded-3xl bg-brand-900 p-5 text-white shadow-soft sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-3"><AlertCircle className="text-cta"/><div><b>Платёж по договору до 25 июля</b><p className="text-sm text-white/70">Пополните договор «Выгодный старт» на 30 000 ₽.</p></div></div><Button href="/payment">Оплатить</Button></div>; }
