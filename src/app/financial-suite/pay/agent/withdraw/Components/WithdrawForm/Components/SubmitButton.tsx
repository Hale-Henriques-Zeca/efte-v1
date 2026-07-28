'use client';

interface SubmitButtonProps {
  disabled: boolean;
  onClick: () => void;
  label?: string;
}

export default function SubmitButton({ disabled, onClick, label = 'Revisar Levantamento' }: SubmitButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="w-full py-4 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold rounded-xl transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
}