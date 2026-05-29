import { ButtonScreens } from "@/components/ui/ButtonScreens";
import { PATHS } from "@/lib/constants/paths";
import { ArrowRight } from "lucide-react";
import { FEATURES } from "../constants/features";
import { FeatureCard } from "../components/FeatureCard";
import { HeaderStockMaster } from "../components/HeaderStockMaster";

export default function StockMasterHero() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-6xl w-full">
        <HeaderStockMaster/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature}/>
          ))}
        </div>

        {/* CTA (Call to Action) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonScreens
            title="Ver Proyecto en Vivo"
            linkPath={""}
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
  )
}