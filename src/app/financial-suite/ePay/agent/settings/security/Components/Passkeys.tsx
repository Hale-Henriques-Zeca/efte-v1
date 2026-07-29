'use client';

import React from 'react';

export const Passkeys: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Chaves de Acesso (Passkeys & Biometria)
      </h3>
      <p className="text-xs text-slate-400">
        Inicie sessão instantaneamente usando Touch ID, Face ID ou chaves de segurança de hardware sem palavra-passe.
      </p>
      <div className="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-800">
        <div className="text-xs">
          <p className="font-semibold text-slate-200">MacBook Pro (TouchID)</p>
          <p className="text-slate-500 text-[10px]">Adicionado em 12/05/2026</p>
        </div>
        <button className="text-xs text-red-400 hover:text-red-300 font-medium">Remover</button>
      </div>
      <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs rounded-xl border border-slate-700 transition">
        + Criar Nova Passkey
      </button>
    </div>
  );
};

export default Passkeys;