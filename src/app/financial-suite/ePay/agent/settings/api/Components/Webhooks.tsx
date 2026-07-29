'use client';

import { useState } from 'react';
import { FaNetworkWired, FaCheckCircle, FaTrash } from 'react-icons/fa';

export default function Webhooks() {
  const [webhookUrl, setWebhookUrl] = useState('https://meusistema.com/api/epay/webhook');

  const events = [
    { name: 'deposit.confirmed', active: true },
    { name: 'withdraw.requested', active: true },
    { name: 'commission.paid', active: false },
  ];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
          <FaNetworkWired className="text-lg" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">Configuração de Webhook</h2>
          <p className="text-xs text-slate-400">Receba notificações HTTP em tempo real quando ocorrem eventos no ePay</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Endpoint URL (POST)</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-500/50"
            />
            <button
              onClick={() => alert('Webhook salvo e testado!')}
              className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 rounded-xl text-xs font-bold transition whitespace-nowrap"
            >
              Salvar Endpoint
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-400">Eventos Subscritos:</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {events.map((evt, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs"
              >
                <span className="font-mono text-slate-300 text-[11px]">{evt.name}</span>
                {evt.active ? (
                  <FaCheckCircle className="text-emerald-400 text-xs" />
                ) : (
                  <span className="text-[10px] text-slate-600 font-bold">Inativo</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}