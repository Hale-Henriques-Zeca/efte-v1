"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export function FiltersBar({ setQuery }: any) {
  const [localQuery, setLocalQuery] = useState("");

  const handleSearch = () => {
    setQuery(localQuery.trim());
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">

      {/* INPUT + BOTÃO */}
      <div className="flex items-center overflow-hidden rounded-xl border border-white/10 bg-black/50">
        
        <input
          placeholder="Buscar endereço..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="px-4 py-2 text-sm bg-transparent outline-none w-56 sm:w-72"
        />

        <button
          onClick={handleSearch}
          className="flex items-center gap-2 px-4 py-2
          bg-[#D4AF37] text-black text-sm font-semibold
          hover:brightness-110 transition"
        >
          <FaSearch size={12} />
          Search
        </button>
      </div>

      {/* PERÍODO */}
      <select className="bg-black/50 border border-white/10 px-3 py-2 rounded-lg text-sm">
        <option value="today">Hoje</option>
        <option value="7d">7 dias</option>
        <option value="30d">30 dias</option>
        <option value="all">Tudo</option>
      </select>

      {/* ORDER */}
      <select className="bg-black/50 border border-white/10 px-3 py-2 rounded-lg text-sm">
        <option value="desc">Maior ganho</option>
        <option value="asc">Menor ganho</option>
        <option value="date_desc">Mais recente</option>
        <option value="date_asc">Mais antigo</option>
      </select>
    </div>
  );
}
