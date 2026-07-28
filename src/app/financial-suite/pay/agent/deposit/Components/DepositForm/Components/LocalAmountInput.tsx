'use client';

interface LocalAmountInputProps {
  value: number | '';
  onChange: (val: number | '') => void;
  currencySymbol?: string;
}

export default function LocalAmountInput({ value, onChange, currencySymbol = 'MT' }: LocalAmountInputProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
        Moeda Local
      </label>
      <div className="relative">
        <input
          type="number"
          placeholder="Ex: 630"
          value={value}
          onChange={(e) => onChange(e.target.value ? Number(e.target.value) : '')}
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xl font-bold text-emerald-400 focus:outline-none focus:border-emerald-500"
        />
        <span className="absolute right-4 top-3.5 text-slate-500 font-bold">{currencySymbol}</span>
      </div>
    </div>
  );
}