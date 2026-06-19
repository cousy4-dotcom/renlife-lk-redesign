import { Card } from './Card';

export function NotificationCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="p-3.5">
      <b className="text-sm text-brand-900">{title}</b>
      <p className="mt-1 text-xs leading-5 text-muted">{text}</p>
    </Card>
  );
}
