'use client';

import React from 'react';

export const AtmCostsBreakdown: React.FC = () => {
  const costs = [
    'Taxa da operação e manutenção do equipamento físico',
    'Spread sobre o preço da criptomoeda (margem cambial incorreta/oculta)',
    'Taxa de rede da blockchain (Network / Gas Fee)',
    'Aluguer de espaço comercial (shoppings, aeroportos, supermercados, quiosques, etc)',
    'Recolha, transporte e reposição de dinheiro físico',
    'Seguros, conformidade regulatória (KYC/AML) e suporte presencial/remoto',
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-red-400">
          Custos Normalmente Envolvidos nos Crypto ATM Machines
        </h3>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed">
        Reconhecemos que os operadores de Crypto ATM enfrentam desafios e custos operacionais significativamente superiores aos de uma rede digital, sendo natural que pratiquem taxas entre 8% e 25%:
      </p>

      <ul className="space-y-2 text-xs">
        {costs.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-slate-300">
            <span className="text-red-400 font-bold text-xs mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AtmCostsBreakdown;