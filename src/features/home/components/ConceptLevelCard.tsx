import { ArrowRight, BookOpen } from "lucide-react"
import { ConceptLevel } from "../types/concept.types"
import Link from "next/link";
import { LEVEL_STYLES } from "../utils/level_styles";

interface Props {
  level: ConceptLevel
}

export const ConceptLevelCard = ({level}: Props) => {
  const Icon = level.icon || BookOpen;
  const itemCount = level.items.length;
  const styles = LEVEL_STYLES[level.id] || LEVEL_STYLES.basic;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
      <div>
        {/* Cabecera de la tarjeta: Ícono + Badge de Items */}
        <div className="flex items-center justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${styles.iconBg}`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className={`rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground ${styles.badge}`}>
            {itemCount} {itemCount === 1 ? "concepto" : "conceptos"}
          </span>
        </div>

        {/* Título y Descripción */}
        <div className="mt-5">
          <h3 className="text-xl font-bold tracking-tight text-card-foreground group-hover:text-primary">
            {level.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {level.description}
          </p>
        </div>
      </div>

      {/* Acción / Botón de ingreso */}
      <div className="mt-6 pt-4 border-t border-border/50">
        <Link
          href={`/conceptos/${level.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
        >
          Explorar nivel
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}