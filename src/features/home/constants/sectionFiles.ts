interface PropsChildren {
  title: string;
  description: string;
}

interface PropsSection {
  name: string;
  children: PropsChildren[]
}

export const SECTION_FILES: PropsSection = {
    name: "Archivos Reservados Principales",
    children: [
      {
        title: "page.tsx",
        description: "Hace accesible públicamente la ruta de la carpeta donde reside."
      },
      {
        title: "layout.tsx",
        description: "UI compartida que envuelve a las páginas hijas y preserva el estado al navegar."
      },
      {
        title: "loading.tsx",
        description: "Interfaz de carga automática mostrada mientras la página resuelve sus datos."
      },
      {
        title: "error.tsx",
        description: "Boundary para capturar errores en tiempo de ejecución de esa sección."
      }
    ]
  }