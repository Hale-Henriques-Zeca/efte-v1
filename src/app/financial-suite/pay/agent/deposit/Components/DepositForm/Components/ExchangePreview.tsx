'use client';

interface ExchangePreviewProps {
  localAmount: number;
  usdAmount: number;
  cryptoAmount: number;
  cryptoSymbol: string;
}

export default function ExchangePreview({ localAmount, usdAmount, cryptoAmount, cryptoSymbol }: ExchangePreviewProps) {
  return (
    <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-center space-y-1">
      <div className="text-sm font-semibold text-slate-300">{localAmount} MT</div>
      <div className="text-slate-500 text-xs font-bold">↓</div>
      <div className="text-sm font-semibold text-slate-300">{usdAmount.toFixed(2)} USD</div>
      <div className="text-slate-500 text-xs font-bold">↓</div>
      <div className="text-lg font-extrabold text-emerald-400">
        {cryptoAmount.toFixed(2)} {cryptoSymbol}
      </div>
    </div>
  );
}