import WithdrawForm from './Components/WithdrawForm/WithdrawForm';

export default function WithdrawPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
      {/* 🌟 Glows Ambientais com as Cores da ePay (Vermelho, Dourado e Verde) */}
      <div className="absolute -top-24 -left-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-10 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Card Principal / Container da Página */}
      <div className="w-full max-w-2xl mx-auto space-y-6 bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 backdrop-blur-xl">
        
        {/* Cabeçalho estilizado com as cores da marca */}
        <div className="border-b border-slate-800/80 pb-5">
          <div className="flex items-center gap-2 mb-2">
            {/* Indicador Tricolor ePay */}
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 ml-1">
              ePay Financial Network
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400">
            LEVANTAMENTO ePay
          </h1>
          
          <p className="text-slate-400 text-sm mt-1.5">
            Solicite o levantamento dos seus fundos com rápida liquidação através de um agente ePay credenciado.
          </p>
        </div>

        {/* Formulário de Levantamento */}
        <WithdrawForm />
      </div>
    </div>
  );
}