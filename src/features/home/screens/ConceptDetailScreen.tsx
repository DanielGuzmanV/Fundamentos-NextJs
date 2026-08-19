import { NotFoundBase } from "@/components/shared/NotFoundBase";
import { CONCEPT_LEVELS_DATA } from "../data/concepts.data";
import { TOPIC_COMPONENTS_MAPPER } from "../topicMapper";
import { BookOpen, FileCode2 } from "lucide-react";

interface ConceptDetailScreenProps {
  moduloSlug: string;
  conceptoSlug: string;
}

export default function ConceptDetailScreen({
  moduloSlug, 
  conceptoSlug
}: ConceptDetailScreenProps){

  // Buscamos el nivel/modulo
  const currentLevel = CONCEPT_LEVELS_DATA.find((level) => level.slug === moduloSlug);
  // Buscamos el concepto especifico dentro de los items del modulo
  const currentConcept = currentLevel?.items.find((item) => item.slug === conceptoSlug);

  // Buscamos el componente visual dinamico registrado en el mapper
  const DynamicTopicComponent = TOPIC_COMPONENTS_MAPPER[conceptoSlug];

  if(!currentLevel || !currentConcept) {
    return (
      <NotFoundBase
        title="Concepto no encontrado"
        message="El tema que estas intentando ver no existe o la URL es incorrecta"
        linkText="Volver al modulo"
        linkHref={`/conceptos/${moduloSlug}`}
      />
    )
  }

  const Icon = currentConcept.icon || BookOpen;

  return (
    <div className="space-y-8 p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header Padrote del Concepto */}
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary uppercase">
              {currentLevel.title}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1">
              {currentConcept.title}
            </h1>
          </div>
        </div>

        <p className="text-sm md:text-base text-muted-foreground max-w-4xl">
          {currentConcept.description}
        </p>
      </div>

      {/* Inyección del Componente Dinámico según el Topic */}
      <div className="rounded-2xl border border-border bg-card/50 p-6 shadow-sm">
        {DynamicTopicComponent ? (
          <DynamicTopicComponent />
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <FileCode2 className="h-12 w-12 text-muted-foreground/50 mb-3" />
            <h3 className="text-lg font-semibold">Pantalla en construcción</h3>
            <p className="text-sm text-muted-foreground max-w-sm mt-1">
              El componente interactivo para <code className="text-primary">{conceptoSlug}</code> aún no ha sido registrado en el mapper.
            </p>
          </div>
        )}
      </div>
    </div>
  );

}