import { ButtonScreens } from "@/components/ui/ButtonScreens";
import { QuickBlogCardHero } from "../components/QuickBlogCardHero";
import { QuickBlogHeaderHero } from "../components/QuickBlogHeaderHero";
import { FEATURES } from "../constants/featureCardHero";
import { ArrowRight } from "lucide-react";
import { PATHS } from "@/lib/constants/paths";

export default function QuickBlogHero() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-6 sm:p-12">
      <div className="max-w-7xl w-full">
        {/* Sección Superior */}
        <QuickBlogHeaderHero />

        {/* Grid de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FEATURES.map((feature) => (
            <QuickBlogCardHero key={feature.title} {...feature} />
          ))}
        </div>
        
        {/* CTA (Call to Action) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <ButtonScreens
            title="Explorar el Blog"
            linkPath={PATHS.QUICKBLOG_HOME}
            Icon={ArrowRight}
            variant="primary"
          />
          
          <ButtonScreens
            title="Volver al Dashboard Principal"
            linkPath={PATHS.HOME}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}