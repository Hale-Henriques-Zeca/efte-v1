"use client";

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold";
  onClick?: () => void;
  className?: string;
}) {
  const styles = {
    primary: "bg-ebc-green text-white",
    secondary: "bg-ebc-blue text-white",
    gold: "bg-ebc-gold text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition hover:opacity-90 shadow-md ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
