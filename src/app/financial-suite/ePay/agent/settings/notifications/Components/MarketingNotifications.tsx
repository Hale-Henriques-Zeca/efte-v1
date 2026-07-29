'use client';

import React from 'react';

interface MarketingNotificationsProps {
  settings: {
    promotions: boolean;
    newsletters: boolean;
  };
  onChange: (key: string, value: boolean) => void;
}

export const MarketingNotifications: React.FC<MarketingNotificationsProps> = ({ settings, onChange }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        Comunicações e Marketing
      </h3>
      <div className="space-y-3">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Promoções e Ofertas</span>
          <input
            type="checkbox"
            checked={settings.promotions}
            onChange={(e) => onChange('promotions', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm text-gray-700 dark:text-gray-300">Boletins Informativos (Newsletters)</span>
          <input
            type="checkbox"
            checked={settings.newsletters}
            onChange={(e) => onChange('newsletters', e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
        </label>
      </div>
    </div>
  );
};

export default MarketingNotifications;