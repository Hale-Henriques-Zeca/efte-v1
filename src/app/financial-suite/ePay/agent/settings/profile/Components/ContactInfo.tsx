'use client';

import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-2">
        Contatos e Comunicação
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Endereço de E-mail</label>
          <input
            type="email"
            defaultValue="agent@epay.com"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-500/50 transition duration-150"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Número de Telefone</label>
          <input
            type="tel"
            defaultValue="+258 84 000 0000"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-500/50 transition duration-150"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;