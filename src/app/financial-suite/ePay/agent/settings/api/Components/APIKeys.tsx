'use client';

import { useState } from 'react';
import { FaKey, FaCopy, FaEye, FaEyeSlash, FaPlus } from 'react-icons/fa';

export default function APIKeys() {
  const [showSecret, setShowSecret] = useState(false);
  const [copied, setCopied] = useState(false);

  const apiKey = "epay_live_9f8d7a6b5c4d3e2f1a9b8c7d";
  const apiSecret = "sk_live_secret_884920491823901283910";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <FaKey className="text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Chaves de API Ativas</h2>
            <p className="text-xs text-slate-400">Credenciais para autenticação de solicitações de depósito e saque</p>
          </div>
        </div>

        <button
          onClick={() => alert('Nova chave de API gerada com sucesso!')}
          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-xl text-xs font-bold transition shadow-md"
        >
          <FaPlus /> Nova Chave
        </button>
      </div>

      <div className="space-y-3 pt-1">
        {/* Public Key */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Chave Pública (Public Key)</span>
          <div className="flex items-center justify-between gap-2">
            <code className="text-xs font-mono text-emerald-400 break-all">{apiKey}</code>
            <button
              onClick={() => handleCopy(apiKey)}
              className="text-slate-400 hover:text-white text-xs p-1.5 transition"
              title="Copiar Chave"
            >
              <FaCopy />
            </button>
          </div>
        </div>

        {/* Secret Key */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Chave Secreta (Secret Key)</span>
          <div className="flex items-center justify-between gap-2">
            <code className="text-xs font-mono text-slate-300 break-all">
              {showSecret ? apiSecret : '••••••••••••••••••••••••••••••••••••••••'}
            </code>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSecret(!showSecret)}
                className="text-slate-400 hover:text-white text-xs p-1.5 transition"
              >
                {showSecret ? <FaEyeSlash /> : <FaEye />}
              </button>
              <button
                onClick={() => handleCopy(apiSecret)}
                className="text-slate-400 hover:text-white text-xs p-1.5 transition"
              >
                <FaCopy />
              </button>
            </div>
          </div>
        </div>
      </div>

      {copied && (
        <p className="text-[11px] text-emerald-400 font-semibold text-right animate-fade-in">
          Copiado para a área de transferência!
        </p>
      )}
    </div>
  );
}