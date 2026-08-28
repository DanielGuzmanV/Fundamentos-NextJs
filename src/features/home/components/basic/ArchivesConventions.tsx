import { ChevronRight, FileCode2 } from "lucide-react"
import { SECTION_FILES } from "../../constants/sectionFiles"
import { NotFoundComponent } from "@/components/shared/NotFoundComponent"

export const ArchivesConventions = () => {
  return (
    <section className="rounded-xl border border-border bg-card p-5 space-y-4">
      {SECTION_FILES.children && SECTION_FILES.children.length > 0 ? (
        // Seccion 1:
        <>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {SECTION_FILES.name}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {SECTION_FILES.children.map((value) => (
              <div key={value.title} className="p-3 rounded-lg border border-border/60 bg-muted/20 space-y-1">
                <div className="flex items-center gap-2 text-primary font-mono font-bold">
                  <ChevronRight className="h-3.5 w-3.5" /> {value.title}
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </>
      ): (
        // Seccion 2:
        <NotFoundComponent/>
      )}
    </section>
  )
}