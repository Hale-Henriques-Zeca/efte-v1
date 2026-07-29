'use client';

import React from 'react';

export const EdenKingdomCommitment: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-md space-y-4 md:col-span-2">
      <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
          Compromisso de Inovação Ética — EdenKingDom
        </h3>
      </div>

      <blockquote className="p-4 bg-slate-950/90 border-l-4 border-emerald-500 rounded-r-xl text-xs text-slate-200 leading-relaxed font-medium">
        "A EdenKingDom acredita que a inovação deve caminhar lado a lado com a ética empresarial. A definição da taxa de 10% reflete esse compromisso, demonstrando que o objetivo da plataforma não é provocar uma guerra de preços nem retirar competitividade aos operadores existentes, mas sim construir uma infraestrutura financeira baseada em blockchain que possa coexistir de forma equilibrada com os restantes intervenientes do mercado global de criptomoedas."
      </blockquote>
    </div>
  );
};

export default EdenKingdomCommitment;