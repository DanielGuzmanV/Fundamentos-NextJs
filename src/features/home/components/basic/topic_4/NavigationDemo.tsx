"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search, RotateCcw, ArrowLeft } from "lucide-react";

export function NavigationDemo() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("categoria") || "todas");

  // Actualización de Query Params usando useRouter y useSearchParams
  const handleFilter = (term: string, category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    if (category && category !== "todas") {
      params.set("categoria", category);
    } else {
      params.delete("categoria");
    }

    // Actualizamos la URL programáticamente
    router.replace(`${pathname}?${params.toString()}`, {scroll: false});
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("todas");
    router.push(pathname);
  };

  return (
    <div className="p-5 rounded-xl border border-border bg-card/50 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-indigo-900">
          <Search className="size-5 text-indigo-500" />
          <span>Simulador de Filtros con Query Params</span>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-700">
          useSearchParams() + useRouter()
        </span>
      </div>

      {/* Inputs de control */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Búsqueda (q):
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleFilter(e.target.value, selectedCategory);
            }}
            placeholder="Ej: nextjs, router..."
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Categoría:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              handleFilter(searchTerm, e.target.value);
            }}
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="todas">Todas</option>
            <option value="routing">Routing</option>
            <option value="rendering">Rendering</option>
            <option value="state">Estado</option>
          </select>
        </div>
      </div>

      {/* Estado actual de la URL */}
      <div className="p-3 rounded-lg bg-gray-950 text-gray-200 font-mono text-xs space-y-1.5 overflow-x-auto">
        <div className="text-gray-400">// Estado en tiempo real leído desde los Hooks:</div>
        <div><span className="text-emerald-400">usePathname():</span> {pathname}</div>
        <div><span className="text-indigo-400">useSearchParams().toString():</span> {searchParams.toString() || "(Vacío)"}</div>
        <div><span className="text-amber-400">URL Completa:</span> {pathname}?{searchParams.toString()}</div>
      </div>

      {/* Acciones de useRouter */}
      <div className="flex flex-wrap gap-2 pt-2">
        <button
          onClick={() => router.back()}
          className="px-3 py-1.5 text-xs font-medium bg-zinc-800 hover:bg-zinc-600 text-zinc-200 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="size-3.5" /> router.back()
        </button>
        <button
          onClick={handleReset}
          className="px-3 py-1.5 text-xs font-medium bg-rose-950 text-rose-300 hover:bg-rose-600 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="size-3.5" /> Limpiar Parámetros
        </button>
      </div>
    </div>
  );
}