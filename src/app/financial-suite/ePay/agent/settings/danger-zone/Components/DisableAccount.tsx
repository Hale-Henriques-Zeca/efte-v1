'use client';

import { useState } from 'react';
import { FaUserSlash, FaExclamationTriangle } from 'react-icons/fa';

export default function DisableAccount() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggle = () => {
    if (confirm('Tem certeza que deseja alterar o status de operação da sua conta de agente?')) {
      setIsDisabled(!isDisabled);
    }
  };

  return (
    <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <FaUserSlash className="text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Pausar/Desativar Temporariamente a Conta</h2>
            <p className="text-xs text-slate-400">Suspenda a visibilidade da sua agência no mapa e interrompa novos depósitos/saques</p>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            isDisabled
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
              : 'bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20'
          }`}
        >
          {isDisabled ? 'Reativar Agência' : 'Pausar Atividades'}
        </button>
      </div>

      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 flex items-center gap-3 text-xs text-slate-300">
        <FaExclamationTriangle className="text-amber-400 text-lg flex-shrink-0" />
        <span>
          Enquanto a conta estiver pausada, seus fundos continuam seguros na blockchain, mas clientes não poderão efeituar ordens presenciais.
        </span>
      </div>
    </div>
  );
}