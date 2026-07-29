'use client';

import React from 'react';
import Link from 'next/link';
import CommissionMobileMenu from './CommissionMobileMenu';

export const MobileBar: React.FC = () => {
  return (
    <div className="lg:hidden flex items-center justify-between bg-slate-950 border-b border-slate-800 px-4 py-3 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        {/* Menu Hambúrguer com gatilho ☰ */}
        <CommissionMobileMenu />
        <span className="text-xs font-black text-slate-100 uppercase tracking-wider">
          Comissões
        </span>
      </div>

      {/* Botão Instrumentos no Topo da Visão Mobile */}
      <Link
        href="/financial-suite/ePay/agent/commissions/instruments"
        className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1 hover:bg-emerald-500/20"
      >
        <span>📊</span>
        <span>Instrumentos</span>
      </Link>
    </div>
  );
};

export default MobileBar;