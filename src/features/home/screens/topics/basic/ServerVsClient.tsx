import { SERVER_VS_CLIENT_DATA } from "@/features/home/constants/serverClient";
import { ServerVsClientCards } from "@/features/home/components/basic/topic_3/ServerVsClientCards";
import { Code2 } from "lucide-react";

export default function ServerVsClient () {
  return (
    <div className="max-w-4xl mx-auto p-3 space-y-8">
      {/* Encabezado */}
      <header className="space-y-2">
        <p className="text-slate-600 text-lg font-bold">
          {SERVER_VS_CLIENT_DATA.description}
        </p>
      </header>

      {/* Demostración Interactiva */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Code2 className="size-8 text-indigo-500" />
          Demostración en Tiempo Real
        </h2>
        <ServerVsClientCards/>
      </section>

      {/* Tabla Comparativa */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cuadro Comparativo</h2>
        <div className="overflow-x-auto border border-zinc-800 rounded-xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-800/60 text-slate-300 border-b border-zinc-800">
              <tr>
                <th className="p-3.5 font-semibold">Característica</th>
                <th className="p-3.5 font-semibold text-emerald-400">Server Component</th>
                <th className="p-3.5 font-semibold text-indigo-400">Client Component</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-zinc-800">
              {SERVER_VS_CLIENT_DATA.comparisonTable.map((row) => (
                <tr key={row.feature} className="hover:bg-zinc-400/50 transition-colors">
                  <td className="p-3.5 font-medium">{row.feature}</td>
                  <td className="p-3.5 text-slate-400">{row.server}</td>
                  <td className="p-3.5 text-slate-400">{row.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Regla de Oro / Buenas Prácticas */}
      <section className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-900/50 space-y-3">
        <h3 className="font-semibold text-indigo-900">La Regla de Oro para Arquitectura</h3>
        <p className="text-sm text-indigo-950 leading-relaxed">
          Mantén la directiva <code className="bg-indigo-800/50 px-1.5 py-0.5 rounded text-white font-mono text-xs">&quot;use client&quot;</code> lo más abajo posible en el árbol de componentes (<strong>hojas del árbol</strong>). Renderiza las estructuras generales, layouts y fetches de datos en el servidor, e importa los Client Components interactivos solo donde los necesites.
        </p>
      </section>
    </div>
  );
}