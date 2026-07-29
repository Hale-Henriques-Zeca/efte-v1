'use client';

interface CountrySelectorProps {
  value: string;
  onChange: (val: string) => void;
}

const COUNTRIES = [
  { code: 'MZ', name: 'Mozambique', flag: '🇲🇿', currency: 'MT' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦', currency: 'ZAR' },
  { code: 'US', name: 'USA', flag: '🇺🇸', currency: 'USD' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', currency: 'BRL' },
];

export default function CountrySelector({ value, onChange }: CountrySelectorProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
        🌍 País de Recebimento
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-rose-500 cursor-pointer"
      >
        {COUNTRIES.map((c) => (
          <option key={c.code} value={c.code} className="bg-slate-900 text-white">
            {c.flag} {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}