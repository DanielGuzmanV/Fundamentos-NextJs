import { Database, FileCode, Layers3, Lock, Network, RefreshCw, Server, ShieldCheck, Zap } from "lucide-react";
import { ConceptLevel } from "../../types/concept.types";

export const INTERMEDIATE_CONCEPTS: ConceptLevel = {
  id: "intermediate",
  slug: "conceptos-intermedios",
  title: "Conceptos Intermedios",
  icon: Database,
  description: "Manejo de datos, estrategias de renderizado, mutaciones con Server Actions y seguridad.",
  items: [
    {
      id: "data-fetching",
      slug: "data-fetching-moderno",
      title: "1. Data Fetching Moderno",
      description: "Peticiones directas en Server Components usando async/await y la caché extendida de fetch.",
      icon: Database,
      level: "intermediate",
      subItems: [
        {
          id: "server-fetch",
          title: "Async/Await en Server Components",
          description: "Consultar APIs o bases de datos directamente desde el componente de servidor sin useEffect ni estados de carga manuales."
        },
        {
          id: "extended-fetch",
          title: "Caché extendida de Next.js",
          description: "Manejo nativo de opciones de retención y memoización de solicitudes fetch repetidas en el mismo renderizado."
        }
      ]
    },
    {
      id: "rendering-strategies",
      slug: "estrategias-de-renderizado",
      title: "2. Estrategias de Renderizado",
      description: "Static Rendering (SSG), Dynamic Rendering (SSR) y revalidación de contenido.",
      icon: Zap,
      level: "intermediate",
      subItems: [
        {
          id: "static-rendering",
          title: "Static Rendering (SSG)",
          description: "Las rutas se generan en tiempo de compilación (build time). Ideal para contenido que casi nunca cambia."
        },
        {
          id: "dynamic-rendering",
          title: "Dynamic Rendering (SSR)",
          description: "Las rutas se generan en tiempo de solicitud (request time) cuando se usan cookies, headers o searchParams dinámicos."
        },
        {
          id: "isr-concept",
          title: "Revalidación Temporal (Evolución de ISR)",
          description: "Actualización periódica de páginas estáticas en segundo plano tras un tiempo determinado sin volver a desplegar la app."
        }
      ]
    },
    {
      id: "server-actions",
      slug: "server-actions",
      title: "3. Server Actions & Mutaciones",
      description: "El estándar nativo para manejar formularios y mutaciones de datos (POST, PUT, DELETE) sin crear endpoints manualmente.",
      icon: Server,
      level: "intermediate"
    },
    {
      id: "route-handlers",
      slug: "route-handlers",
      title: "4. Rutas de API (Route Handlers)",
      description: "Creación de endpoints HTTP (GET, POST, PUT, DELETE) en archivos route.ts para consumo de clientes externos o webhooks.",
      icon: Network,
      level: "intermediate"
    },
    {
      id: "script-optimization",
      slug: "optimizacion-de-scripts",
      title: "5. Optimización con <Script />",
      description: "Carga inteligente de scripts externos de terceros (analytics, chat widgets, pixeles) sin bloquear el renderizado principal.",
      icon: FileCode,
      level: "intermediate"
    },
    {
      id: "cache-revalidation",
      slug: "revalidacion-de-cache",
      title: "6. Revalidación de Caché (revalidatePath y revalidateTag)",
      description: "Limpieza manual o bajo demanda de la caché de Next.js al mutar datos para actualizar la interfaz al instante sin refrescar.",
      icon: RefreshCw,
      level: "intermediate"
    },
    {
      id: "middleware",
      slug: "middlewares",
      title: "7. Middlewares (middleware.ts)",
      description: "Ejecución de código en el servidor antes de completar una petición para protección de rutas, manejo de cookies y redirecciones.",
      icon: ShieldCheck,
      level: "intermediate"
    },
    {
      id: "package-protection",
      slug: "proteccion-server-only",
      title: "8. Proteccion de Paquetes (server-only)",
      description: "Aislamiento estricto del código de servidor y secrets/DB para prevenir filtraciones accidentales al bundle del cliente.",
      icon: Lock,
      level: "intermediate"
    }
  ]
}