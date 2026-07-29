'use client';

import { FaIdBadge, FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function NFTIdentity() {
  const nftTokenId = "#EPAY-AGENT-0482";
  const mintStatus = "Mintado no Bloco #39,812,041";

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
              <FaIdBadge className="text-lg" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">NFT ID de Agente</h2>
              <p className="text-xs text-slate-400">SBT (Soulbound Token) de reputação imutável</p>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-[11px] font-bold flex items-center gap-1.5">
            <FaShieldAlt /> On-Chain Valid
          </span>
        </div>

        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">ID do NFT de Agente:</span>
            <span className="text-amber-400 font-mono font-bold">{nftTokenId}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Registo no Contrato:</span>
            <span className="text-slate-300 font-mono text-[11px]">{mintStatus}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => alert('Abrindo explorador de blocos...')}
        className="w-full py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 rounded-xl text-xs font-black transition flex items-center justify-center gap-2 shadow-md"
      >
        <FaExternalLinkAlt /> Ver Contrato no BscScan
      </button>
    </div>
  );
}