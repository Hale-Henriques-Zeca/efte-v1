'use client';

import { FaUserCheck, FaLock } from 'react-icons/fa';

export default function IdentityCard() {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
          <FaUserCheck className="text-lg" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Perfil do Agente Credenciado</h2>
          <p className="text-xs text-slate-400">Informações vinculadas de verificação e liquidez</p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div className="flex justify-between items-center bg-slate-950/70 p-3 rounded-xl border border-slate-800">
          <span className="text-slate-400">Nível do Agente:</span>
          <span className="text-emerald-400 font-bold">Nível Master (2.5% comissão)</span>
        </div>
        <div className="flex justify-between items-center bg-slate-950/70 p-3 rounded-xl border border-slate-800">
          <span className="text-slate-400">Estado KYC Off-Chain:</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <FaLock className="text-[10px]" /> Verificado
          </span>
        </div>
        <div className="flex justify-between items-center bg-slate-950/70 p-3 rounded-xl border border-slate-800">
          <span className="text-slate-400">Taxa de Arbitragem / Resolução:</span>
          <span className="text-amber-400 font-bold">100% Sucesso (0 Disputas)</span>
        </div>
      </div>
    </div>
  );
}