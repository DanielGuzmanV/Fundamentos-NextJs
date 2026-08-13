import { Component, Database, KeyRound, Layers, LayoutGrid, Rocket, SlidersHorizontal } from "lucide-react";
import { ConceptLevel } from "../../types/concept.types";

export const ADVANCED_CONCEPTS: ConceptLevel = {
  id: "advanced",
  slug: "conceptos-avanzados",
  title: "Conceptos Avanzados",
  icon: Layers,
  description: "Arquitectura de alto rendimiento, patrones de composición, caché profunda, autenticación y despliegue.",
  items: [
    {
      id: "deep-caching",
      slug: "caching-profundo",
      title: "1. Caching Profundo en Next.js",
      description: "Comprensión integral de los 4 niveles de caché interna y estrategias de invalidación granular.",
      icon: Layers,
      level: "advanced",
      subItems: [
        {
          id: "request-memoization",
          title: "Request Memoization",
          description: "Deduplicación automática de solicitudes fetch idénticas durante un mismo ciclo de renderizado en el servidor."
        },
        {
          id: "data-cache",
          title: "Data Cache",
          description: "Persistencia de datos entre peticiones HTTP de diferentes usuarios e instancias del servidor."
        },
        {
          id: "full-route-cache",
          title: "Full Route Cache",
          description: "Almacenamiento de HTML y código RSC en el servidor durante la fase de compilación o revalidación."
        },
        {
          id: "router-cache",
          title: "Router Cache (In-Memory Client Side)",
          description: "Caché en el navegador durante la sesión del usuario para navegación instantánea con el componente Link."
        }
      ]
    },
    {
      id: "composition-patterns",
      slug: "patrones-de-composicion",
      title: "2. Patrones de Composición",
      description: "Intercalación arquitectónicamente correcta de Client Components dentro de Server Components usando la prop children.",
      icon: Component,
      level: "advanced"
    },
    {
      id: "authentication",
      slug: "autenticacion",
      title: "3. Autenticación y Gestión de Sesiones",
      description: "Implementación de flujos de seguridad, JWT, OAuth y cookies seguras mediante Auth.js (NextAuth) o Clerk.",
      icon: KeyRound,
      level: "advanced"
    },
    {
      id: "streaming-suspense",
      slug: "streaming-y-suspense",
      title: "4. Streaming y React Suspense",
      description: "Fragmentación progresiva del renderizado de la interfaz para enviar pedazos de HTML en tiempo real conforme estén listos.",
      icon: SlidersHorizontal,
      level: "advanced"
    },
    {
      id: "advanced-routing",
      slug: "intercepting-y-parallel-routes",
      title: "5. Intercepting y Parallel Routes",
      description: "Construcción de modales con URL propia y dashboards complejos multitarea en un mismo layout.",
      icon: LayoutGrid,
      level: "advanced",
      subItems: [
        {
          id: "parallel-routes",
          title: "Parallel Routes (@folder)",
          description: "Renderizado simultáneo o condicional de múltiples páginas autónomas dentro de un mismo layout."
        },
        {
          id: "intercepting-routes",
          title: "Intercepting Routes ((..))",
          description: "Carga de rutas secundarias dentro de la vista actual (ej. modales estilo Instagram) manteniendo la URL compartible."
        }
      ]
    },
    {
      id: "databases-orms",
      slug: "base-de-datos-y-orms",
      title: "6. Base de Datos y ORMs",
      description: "Conexión directa, tipado estricto y connection pooling usando Prisma o Drizzle ORM dentro de Server Components.",
      icon: Database,
      level: "advanced"
    },
    {
      id: "deployment-edge",
      slug: "deployment-y-edge-runtime",
      title: "7. Deployment y Edge Runtime",
      description: "Estrategias de despliegue en Vercel, variables de entorno en producción y ejecución en Edge Functions para latencia mínima.",
      icon: Rocket,
      level: "advanced"
    }
  ]
}