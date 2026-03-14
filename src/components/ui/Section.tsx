"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "soft" | "gold" | "green" | "blue";
}

export default function Section({
  children,
  className,
  variant = "soft",
}: SectionProps) {
  const variants = {
    /* Branco neutro */
    default: "bg-white",

    /* Cinza institucional suave */
    soft: `
      relative
      bg-gradient-to-b
      from-[#f1f5f9]
      via-[#f8fafc]
      to-white
    `,

    /* Dourado institucional (Premium / CTA / Destaque) */
    gold: `
      relative overflow-hidden
      bg-gradient-to-b
      from-[#fff6da]
      via-[#fffaf0]
      to-white
    `,

    /* Verde EBC (Fiat / Segurança / Confiança) */
    green: `
      relative overflow-hidden
      bg-gradient-to-b
      from-[#ecfdf5]
      via-white
      to-[#f0fdf4]
    `,

    /* Azul EBC (Trading / Tecnologia / Profissional) */
    blue: `
      relative overflow-hidden
      bg-gradient-to-b
      from-[#eff6ff]
      via-white
      to-[#f8fafc]
    `,
  };

  return (
    <section className={cn("w-full py-24", variants[variant], className)}>
      {/* Glow dourado */}
      {variant === "gold" && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.25),transparent_65%)]" />
        </div>
      )}

      {/* Glow verde */}
      {variant === "green" && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,169,113,0.20),transparent_65%)]" />
        </div>
      )}

      {/* Glow azul */}
      {variant === "blue" && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(28,45,90,0.20),transparent_65%)]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
