'use client';

import { FaWallet, FaCheckCircle, FaExchangeAlt } from 'react-icons/fa';

export default function WalletCard() {
  const walletAddress = "0x503d...9283";
  const network = "Binance Smart Chain";

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
              <FaWallet className="text-lg" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Carteira Conectada</h2>
              <p className="text-xs text-slate-400">Endereço Web3 do Agente responsável</p>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-[11px] font-bold flex items-center gap-1.5">
            <FaCheckCircle /> Conectado
          </span>
        </div>

        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Rede Operacional:</span>
            <span className="text-amber-400 font-semibold">{network}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Endereço Público:</span>
            <code className="text-emerald-400 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {walletAddress}
            </code>
          </div>
        </div>
      </div>

      <button
        onClick={() => alert('Trocar de carteira Web3...')}
        className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border border-slate-700"
      >
        <FaExchangeAlt /> Alterar Carteira Web3
      </button>
    </div>
  );
}