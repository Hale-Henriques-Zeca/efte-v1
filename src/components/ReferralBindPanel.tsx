"use client";

import { useState } from "react";
import { useReferral } from "@/hooks/useReferral";
import Link from "next/link";

export default function ReferralBindPanel() {
  const { bindInviter } = useReferral();
  const [upline, setUpline] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">
        Cole o endereço do seu <strong>Upline</strong> (BSC – BEP20).
        <br />
        <span className="text-yellow-400">
          ⚠️ Só pode ser feito UMA vez.
        </span>
      </p>

      <input
        value={upline}
        onChange={(e) => setUpline(e.target.value)}
        placeholder="0x..."
        className="w-full p-2 bg-black border border-[#00FF9C]/30 rounded text-sm text-white"
      />

      <button
        disabled={!upline || loading || done}
        onClick={async () => {
          try {
            setLoading(true);
            await bindInviter(upline);
            setDone(true);
          } finally {
            setLoading(false);
          }
        }}
        className={`w-full py-2 rounded-xl font-semibold transition ${
          done
            ? "bg-gray-600 text-gray-300"
            : "bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black"
        }`}
      >
        {done ? "Upline vinculado" : loading ? "Salvando..." : "Salvar Upline"}
      </button>
     
     {/* 🔗 BOTÃO DE REDIRECIONAMENTO */}
      <Link
        href="/equipes"
        className="block text-center w-full py-2 rounded-xl border border-gold/20 text-sm text-white hover:bg-white/5 transition"
      >
        Saiba quanto ganhas ao convidar ↘️
      </Link>
    </div>
  );
}
