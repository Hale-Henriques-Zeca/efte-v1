'use client';

import React from 'react';

interface MenuOption {
  id: string;
  label: string;
  icon: string;
  isDanger?: boolean;
}

const menuOptions: MenuOption[] = [
  { id: 'profile', label: 'Perfil', icon: '👤' },
  { id: 'blockchain-identity', label: 'Blockchain Identity', icon: '🔗' },
  { id: 'database-kyc', label: 'Database KYC', icon: '🪪' },
  { id: 'wallets', label: 'Wallets', icon: '👛' },
  { id: 'security', label: 'Segurança', icon: '🛡️' },
  { id: 'notifications', label: 'Notificações', icon: '🔔' },
  { id: 'preferences', label: 'Preferências', icon: '⚙️' },
  { id: 'api', label: 'API & Webhooks', icon: '🔑' },
  { id: 'support', label: 'Suporte & Chat', icon: '🎧' },
  { id: 'about', label: 'Sobre o ePay', icon: 'ℹ️' },
  { id: 'danger-zone', label: 'Zona de Risco', icon: '⚠️', isDanger: true },
];

interface SettingsSidebarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ activeSection, onSelectSection }) => {
  return (
    <aside className="hidden lg:block w-64 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 backdrop-blur-md shrink-0 h-fit space-y-1">
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-3 pb-2">
        Navegação Principal
      </p>

      {menuOptions.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelectSection(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
              isActive
                ? item.isDanger
                  ? 'bg-red-500/10 text-red-400 border border-red-500/20 shadow-lg shadow-red-500/5'
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/5'
                : item.isDanger
                ? 'text-red-400 hover:bg-red-500/10'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default SettingsSidebar;