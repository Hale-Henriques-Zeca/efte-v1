import BaseCard from "./BaseCard";

export default function MozambiqueBotCard() {
  return (
    <BaseCard title="Mozambique P2P Bot" color="red">
      Agora vamos ao
      <strong className="text-red-400">
        {" "}E-Coin Mozambique P2P Telegram Bot
      </strong>.
      Um canal dedicado ao mercado moçambicano,
      permitindo compra e venda de cripto com
      métodos de pagamento locais,
      liquidez regional e suporte humano direto.
      <div className="mt-6">
        <a
          href="https://t.me/EKDCoinSaleBot"
          target="_blank"
          className="inline-block px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 font-semibold text-white transition"
        >
          Acessar Bot
        </a>
      </div>
    </BaseCard>
  );
}
