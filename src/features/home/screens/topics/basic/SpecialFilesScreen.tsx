import SpecialFileError from "@/features/home/components/basic/topic_2/SpecialFileError";
import SpecialFileLoading from "@/features/home/components/basic/topic_2/SpecialFileLoading";
import SpecialFileNotFound from "@/features/home/components/basic/topic_2/SpecialFileNotFound";
import { CheckCircle2 } from "lucide-react";

export default function SpecialFilesScreen() {
  return (
    <div className="space-y-8">
      {/* Resumen conceptual */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold tracking-tight">
          Archivos Especiales en Next.js
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          El <strong className="text-slate-700">App Router</strong> utiliza archivos reservados con nombres específicos para manejar de forma automática los estados críticos de la interfaz, como cargas (<code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">loading.tsx</code>), errores de ejecución (<code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">error.tsx</code>) y páginas no encontradas (<code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">not-found.tsx</code>).
        </p>
      </section>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="border-l-2 border-primary pl-3">
            <h3 className="text-base font-semibold text-gray-900">
              1. loading.tsx (UI de Carga / Suspense)
            </h3>
            <p className="text-sm text-muted-foreground">
              Interfaz de carga automática (skeleton) que se muestra mediante React Suspense mientras la ruta resuelve sus datos en el servidor.
            </p>
          </div>
          <SpecialFileLoading/>
        </div>

        <div className="space-y-2">
          <div className="border-l-2 border-rose-500 pl-3">
            <h3 className="text-base font-semibold text-gray-900">
              2. error.tsx (Error Boundary)
            </h3>
            <p className="text-sm text-muted-foreground">
              Límite de errores que captura fallos en tiempo de ejecución de esta ruta sin colapsar el resto de la aplicación.
            </p>
          </div>
          <SpecialFileError/>
        </div>

        <div className="space-y-2">
          <div className="border-l-2 border-amber-500 pl-3">
            <h3 className="text-base font-semibold text-gray-900">
              3. not-found.tsx (Ruta / Recurso No Encontrado)
            </h3>
            <p className="text-sm text-muted-foreground">
              Pantalla de estado 404 personalizada que se renderiza al ingresar a una subruta inexistente o al invocar la función <code className="text-primary font-mono text-[11px]">notFound()</code>.
            </p>
          </div>
          <SpecialFileNotFound/>
        </div>
      </div>

      {/* Puntos clave */}
      <section className="rounded-xl bg-muted/50 p-5 space-y-3 border border-border/50">
        <h4 className="text-sm font-bold">Puntos clave a recordar</h4>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>El archivo <code className="text-gray-600">loading.tsx</code> envuelve automáticamente a la página en un límite de Suspense para mostrar streaming instantáneo.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>El archivo <code className="text-gray-600">error.tsx</code> debe ser obligatoriamente un Client Component (<code className="text-gray-600">"use client"</code>) para capturar fallos de ejecución.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}