'use client';

import React from 'react';
import Link from 'next/link';

export const Breadcrumb: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium py-1">
      <Link href="/financial-suite" className="hover:text-emerald-400 transition-colors">
        Suite
      </Link>
      <span className="text-slate-600">/</span>
      <Link href="/financial-suite/ePay" className="hover:text-emerald-400 transition-colors">
        ePay
      </Link>
      <span className="text-slate-600">/</span>
      <Link href="/financial-suite/ePay/agent" className="hover:text-emerald-400 transition-colors">
        Agent
      </Link>
      <span className="text-slate-600">/</span>
      <span className="text-slate-100 font-bold">Commissions</span>
    </nav>
  );
};

export default Breadcrumb;