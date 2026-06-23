import { Bell, CreditCard, FileText, HeartHandshake, Home, MessageSquareText, ShieldCheck, UserRound } from 'lucide-react';

export const client = { name: 'Анна Смирнова', initials: 'АС', city: 'Москва', loyalty: 'Премиум-клиент', manager: 'Екатерина Орлова' };

export const navItems = [
  { href: '/dashboard', label: 'Главная', icon: Home },
  { href: '/contracts', label: 'Договоры', icon: ShieldCheck },
  { href: '/documents', label: 'Документы', icon: FileText },
  { href: '/claims', label: 'Заявления', icon: MessageSquareText },
  { href: '/notifications', label: 'События', icon: Bell },
  { href: '/profile', label: 'Профиль', icon: UserRound },
];

export const contracts = [
  {
    id: 'contract-1',
    title: 'Выгодный старт',
    type: 'Инвестиционное страхование жизни',
    status: 'Договор действует',
    premium: '30 000 ₽',
    nextPaymentDate: '25 июля',
    insuredAmount: '1 500 000 ₽',
    paidAmount: '120 000 ₽',
    paidPercent: 64,
    term: '2023—2033',
    number: 'RL-ИСЖ-102938',
    yield: '+8,4%',
    reserve: '970 000 ₽',
  },
];

export const payments = [{ id: 'pay-001', contractId: 'contract-1', amount: '30 000 ₽', dueDate: '25 июля', status: 'Ожидает оплаты' }];

export const documents = [
  { id: 'doc-1', title: 'Полис страхования', date: '12.04.2023', type: 'PDF' },
  { id: 'doc-2', title: 'График платежей', date: '12.04.2023', type: 'PDF' },
  { id: 'doc-3', title: 'Памятка по договору', date: '02.06.2026', type: 'PDF' },
];

export const notifications = [
  { id: 'n-1', title: 'Полис выпущен', text: 'Договор «Выгодный старт» активен, защита действует.', icon: ShieldCheck },
  { id: 'n-2', title: 'График платежей доступен', text: 'Документ можно скачать в разделе документов.', icon: FileText },
  { id: 'n-3', title: 'Следующий взнос до 25 июля', text: 'Внесите 30 000 ₽, чтобы договор продолжал действовать без перерыва.', icon: Bell },
];

export const claims = [{ id: 'cl-1', title: 'Заявление на изменение данных', status: 'В обработке', date: '18 июня' }];

export const quickActions = [
  { label: 'Оплатить взнос', href: '/contracts/contract-1/payment', icon: CreditCard },
  { label: 'Открыть договор', href: '/contracts/contract-1', icon: ShieldCheck },
  { label: 'Все документы', href: '/documents', icon: FileText },
  { label: 'Поддержка', href: '/claims', icon: HeartHandshake },
];

export const dashboardMoney = [
  { label: 'Внесено по договору', value: '120 000 ₽', hint: 'Учтённые регулярные взносы по программе' },
  { label: 'Страховая защита', value: '1 500 000 ₽', hint: 'Сумма защиты по активному договору' },
  { label: 'Резерв договора', value: '970 000 ₽', hint: 'Оценка текущего резерва договора' },
];

export const importantActions = ['Проверьте актуальность данных', 'Скачайте график платежей', 'Подключите напоминания'];

export type Contract = typeof contracts[number];
