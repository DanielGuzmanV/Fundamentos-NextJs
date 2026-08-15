import NotFound from "@/app/not-found";
import { CONCEPT_LEVELS_DATA } from "../data/concepts.data";
import { NotFoundBase } from "@/components/shared/NotFoundBase";
import { PATHS } from "@/lib/constants/paths";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { ConceptCard } from "../components/ConceptCard";



export default function ModuleScreen ({moduloSlug}:{moduloSlug: string}) {
  // Buscamos el nivel correspondiente al slug recibido
  const currentLevel = CONCEPT_LEVELS_DATA.find(
    (level) => level.slug === moduloSlug
  );

  if(!currentLevel) {
    return (
      <NotFoundBase
        title="Modulo no encontrado"
        message="El nivel de conceptos que estás buscando no existe o fue movido."
        linkText="Volver a la vista general"
        linkHref={PATHS.HOME}
      />
    )
  }

  const LevelIcon = currentLevel.icon || BookOpen;

return (
    <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">

      {/* Hero del Módulo */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <LevelIcon className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                Nivel {currentLevel.id}
              </span>
              <span className="text-xs text-muted-foreground">
                {currentLevel.items.length} conceptos disponibles
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              {currentLevel.title}
            </h1>

            <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
              {currentLevel.description}
            </p>
          </div>
        </div>
      </div>

      {/* Grid con los Conceptos del Módulo */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">
            Conceptos del Módulo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLevel.items.map((item) => (
            <ConceptCard
              key={item.id}
              item={item}
              moduleSlug={currentLevel.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
}