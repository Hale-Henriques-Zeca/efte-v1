'use client';

import React from 'react';

interface SMSNotificationsProps {
  settings: {
    otpAlerts: boolean;
    criticalSystemAlerts: boolean;
  };
  onChange: (key: string, value: boolean) => void;
}

export const SMSNotifications: React.FC<SMSNotificationsProps> = ({ settings, onChange }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        Notificações por SMS
      </h3>
      <div className="space-y-3">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Códigos OTP e 2FA</span>
          <input
            type="checkbox"
            checked={settings.otpAlerts}
            onChange={(e) => onChange('otpAlerts', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Alertas Críticos de Sistema</span>
          <input
            type="checkbox"
            checked={settings.criticalSystemAlerts}
            onChange={(e) => onChange('criticalSystemAlerts', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
      </div>
    </div>
  );
};

export default SMSNotifications;