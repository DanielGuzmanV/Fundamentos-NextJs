"use client";

import { useEffect } from 'react';
import { Frown } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    console.log("Aqui esta el error");
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-red-50 text-red-800">
      <Frown className="text-red-600" size={64} />
      <h2 className="text-3xl font-bold">¡Algo salió mal!</h2>
      <p className="text-lg">Lo sentimos, hubo un error inesperado.</p>
      <button
        className="mt-6 inline-flex items-center rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={
          // Intenta recuperar el segmento volviendo a renderizar
          () => reset()
        }
      >
        Intentar de nuevo
      </button>
      {/* Mostramos los detalles del error en desarrollo */}
      {process.env.NODE_ENV === 'development' && (
        <pre className="mt-4 p-4 bg-red-100 rounded-md text-red-900 overflow-auto max-w-lg">
          {error.message}
        </pre>
      )}
    </div>
  );
}
