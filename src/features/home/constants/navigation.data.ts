export const NAVIGATION_DATA = {
  id: "navigation",
  title: "Next.js App Router",
  description: "Aprende a combinar la navegación declarativa con <Link /> (prefetching automático) y la navegación programática usando useRouter, usePathname y useSearchParams.",
  methods: [
    {
      name: "<Link />",
      type: "Declarativa (HTML)",
      useCase: "Menús, barras laterales, tarjetas e hipervínculos navegables.",
      keyFeature: "Prefetching automático en el viewport y Soft Navigation.",
    },
    {
      name: "useRouter()",
      type: "Programática (JS)",
      useCase: "Redirecciones tras eventos (formularios, timers, logins).",
      keyFeature: "Métodos push(), replace(), back() y refresh().",
    },
    {
      name: "usePathname()",
      type: "Lectura de Estado",
      useCase: "Detectar la ruta activa para aplicar estilos resaltados.",
      keyFeature: "Devuelve el path actual de la URL (ej: /conceptos/navegacion).",
    },
    {
      name: "useSearchParams()",
      type: "Lectura/Escritura",
      useCase: "Manejar filtros, búsquedas y paginación desde la URL.",
      keyFeature: "Acceso a query params (?q=react&sort=asc) mediante .get().",
    },
  ],
};