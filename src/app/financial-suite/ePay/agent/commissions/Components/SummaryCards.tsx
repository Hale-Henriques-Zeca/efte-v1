'use client';

import React from 'react';
import DailyCommissionCard from './DailyCommissionCard';
import WeeklyCommissionCard from './WeeklyCommissionCard';
import MonthlyCommissionCard from './MonthlyCommissionCard';
import LifetimeCommissionCard from './LifetimeCommissionCard';
import CurrencyTotals from './CurrencyTotals';
import USDTotals from './USDTotals';
import LocalCurrencyTotals from './LocalCurrencyTotals';

export const SummaryCards: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* 4 Cards Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DailyCommissionCard />
        <WeeklyCommissionCard />
        <MonthlyCommissionCard />
        <LifetimeCommissionCard />
      </div>

      {/* Totais por Ativo e Totais USD/Moeda Local */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <CurrencyTotals />
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <USDTotals />
          <LocalCurrencyTotals />
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;