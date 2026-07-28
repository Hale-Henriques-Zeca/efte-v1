'use client';

interface PreviewCardProps {
  cryptoAmount: number;
  usdAmount: number;
  localAmount: number;
  cryptoSymbol: string;
  localSymbol?: string;
}

export default function PreviewCard({
  cryptoAmount,
  usdAmount,
  localAmount,
  cryptoSymbol,
  localSymbol = 'MT',
}: PreviewCardProps) {
  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-center space-y-1">
      <div className="text-lg font-extrabold text-rose-400">
        {cryptoAmount.toFixed(2)} {cryptoSymbol}
      </div>
      <div className="text-slate-500 text-xs font-bold">↓</div>
      <div className="text-sm font-semibold text-slate-300">${usdAmount.toFixed(2)} USD</div>
      <div className="text-slate-500 text-xs font-bold">↓</div>
      <div className="text-base font-bold text-emerald-400">
        {localAmount.toLocaleString('pt-MZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {localSymbol}
      </div>
    </div>
  );
}