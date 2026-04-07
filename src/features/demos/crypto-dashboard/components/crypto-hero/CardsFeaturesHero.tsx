import { ShieldCheck, TrendingUp, Zap } from "lucide-react"

export const CardsFeaturesHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="p-6 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
        <TrendingUp className="text-indigo-600 mb-4" size={32} />
        <h3 className="font-bold text-lg mb-2">Datos Vivos</h3>
        <p className="text-slate-500 text-sm">Integración con APIs para obtener precios y tendencias al segundo.</p>
      </div>
      <div className="p-6 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
        <Zap className="text-indigo-600 mb-4" size={32} />
        <h3 className="font-bold text-lg mb-2">Performance</h3>
        <p className="text-slate-500 text-sm">Optimizado con Next.js y Client Components para una navegación fluida.</p>
      </div>
      <div className="p-6 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
        <ShieldCheck className="text-indigo-600 mb-4" size={32} />
        <h3 className="font-bold text-lg mb-2">Clean UI</h3>
        <p className="text-slate-500 text-sm">Diseño minimalista enfocado en la legibilidad y gestión de activos.</p>
      </div>
    </div>
  )
}