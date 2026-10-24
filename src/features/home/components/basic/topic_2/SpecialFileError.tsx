"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props {
  error?: Error & { digest?: string };
  reset?: () => void;
}

export default function SpecialFileError({error, reset}:Props) {
  const errorMessage = error?.message || "Ocurrió un error inesperado al procesar los datos de la ruta.";
  
  const handleReset = () => {
    if (reset) {
      reset();
    } else {
      alert("Simulación de reintento de carga (reset).");
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 p-6 rounded-xl border border-rose-900/50 bg-rose-950 text-center space-y-4">
      <div className="inline-flex p-3 rounded-full bg-rose-900/50 text-rose-400">
        <AlertTriangle className="size-6" />
      </div>
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-rose-200">
          Algo salió mal en esta sección
        </h2>
        <p className="text-xs text-rose-300/80">
          {errorMessage}
        </p>
      </div>
      <button
        onClick={handleReset}
        className="px-4 py-2 text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
      >
        <RotateCcw className="size-3.5" /> Intentar de nuevo
      </button>
    </div>
  );
}