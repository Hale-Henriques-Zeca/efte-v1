'use client';

import React from 'react';
import Link from 'next/link';

interface CommissionSidebarProps {
  currentPath?: string;
}

export const CommissionSidebar: React.FC<CommissionSidebarProps> = ({ currentPath = 'commissions' }) => {
  const menuItems = [
    { label: 'Visão Geral', icon: '📈', href: '/financial-suite/ePay/agent/commissions', key: 'commissions' },
    { label: 'Instrumentos', icon: '📊', href: '/financial-suite/ePay/agent/commissions/instruments', key: 'instruments' },
    { label: 'Relatórios', icon: '📑', href: '#', key: 'reports' },
    { label: 'Configurações', icon: '⚙️', href: '#', key: 'settings' },
  ];

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800/80 p-4 flex flex-col justify-between h-full">
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black">
            eP
          </div>
          <div>
            <h2 className="text-xs font-black text-slate-100 uppercase tracking-wider">ePay Agent</h2>
            <p className="text-[10px] text-slate-500">Commissions Suite</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = currentPath === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-[10px] text-slate-400 space-y-1">
        <div className="text-amber-400 font-bold">Modo Agente Ativo</div>
        <div>Redistribuição de taxa: 10%</div>
      </div>
    </aside>
  );
};

export default CommissionSidebar;