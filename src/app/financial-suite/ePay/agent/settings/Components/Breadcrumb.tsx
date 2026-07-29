'use client';

import React from 'react';

interface BreadcrumbProps {
  activeSection: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ activeSection }) => {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
      <span className="hover:text-slate-200 cursor-pointer transition">Financial Suite</span>
      <span>/</span>
      <span className="hover:text-slate-200 cursor-pointer transition">ePay</span>
      <span>/</span>
      <span className="hover:text-slate-200 cursor-pointer transition">Agent</span>
      <span>/</span>
      <span className="text-slate-200 font-semibold">Definições</span>
      <span>/</span>
      <span className="text-emerald-400 font-bold capitalize">{activeSection.replace('-', ' ')}</span>
    </div>
  );
};

export default Breadcrumb;