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

interface SettingsMobileMenuProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export const SettingsMobileMenu: React.FC<SettingsMobileMenuProps> = ({
  activeSection,
  onSelectSection,
}) => {
  return (
    <div className="block lg:hidden w-full mb-6">
      <label className="block text-xs font-medium text-slate-400 mb-1.5">
        Selecione uma Categoria de Configuração:
      </label>
      <select
        value={activeSection}
        onChange={(e) => onSelectSection(e.target.value)}
        className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 text-sm font-semibold focus:outline-none focus:border-emerald-500/50 cursor-pointer backdrop-blur-md"
      >
        {menuOptions.map((item) => (
          <option key={item.id} value={item.id}>
            {item.icon} {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SettingsMobileMenu;