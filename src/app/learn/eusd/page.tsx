export default function EUSDPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">

      {/* Meta / Breadcrumb */}
      <div className="mb-6 text-sm text-gold-500">
        EdenKingDom Financial Tools Empire (EFTE) · 25/01/2026 · Em parceria com EdenKingDom Learn, EdenKingDom Academy e EdenKingDom Social — propósito educativo e inclusão financeira global.
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 leading-tight">
        EdenKingDom USD (E-USD): o que é a nossa stablecoin institucional e por que ela é diferente
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>EdenKingDom USD (E-USD)</strong> é a stablecoin institucional da EdenKingDom, emitida no padrão{" "}
        <strong>BEP-20</strong> na <strong>BNB Smart Chain</strong>, projetada com uma filosofia conservadora:
        <strong> simplicidade, previsibilidade e imutabilidade</strong>.
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">
        Diferente de muitas stablecoins que mantêm privilégios on-chain (como mint/burn após deploy, owner, blacklist ou controle administrativo),
        a E-USD foi concebida para ser <strong>genesis-only</strong>: o supply é criado uma única vez no deploy e não pode ser alterado depois.
        A estabilidade é garantida <strong>fora do token</strong>, através de infraestrutura econômica (tesouraria, liquidez, vaults e operações de mercado).
      </p>

      {/* Section */}
      <h2 className="text-2xl font-semibold mb-4">
        1) Resumo Executivo
      </h2>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-10">
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Tipo:</strong> Stablecoin institucional BEP-20
          </li>
          <li>
            <strong>Rede:</strong> BNB Smart Chain (Mainnet)
          </li>
          <li>
            <strong>Modelo:</strong> Supply fixo (genesis-only)
          </li>
          <li>
            <strong>Sem:</strong> owner · mint/burn pós-deploy · taxas · listas de controle
          </li>
          <li>
            <strong>Objetivo:</strong> token simples, imutável e previsível — alinhado ao padrão conservador exigido por auditorias e integrações institucionais
          </li>
        </ul>
      </div>

      {/* Section */}
      <h2 className="text-2xl font-semibold mb-4">
        2) O problema que a E-USD resolve
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Stablecoins com privilégios on-chain podem introduzir risco sistêmico e incerteza operacional:
        quando existe um <strong>owner</strong> ou funções como <strong>mint/burn</strong> depois do deploy, abre-se espaço para alterações
        inesperadas de oferta, controles administrativos e dependência de governança técnica.
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">
        O mercado institucional tende a preferir tokens com comportamento previsível, código curto e menor superfície de ataque.
        A E-USD nasce exatamente com essa visão: <strong>menos alavancas on-chain = menos risco</strong>.
      </p>

      {/* Section */}
      <h2 className="text-2xl font-semibold mb-4">
        3) A solução: imutabilidade no contrato, estabilidade na infraestrutura
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        A E-USD remove qualquer mecanismo sensível no contrato após o deploy:
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
        <li><strong>Mint apenas no constructor</strong> (genesis)</li>
        <li><strong>Supply total imutável</strong> (não muda)</li>
        <li><strong>Nenhuma função privilegiada pública</strong> (sem admin/backdoors)</li>
        <li><strong>Economia externa</strong> (liquidez, tesouraria e operações de mercado estabilizam o token)</li>
      </ul>

      {/* Highlight Box */}
      <div className="border-l-4 border-blue-600 bg-blue-50 p-6 mb-10">
        <h3 className="font-semibold mb-2 text-gray-900">
          A estabilidade não é “mágica” no token — a infraestrutura estabiliza o token
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Em vez de depender de funções on-chain para ajustar oferta, a E-USD segue um modelo institucional:
          a paridade é sustentada por liquidez profunda (DEX/CEX), tesouraria/vaults e operações de buy/sell externas,
          sob políticas operacionais e controles institucionais.
        </p>
      </div>

      {/* Section */}
      <h2 className="text-2xl font-semibold mb-4">
        4) Arquitetura Técnica
      </h2>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-10">
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Padrão:</strong> BEP-20 (OpenZeppelin v5)</li>
          <li><strong>Chain:</strong> BNB Smart Chain (Chain ID 56)</li>
          <li><strong>Compilador:</strong> Solidity 0.8.24</li>
          <li><strong>Otimização:</strong> enabled, 200 runs</li>
          <li><strong>Imutabilidade:</strong> garantida pela ausência de owner e funções privilegiadas</li>
        </ul>
      </div>

      {/* Section */}
      <h2 className="text-2xl font-semibold mb-4">
        5) Tokenomics (Supply e distribuição)
      </h2>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-10">
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Nome:</strong> EdenKingDom USD</li>
          <li><strong>Símbolo:</strong> E-USD</li>
          <li><strong>Decimals:</strong> 18</li>
          <li><strong>Supply total (fixo):</strong> 1,000,000,000,000,000 E-USD</li>
          <li><strong>Distribuição:</strong> 100% entregue ao Genesis Holder no deploy</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Não existe inflação on-chain. Ajustes de oferta/estabilidade ocorrem via mercado e infraestrutura econômica.
        </p>
      </div>

      {/* Section */}
      <h2 className="text-2xl font-semibold mb-4">
        6) Segurança & Conformidade Operacional
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
        <li><strong>Sem owner</strong> → reduz risco de captura administrativa on-chain</li>
        <li><strong>Sem mint/burn</strong> → supply previsível e invariantes simples</li>
        <li><strong>Código curto</strong> → mais fácil de auditar e verificar</li>
        <li><strong>Sem backdoors</strong> → comportamento imutável do token no tempo</li>
      </ul>

      {/* Section */}
      <h2 className="text-2xl font-semibold mb-4">
        7) Governança
      </h2>

      <p className="text-gray-700 leading-relaxed mb-10">
        A governança ocorre <strong>fora do contrato</strong>, por meio de políticas operacionais e controles institucionais.
        O contrato da E-USD permanece imutável, evitando decisões administrativas on-chain que possam alterar a oferta.
      </p>

      {/* Section */}
      <h2 className="text-2xl font-semibold mb-4">
        8) Roadmap
      </h2>

      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-12">
        <li><strong>Mainnet Deploy:</strong> concluído</li>
        <li><strong>Liquidez inicial:</strong> em preparação/expansão</li>
        <li><strong>Integrações:</strong> DEX/CEX</li>
        <li><strong>Uso estratégico:</strong> pre-sale e compras institucionais de E-Coin usando E-USD</li>
      </ol>

      {/* Solidity Kit */}
      <h2 className="text-2xl font-semibold mb-4">
        Apêndice A — Solidity Interpretation Kit (leitura guiada)
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        A filosofia é simples: <strong>menos código = menos risco</strong>. A E-USD usa ERC-20 padrão OpenZeppelin
        (v5) sem overrides sensíveis. O mint acontece uma única vez no constructor.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mb-8">
        <pre className="text-sm text-gray-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EUSD is ERC20 {
    uint256 public constant GENESIS_SUPPLY = 1_000_000_000_000_000 * 10 ** 18;

    constructor(address genesisHolder)
        ERC20("EdenKingDom USD", "E-USD")
    {
        require(genesisHolder != address(0), "Invalid genesis holder");
        _mint(genesisHolder, GENESIS_SUPPLY);
    }
}`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold mb-3">
        Invariantes críticas
      </h3>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-12">
        <li><strong>totalSupply()</strong> não muda após o deploy</li>
        <li><strong>balanceOf(genesisHolder)</strong> inicia com 100% do supply</li>
        <li>Não há funções públicas de <strong>mint</strong> ou <strong>burn</strong> no ABI</li>
      </ul>

      {/* CTA */}
      <div className="rounded-2xl bg-gray-100 p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Quer usar a E-USD no ecossistema EdenKingDom?
        </h3>
        <p className="text-gray-700 mb-6">
          A E-USD foi criada para servir como base estável em operações Web3, liquidez, tesouraria e integrações do ecossistema.
          Use-a como rota de estabilidade e unidade de conta dentro da EdenKingDom Financial Tools Empire (EFTE).
        </p>

        <a
          href="#"
          className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Ver integrações / Falar com a equipa
        </a>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gold-500 mt-12 text-center">
        Disclaimer: Este conteúdo é informativo e educacional e não constitui aconselhamento financeiro. Operações com criptoativos envolvem risco.
      </p>

      {/* Footer note */}
      <p className="text-xs text-gold-500 mt-3 text-center">
        Contato institucional: EdenKingDom Corporation
      </p>

    </main>
  );
}
