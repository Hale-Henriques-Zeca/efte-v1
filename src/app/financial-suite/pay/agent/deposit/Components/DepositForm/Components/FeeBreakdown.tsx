'use client';

interface FeeBreakdownProps {
  cryptoAmount: number;
  feePercentage?: number;
  cryptoSymbol: string;
}

export default function FeeBreakdown({ cryptoAmount, feePercentage = 5, cryptoSymbol }: FeeBreakdownProps) {
  const feeAmount = (cryptoAmount * feePercentage) / 100;
  const netAmount = cryptoAmount - feeAmount;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 text-sm">
      <div className="flex justify-between text-slate-400">
        <span>Valor Subtotal</span>
        <span className="font-semibold text-slate-200">
          {cryptoAmount.toFixed(2)} {cryptoSymbol}
        </span>
      </div>
      <div className="flex justify-between text-slate-400">
        <span>Taxa ({feePercentage}%)</span>
        <span className="font-semibold text-rose-400">
          -{feeAmount.toFixed(2)} {cryptoSymbol}
        </span>
      </div>
      <hr className="border-slate-800" />
      <div className="flex justify-between font-bold text-base">
        <span className="text-slate-200">Você Receberá</span>
        <span className="text-emerald-400">
          {netAmount > 0 ? netAmount.toFixed(2) : '0.00'} {cryptoSymbol}
        </span>
      </div>
    </div>
  );
}