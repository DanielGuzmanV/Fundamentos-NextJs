import MultiFontExample from "@/features/home/components/basic/topic_3/MultiFontExample";
import { CheckCircle2 } from "lucide-react";

export default function FontsAndStylesScreen() {
  return (
    <div className="space-y-8">
      {/* Resumen conceptual */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold tracking-tight">
          Fuentes Nativas (next/font) y Estilos Globales
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Next.js permite cargar tipografías de Google de forma nativa en el servidor durante la compilación, eliminando peticiones externas al navegador y previniendo el <strong className="text-slate-700">CLS (Cumulative Layout Shift)</strong>.
        </p>
      </section>

      {/* Ejemplo 1: Configuración de fuentes */}
      <div className="space-y-3">
        <div className="border-l-2 border-primary pl-3">
          <h3 className="text-base md:text-xl font-semibold text-blue-950">
            1. Configuración en el RootLayout (`app/layout.tsx`)
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Importación y mapeo de variables CSS para fuentes optimizadas con <code className="text-primary font-mono text-[11px]">next/font/google</code>.
          </p>
        </div>
        <pre className="p-4 rounded-xl bg-black border border-green-400 font-mono text-xs overflow-x-auto text-emerald-400">
          <code>{`import { Geist, Geist_Mono, Playfair_Display} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={\`\${geistSans.variable} \${geistMono.variable}\ \${playfair.variable}\`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}`}</code>
        </pre>

        {/* Ejemplo de multiples estilos */}
        <MultiFontExample/>
      </div>

      {/* Ejemplo 2: Estilos Globales */}
      <div className="space-y-3">
        <div className="border-l-2 border-primary pl-3">
          <h3 className="text-base md:text-xl font-semibold text-blue-950">
            2. Estilos Globales y Tailwind (`app/globals.css`)
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Inyección de directivas base de Tailwind CSS y configuración de variables globales.
          </p>
        </div>
        <pre className="p-4 rounded-xl bg-black border border-green-400 font-mono text-xs overflow-x-auto text-emerald-400">
          <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

body {
  color: var(--foreground);
  background: var(--background);
}`}</code>
        </pre>
      </div>

      {/* Puntos clave */}
      <section className="rounded-xl bg-muted/50 p-5 space-y-3 border border-border/50">
        <h4 className="text-sm font-bold">Puntos clave a recordar</h4>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>Las fuentes nativas se autoalojan en el servidor, protegiendo la privacidad y mejorando el rendimiento de carga inicial.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>El archivo <code className="text-indigo-800 font-mono">globals.css</code> debe importarse obligatoriamente en el componente raíz (<code className="text-indigo-800 font-mono">layout.tsx</code>).</span>
          </li>
        </ul>
      </section>
    </div>
  );
}