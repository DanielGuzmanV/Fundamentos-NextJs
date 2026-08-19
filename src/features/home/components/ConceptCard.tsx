import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { ConceptItem } from "../types/concept.types"
import Link from "next/link";
import { LEVEL_STYLES } from "../utils/level_styles";

interface Props {
  item: ConceptItem;
  moduleSlug: string;
}

export const ConceptCard = ({item, moduleSlug}: Props) => {
  const Icon = item.icon || BookOpen;
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const styles = LEVEL_STYLES[item.level] || LEVEL_STYLES.basic;
  
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
      <div>
        {/* Cabecera: Ícono + Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${styles.iconBg}`}>
            <Icon className="h-5 w-5" />
          </div>

          {hasSubItems && (
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              <Layers className="h-3 w-3" />
              {item.subItems?.length} subtemas
            </span>
          )}
        </div>

        {/* Título y Descripción */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Sub-ítems destacados (si aplica) */}
        {hasSubItems && (
          <div className="mt-4 space-y-1.5 border-t border-border/50 pt-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Incluye:
            </p>
            <ul className="space-y-1">
              {item.subItems?.slice(0, 3).map((sub) => (
                <li
                  key={sub.id}
                  className="flex items-center text-xs text-muted-foreground"
                >
                  <span className="mr-2 h-1 w-1 rounded-full bg-blue-950" />
                  <span className="truncate">{sub.title}</span>
                </li>
              ))}
              {(item.subItems?.length ?? 0) > 3 && (
                <li className="text-xs text-primary font-medium pl-3">
                  +{(item.subItems?.length ?? 0) - 3} más...
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Acción de Entrada */}
      <Link
        href={`/conceptos/${moduleSlug}/${item.slug}`}
        className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between"
      >
        <div className="inline-flex items-center gap-2 text-base font-semibold text-primary group-hover:gap-3 transition-all">
          Ver concepto
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}