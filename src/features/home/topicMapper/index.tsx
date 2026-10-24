import { ComponentType } from "react";
import dynamic from "next/dynamic";

export const TOPIC_COMPONENTS_MAPPER: Record<string, ComponentType> = {
  // Basicos
  "estructura-de-carpetas": dynamic(() => import("../screens/topics/basic/EstructureFolders")),
  "archivos-especiales": dynamic(() => import("../screens/topics/basic/SpecialFilesScreen")),
  "fuentes-y-estilos-globales": dynamic(() => import("../screens/topics/basic/FontAndStyle")),
  "routing-dinamico": dynamic(() => import("../screens/topics/basic/RoutingDynamicScreen")),
  "server-vs-client-components": dynamic(() => import("../screens/topics/basic/ServerVsClient")),
  "navegacion": dynamic(() => import("../screens/topics/basic/NavigationNextjs")),
  
  // Intermedios

  // Avanzados
}