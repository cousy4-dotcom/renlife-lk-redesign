export function ProgressBar({ value }: { value: number }) { return <div className="h-3 rounded-full bg-lavender"><div className="h-3 rounded-full bg-cta" style={{ width: `${value}%` }} /></div>; }
