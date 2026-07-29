'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center p-6 space-y-4 bg-slate-950/80 rounded-2xl border border-slate-900 backdrop-blur-sm">
      {/* Container do Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Glow de fundo */}
        <div className="absolute w-16 h-16 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />

        {/* Anel Externo Giratório (Emerald & Amber Gradient) */}
        <div className="w-12 h-12 rounded-full border-2 border-slate-800 border-t-emerald-500 border-r-amber-400 animate-spin" />

        {/* Core Interno Pulsante */}
        <div className="absolute w-4 h-4 rounded-full bg-emerald-500 animate-ping opacity-75" />
        <div className="absolute w-2 h-2 rounded-full bg-amber-400" />
      </div>

      {/* Texto de Status */}
      <div className="flex flex-col items-center space-y-1 text-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-wider text-slate-200 uppercase">
            Processando
          </span>
          <span className="flex space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
          </span>
        </div>
        
        <p className="text-[11px] text-slate-500 font-mono">
          Carregando dados financeiros e comissões...
        </p>
      </div>

      {/* Badge ePay Agent */}
      <div className="pt-2">
        <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-400">
          ePay Agent System
        </span>
      </div>
    </div>
  );
}