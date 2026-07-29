'use client';

import { FaHistory, FaCheckDouble } from 'react-icons/fa';

export default function ReviewStatus() {
  const reviews = [
    { date: '29 de Julho de 2026', action: 'Documentação do Agente Aprovada', reviewer: 'Sistema / Compliance ePay' },
    { date: '28 de Julho de 2026', action: 'Comprovativo de Residência Submetido', reviewer: 'Agente' },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <FaHistory className="text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Histórico de Revisão Compliance</h2>
            <p className="text-xs text-slate-400">Registo de auditoria off-chain e validações do perfil</p>
          </div>
        </div>

        <div className="space-y-2">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <FaCheckDouble className="text-[10px]" /> {rev.action}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">{rev.date}</span>
              </div>
              <p className="text-[11px] text-slate-400">Autor: <span className="text-slate-300">{rev.reviewer}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}