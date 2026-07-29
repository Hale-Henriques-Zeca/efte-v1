'use client';

import { FaShieldAlt, FaCheckCircle, FaUserCheck } from 'react-icons/fa';

export default function KYCStatus() {
  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400">
            <FaShieldAlt className="text-2xl" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Status da Verificação KYC</h2>
              <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-[10px] font-bold">
                NÍVEL MASTER VERIFICADO
              </span>
            </div>
            <p className="text-xs text-slate-400">Todos os documentos legais foram validados com sucesso pela equipa ePay</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800">
          <FaUserCheck className="text-emerald-400" />
          <span className="text-xs text-slate-300 font-semibold">Agente Ativo & Aprovado</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Identificação Civil:</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1"><FaCheckCircle /> Aprovado</span>
        </div>
        <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Residência:</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1"><FaCheckCircle /> Aprovado</span>
        </div>
        <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Biometria / Selfie:</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1"><FaCheckCircle /> Aprovado</span>
        </div>
      </div>
    </div>
  );
}