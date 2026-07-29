'use client';

import React from 'react';

interface EmailNotificationsProps {
  settings: {
    transactionAlerts: boolean;
    loginAlerts: boolean;
    weeklyReports: boolean;
  };
  onChange: (key: string, value: boolean) => void;
}

export const EmailNotifications: React.FC<EmailNotificationsProps> = ({ settings, onChange }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        Notificações por E-mail
      </h3>
      <div className="space-y-3">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Alertas de Transação</span>
          <input
            type="checkbox"
            checked={settings.transactionAlerts}
            onChange={(e) => onChange('transactionAlerts', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Alertas de Novo Login</span>
          <input
            type="checkbox"
            checked={settings.loginAlerts}
            onChange={(e) => onChange('loginAlerts', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Relatórios Semanais</span>
          <input
            type="checkbox"
            checked={settings.weeklyReports}
            onChange={(e) => onChange('weeklyReports', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
      </div>
    </div>
  );
};

export default EmailNotifications;