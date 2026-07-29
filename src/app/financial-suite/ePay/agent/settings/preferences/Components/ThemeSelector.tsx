'use client';

import React, { useState } from 'react';

export const ThemeSelector: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark-epay');

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Aparência e Tema
      </h3>

      <p className="text-xs text-slate-400">
        Escolha o estilo visual para o Dashboard e componentes ePay.
      </p>

      <div className="grid grid-cols-2 gap-3 pt-1">
        <button
          onClick={() => setTheme('dark-epay')}
          className={`p-3 rounded-xl border text-left transition ${
            theme === 'dark-epay'
              ? 'bg-slate-950 border-emerald-500/60 text-emerald-400'
              : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold">Dark ePay</span>
          </div>
          <p className="text-[10px] text-slate-500">Padrão Dark Neon</p>
        </button>

        <button
          onClick={() => setTheme('cyber-gold')}
          className={`p-3 rounded-xl border text-left transition ${
            theme === 'cyber-gold'
              ? 'bg-slate-950 border-amber-500/60 text-amber-400'
              : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-bold">Cyber Gold</span>
          </div>
          <p className="text-[10px] text-slate-500">Edição eCoin</p>
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;