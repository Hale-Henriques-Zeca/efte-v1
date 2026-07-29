'use client';

import React from 'react';

export const WalletConnect: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4 md:col-span-2">
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        Vincular Nova Carteira Web3
      </h3>

      <p className="text-xs text-slate-400">
        Conecte uma carteira externa para assinar transações de agentes, interagir com Smart Contracts e gerenciar liquidez em Binance Smart Chain (BSC) ou eCoin Network.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <button className="flex items-center justify-center gap-2 p-3 bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 rounded-xl transition group">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400">MetaMask</span>
        </button>

        <button className="flex items-center justify-center gap-2 p-3 bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 rounded-xl transition group">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400">WalletConnect</span>
        </button>

        <button className="flex items-center justify-center gap-2 p-3 bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 rounded-xl transition group">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400">eCoin Wallet</span>
        </button>
      </div>
    </div>
  );
};

export default WalletConnect;