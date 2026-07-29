'use client';

import React from 'react';

export const LiveChat: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Atendimento em Tempo Real (Live Chat)
          </h3>
          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Agentes Online
          </span>
        </div>
        <p className="text-xs text-slate-400">
          Fale diretamente com a equipe técnica ou de compliance do ePay para suporte prioritário em tempo real.
        </p>
      </div>

      <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-center space-y-2 mt-4">
        <p className="text-xs text-slate-300 font-medium">Tempo médio de espera: <span className="text-amber-400 font-bold">&lt; 3 minutos</span></p>
        <button className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition duration-150 shadow-lg shadow-amber-500/10 active:scale-95">
          Iniciar Chat Agora
        </button>
      </div>
    </div>
  );
};

export default LiveChat;