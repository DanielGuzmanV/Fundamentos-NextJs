import { Code2, Sparkles } from "lucide-react";
import { CONCEPT_LEVELS_DATA } from "../data/concepts.data";
import { ConceptLevelCard } from "../components/ConceptLevelCard";

export default function HomeScreen () {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Container Principal */}
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        
        {/* Seccion Hero */}
        <section className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-base font-semibold text-primary">
            <Sparkles className="h-5 w-5 shrink-0" />
            <span>Next.js App Router Masterclass</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Fundamentos y Arquitectura en <span className="text-primary">Next.js</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
            Explora la guía de aprendizaje interactiva estructurada por niveles. 
            Desde la estructura de carpetas básica hasta estrategias de caché y arquitectura avanzada.
          </p>
        </section>

        {/* Grid de las 3 Cards de Niveles */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONCEPT_LEVELS_DATA.map((level) => (
            <ConceptLevelCard key={level.id} level={level} />
          ))}
        </section>

        {/* Footer Informativo */}
        <footer className="mt-20 text-center text-xs text-muted-foreground border-t border-border pt-8 flex items-center justify-center gap-2">
          <Code2 className="h-5 w-5 shrink-0" />
          <span>Proyecto de práctica y documentación - Next.js App Router</span>
        </footer>

      </main>
    </div>
  );
}