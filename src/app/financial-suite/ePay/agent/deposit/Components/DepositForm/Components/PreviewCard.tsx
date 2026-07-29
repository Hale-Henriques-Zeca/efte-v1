// app/financial-suite/pay/agent/deposit/Components/DepositForm/Components/PreviewCard.tsx
interface PreviewProps {
  localAmount: number;
  usdAmount: number;
  cryptoAmount: number;
  cryptoSymbol: string;
}

export default function PreviewCard({ localAmount, usdAmount, cryptoAmount, cryptoSymbol }: PreviewProps) {
  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Conversão em Tempo Real</div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg">
          <p className="text-xs text-slate-400">Moeda Local</p>
          <p className="text-sm md:text-base font-extrabold text-white">{localAmount.toFixed(2)} MT</p>
        </div>
        <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg">
          <p className="text-xs text-slate-400">USD Equivalent</p>
          <p className="text-sm md:text-base font-extrabold text-amber-400 font-mono">${usdAmount.toFixed(2)}</p>
        </div>
        <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg">
          <p className="text-xs text-slate-400">Crypto ({cryptoSymbol})</p>
          <p className="text-sm md:text-base font-extrabold text-emerald-400 font-mono">
            {cryptoAmount.toFixed(3)}
          </p>
        </div>
      </div>
    </div>
  );
}