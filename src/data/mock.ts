import { Bell, CreditCard, FileText, HeartHandshake, Home, MessageSquareText, ShieldCheck, UserRound } from 'lucide-react';

export const client = {
  name: 'Анна Смирнова',
  initials: 'АС',
  city: 'Москва',
  loyalty: 'Премиум-клиент',
  manager: 'Екатерина Орлова',
  phone: '+7 999 *** ** 45',
  email: 'a***@mail.ru',
};

export const navItems = [
  { href: '/dashboard', label: 'Главная', icon: Home },
  { href: '/contracts', label: 'Договоры', icon: ShieldCheck },
  { href: '/documents', label: 'Документы', icon: FileText },
  { href: '/claims', label: 'Заявления', icon: MessageSquareText },
  { href: '/events', label: 'События', icon: Bell },
  { href: '/profile', label: 'Профиль', icon: UserRound },
];

export const contracts = [
  {
    id: 'contract-1',
    title: 'Выгодный старт',
    type: 'Полис накопительного страхования жизни',
    status: 'Договор действует',
    premium: '30 000 ₽',
    nextPaymentDate: '25 июля',
    insuredAmount: '1 500 000 ₽',
    paidPercent: 64,
    term: '2023—2033',
    number: 'RL-ИСЖ-102938',
    yield: '+8,4%',
    reserve: '970 000 ₽',
    owner: 'Анна Смирнова',
    paymentMethod: 'Банковская карта',
  },
];

export const payments = [{ id: 'pay-001', contractId: 'contract-1', amount: '30 000 ₽', dueDate: '25 июля', status: 'Ожидает оплаты' }];

export const financialProgress = {
  contributed: '970 000 ₽',
  currentValue: '1 045 000 ₽',
  result: '75 000 ₽',
  forecast: '1 520 000 ₽',
  term: '2023–2033',
  termProgress: 30,
  nextPayment: '30 000 ₽',
  nextPaymentDate: '25 июля',
};

export const financialChart = [
  { year: '2023', contributed: 120000, value: 122000, actual: true },
  { year: '2024', contributed: 480000, value: 500000, actual: true },
  { year: '2025', contributed: 970000, value: 1045000, actual: true },
  { year: '2027', contributed: 1090000, value: 1190000, actual: false },
  { year: '2029', contributed: 1210000, value: 1325000, actual: false },
  { year: '2031', contributed: 1330000, value: 1450000, actual: false },
  { year: '2033', contributed: 1450000, value: 1520000, actual: false },
];

export const documents = [
  { id: 'doc-1', title: 'Полис «Выгодный старт»', date: '12.04.2023', type: 'PDF', category: 'Полисы', size: '1,8 МБ', contract: '№ RL-ИСЖ-102938' },
  { id: 'doc-2', title: 'График платежей', date: '12.04.2023', type: 'PDF', category: 'Платежи', size: '840 КБ', contract: '№ RL-ИСЖ-102938' },
  { id: 'doc-3', title: 'Памятка клиента', date: '02.06.2026', type: 'PDF', category: 'Справки', size: '620 КБ', contract: '№ RL-ИСЖ-102938' },
  { id: 'doc-4', title: 'Чек по взносу', date: '25.06.2025', type: 'PDF', category: 'Платежи', size: '320 КБ', contract: '№ RL-ИСЖ-102938' },
  { id: 'doc-5', title: 'Заявление на изменение данных', date: '18.06.2026', type: 'PDF', category: 'Заявления', size: '410 КБ', contract: 'Личный кабинет' },
];

export const notifications = [
  { id: 'n-1', title: 'Следующий платёж скоро', text: 'Внесите 30 000 ₽ до 25 июля, чтобы договор оставался активным.', type: 'Платёж', date: 'Сегодня', status: 'Важно', icon: Bell },
  { id: 'n-2', title: 'Документы обновлены', text: 'В личном кабинете доступен актуальный график платежей.', type: 'Документы', date: '20 июня', status: 'Новое', icon: FileText },
  { id: 'n-3', title: 'Полис выпущен', text: 'Полис по договору «Выгодный старт» доступен для скачивания.', type: 'Договор', date: '12 апреля', status: 'Готово', icon: ShieldCheck },
  { id: 'n-4', title: 'График платежей доступен', text: 'Проверьте даты будущих взносов в разделе документов.', type: 'Платежи', date: '12 апреля', status: 'Готово', icon: CreditCard },
];

export const claims = [{ id: 'cl-1', title: 'Заявление на изменение данных', status: 'В обработке', date: '18 июня' }];
export const quickActions = [{ label: 'Оплатить взнос', icon: CreditCard }, { label: 'Открыть договор', icon: ShieldCheck }, { label: 'Связаться с менеджером', icon: HeartHandshake }];
export type Contract = typeof contracts[number];
export type FinancialProgress = typeof financialProgress;
export type FinancialPoint = typeof financialChart[number];
export type Document = typeof documents[number];
export type Notification = typeof notifications[number];
