'use client';

import React from 'react';

export const AddressInfo: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        Localização Nacional & Contato do Agente
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* País / Jurisdição */}
        <div className="lg:col-span-1">
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            País / Jurisdição *
          </label>
          <select
            defaultValue="MZ"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-red-500/50 transition duration-150 cursor-pointer"
          >
            <option value="MZ">Moçambique (MZ)</option>
            <option value="AO">Angola (AO)</option>
            <option value="PT">Portugal (PT)</option>
            <option value="BR">Brasil (BR)</option>
            <option value="ZA">África do Sul (ZA)</option>
            <option value="US">Estados Unidos (US)</option>
            <option value="GB">Reino Unido (GB)</option>
            <option value="AE">Emirados Árabes Unidos (AE)</option>
            <option value="OTHER">Outro País / Região</option>
          </select>
        </div>

        {/* Linha de Endereço 1 */}
        <div className="md:col-span-2 lg:col-span-2">
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Endereço Principal (Linha 1) *
          </label>
          <input
            type="text"
            placeholder="Rua, Avenida, Número do Prédio, Porta"
            defaultValue="Av. Eduardo Mondlane, Nº 100, 3º Andar"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
          />
        </div>

        {/* Linha de Endereço 2 (Opcional) */}
        <div className="md:col-span-2 lg:col-span-2">
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Endereço Secundário (Linha 2 - Opcional)
          </label>
          <input
            type="text"
            placeholder="Apartamento, Bloco, Suíte, Referência local"
            defaultValue="Bairro Central"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
          />
        </div>

        {/* Código Postal / ZIP */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Código Postal / ZIP Code
          </label>
          <input
            type="text"
            placeholder="ex: 1100"
            defaultValue="1100"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
          />
        </div>

        {/* Cidade / Vila / Distrito */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Cidade / Vila / Distrito *
          </label>
          <input
            type="text"
            placeholder="Cidade ou Distrito"
            defaultValue="Maputo"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
          />
        </div>

        {/* Província / Estado / Região */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Província / Estado / Região *
          </label>
          <input
            type="text"
            placeholder="Província ou Estado"
            defaultValue="Maputo Cidade"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
          />
        </div>

        {/* Prefixo Internacional + Telefone Principal */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Telefone Principal (DDI + Número) *
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="+258"
              defaultValue="+258"
              className="w-24 bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-100 text-sm text-center focus:outline-none focus:border-red-500/50 transition duration-150"
            />
            <input
              type="tel"
              placeholder="84 000 0000"
              defaultValue="84 123 4567"
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
            />
          </div>
        </div>

        {/* Telefone Secundário / WhatsApp */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Telefone Secundário / WhatsApp
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="+258"
              defaultValue="+258"
              className="w-24 bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-100 text-sm text-center focus:outline-none focus:border-red-500/50 transition duration-150"
            />
            <input
              type="tel"
              placeholder="86 000 0000"
              defaultValue="86 987 6543"
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
            />
          </div>
        </div>

        {/* E-mail Principal */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            E-mail Principal *
          </label>
          <input
            type="email"
            placeholder="agente@epay.com"
            defaultValue="agent.primary@epay.com"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
          />
        </div>

        {/* E-mail Secundário / Notificações */}
        <div className="md:col-span-2 lg:col-span-2">
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            E-mail Alternativo (Recuperação / Suporte)
          </label>
          <input
            type="email"
            placeholder="suporte.backup@domain.com"
            defaultValue="agent.backup@epay.com"
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-red-500/50 transition duration-150"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;