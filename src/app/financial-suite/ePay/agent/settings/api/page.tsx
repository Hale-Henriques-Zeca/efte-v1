import { APIKeys, Webhooks, Permissions } from './Components';

export default function APISettingsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-6 lg:p-8 relative overflow-hidden w-full">
      {/* 🌟 Glows Ambientais ePay */}
      <div className="absolute -top-24 -right-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Container Principal Full-Width */}
      <div className="w-full space-y-6 bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 backdrop-blur-xl">
        
        {/* Cabeçalho */}
        <div className="border-b border-slate-800/80 pb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 ml-1">
              ePay Developer API
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400">
            INTEGRAÇÃO DE API & WEBHOOKS
          </h1>
          
          <p className="text-slate-400 text-sm mt-1.5">
            Gerencie suas credenciais de acesso, endpoints de notificação e permissões de automação para agentes.
          </p>
        </div>

        {/* Grade de Componentes */}
        <div className="grid grid-cols-1 gap-6 w-full">
          <APIKeys />
          <Webhooks />
          <Permissions />
        </div>

      </div>
    </div>
  );
}