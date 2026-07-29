'use client';

import React from 'react';

export const PasswordCard: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Alterar Palavra-Passe
      </h3>
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Palavra-Passe Atual</label>
          <input
            type="password"
            placeholder="••••••••••••"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-500/50"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Nova Palavra-Passe</label>
          <input
            type="password"
            placeholder="••••••••••••"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-500/50"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Confirmar Nova Palavra-Passe</label>
          <input
            type="password"
            placeholder="••••••••••••"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2 text-slate-100 text-sm focus:outline-none focus:border-emerald-500/50"
          />
        </div>
        <button className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition duration-150">
          Atualizar Palavra-Passe
        </button>
      </div>
    </div>
  );
};

export default PasswordCard;