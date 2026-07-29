'use client';

import React from 'react';

export const FeeDiscoveryTimeline: React.FC = () => {
  const steps = [
    {
      phase: '1% — Visão Inicial',
      title: 'Fundação da Rede ePay Agent',
      desc: 'A visão inicial da EdenKingDom consistia em fundar a rede utilizando apenas 1% de taxa, acreditando ser suficiente para manter a operação e garantir um serviço altamente acessível.',
      badge: 'border-slate-700 bg-slate-800/50 text-slate-400',
    },
    {
      phase: '5% — Análise de Câmbios e Exchanges',
      title: 'Ajuste ao Mercado Digital (≈4,5%)',
      desc: 'Durante o estudo do mercado financeiro global, identificámos que exchanges e casas de câmbio praticam cerca de 4,5%. Ajustámos para 5% para evitar concorrência desleal com intervenientes estabelecidos.',
      badge: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    },
    {
      phase: '10% — Taxa Adotada (Final)',
      title: 'Respeito ao Ecossistema Crypto ATM (7% a 25%)',
      desc: 'Ao constatar que Crypto ATMs praticam entre 7% e 25%, a EdenKingDom definiu a taxa fixa de 10%. Uma escolha ética de convivência saudável, integridade e equilíbrio de mercado.',
      badge: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-bold',
    },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-6 md:col-span-2">
      <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
          Nota sobre a Descoberta da Taxa de Mercado (Linha do Tempo)
        </h3>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        É importante esclarecer como a EdenKingDom chegou à definição da taxa atualmente adotada pela rede ePay Agent. Esta evolução reflete responsabilidade, aprendizado contínuo e ética empresarial:
      </p>

      {/* Timeline visual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        {steps.map((step, idx) => (
          <div key={idx} className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2 flex flex-col justify-between">
            <div>
              <span className={`inline-block px-2.5 py-1 text-[10px] uppercase font-mono rounded-lg border mb-2 ${step.badge}`}>
                {step.phase}
              </span>
              <h4 className="text-xs font-bold text-slate-100">{step.title}</h4>
              <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeDiscoveryTimeline;