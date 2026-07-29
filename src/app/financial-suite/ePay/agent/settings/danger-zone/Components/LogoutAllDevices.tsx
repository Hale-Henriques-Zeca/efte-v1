'use client';

import { FaDesktop, FaSignOutAlt } from 'react-icons/fa';

export default function LogoutAllDevices() {
  const handleLogoutAll = () => {
    if (confirm('Deseja encerrar todas as sessões ativas e desconectar todos os dispositivos?')) {
      alert('Sessões encerradas com sucesso em todos os dispositivos!');
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
            <FaDesktop className="text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Desconectar de Todos os Dispositivos</h2>
            <p className="text-xs text-slate-400">Invalide todos os tokens de acesso ativos em navegadores e telemóveis</p>
          </div>
        </div>

        <button
          onClick={handleLogoutAll}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-2"
        >
          <FaSignOutAlt /> Encerrar Outras Sessões
        </button>
      </div>

      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 text-xs space-y-2 text-slate-400">
        <div className="flex justify-between items-center">
          <span>Sessão Atual: <strong className="text-emerald-400">Chrome (Windows 11) - Ativa agora</strong></span>
          <span className="text-[11px] font-mono text-slate-500">IP: 102.89.x.x</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Sessão Mobile: <strong className="text-slate-300">ePay Mobile App (Android)</strong></span>
          <span className="text-[11px] font-mono text-slate-500">Último acesso: há 2h</span>
        </div>
      </div>
    </div>
  );
}