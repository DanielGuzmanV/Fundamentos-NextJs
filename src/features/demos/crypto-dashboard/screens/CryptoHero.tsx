import { HeaderHero } from "../components/crypto-hero/HeaderHero";
import { CardsFeaturesHero } from "../components/crypto-hero/CardsFeaturesHero";
import { ButtonScreens } from "@/components/ButtonScreens";
import { PATHS } from "@/lib/constants/paths";
import { ArrowRight } from "lucide-react";

export default function CryptoHero() { 
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-slate-900 font-sans p-6 overflow-hidden relative">
      {/* Decoración de fondo (Círculos difuminados) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
      
      <div className="max-w-4xl w-full z-10">
        {/* Header de Presentación */}
        <HeaderHero/>

        {/* Cards de Características (Features) */}
        <CardsFeaturesHero/>

        {/* Tecnologías Usadas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Next.js 15', 'Tailwind CSS', 'Lucide Icons', 'Recharts', 'SWR'].map((tech) => (
            <span key={tech} className="px-4 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        {/* CTA (Call to Action) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonScreens
            title="Ver Demo en Vivo"
            linkPath={PATHS.CRYPTO_DASHBOARD}
            Icon={ArrowRight}
            variant="primary"
          />
          
          <ButtonScreens
            title="Volver al Dashboard principal"
            linkPath={PATHS.HOME}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  ); 
}