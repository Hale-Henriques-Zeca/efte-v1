'use client';

import React, { useState } from 'react';

export const TimezoneSelector: React.FC = () => {
  const [timezone, setTimezone] = useState<string>('Africa/Maputo');

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        Fuso Horário
      </h3>

      <p className="text-xs text-slate-400">
        Ajuste o fuso horário para exibição precisa dos registros de transações e logs de auditoria.
      </p>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Fuso Horário do Sistema
          </label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-red-500/50 cursor-pointer"
          >
            <option value="Africa/Maputo">(UTC+02:00) Maputo / CAT</option>
            <option value="UTC">(UTC+00:00) Tempo Universal Coordenado (UTC)</option>
            <option value="America/Sao_Paulo">(UTC-03:00) Brasília / São Paulo</option>
            <option value="Europe/London">(UTC+01:00) Londres</option>
          </select>
        </div>

        <button className="w-full py-2.5 bg-red-500 hover:bg-red-400 text-slate-950 font-bold text-xs rounded-xl transition duration-150 shadow-lg shadow-red-500/10 active:scale-95">
          Salvar Fuso Horário
        </button>
      </div>
    </div>
  );
};

export default TimezoneSelector;