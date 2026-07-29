'use client';

import React from 'react';

interface QuickSettingsProps {
  onSelectSection: (section: string) => void;
}

export const QuickSettings: React.FC<QuickSettingsProps> = ({ onSelectSection }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      <button
        onClick={() => onSelectSection('database-kyc')}
        className="p-3 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 rounded-xl text-left transition group"
      >
        <p className="text-[10px] uppercase font-bold text-emerald-400">Verificação</p>
        <p className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300">Status KYC</p>
      </button>

      <button
        onClick={() => onSelectSection('security')}
        className="p-3 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/40 rounded-xl text-left transition group"
      >
        <p className="text-[10px] uppercase font-bold text-amber-400">Segurança</p>
        <p className="text-xs font-semibold text-slate-200 group-hover:text-amber-300">Configurar 2FA</p>
      </button>

      <button
        onClick={() => onSelectSection('wallets')}
        className="p-3 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 rounded-xl text-left transition group"
      >
        <p className="text-[10px] uppercase font-bold text-emerald-400">Web3</p>
        <p className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300">Conectar Wallet</p>
      </button>

      <button
        onClick={() => onSelectSection('api')}
        className="p-3 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-red-500/40 rounded-xl text-left transition group"
      >
        <p className="text-[10px] uppercase font-bold text-red-400">Desenvolvedor</p>
        <p className="text-xs font-semibold text-slate-200 group-hover:text-red-300">Chaves de API</p>
      </button>
    </div>
  );
};

export default QuickSettings;