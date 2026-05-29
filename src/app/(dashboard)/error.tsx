"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { Frown } from 'lucide-react'; // Asegúrate de tener lucide-react instalado
import { PATHS } from '@/lib/constants/paths'; // Asumiendo que PATHS está definido

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Loguea el error en la consola para depuración
    console.error("Error en (dashboard):", error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-yellow-50 text-yellow-800">
      <Frown className="text-yellow-600" size={64} />
      <h2 className="text-3xl font-bold">¡Error en el Dashboard!</h2>
      <p className="text-lg">Ha ocurrido un problema al cargar esta sección del dashboard.</p>
      <button
        className="mt-6 inline-flex items-center rounded-md bg-yellow-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        onClick={() => reset()}
      >
        Intentar de nuevo
      </button>
      <Link
        href={PATHS.HOME} // Asume que la raíz es la página principal del dashboard
        className="mt-4 text-yellow-700 hover:underline"
      >
        Volver al inicio del Dashboard
      </Link>
      {process.env.NODE_ENV === 'development' && (
        <pre className="mt-4 p-4 bg-yellow-100 rounded-md text-yellow-900 overflow-auto max-w-lg">
          {error.message}
        </pre>
      )}
    </div>
  );
}