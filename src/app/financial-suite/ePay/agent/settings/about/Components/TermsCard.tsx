'use client';

export default function TermsCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Termos de Serviço do Agente</h2>
        <a
          href="#"
          className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition underline"
        >
          Ler documento completo ↗
        </a>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">
        Ao operar como um agente credenciado ePay, concorda em cumprir integralmente com as regras de liquidez, taxas de transação autorizadas e protocolos de verificação presencial dos utilizadores finais e que como obrigação, as transacoes nunca devem ser feitas remotamente com desconhecidos a menos que se conhecam e concoredem em uso de metodos adicionais de envio de valores.
      </p>
    </div>
  );
}