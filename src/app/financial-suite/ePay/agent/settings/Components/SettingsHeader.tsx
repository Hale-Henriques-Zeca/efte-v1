'use client';

import React from 'react';

export const SettingsHeader: React.FC = () => {
  return (
    <div className="border-b border-slate-800/80 pb-5 mb-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 ml-1">
          ePay Agent Platform Management
        </span>
      </div>

      <h1 className="text-2xl md:text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500">
        PAINEL DE DEFINIÇÕES
      </h1>

      <p className="text-slate-400 text-sm mt-1.5">
        Gerencie sua identidade blockchain, verificação KYC, preferências do sistema e segurança da conta.
      </p>
    </div>
  );
};

export default SettingsHeader;