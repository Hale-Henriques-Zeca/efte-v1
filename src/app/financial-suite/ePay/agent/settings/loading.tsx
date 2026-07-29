'use client';

import React from 'react';

export default function SettingsLoading() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 space-y-4">
      <div className="w-12 h-12 border-4 border-slate-800 border-t-emerald-500 rounded-full animate-spin" />
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 animate-pulse">
        Carregando Definições ePay...
      </p>
    </div>
  );
}