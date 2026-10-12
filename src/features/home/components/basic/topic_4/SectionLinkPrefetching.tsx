import { ExternalLink, Route } from "lucide-react"
import Link from "next/link"

export const SectionLinkPrefetching = () => {
  return (
    <div className="p-5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-4">
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-zinc-100">
          <Route className="size-5 text-indigo-500" />
          <span>Navegación Declarativa con &lt;Link /&gt;</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-zinc-400">
          Los siguientes enlaces usan el componente <code>&lt;Link /&gt;</code>. Next.js precarga silenciosamente en segundo plano el código de las rutas cuando entran al viewport.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <Link
            href={"/conceptos/conceptos-basicos/server-vs-client-components"}
            className="px-3.5 py-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 text-xs font-medium transition-colors flex items-center gap-1.5"
          >
            Ir a Server vs Client <ExternalLink className="size-3.5" />
          </Link>
          <Link
            href={"/"}
            className="px-3.5 py-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 text-xs font-medium transition-colors flex items-center gap-1.5"
          >
            Volver a Lista de Conceptos <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>
  )
}