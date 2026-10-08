export const SERVER_VS_CLIENT_DATA = {
  id: "server-vs-client",
  title: "¿Qué es Server y Client component?",
  description: "Entiende el modelo híbrido de Next.js App Router: renderizado en servidor por defecto y límites de cliente con 'use client'.",
  comparisonTable: [
    {
      feature: "Entorno de ejecución",
      server: "Solo en el Servidor (Build/Request)",
      client: "Servidor (Prerender) + Navegador (Hidratación)"
    },
    {
      feature: "Acceso a APIs de React",
      server: "No (sin useState, useEffect, etc.)",
      client: "Sí (Hooks, State, Context, Effects)"
    },
    {
      feature: "Acceso a Recursos de Servidor",
      server: "Directo (Base de datos, FS, API Keys secretas)",
      client: "Indirecto (A través de API Routes o Server Actions)"
    },
    {
      feature: "Impacto en Bundle de JS",
      server: "0 Bytes enviados al cliente",
      client: "Aumenta según el tamaño de las librerías"
    },
    {
      feature: "Manejo de Eventos (onClick, etc.)",
      server: "No permitido",
      client: "Permitido"
    }
  ]
}