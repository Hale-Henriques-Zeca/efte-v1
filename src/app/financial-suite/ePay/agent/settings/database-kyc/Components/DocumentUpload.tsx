'use client';

import { useState } from 'react';
import { FaIdCard, FaFileUpload, FaCheckCircle } from 'react-icons/fa';

export default function DocumentUpload() {
  const [fileName, setFileName] = useState<string | null>("BI_Agente_Validado.pdf");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
            <FaIdCard className="text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Documento de Identificação</h2>
            <p className="text-xs text-slate-400">BI, Passaporte ou Carteira de Condução</p>
          </div>
        </div>

        <div className="border-2 border-dashed border-slate-800 hover:border-amber-500/40 rounded-xl p-4 text-center cursor-pointer transition bg-slate-950/40 relative">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.png,.jpg,.jpeg"
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          />
          <FaFileUpload className="mx-auto text-amber-400 text-2xl mb-2" />
          <p className="text-xs text-slate-300 font-medium">Clique ou arraste o ficheiro para atualizar</p>
          <p className="text-[10px] text-slate-500 mt-1">Formatos suportados: PDF, PNG, JPG (Máx 10MB)</p>
        </div>

        {fileName && (
          <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-300 font-mono truncate">{fileName}</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]"><FaCheckCircle /> Anexado</span>
          </div>
        )}
      </div>
    </div>
  );
}