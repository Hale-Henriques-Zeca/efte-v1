'use client';

import React from 'react';

interface PushNotificationsProps {
  settings: {
    instantPayouts: boolean;
    securityAlerts: boolean;
  };
  onChange: (key: string, value: boolean) => void;
}

export const PushNotifications: React.FC<PushNotificationsProps> = ({ settings, onChange }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        Notificações Push
      </h3>
      <div className="space-y-3">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Pagamentos Instantâneos</span>
          <input
            type="checkbox"
            checked={settings.instantPayouts}
            onChange={(e) => onChange('instantPayouts', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Avisos de Segurança</span>
          <input
            type="checkbox"
            checked={settings.securityAlerts}
            onChange={(e) => onChange('securityAlerts', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
      </div>
    </div>
  );
};

export default PushNotifications;