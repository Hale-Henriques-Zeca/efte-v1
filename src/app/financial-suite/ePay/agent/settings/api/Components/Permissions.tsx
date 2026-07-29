'use client';

import { useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';

export default function Permissions() {
  const [permissions, setPermissions] = useState([
    { id: 1, label: 'Permitir leitura de transações', enabled: true },
    { id: 2, label: 'Permitir criação automática de solicitações de depósito', enabled: true },
    { id: 3, label: 'Permitir execução automática de levantamentos via bot', enabled: false },
  ]);

  const togglePermission = (id: number) => {
    setPermissions(prev =>
      prev.map(p => (p.id === id ? { ...p, enabled: !p.enabled } : p))
    );
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
          <FaShieldAlt className="text-lg" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Permissões de Acesso da API</h2>
          <p className="text-xs text-slate-400">Restrinja quais ações as suas chaves podem executar na rede ePay</p>
        </div>
      </div>

      <div className="space-y-3">
        {permissions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs"
          >
            <span className="font-medium text-slate-300">{item.label}</span>
            <button
              type="button"
              onClick={() => togglePermission(item.id)}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
                item.enabled ? 'bg-emerald-500 justify-end' : 'bg-slate-800 justify-start'
              }`}
            >
              <span className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}