import BaseCard from "./BaseCard";
import Link from "next/link";

export default function DonationPoolCard() {
  return (
    <BaseCard title="Donation Pool" color="Red">
      <p className="mb-6 text-sm leading-relaxed text-gray-300">
        Pool institucional de doações estruturadas para apoio
        humanitário, resposta a crises e iniciativas sociais
        auditáveis, financiado por contribuições voluntárias
        e percentagens operacionais da EFTE.
      </p>

      {/* 🔗 Botão de acesso */}
      <Link
        href="http://esocial.edenkingdom.org"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl
                   bg-red-600 px-5 py-2.5 text-sm font-semibold text-white
                   transition hover:bg-red-700
                   shadow-[0_0_20px_rgba(239,68,68,0.45)]"
      >
        Acessar E-Social
      </Link>
    </BaseCard>
  );
}
