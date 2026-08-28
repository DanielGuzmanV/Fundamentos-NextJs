interface FileNode {
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
      description: "Root Layout. Define el HTML base, fuentes y providers globales.",
    },
    {
      name: "page.tsx",
      type: "special",
      description: "Página principal de la app (Ruta: /).",
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
              description: "UI visible en la ruta /login.",
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
          name: "layout.tsx",
          type: "special",
          description: "Layout persistente solo para la sección /dashboard.",
        },
        {
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
      ],
    },
  ],
};