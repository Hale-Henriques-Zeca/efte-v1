'use client';

export default function PrivacyCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Política de Privacidade & Dados</h2>
        <a
          href="#"
          className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition underline"
        >
          Visualizar detalhes ↗
        </a>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">
        Todos os dados de transações financeiras e identificadores de carteira são encriptados de ponta a ponta. A ePay assegura a proteção da identidade dos agentes e clientes em conformidade com as normas internacionais de KYC/AML.
      </p>
    </div>
  );
}