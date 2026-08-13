import { 
  BookOpen, 
  Code2, 
  Cpu, 
  FileCode2, 
  Globe, 
  ImageIcon, 
  Layers, 
  Navigation, 
  Route, 
  Sliders, 
  Type 
} from "lucide-react";
import { ConceptLevel } from "../../types/concept.types";

export const BASIC_CONCEPTS: ConceptLevel = {
  id: "basic",
  slug: "conceptos-basicos",
  title: "Conceptos Basicos",
  icon: BookOpen,
  description: "Fundamentos esenciales del App Router de Next.js, arquitectura de componentes y navegación.",
  items: [
    {
      id: "folder-structure",
      slug: "estructura-de-carpetas",
      title: "1. Estructura de Carpetas y Jerarquía",
      description: "Entiende la carpeta app/, el sistema de cebolla y las convenciones de archivos especiales.",
      icon: Code2,
      level: "basic",
      subItems: [
        {
          id: "layout",
          title: "layout.tsx (El Envoltorio Persistente)",
          description: "Es el marco de tu aplicación. Envuelve a las páginas y no se vuelve a renderizar cuando navegas entre páginas hermanas, preservando el estado."
        },
        {
          id: "page",
          title: "page.tsx (El Contenido Único)",
          description: "Es la interfaz única de una ruta específica. Se inyecta como 'children' dentro del layout.tsx correspondiente."
        },
        {
          id: "template",
          title: "template.tsx (El Envoltorio Fresco)",
          description: "Similar a layout, pero crea una nueva instancia en cada navegación. Ideal para animaciones de entrada (Framer Motion) o contadores de vistas."
        },
        {
          id: "special-folders",
          title: "Carpetas Especiales y Sistema de Cebolla",
          description: "Uso de Route Groups (nombre) para organizar sin alterar la URL y Private Folders _nombre para aislar componentes locales."
        }
      ]
    },
    {
      id: "dynamic-routing",
      slug: "routing-dinamico",
      title: "2. Routing Dinámico",
      description: "Definir rutas con [id], rutas opcionales [[...slug]] y grupos de rutas (marketing).",
      icon: Route,
      level: "basic"
    },
    {
      id: "server-vs-client",
      slug: "server-vs-client-components",
      title: "3. Server vs. Client Components",
      description: "Renderizado por defecto en servidor, límite de cliente con 'use client', cuándo usar eventos, state e interactividad.",
      icon: Cpu,
      level: "basic"
    },
    {
      id: "navigation",
      slug: "navegacion",
      title: "4. Navegación en Next.js",
      description: "Uso del componente <Link /> para prefetching/navegación declarativa y el hook useRouter para navegación programática.",
      icon: Navigation,
      level: "basic"
    },
    {
      id: "special-files",
      slug: "archivos-especiales",
      title: "5. Archivos Especiales de Estado (UI)",
      description: "Manejo de estados con loading.js (Suspense), error.js (Error Boundaries) y not-found.js para rutas no encontradas.",
      icon: FileCode2,
      level: "basic"
    },
    {
      id: "metadata",
      slug: "metadatos",
      title: "6. Metadatos y SEO",
      description: "Configuración de metadatos estáticos y dinámicos utilizando el objeto metadata y generateMetadata para posicionamiento web.",
      icon: Globe,
      level: "basic"
    },
    {
      id: "params-and-searchparams",
      slug: "searchparams-y-params",
      title: "7. SearchParams y params como Props de Página",
      description: "Recepción automática de objetos params (parámetros dinámicos) y searchParams (query strings) en Server Components.",
      icon: Sliders,
      level: "basic"
    },
    {
      id: "static-assets",
      slug: "assets-estaticos-e-imagenes",
      title: "8. Assets Estáticos e Imágenes (<Image/>)",
      description: "Uso de la carpeta public/ para archivos estáticos y el componente <Image/> para optimización automática de imágenes.",
      icon: ImageIcon,
      level: "basic"
    },
    {
      id: "fonts-and-styles",
      slug: "fuentes-y-estilos-globales",
      title: "9. Fuentes Nativas (next/font) y Estilos Globales",
      description: "Carga de fuentes de Google sin CLS con next/font/google e integración de CSS Global o Tailwind en el RootLayout.",
      icon: Type,
      level: "basic"
    },
    {
      id: "catch-all-routes",
      slug: "catch-all-routes",
      title: "10. Catch-all Routes ([...slug]) vs Optional Catch-all ([[...slug]])",
      description: "Diferencia entre enrutamiento obligatorio [...slug] (requiere subruta) y opcional [[...slug]] (captura también la raíz).",
      icon: Layers,
      level: "basic"
    }
  ]
}