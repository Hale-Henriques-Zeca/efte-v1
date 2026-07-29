// app/financial-suite/pay/agent/transfer/Components/RecipientLookup.tsx
interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function RecipientLookup({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
        Destino (Blockchain Identity / Telefone / Email / Referral ID)
      </label>
      <input
        type="text"
        placeholder="Ex: EKD-000000001 ou +25884..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 font-mono text-sm"
      />
    </div>
  );
}