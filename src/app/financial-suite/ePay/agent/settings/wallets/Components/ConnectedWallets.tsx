'use client';

import React from 'react';

export const ConnectedWallets: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Carteiras Conectadas (Web3 & eCoin Cloud Wallet)
      </h3>

      <div className="space-y-3">
        {/* eCoin Cloud Wallet (Nativa) */}
        <div className="flex items-center justify-between p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-xs">
              ECCW
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-xs font-bold text-slate-100">eCoin Cloud Wallet</p>
                <span className="px-2 py-0.5 text-[9px] font-bold uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Nativa
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono mt-0.5">0x71C...89A2</p>
            </div>
          </div>
          <span className="text-xs text-emerald-400 font-semibold">Ativa</span>
        </div>

        {/* MetaMask External */}
        <div className="flex items-center justify-between p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-bold text-amber-400 text-xs">
              MM
            </div>
            <div>
              <p className="text-xs font-bold text-slate-100">MetaMask External</p>
              <p className="text-[10px] text-slate-500 font-mono mt-0.5">0x34F...12E9</p>
            </div>
          </div>
          <button className="text-xs text-red-400 hover:text-red-300 font-medium transition">
            Desconectar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectedWallets;