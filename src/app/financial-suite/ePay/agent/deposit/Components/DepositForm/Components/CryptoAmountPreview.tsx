'use client';

interface CryptoAmountPreviewProps {
  usdAmount: number;
  cryptoAmount: number;
  cryptoSymbol: string;
}

export default function CryptoAmountPreview({ usdAmount, cryptoAmount, cryptoSymbol }: CryptoAmountPreviewProps) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
      <span className="text-xs text-slate-400 uppercase font-semibold">Conversão Estendida</span>
      <div className="text-right">
        <div className="text-emerald-400 font-bold text-base">
          {cryptoAmount.toFixed(2)} {cryptoSymbol}
        </div>
        <div className="text-slate-500 text-xs">≈ ${usdAmount.toFixed(2)} USD</div>
      </div>
    </div>
  );
}