'use client';

import React from 'react';

export const TrustedDevices: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        Dispositivos de Confiança
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center p-3 bg-slate-950/60 rounded-xl border border-slate-800">
          <p className="text-xs font-semibold text-slate-200">iPhone 15 Pro Max</p>
          <button className="text-xs text-red-400 hover:text-red-300 font-medium">Revogar</button>
        </div>
      </div>
    </div>
  );
};

export default TrustedDevices;