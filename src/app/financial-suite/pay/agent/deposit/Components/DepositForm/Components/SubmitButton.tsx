'use client';

interface SubmitButtonProps {
  disabled: boolean;
  onClick: () => void;
  label?: string;
}

export default function SubmitButton({ disabled, onClick, label = 'Revisão' }: SubmitButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-xl transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
}