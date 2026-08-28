import { CheckCircle2 } from "lucide-react";
import { FolderExplorer } from "@/features/home/components/basic/FolderExplorer";
import { ArchivesConventions } from "@/features/home/components/basic/ArchivesConventions";

export default function EstructureFolders() {
  return (
    <div className="space-y-8">
      {/* Resumen conceptual */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold tracking-tight">
          Estructura de Carpetas y Jerarquía en Next.js
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          En el <strong className="text-slate-700">App Router</strong> de Next.js, la estructura del sistema de archivos define directamente el sistema de rutas. Las carpetas determinan los segmentos de la URL y los archivos especiales (<code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">page.tsx</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">layout.tsx</code>) controlan la UI expuesta.
        </p>
      </section>

      {/* Explorador de carpetas interactivo */}
      <FolderExplorer/>

      {/* Convenciones de Archivos Especiales */}
      <ArchivesConventions/>

      {/* Puntos clave */}
      <section className="rounded-xl bg-muted/50 p-5 space-y-3 border border-border/50">
        <h4 className="text-sm font-bold">Puntos clave a recordar</h4>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Las carpetas entre paréntesis como <code className="text-gray-600">(grupo)</code> permiten organizar archivos sin añadir un segmento extra a la URL.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Cualquier carpeta dentro de <code className="text-gray-600">app/</code> no será una ruta pública hasta que contenga un archivo <code className="text-foreground">page.tsx</code>.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}