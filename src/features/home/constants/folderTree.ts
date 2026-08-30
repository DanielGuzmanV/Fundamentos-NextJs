export interface FileNode {
  id?: string;
  name: string;
  type: "folder" | "file" | "special";
  description: string;
  children?: FileNode[];
}

export const FOLDER_TREE: FileNode = {
  name: "app",
  type: "folder",
  description: "Raíz del App Router en Next.js. Todas las rutas se definen dentro.",
  children: [
    {
      name: "layout.tsx",
      type: "special",
      description: "Root Layout. Define el HTML base, fuentes y providers globales. Es el marco de tu aplicación. Envuelve a las páginas y no se vuelve a renderizar cuando navegas entre páginas hermanas, preservando el estado (formularios, scroll, etc.).",
    },
    {
      name: "page.tsx",
      type: "special",
      description: "Página principal de la app (Ruta: /). Es la interfaz única de una ruta específica. Se inyecta automáticamente como la prop 'children' dentro del layout.tsx correspondiente.",
    },
    {
      name: "(auth)",
      type: "folder",
      description: "Grupo de rutas. Organiza carpetas sin afectar la URL final.",
      children: [
        {
          name: "login",
          type: "folder",
          description: "Carpeta de la ruta /login.",
          children: [
            {
              name: "page.tsx",
              type: "special",
              description: "UI visible en la ruta /login. Este es la interfaz única de una ruta específica. Se inyecta automáticamente como la prop 'children' dentro del layout.tsx correspondiente.",
            },
          ],
        },
      ],
    },
    {
      name: "dashboard",
      type: "folder",
      description: "Carpeta de la ruta /dashboard.",
      children: [
        {
          id: "layout",
          name: "layout.tsx",
          type: "special",
          description: "Layout persistente solo para la sección /dashboard. Este el marco de tu aplicación. Envuelve a las páginas y no se vuelve a renderizar cuando navegas entre páginas hermanas, preservando el estado (formularios, scroll, etc.).",
        },
        {
          id: "page",
          name: "page.tsx",
          type: "special",
          description: "Vista principal de /dashboard.",
        },
        {
          name: "loading.tsx",
          type: "special",
          description: "UI de carga (React Suspense) para /dashboard.",
        },
        {
          name: "error.tsx",
          type: "special",
          description: "Boundary para capturar errores dentro de /dashboard.",
        },
        {
          id:"template",
          name: "template.tsx",
          type: "special",
          description: "Similar a layout, pero crea una nueva instancia en cada navegación. Ideal para animaciones de entrada (Framer Motion), resetear estados o contadores de vistas.",
        },
      ],
    },
  ],
};