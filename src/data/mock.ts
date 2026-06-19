import { Bell, CreditCard, FileText, HeartHandshake, Home, ShieldCheck, UserRound } from 'lucide-react';

export const client = { name: 'Анна Смирнова', initials: 'АС', city: 'Москва', loyalty: 'Премиум-клиент' };
export const navItems = [
  { href: '/dashboard', label: 'Главная', icon: Home },
  { href: '/contracts', label: 'Договоры', icon: ShieldCheck },
  { href: '/payment', label: 'Платежи', icon: CreditCard },
  { href: '/documents', label: 'Документы', icon: FileText },
  { href: '/profile', label: 'Профиль', icon: UserRound },
];
export const contracts = [{ id: 'vs-102938', title: 'Выгодный старт', type: 'Инвестиционное страхование жизни', status: 'Активен', premium: '30 000 ₽', nextPaymentDate: '25 июля', insuredAmount: '1 500 000 ₽', paidPercent: 64, term: '2023—2033' }];
export const payments = [{ id: 'pay-001', contractId: 'vs-102938', amount: '30 000 ₽', dueDate: '25 июля', status: 'Ожидает оплаты' }];
export const documents = [{ id: 'doc-1', title: 'Полис Выгодный старт', date: '12.04.2023', type: 'PDF' }, { id: 'doc-2', title: 'График платежей', date: '12.04.2023', type: 'PDF' }];
export const notifications = [{ id: 'n-1', title: 'Следующий платёж скоро', text: 'Внесите 30 000 ₽ до 25 июля, чтобы договор оставался активным.', icon: Bell }, { id: 'n-2', title: 'Документы обновлены', text: 'В личном кабинете доступен актуальный график платежей.', icon: FileText }];
export const claims = [{ id: 'cl-1', title: 'Заявление на изменение данных', status: 'В обработке', date: '18 июня' }];
export const quickActions = [{ label: 'Поддержка', icon: HeartHandshake }, { label: 'Защита', icon: ShieldCheck }, { label: 'Документы', icon: FileText }];

export type Contract = typeof contracts[number];
