"use client";

import { Cpu, Lock, Monitor, RefreshCw, Zap } from "lucide-react";
import { useState } from "react";

export const ServerVsClientCards = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const handleInteract = () => {
    setCount((prev) => prev + 1);
    setLogs((prev) => [
      `[Cliente ${new Date().toLocaleTimeString()}] Evento onClick ejecutado. Hook useState actualizado a ${count + 1}`,
      ...prev
    ]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      {/* Tarjeta Server Component */}
      <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/10 dark:bg-emerald-950/20 space-y-4">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
          <Cpu className="size-5" />
          <span>Server Component (Por Defecto)</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Se ejecuta exclusivamente en el servidor. El cliente solo recibe HTML puro y cero JS adicional.
        </p>
        <ul className="text-xs space-y-2 text-slate-900">
          <li className="flex items-center gap-2">
            <Lock className="size-3.5 text-emerald-500" /> Acceso seguro a BD y variables de entorno secretas
          </li>
          <li className="flex items-center gap-2">
            <Zap className="size-3.5 text-emerald-500" /> Cero impacto en el bundle de JavaScript
          </li>
        </ul>
      </div>

      {/* Tarjeta Client Component */}
      <div className="p-5 rounded-xl border border-indigo-500/30 bg-indigo-950/10 dark:bg-indigo-950/20 space-y-4">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Monitor className="size-5" />
          <span>Client Component (&apos;use client&apos;)</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Define el &quot;Client Boundary&quot;. Se hidrata en el navegador para permitir interactividad y estado.
        </p>
        
        <div className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Contador Interactivo: {count}</span>
            <button
              onClick={handleInteract}
              className="px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="size-3" /> Incrementar
            </button>
          </div>

          <div className="h-24 overflow-y-auto font-mono text-[11px] p-2 bg-slate-950 text-emerald-400 rounded border border-slate-800">
            {logs.length === 0 ? (
              <span className="text-slate-500">// Haz clic en el botón para registrar eventos del cliente</span>
            ) : (
              logs.map((log, index) => <div key={index}>{log}</div>)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}