import { Zap, Image as ImageIcon, Type, Search } from "lucide-react";

export const FEATURES = [
  {
    title: "Server Components (RSC)",
    description: "Contenido renderizado en el servidor para una entrega HTML pura, reduciendo el JavaScript al mínimo en el cliente.",
    Icon: Zap,
    colorClass: "bg-green-600"
  },
  {
    title: "Optimización de Imágenes",
    description: "Carga de imágenes automática en formatos modernos (WebP/AVIF), redimensionado inteligente y lazy loading nativo con <Image />.",
    Icon: ImageIcon, // Usar el alias
    colorClass: "bg-blue-600"
  },
  {
    title: "Optimización de Fuentes",
    description: "Carga eficiente de tipografías sin CLS (Cumulative Layout Shift) gracias a next/font para una experiencia visual perfecta.",
    Icon: Type,
    colorClass: "bg-indigo-600"
  },
  {
    title: "SEO Avanzado",
    description: "Metadatos dinámicos, Open Graph, y una estructura semántica robusta para una visibilidad máxima en buscadores.",
    Icon: Search,
    colorClass: "bg-amber-600"
  }
];