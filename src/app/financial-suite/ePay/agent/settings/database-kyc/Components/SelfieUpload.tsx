'use client';

import { useState } from 'react';
import { FaCamera, FaFileUpload, FaCheckCircle } from 'react-icons/fa';

export default function SelfieUpload() {
  const [fileName, setFileName] = useState<string | null>("Selfie_Biometria_Agente.jpg");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 w-full flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
            <FaCamera className="text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Selfie com Documento</h2>
            <p className="text-xs text-slate-400">Foto clara segurando o seu documento ao lado do rosto</p>
          </div>
        </div>

        <div className="border-2 border-dashed border-slate-800 hover:border-emerald-500/40 rounded-xl p-4 text-center cursor-pointer transition bg-slate-950/40 relative">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".png,.jpg,.jpeg"
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          />
          <FaCamera className="mx-auto text-emerald-400 text-2xl mb-2" />
          <p className="text-xs text-slate-300 font-medium">Clique ou arraste a fotografia para atualizar</p>
          <p className="text-[10px] text-slate-500 mt-1">Formatos suportados: PNG, JPG (Rosto visível)</p>
        </div>

        {fileName && (
          <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-300 font-mono truncate">{fileName}</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]"><FaCheckCircle /> Validada</span>
          </div>
        )}
      </div>
    </div>
  );
}