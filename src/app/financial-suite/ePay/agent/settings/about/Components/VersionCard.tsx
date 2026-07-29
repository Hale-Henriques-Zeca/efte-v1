'use client';

export default function VersionCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Versão do Aplicativo</h2>
          <p className="text-xs text-slate-400">Plataforma ePay Agent Suite</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
          v2.5.0-production
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-800/60 text-xs">
        <div>
          <span className="text-slate-500 block">Última Atualização</span>
          <span className="text-slate-200 font-semibold">29 de Julho de 2026</span>
        </div>
        <div>
          <span className="text-slate-500 block">Rede Principal</span>
          <span className="text-slate-200 font-semibold">Binance Smart Chain</span>
        </div>
        <div>
          <span className="text-slate-500 block">Status do Nó</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Sincronizado
          </span>
        </div>
      </div>
    </div>
  );
}