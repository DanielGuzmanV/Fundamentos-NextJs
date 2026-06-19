import { PATHS } from "@/lib/constants/paths"
import { Newspaper } from "lucide-react"
import Link from "next/link"

export const LogoSide = () => {
  return (
    <Link 
      href={PATHS.QUICKBLOG_HOME} 
      className="flex items-center gap-2 text-slate-900 hover:text-green-600 transition-colors h-16" // Explicitamente h-16
    >
      <Newspaper size={28} className="text-green-500" />
      <span className="font-bold text-xl tracking-tight leading-none">QuickBlog</span> {/* Añadido leading-none */}
    </Link>
  );
};