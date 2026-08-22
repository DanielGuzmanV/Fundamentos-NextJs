"use client";

import { CONCEPT_LEVELS_DATA } from "@/features/home/data/concepts.data";
import { MENU_ITEMS } from "@/lib/constants/navigation";
import { usePathname } from "next/navigation";

export interface HeaderState {
  title: string;
  isSubscreen: boolean;
  breadcrumbs: { label: string; href?: string }[];
}

export const useActiveTitle = (): HeaderState => {
  const pathname = usePathname();

  // 1. Opciones directas del menú lateral
  const mainMatch = MENU_ITEMS.find((item) => item.href === pathname);
  if (mainMatch) {
    return {
      title: mainMatch.name,
      isSubscreen: false,
      breadcrumbs: [{ label: mainMatch.name }],
    };
  }

  // 2. Opciones dentro de los submenús
  for (const item of MENU_ITEMS) {
    if (item.isSubmenu && item.children) {
      const childMatch = item.children.find((child) => child.href === pathname);
      if (childMatch) {
        return {
          title: "Demos de Prueba",
          isSubscreen: false,
          breadcrumbs: [
            { label: item.name },
            { label: childMatch.name },
          ],
        };
      }
    }
  }

  // 3. Rutas de la sección de aprendizaje (Conceptos - Topics)
  if (pathname.startsWith("/conceptos")) {
    const segments = pathname.split("/").filter(Boolean);
    const categorySlug = segments[1];
    const topicSlug = segments[2];

    const category = CONCEPT_LEVELS_DATA.find(
      (level) => level.slug === categorySlug || level.id === categorySlug
    );
    const categoryTitle = category ? category.title : "Categoría";

    // Si solo estamos en el listado del módulo/categoría:
    if (!topicSlug) {
      return {
        title: categoryTitle,
        isSubscreen: true,
        breadcrumbs: [
          { label: "Inicio", href: "/" },
          { label: categoryTitle },
        ],
      };
    }

    // Si estamos dentro de un tema/topic específico:
    const topic = category?.items.find(
      (item) => item.slug === topicSlug || item.id === topicSlug
    );
    const topicTitle = topic ? topic.title : "Detalle";

    return {
      title: topicTitle,
      isSubscreen: true,
      breadcrumbs: [
        { label: "Inicio", href: "/" },
        { label: categoryTitle, href: `/conceptos/${categorySlug}` },
        { label: topicTitle },
      ],
    };
  }

  // Fallback por defecto
  return {
    title: "Dashboard",
    isSubscreen: false,
    breadcrumbs: [{ label: "Dashboard" }],
  };
};