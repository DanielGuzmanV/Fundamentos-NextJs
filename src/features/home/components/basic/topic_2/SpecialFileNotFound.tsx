import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function SpecialFileNotFound() {
  return (
    <div className="max-w-md mx-auto my-12 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center space-y-4">
      <div className="inline-flex p-3 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
        <FileQuestion className="size-6" />
      </div>
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-gray-900 dark:text-zinc-100">
          404 - Recurso no encontrado
        </h2>
        <p className="text-xs text-gray-600 dark:text-zinc-400">
          El elemento o la ruta que estás buscando no existe o fue removida.
        </p>
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors inline-flex items-center gap-1.5"
      >
        <ArrowLeft className="size-3.5" /> Volver a Conceptos
      </Link>
    </div>
  );
}