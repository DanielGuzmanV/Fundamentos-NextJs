import { ComponentType } from "react";
import dynamic from "next/dynamic";

export const TOPIC_COMPONENTS_MAPPER: Record<string, ComponentType> = {
  // Basicos
  "estructura-de-carpetas": dynamic(() => import("../screens/topics/basic/EstructureFolders")),
  "routing-dinamico": dynamic(() => import("../screens/topics/basic/RoutingDynamicScreen")),
  
  // Intermedios

  // Avanzados
}