import { PATHS } from "@/lib/constants/paths"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const ButtonHero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link 
        href={PATHS.CRYPTO_DASHBOARD}
        className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] transition-all"
      >
        Ver Demo en Vivo
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </Link>
      
      <Link 
        href={PATHS.HOME}
        className="text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors"
      >
        Volver al Dashboard principal
      </Link>
    </div>
  ) 
}