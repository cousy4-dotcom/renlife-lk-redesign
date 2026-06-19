export function Stepper({ step }: { step: number }) {
  const steps = ['Договор', 'Оплата', 'Готово'];

  return (
    <div className="grid grid-cols-3 gap-2">
      {steps.map((label, index) => (
        <div key={label} className="space-y-2">
          <div className={`h-1.5 rounded-full ${index + 1 <= step ? 'bg-brand-900' : 'bg-white'}`} />
          <p className={`text-center text-xs font-medium ${index + 1 <= step ? 'text-brand-900' : 'text-muted'}`}>{label}</p>
        </div>
      ))}
    </div>
  );
}
