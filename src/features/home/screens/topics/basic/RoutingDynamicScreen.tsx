import { InteractivePlayground } from "@/features/home/components/basic/topic_2/InteractivePlayground";
import { CheckCircle2, FileCode, Folder } from "lucide-react";

export default function RoutingDynamicScreen() {

  return (
    <div className="space-y-8">
      {/* Resumen conceptual */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold tracking-tight">
          ¿Qué es el Enrutamiento Dinámico?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          En Next.js App Router, cuando no conoces el nombre exacto de un segmento de ruta por adelantado (por ejemplo, el ID de un producto o el slug de un post), creas una carpeta cuyo nombre va entre corchetes: <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">[slug]</code> o <code className="bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-xs">[id]</code>.
        </p>
      </section>

      {/* Estructura de Archivos Visual */}
      <section className="rounded-xl border border-border bg-card p-5 space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Estructura en App Router
        </h3>
        <div className="rounded-lg bg-mono/5 p-4 font-mono text-xs space-y-2 border border-border/50">
          <div className="flex items-center gap-2">
            <Folder className="h-4 w-4 text-amber-500 fill-amber-500/20" />
            <span>app/</span>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <Folder className="h-4 w-4 text-amber-500 fill-amber-500/20" />
            <span>productos/</span>
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold pl-8">
            <Folder className="h-4 w-4 text-primary fill-primary/20" />
            <span>[slug]/</span>
            <span className="text-[10px] bg-primary/10 px-2 py-0.5 rounded-full font-sans">Segmento dinámico</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground pl-12">
            <FileCode className="h-4 w-4 text-blue-500" />
            <span>page.tsx</span>
          </div>
        </div>
      </section>

      {/* Playground Interactivo */}
      <InteractivePlayground/>

      {/* Puntos Clave */}
      <section className="rounded-xl bg-muted/50 p-5 space-y-3 border border-border/50">
        <h4 className="text-sm font-bold">Puntos clave a recordar</h4>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Server Components:</strong> Reciben <code className="text-slate-900">(params)</code> directamente como una prop de la función.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Client Components:</strong> Puedes usar el hook <code className="text-slate-900">useParams()</code> de <code className="text-foreground">next/navigation</code>.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Catch-all routes:</strong> Si usas <code className="text-slate-900">[...slug]</code> captura múltiples segmentos de URL como un arreglo.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}