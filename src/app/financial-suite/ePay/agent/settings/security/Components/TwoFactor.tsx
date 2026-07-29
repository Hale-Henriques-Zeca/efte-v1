'use client';

import React from 'react';

export const TwoFactor: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          Autenticação de Dois Fatores (2FA)
        </h3>
        <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Ativo
        </span>
      </div>
      <p className="text-xs text-slate-400">
        Proteja sua conta de agente exigindo um código de verificação do Google Authenticator ou Authy.
      </p>
      <div className="flex gap-3 pt-2">
        <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition">
          Configurar Authenticator
        </button>
        <button className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold rounded-xl border border-red-500/20 transition">
          Desativar 2FA
        </button>
      </div>
    </div>
  );
};

export default TwoFactor;