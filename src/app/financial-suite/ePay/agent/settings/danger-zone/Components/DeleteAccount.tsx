'use client';

import { useState } from 'react';
import { FaTrashAlt, FaShieldAlt } from 'react-icons/fa';

export default function DeleteAccount() {
  const [confirmText, setConfirmText] = useState('');

  const handleDelete = () => {
    if (confirmText === 'ELIMINAR AGENTE') {
      alert('Solicitação enviada. A revogação do contrato e liquidação de pendências foi iniciada.');
    } else {
      alert('Por favor, digite a palavra de confirmação exata.');
    }
  };

  return (
    <div className="bg-red-950/20 border border-red-600/40 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center gap-3 border-b border-red-900/40 pb-3">
        <div className="p-2.5 bg-red-600/20 border border-red-500/40 rounded-xl text-red-500">
          <FaTrashAlt className="text-lg" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-red-400">Eliminar Definitivamente a Conta de Agente</h2>
          <p className="text-xs text-slate-400">Revoga o seu NFT ID de Agente e remove o registo off-chain da base de dados</p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs text-slate-300 leading-relaxed">
          Esta ação é <strong>irreversível</strong>. Todos os fundos no pool semanal e comissões não reivindicadas devem ser sacados previamente. Seu registro de credenciamento na rede ePay será queimado na blockchain.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <input
            type="text"
            placeholder='Digite "ELIMINAR AGENTE" para confirmar'
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            className="w-full bg-slate-950 border border-red-900/50 rounded-xl px-4 py-2.5 text-xs text-red-300 focus:outline-none focus:border-red-500 placeholder-slate-600 font-mono"
          />
          <button
            onClick={handleDelete}
            disabled={confirmText !== 'ELIMINAR AGENTE'}
            className={`px-5 py-2.5 rounded-xl text-xs font-black transition whitespace-nowrap flex items-center justify-center gap-2 ${
              confirmText === 'ELIMINAR AGENTE'
                ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/50'
                : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-800'
            }`}
          >
            <FaShieldAlt /> Destruir Credencial
          </button>
        </div>
      </div>
    </div>
  );
}