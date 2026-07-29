'use client';

interface CurrencySelectorProps {
  value: string;
  onChange: (val: string) => void;
}

const CURRENCIES = [
  { id: 'eDollar', label: 'eDollar', sub: 'USD Stable' },
  { id: 'eCoin', label: 'eCoin', sub: 'Native Coin' },
  { id: 'BNB', label: 'BNB', sub: 'Gas Coin' },
];

export default function CurrencySelector({ value, onChange }: CurrencySelectorProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
        Moeda para Débito
      </label>
      <div className="grid grid-cols-3 gap-2">
        {CURRENCIES.map((cur) => {
          const active = value === cur.id;
          return (
            <button
              key={cur.id}
              type="button"
              onClick={() => onChange(cur.id)}
              className={`p-3 rounded-xl border text-center transition ${
                active
                  ? 'bg-rose-500/10 border-rose-500 text-rose-400'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="font-bold text-sm">{cur.label}</div>
              <div className="text-[10px] text-slate-500">{cur.sub}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}