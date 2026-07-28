'use client';

interface ReviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    country: string;
    currency: string;
    agentId: string;
    cryptoAmount: number;
    usdValue: number;
    localAmount: number;
  };
}

export default function ReviewDialog({ isOpen, onClose, data }: ReviewDialogProps) {
  if (!isOpen) return null;

  const fee = data.cryptoAmount * 0.05;
  const netCrypto = data.cryptoAmount - fee;
  const netLocal = data.localAmount * 0.95;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 space-y-5 shadow-2xl">
        <h3 className="text-xl font-bold text-center text-white border-b border-slate-800 pb-3">
          REVISÃO DO LEVANTAMENTO
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Agente ID</span>
            <span className="font-bold text-rose-400">{data.agentId || 'N/A'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Moeda Débito</span>
            <span className="font-semibold text-white">{data.currency}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Valor Solicitado</span>
            <span className="font-semibold text-slate-200">
              {data.cryptoAmount.toFixed(2)} {data.currency}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Taxa de Agente (5%)</span>
            <span className="font-semibold text-rose-400">
              -{fee.toFixed(2)} {data.currency}
            </span>
          </div>
          <hr className="border-slate-800" />
          <div className="flex justify-between text-base font-bold">
            <span className="text-white">A Receber em M-Pesa / Cash</span>
            <span className="text-emerald-400">
              {netLocal > 0 ? netLocal.toFixed(2) : '0.00'} MT
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={onClose}
            className="py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              alert('Solicitação de Levantamento Enviada ao Agente!');
              onClose();
            }}
            className="py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition shadow-lg"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}