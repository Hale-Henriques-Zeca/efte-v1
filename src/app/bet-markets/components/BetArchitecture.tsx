export default function BetArchitecture() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-10">
      <h3 className="text-3xl font-bold text-purple-400 mb-6">
        Arquitetura do EFTE Bet Engine
      </h3>

      <ul className="text-gray-300 text-sm space-y-3">
        <li>• Bet Engine: cria, valida e encerra mercados</li>
        <li>• Oracle Layer: preço real com snapshot temporal</li>
        <li>• Liquidity Pools: ganhos vêm do pool, não da casa</li>
        <li>• House Edge: 1–3% → Treasury + Insurance</li>
        <li>• Settlement Engine: resolução automática e auditável</li>
      </ul>
    </div>
  );
}
