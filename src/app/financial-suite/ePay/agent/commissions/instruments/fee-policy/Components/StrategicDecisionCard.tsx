'use client';

import React from 'react';

export const StrategicDecisionCard: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
          Decisão Estratégica sobre a Taxa de Transação
        </h3>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        Após uma análise aprofundada do mercado global de <span className="text-emerald-400 font-semibold">Crypto ATM Machines</span> e serviços presenciais de ativos digitais, foi decidido que a rede <span className="text-amber-400 font-semibold">ePay Agent</span> adotará uma <span className="text-emerald-400 font-bold">taxa padrão de 10% por transação</span>.
      </p>

      <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2 text-xs">
        <p className="text-slate-300">
          <strong className="text-amber-400">Nota Institucional EdenKingDom:</strong> Esta decisão não está relacionada com custos operacionais elevados, oportunismo ou com o objetivo de maximizar lucros rapidamente.
        </p>
        <p className="text-slate-400 text-[11px] leading-relaxed">
          Pelo contrário, trata-se de uma decisão baseada no respeito pelo mercado existente e na lealdade para com as empresas e operadores que há vários anos investem e desenvolvem infraestruturas de Crypto ATM em diversos países do mundo.
        </p>
      </div>
    </div>
  );
};

export default StrategicDecisionCard;