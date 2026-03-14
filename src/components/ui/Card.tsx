"use client";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl p-4 border border-gray-700 shadow-lg bg-[var(--panel)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
