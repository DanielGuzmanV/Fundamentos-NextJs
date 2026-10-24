export default function MultiFontExample() {
  return (
    <div className="p-6 rounded-xl border border-border bg-card space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-bold tracking-tight text-gray-800">
          Demostración de Múltiples Fuentes en la Misma Interfaz
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Este párrafo no utiliza ninguna tipografía principal sin serifa. Es limpia, altamente legible y está optimizada para textos largos e interfaces de usuario generales.
        </p>
      </div>

      <div className="space-y-4">

        {/* Estilo 1: Fuente Sans (Interfaz general) */}
        <div className="space-y-1 p-3 rounded-lg bg-muted/30">
          <span className="text-lg font-sans text-primary font-bold uppercase">1. font-sans (Geist / Inter)</span>
          <blockquote className="border-l-2 border-primary pl-3">
            <h3 className="font-sans text-base font-semibold">
              Título de sección limpio y legible
            </h3>
            <p className="font-sans text-xs text-muted-foreground">
              Utilizada para la mayor parte del texto de interfaz, párrafos descriptivos y elementos de navegación habituales.
            </p>
          </blockquote>
        </div>

        {/* Estilo 2: Fuente Mono (Código / Datos técnicos) */}
        <div className="space-y-1 p-3 rounded-lg bg-muted/30">
          <span className="text-lg font-mono text-primary font-bold uppercase">2. font-mono (Geist Mono / Fira Code)</span>
          <pre className="p-3 rounded-md bg-black font-mono text-xs text-foreground overflow-x-auto border border-border/50">
            <code>{`// Bloque técnico con espaciado uniforme
  const config = {
    theme: "dark",
    typography: "multi-font"
  };`}</code>
          </pre>
        </div>

        {/* Estilo 3: Fuente Serif (Nueva tipografía elegante o editorial) */}
        <div className="space-y-1 p-3 rounded-lg bg-muted/30">
          <span className="text-lg font-serif text-primary font-bold uppercase">3. font-serif (Playfair Display)</span>
          <blockquote className="font-serif italic text-base border-l-2 border-primary pl-3">
            &quot;El diseño tipográfico es el arte y técnica de organizar los tipos para hacer que la lengua escrita sea legible, legible y visualmente atractiva.&quot;
          </blockquote>
        </div>
      </div>

    </div>
  );
}