'use client';

import React from 'react';

interface SearchSettingsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchSettings: React.FC<SearchSettingsProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Pesquisar configurações (ex: KYC, 2FA, Chave API, Carteiras)..."
        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 pl-10 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition duration-150 backdrop-blur-md"
      />
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs">
        🔍
      </div>
    </div>
  );
};

export default SearchSettings;