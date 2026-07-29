'use client';

import React from 'react';

export const ContactSupport: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Abrir Novo Ticket de Suporte
      </h3>
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Assunto / Categoria</label>
          <select className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-emerald-500/50 cursor-pointer">
            <option value="financial">Problemas Financeiros / Saques</option>
            <option value="kyc">Verificação de Identidade (KYC)</option>
            <option value="technical">Falha Técnica / Erro de Sistema</option>
            <option value="other">Outras Questões</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Descrição do Problema</label>
          <textarea
            rows={4}
            placeholder="Descreva detalhadamente a sua solicitação..."
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-emerald-500/50 resize-none placeholder-slate-600"
          />
        </div>
        <button className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs rounded-xl transition duration-150 shadow-lg shadow-emerald-500/10 active:scale-95">
          Enviar Solicitação
        </button>
      </div>
    </div>
  );
};

export default ContactSupport;