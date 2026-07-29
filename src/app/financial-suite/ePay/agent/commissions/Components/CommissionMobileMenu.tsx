'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const CommissionMobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botão Hambúrguer (☰) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-emerald-400 hover:text-emerald-300 hover:bg-slate-800 transition-all focus:outline-none"
        aria-label="Abrir Menu de Acesso"
      >
        <span className="text-xl font-bold leading-none">☰</span>
      </button>

      {/* Backdrop e Drawer Lateral / Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          {/* Container do Menu */}
          <div className="w-4/5 max-w-xs h-full bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl relative">
            
            <div>
              {/* Fechar + Título */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Navegação ePay
                  </span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Links do Menu */}
              <nav className="space-y-3">
                <Link
                  href="/financial-suite/ePay/agent/commissions"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs"
                >
                  <span>💰</span>
                  <span>Minhas Comissões</span>
                </Link>

                <Link
                  href="/financial-suite/ePay/agent/commissions/instruments"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span>📊</span>
                    <span>Instrumentos Financeiros</span>
                  </div>
                  <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-mono font-bold">
                    HUB
                  </span>
                </Link>

                <Link
                  href="/financial-suite/ePay/agent/commissions/instruments/fee-policy"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span>📜</span>
                    <span>Política de Taxas (10%)</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">
                    10%
                  </span>
                </Link>
              </nav>
            </div>

            {/* Footer do Menu */}
            <div className="pt-4 border-t border-slate-800 text-center">
              <p className="text-[10px] text-slate-500 font-mono">
                EdenKingDom Ecosystem © 2026
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionMobileMenu;