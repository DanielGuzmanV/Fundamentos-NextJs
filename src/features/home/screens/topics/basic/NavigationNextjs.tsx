import { NavigationDemo } from "@/features/home/components/basic/topic_4/NavigationDemo";
import { SectionLinkPrefetching } from "@/features/home/components/basic/topic_4/SectionLinkPrefetching";
import { NAVIGATION_DATA } from "@/features/home/constants/navigation.data";
import { Sparkles } from "lucide-react";

export default function NavigationNextjs() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Encabezado */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {NAVIGATION_DATA.title}
        </h1>
        <p className="text-gray-600 text-lg">
          {NAVIGATION_DATA.description}
        </p>
      </header>

      {/* Demostración Interactiva */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Sparkles className="size-5 text-indigo-500" />
          Laboratorio Interactivo de Navegación
        </h2>

        <div className="space-y-6">
          {/* 1. Demostración de Links y Prefetching */}
          <SectionLinkPrefetching/>

          {/* 2. Demostración de Hooks (useSearchParams + useRouter + usePathname) */}
          <NavigationDemo />
        </div>
      </section>

      {/* Tabla Resumen de Herramientas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Herramientas de Navegación en App Router
        </h2>
        <div className="overflow-x-auto border border-gray-800 rounded-xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-300 text-gray-700  border-b border-gray-800">
              <tr>
                <th className="p-3.5 font-semibold">Herramienta</th>
                <th className="p-3.5 font-semibold">Tipo</th>
                <th className="p-3.5 font-semibold">Caso de Uso Principal</th>
                <th className="p-3.5 font-semibold">Característica Clave</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {NAVIGATION_DATA.methods.map((method) => (
                <tr key={method.name} className="hover:bg-gray-200 transition-colors">
                  <td className="p-3.5 font-mono text-indigo-600 font-medium">
                    {method.name}
                  </td>
                  <td className="p-3.5 text-gray-600">{method.type}</td>
                  <td className="p-3.5 text-gray-600">{method.useCase}</td>
                  <td className="p-3.5 text-gray-600">{method.keyFeature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tip de Arquitectura */}
      <section className="p-5 rounded-xl border border-indigo-800 space-y-2">
        <h3 className="font-semibold text-indigo-900">
          💡 Buenas Prácticas de Navegación
        </h3>
        <p className="text-sm text-indigo-950 leading-relaxed">
          Usa siempre <strong>&lt;Link /&gt;</strong> para elementos navegables visibles en la interfaz. Reserva <strong>useRouter()</strong> únicamente para flujos conducidos por lógica de JavaScript (ej. después de validar un formulario o al ejecutar un Server Action).
        </p>
      </section>
    </div>
  );
}