'use client';

import React from 'react';

export const PersonalInfo: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2">
        Informações Pessoais
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Nome Completo</label>
          <input
            type="text"
            defaultValue="Hale Henriques"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-emerald-500/50 transition duration-150"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Data de Nascimento</label>
          <input
            type="date"
            defaultValue="1997-09-27"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-emerald-500/50 transition duration-150"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;