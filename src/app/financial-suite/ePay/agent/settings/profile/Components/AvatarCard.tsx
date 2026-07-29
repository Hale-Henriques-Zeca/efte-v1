'use client';

import React from 'react';

export const AvatarCard: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center justify-center text-center relative group">
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full bg-slate-800 border-2 border-emerald-500/50 flex items-center justify-center overflow-hidden shadow-lg shadow-emerald-500/10">
          <span className="text-3xl font-black text-emerald-400">EP</span>
        </div>
        <button className="absolute bottom-0 right-0 p-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full transition-all duration-200 shadow-md active:scale-95">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h0.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
      <h3 className="text-lg font-bold text-slate-100">Agente ePay</h3>
      <p className="text-xs text-emerald-400 font-semibold tracking-wider uppercase mt-0.5">Credenciado Off-Chain</p>
    </div>
  );
};

export default AvatarCard;